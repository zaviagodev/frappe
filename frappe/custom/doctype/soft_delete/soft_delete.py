# Copyright (c) 2024, Frappe Technologies and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe


class SoftDelete(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING
 
	

	if TYPE_CHECKING:
		from frappe.custom.doctype.soft_delete_list.soft_delete_list import SoftDeleteList
		from frappe.types import DF

		doc_type: DF.Link | None
		soft_delete_list: DF.Table[SoftDeleteList]
	# end: auto-generated types
	pass

	
def soft_delete_action(doc, method):
	frappe.msgprint(f"Before deleting {doc.doctype} {doc.name}")



@frappe.whitelist()
def softdeletelist(doctype=''):
    if doctype:
        filters = {"docstatus": 5}
        fields = ["name", "custom_item_price", "item_name"]
        records = frappe.get_list(doctype, filters=filters, fields=fields)
        frappe.response['message'] = records  # Return the retrieved records

@frappe.whitelist()
def restoreitem(doctype,docname):
    if docname:
        # doc = frappe.get_doc("Item",docname)
        # doc.docstatus = 1
        # doc.save()
        frappe.db.set_value("Item", docname, "docstatus", 1)
        filters = {"docstatus": 5}
        fields = ["name", "custom_item_price", "item_name"]
        records = frappe.get_list(doctype, filters=filters, fields=fields)
        frappe.response['message'] = records  # Return the retrieved records