# Copyright (c) 2024, Frappe Technologies and contributors
# For license information, please see license.txt

from frappe.geo import geo_Source
from frappe.model.document import Document


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
		updated_state = self.as_dict()
		updated_state.pop("modified")
		geo_Source.update(updated_state)

	def delete(self):
		geo_Source.delete("State", self.name)

	@staticmethod
	def get_list(args):
		return geo_Source.get_list("State", args)

	@staticmethod
	def get_count(args):
		return geo_Source.get_count("State", args)

	@staticmethod
	def get_stats(self):
		"""Returns the stats of cities"""
		return {}
