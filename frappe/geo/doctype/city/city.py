# Copyright (c) 2024, Frappe Technologies and contributors
# For license information, please see license.txt

import json
from frappe.model.document import Document
from frappe.geo import geo_Source

class City(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF

		city_name: DF.Data
		country: DF.Link
		state: DF.Link | None
	# end: auto-generated types
	pass
	
	def load_from_db(self):
		city = geo_Source.get_doc("City", self.name)
		super(Document, self).__init__(city)

	def db_insert(self, *args, **kwargs):
		geo_Source.insert(self.as_dict())

	def db_update(self, *args, **kwargs):
		updated_city =  self.as_dict()
		updated_city.pop("modified")
		geo_Source.update(updated_city)

	def delete(self):
		geo_Source.delete("City", self.name)
			
	@staticmethod
	def get_list(args):
		return geo_Source.get_list(
			"City",
			fields=args.get("fields"),
			filters=args.get("filters"),
			limit_page_length=args.get("page_length"),
			limit_start=args.get("start"),
		)
	
	@staticmethod	
	def get_count(args):
		return geo_Source.get_api("frappe.desk.reportview.get_count", {
			"doctype": "City",
			"filters": json.dumps(args.get("filters"))
		})
	
	@staticmethod
	def get_stats(self):
		"""Returns the stats of cities"""
		return {}