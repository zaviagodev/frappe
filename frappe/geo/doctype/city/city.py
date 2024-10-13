# Copyright (c) 2024, Frappe Technologies and contributors
# For license information, please see license.txt

from frappe.geo import geo_Source
from frappe.model.document import Document


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
		updated_city = self.as_dict()
		updated_city.pop("modified")
		geo_Source.update(updated_city)

	def delete(self):
		geo_Source.delete("City", self.name)

	@staticmethod
	def get_list(args):
		return geo_Source.get_list("City", args)

	@staticmethod
	def get_count(args):
		return geo_Source.get_count("City", args)

	@staticmethod
	def get_stats(self):
		"""Returns the stats of cities"""
		return {}
