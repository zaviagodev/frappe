import frappe
import sentry_sdk

from sentry_sdk.integrations.rq import RqIntegration

def get_sentry_details():
    if sentry_enabled():
        return {
            "dns": frappe.conf.get("sentry_dns", None),
            "site": frappe.conf.get("sentry_site", frappe.local.site),
            "project": frappe.conf.get("sentry_project", frappe.local.site),
            "sever_name": frappe.conf.get("sentry_server_name", frappe.local.site)
        }

def init_sentry():
    sentry_details = get_sentry_details()
    if not sentry_details or not sentry_details.get("dns"):
        return

    if hasattr(frappe.local, "sentry"):
        return

    if sentry_enabled():
        frappe.local.sentry = sentry_sdk.init(
            sentry_details.get("dns"),
            debug=True,
            traces_sample_rate=1.0,
            integrations=[RqIntegration()],
            _experiments = {
                "profiles_sample_rate": 1.0
            }
        )

def sentry_enabled():
    enabled = frappe.conf.get("enable_sentry", False)

    if frappe.conf.get("developer_mode"):
        enabled = frappe.conf.get("enable_sentry_developer_mode", False)
        
    return enabled
