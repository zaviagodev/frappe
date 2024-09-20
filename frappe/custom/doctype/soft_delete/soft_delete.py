# Copyright (c) 2024, Frappe Technologies and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class SoftDelete(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from webshop.webshop.doctype.soft_delete_list.soft_delete_list import SoftDeleteList

		from frappe.types import DF

		deleted_items: DF.Table[SoftDeleteList]
		doc_type: DF.Link | None
	# end: auto-generated types
	pass
