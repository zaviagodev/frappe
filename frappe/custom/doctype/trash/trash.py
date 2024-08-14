# Copyright (c) 2024, Frappe Technologies and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import json
import frappe
import frappe.permissions
from frappe import _


class Trash(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		doctypes: DF.Link | None
		document_name: DF.Data | None
	# end: auto-generated types
	pass



@frappe.whitelist()
def delete_trash_item(docs):
    docs = frappe.parse_json(docs)
    deleted_docs = []
    for doc in docs:
        try:
            trash_doc = frappe.get_doc("Trash",doc["document_name"])
            frappe.db.set_value(trash_doc.doctypes, trash_doc.document_name, 'docstatus', 1)
            frappe.delete_doc("Trash",doc["document_name"], ignore_missing=True)
            deleted_docs.append(trash_doc.document_name)
        except Exception as e:
            frappe.log_error(f"Error Restoring document {doc}: {str(e)}")

    if deleted_docs:
        return f"Successfully Restore documents: {', '.join(deleted_docs)}"
    else:
        return "No documents were Restored."