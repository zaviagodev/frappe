import json
import frappe
import frappe.permissions
from frappe import _

@frappe.whitelist()
def delete_items():
    items = sorted(json.loads(frappe.form_dict.get("items")), reverse=True)
    doctype = frappe.form_dict.get("doctype")
    if len(items) > 10:
        frappe.enqueue("frappe.desk.reportview.delete_bulk", doctype=doctype, items=items)
    else:
        return delete_bulk(doctype, items)

def delete_bulk(doctype, items):
    undeleted_items = []
    softdelet = frappe.db.get_value("DocType", doctype, "soft_delete")
    for i, d in enumerate(items):
        try:
            if softdelet == 1:
                if doctype == "Item":
                    stock = frappe.get_doc("Item", d)
                    stock_entry_list = frappe.get_list("Stock Ledger Entry", filters={"item_code": stock.item_code}, fields=["sum(actual_qty) as total_qty", "warehouse"], group_by="warehouse")
                    for warehouse in stock_entry_list:
                        if warehouse.total_qty > 0:
                            stock_entry = frappe.new_doc("Stock Entry")
                            stock_entry.posting_date = frappe.utils.nowdate()
                            stock_entry.from_warehouse = warehouse.warehouse
                            stock_entry.stock_entry_type = "Material Issue"
                            stock_entry.append("items", {
                                "item_code": stock.item_code,
                                "qty": warehouse.total_qty,
                                "transfer_qty": warehouse.total_qty,
                                "s_warehouse": warehouse.warehouse,
                                "uom": frappe.get_value("Item", stock.item_code, "stock_uom"),
                                "serial_no": "",
                            })
                            stock_entry.docstatus = 1
                            stock_entry.save()
                frappe.db.set_value(doctype, d, 'docstatus', 5)
                insert_soft_delete(doctype, d)
            else:
                frappe.delete_doc(doctype, d)
                if len(items) >= 5:
                    frappe.publish_realtime(
                        "progress",
                        dict(
                            progress=[i + 1, len(items)], title=_("Deleting {0}").format(doctype), description=d
                        ),
                        user=frappe.session.user,
                    )
            # Commit after successful deletion
            frappe.db.commit()
        except Exception:
            # rollback if any record failed to delete
            # if not rollbacked, queries get committed on after_request method in app.py
            undeleted_items.append(d)
            frappe.db.rollback()
    if undeleted_items and len(items) != len(undeleted_items):
        frappe.clear_messages()
        delete_bulk(doctype, undeleted_items)
  
def insert_soft_delete(doctype, item):
    trash_item = frappe.get_doc({
        "doctype": "Trash",
        "doctypes": doctype,
        "document_name": item
    })
    trash_item.insert()
    return trash_item
