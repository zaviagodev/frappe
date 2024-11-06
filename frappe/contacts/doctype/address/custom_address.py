import frappe
import json
class customAddress:
    pass



@frappe.whitelist()
def check_primary_address(links,ref):
	links=json.loads(links)
	for link in links:
		if( link['link_doctype']=='Customer' ):
			customer=frappe.get_doc('Customer',link['link_name'])
			if( customer.customer_primary_address is None or customer.customer_primary_address=="" ):
				customer.customer_primary_address=ref
				customer.save()
				addr=frappe.get_doc("Address",ref)
				addr.is_primary_address=True
				addr.is_shipping_address=True
				addr.save()