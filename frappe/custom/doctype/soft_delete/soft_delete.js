// Copyright (c) 2024, Frappe Technologies and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Soft Delete", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Soft Delete', {
    refresh(frm) {
        frm.disable_save();
        frm.set_value('soft_delete_list', []);
        frm.set_value('doc_type', "");
    },
    doc_type(frm) {
        frappe.call({
            method: "frappe.custom.doctype.soft_delete.soft_delete.softdeletelist",
            args: {
                'doctype': frm.doc.doc_type,
            },
            callback: function(r) {
                frm.set_value('soft_delete_list', []);
                if (r.message && r.message.length > 0) {
                    r.message.forEach(element => {
                        frm.add_child('soft_delete_list', {
                            item: element.name,
                            item_name: element.item_name,
                            item_price: element.custom_item_price
                        });
                    });
                    frm.refresh_field('soft_delete_list');
                }
            }
        });
    }
});

frappe.ui.form.on('Soft Delete List', {
    restore(frm, cdt, cdn) {
        var selectedRowData = frm.doc.soft_delete_list[frm.selected_doc.idx-1];
        if(selectedRowData.item){
            frappe.call({
                method: "frappe.custom.doctype.soft_delete.soft_delete.restoreitem",
                args: {
                    'doctype': frm.doc.doc_type,
                    'docname': selectedRowData.item,
                },
                callback: function(r) {
                    // frm.set_value('soft_delete_list', []);
                    if (r.message && r.message.length > 0) {
                        r.message.forEach(element => {
                            frm.add_child('soft_delete_list', {
                                item: element.name,
                                item_name: element.item_name,
                                item_price: element.custom_item_price
                            });
                        });
                    }
                    frm.refresh_field('soft_delete_list');
                }
            });
        }
    }
});