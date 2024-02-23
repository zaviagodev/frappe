# Copyright (c) 2024, Frappe Technologies and contributors
# For license information, please see license.txt

import json
from frappe.model.document import Document
from frappe.geo import geo_Source

class State(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		code: DF.Data | None
		country: DF.Link | None
		state_name: DF.Data
	# end: auto-generated types
	pass

	def load_from_db(self):
		state = geo_Source.get_doc("State", self.name)
		super(Document, self).__init__(state)

	def db_insert(self, *args, **kwargs):
		geo_Source.insert(self.as_dict())

	def db_update(self, *args, **kwargs):
		updated_state =  self.as_dict()
		updated_state.pop("modified")
		geo_Source.update(updated_state)

	def delete(self):
		geo_Source.delete("State", self.name)
			
	@staticmethod
	def get_list(args):
		return geo_Source.get_list(
			"State",
			fields=args.get("fields"),
			filters=args.get("filters"),
			limit_page_length=args.get("page_length"),
			limit_start=args.get("start"),
		)
	
	@staticmethod	
	def get_count(args):
		return geo_Source.get_api("frappe.desk.reportview.get_count", {
			"doctype": "State",
			"filters": json.dumps(args.get("filters"))
		})
	
	@staticmethod
	def get_stats(self):
		"""Returns the stats of cities"""
		return {}