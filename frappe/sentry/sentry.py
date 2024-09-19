
import sentry_sdk
import frappe
import frappe.sentry

def capture_exception(reference_doctype=None, reference_name=None):
    frappe.sentry.init_sentry()
    
    with sentry_sdk.configure_scope() as scope:
        scope.user = {"email": frappe.session.user}
        scope.set_tag("site", frappe.conf.get("sentry_site", frappe.local.site))
        scope.set_tag("project", frappe.conf.get("sentry_project", frappe.local.site))
        scope.set_tag("server_name", frappe.conf.get("sentry_server_name", frappe.local.site))
        
        if reference_doctype and reference_name:
            scope.set_tag("reference_doctype", reference_doctype)
            scope.set_tag("reference_name", reference_name)

    sentry_sdk.capture_exception()
