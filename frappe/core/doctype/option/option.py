# Copyright (c) 2024, zaviago and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Option(Document):
    def __init__(self, *args, **kwargs):
        super(Option, self).__init__(*args, **kwargs)
        self.flags.allow_unregistered_fields = True

    def load_from_db(self):
        return self.name