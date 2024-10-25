import frappe
from frappe.modules.utils import export_customizations

@frappe.whitelist(allow_guest=True)
def export_customization():
    frappe.enqueue(
        "frappe.api.api.run_export_customization",
        is_async=True,
        timeout=None,
        at_front=True,
    )
    
def run_export_customization():
    doc_list = frappe.get_list(
        "DocType",
        fields=["name", "module"]
    )
    for df in doc_list:
        export_customizations(module=df.module, doctype=df.name, sync_on_migrate=True)