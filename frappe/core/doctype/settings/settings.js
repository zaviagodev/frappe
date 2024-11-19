// Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Settings", {
    refresh: function (frm) {
        const link = $("div[data-fieldname='business_details'] > a");
        link.attr("href", `/app/company/${frappe.user_defaults.company}`);

        // check if webshop is installed, only then show the webshop settings
        if (!Object.keys(this.installed_apps ?? {}).length) {
            this.installed_apps = {};
            frappe.call({
                method: "frappe.utils.change_log.get_versions",
                callback: (r) => {
                    this.installed_apps = r.message;
                    frm.toggle_display(['website_setting'], this.installed_apps.hasOwnProperty('webshop'));
                },
            });            
        }

        // set team link
        const team_link = $("div[data-fieldname='the_team'] > a");
        team_link.attr("href", `https://${frappe.get_cookie(`login_source-${window.location.hostname}`) || "dashboard.zaviago.com"}/dashboard/app?modal=team`);
    },
});
