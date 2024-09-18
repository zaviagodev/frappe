import frappe

@frappe.whitelist() 
def unlink_and_delete( docname ):  
    response=""
    try:
        #convert from json
        #getting  name as
        sale_invoices=frappe.db.get_list(   'Sales Invoice', filters={
            'contact_person': docname,
            },
            as_list=False,
        )
        sales_order=frappe.db.get_list('Sales Order', filters={
            'contact_person': docname,
            },
            as_list=False,
        )


        for si in sale_invoices:
            s_invoice=frappe.get_doc("Sales Invoice",si)
            s_invoice.db_set('contact_person', "", update_modified=False)
            
        for do in sales_order:
            s_o=frappe.get_doc("Sales Order",do)
            s_o.db_set('contact_person', "", update_modified=False)
        #lets delete this
        frappe.db.commit()
        frappe.delete_doc('Contact', docname)
        response="deleted"
        
    except Exception as e:
        letignore=1 #use error handling while debugging
        frappe.msgprint(str(e))
    frappe.response['message'] = response