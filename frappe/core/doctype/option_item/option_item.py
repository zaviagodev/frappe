# Copyright (c) 2024, zaviago and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class OptionItem(Document):
    def __init__(self, *args, **kwargs):
        super(OptionItem, self).__init__(*args, **kwargs)
        self.flags.allow_unregistered_fields = True