import frappe
import json

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


@frappe.whitelist()
def primaryContactDetails(reference,links,email_ids,phone_nos,custom_checked_primary_contact):
    response="-"
    contact=frappe.get_doc('Contact',reference)
    customer=''
    if( custom_checked_primary_contact == 'false' ):
        if(links != "false"):
            links=json.loads(links)
            for link in links:
                if( link['link_doctype']=='Customer' ):
                    customer=frappe.get_doc('Customer',link['link_name'])
                    if( customer.customer_primary_contact is None  or customer.customer_primary_contact=="" ):
                        customer.db_set('customer_primary_contact', reference,update_modified=False)
                        contact.db_set('is_primary_contact', True, update_modified=False)
                        if(  len( json.loads(phone_nos) ) > 0):
                            contact.db_set("phone", json.loads(phone_nos)[0]['phone']) 
                            customer.db_set("mobile_no", json.loads(phone_nos)[0]['phone']) 
                        if( len( json.loads(email_ids) ) > 0):
                            customer.db_set("email_id", json.loads(email_ids)[0]['email_id'])
                        response="ok"
                        frappe.db.commit()
        primaryEmail=False
        primaryMobile=False
        primaryPhone=False
        contact.db_set('custom_checked_primary_contact', True, update_modified=False)
        if( len( json.loads(email_ids) ) > 0):
            email_ids=json.loads(email_ids)
            for email__ in email_ids:
                email_doc=frappe.get_doc("Contact Email",email__['name'])
                if( email_doc.is_primary==True ):
                    primaryEmail=True
                    break
            if( primaryEmail == False ):
                email_doc=frappe.get_doc("Contact Email",email_ids[0]['name'])
                email_doc.db_set("is_primary", True)
                response="validate"
                frappe.db.commit()
        
        if( len( json.loads(phone_nos) ) > 0):
            phone_nos=json.loads(phone_nos)
            for phone in phone_nos:
                phone_doc=frappe.get_doc("Contact Phone",phone['name'])
                if( phone_doc.is_primary_mobile_no==True  ):
                    primaryMobile=True
                    break
                
            if( primaryMobile == False ):
                phone_doc=frappe.get_doc("Contact Phone",phone_nos[0]['name'])
                phone_doc.db_set("is_primary_mobile_no", True)
                phone_doc.db_set("is_primary_phone", True)
                frappe.db.commit()
                response="validate"

            for phone in phone_nos:
                phone_doc=frappe.get_doc("Contact Phone",phone['name'])
                if( phone_doc.is_primary_phone==True  ):
                    primaryPhone=True
                    break
                
            if( primaryPhone == False ):
                phone_doc=frappe.get_doc("Contact Phone",phone_nos[0]['name'])
                phone_doc.db_set("is_primary_phone", True)
                frappe.db.commit()
                response="validate"
            frappe.db.commit()
    frappe.response['message'] = response