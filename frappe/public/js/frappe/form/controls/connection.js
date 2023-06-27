frappe.ui.form.ControlConnection = class ControlConnection extends frappe.ui.form.ControlData {
    static input_type = "checkbox";
    make_wrapper() {
        this.$formLink = $(`
      <div class="form-links">
        <div id="field_name"></div>
        <div class="document-link" data-doctype="">
          <div class="document-link-badge" data-doctype="">
            <span class="count"></span>
            <a class="badge-link"></a>
          </div>
        </div>
      </div>`).appendTo(this.parent);

        this.$wrapper = this.$formLink.find(".document-link");
        this.$labelHolder = this.$formLink.find("#field_name");
    }

    make_input() {
        var me = this;
        // Create a proxy for the XMLHttpRequest open method
        var originalOpen = window.XMLHttpRequest.prototype.open;
        // Override the open method
        window.XMLHttpRequest.prototype.open = function (method, url) {
            if (method !== "GET" && url.includes("/api") && !url.includes("get_count")) {
                setTimeout(() => {
                    me.update_count();
                }, 300);
            }
            // Call the original open method
            originalOpen.apply(this, arguments);
        };

        const options = this.df.options.split("\n");
        this.df.options = options[0];
        this.df.linked_field_name = options[1];
        // label
        this.label_span = $(`<span class="link-field-label">${this.df.label}</span>`).appendTo(this.$labelHolder);
        // count & link
        this.$count = this.$wrapper.find(".count");
        this.$link = this.$wrapper.find(".badge-link");
        // set doctype
        if (this.doctype) {
            this.$wrapper.attr("data-doctype", this.get_options());
            this.$link.attr("data-doctype", this.get_options());
        }
        // set label
        if (this.get_options()) {
            this.$link.html(this.get_options());
        }
        // set count
        if (this.count) {
            this.$count.html(this.count);
        }
        // bind links
        this.$link.on("click", function () {
            me.open_document_list($(this).closest(".document-link"));
        });
        // update count
        this.update_count();
        // add button
        this.$button = $(`<button class="btn btn-new btn-secondary btn-xs icon-btn" data-doctype="">
      <svg class="icon icon-sm">
        <use href="#icon-add"></use>
      </svg>
    </button>`).appendTo(this.$wrapper);
        if (this.doctype && this.get_options()) {
            this.$button.attr("data-doctype", this.get_options());
        }
        this.$button.on("click", () => {
            this.new_doc();
        });


        super.make_input();
    }

    get_options() {
        return this.df.options;
    }

    get_label_value() {
        return this.$input ? this.$input.val() : "";
    }

    open_document_list($link, show_open) {
        // show document list with filters
        let doctype = $link.attr("data-doctype"),
            names = $link.attr("data-names") || [];
        if (this.df?.internal_links && this.df?.internal_links[doctype]) {
            if (names.length) {
                frappe.route_options = { name: ["in", names] };
            } else {
                return false;
            }
        } else if (this.df.linked_field_name) {
            frappe.route_options = this.get_document_filter(doctype);
            if (show_open && frappe.ui.notifications) {
                frappe.ui.notifications.show_open_count_list(doctype);
            }
        }

        frappe.set_route("List", doctype, "List");
    }

    get_document_filter(doctype) {
        // return the default filter for the given document
        // like {"customer": frm.doc.name}
        let filter = {};
        let fieldname = this.df.non_standard_fieldnames
            ? this.df.non_standard_fieldnames[doctype] || this.df.linked_field_name
            : this.df.linked_field_name;

        if (!fieldname || fieldname === "" || !this.frm.doc.name) return filter;

        if (this.df.dynamic_links && this.df.dynamic_links[fieldname]) {
            let dynamic_fieldname = this.df.dynamic_links[fieldname][1];
            filter[dynamic_fieldname] = this.df.dynamic_links[fieldname][0];
        }

        filter[fieldname] = this.frm.doc.name;
        return filter;
    }

    new_doc() {
        var doctype = this.get_options();
        var me = this;

        if (!doctype) return;

        let df = this.df;
        if (this.frm && this.frm.doctype !== this.df.parent) {
            // incase of grid use common df set in grid
            df = this.frm.get_docfield(this.doc.parentfield, this.df.linked_field_name);
        }
        // set values to fill in the new document
        if (df && df.get_route_options_for_new_doc) {
            frappe.route_options = df.get_route_options_for_new_doc(this);
        } else {
            const payload = {}
            payload[this.df.linked_field_name] = this.frm.doc.name;
            frappe.route_options = payload;
        }

        // partially entered name field
        frappe.route_options.name_field = this.get_label_value();

        // reference to calling link
        frappe._from_link = frappe.utils.deep_clone(this);
        frappe._from_link_scrollY = $(document).scrollTop();


        frappe.ui.form.make_quick_entry(doctype, (doc) => {
            return me.set_value(doc.name);
        });

        return false;
    }

    update_count() {
        if (this.frm) {
            if (this.frm.doc[this.df.fieldname]) {
                this.count = this.frm.doc[this.df.fieldname].length;
            }
            else {
                const filters = this.get_document_filter(this.df.options);
                if (Object.keys(filters).length) {
                    frappe.db.count(this.df.options, {
                        filters: filters
                    }).then(count => {
                        this.count = count;
                        this.$count.html(this.count);
                    });
                }
            }
        }
    }

};