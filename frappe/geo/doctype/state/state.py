# Copyright (c) 2024, Frappe Technologies and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document, bulk_insert

import ijson
from py_countries_states_cities_database import get_file_path


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

def import_states():
	print("Importing States...")
	states = []
	ijson_states = ijson.items(open(get_file_path("states.json", encoding="utf-8")), "item")
	for state_dict in ijson_states:
		state = frappe._dict(state_dict)
		states.append(
			frappe.get_doc(
				doctype="State",
				name=f"{state.name}-{state.country_code}",
				state_name=state.name,
				code=state.state_code.lower(),
				country=state.country_name
			)
		)
	bulk_insert("State", states, ignore_duplicates=True)