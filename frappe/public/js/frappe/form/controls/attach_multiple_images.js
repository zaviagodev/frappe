frappe.ui.form.ControlAttachMultipleImages = class ControlAttachMultipleImages extends frappe.ui.form.ControlAttach {
    make() {
        super.make();
        frappe.db.get_list('File', {
            fields: ['*'],
            filters: {
                attached_to_doctype: this.frm.doctype,
                attached_to_name: this.frm.docname,
                attached_to_field: this.df.fieldname
            }
        }).then(records => {
            this.imageGrid = new ImageGrid({
                parent: this.$wrapper,
                frm: this.frm,
                images: records
            });
        })
    }

    set_value(value) {
        this.images = [...this.imageGrid.images, value];
        this.imageGrid.images = this.images;
        this.imageGrid.render();
    }

    set_upload_options() {
        super.set_upload_options();
        this.upload_options.allow_multiple = true;
        this.upload_options.restrictions.allowed_file_types = ["image/*"];
        this.upload_options.make_attachments_public = true;
    }

    async on_upload_complete(attachment) {
        if (this.frm) {
            this.frm.attachments.update_attachment(attachment);
        }
        this.set_value(attachment);
    }
}

class ImageGrid {
    constructor(opts) {
        Object.assign(this, opts);
        this.make();
    }

    make() {
        this.wrapper = $(`<div class="row"></div>`).appendTo(this.parent);
        this.render();
    }

    delete_image(image) {
        frappe.call({
            method: "frappe.desk.form.utils.remove_attach",
            type: "DELETE",
            args: {
                fid: image.name,
                dt: this.frm.doctype,
                dn: this.frm.docname,
            }
        }).then((r) => {
            if (r.exc) {
                if (!r._server_messages) frappe.msgprint(__("There were errors"));
                return;
            }
            this.images = this.images.filter(img => img.name !== image.name);
            this.render();
        });
    }

    render() {
        this.wrapper.empty();
        this.images.forEach((image) => {
            const $image = $(`
            <div class="grid-image rounded" style="background-image: url(${image.file_url}); width: 100px; height: 100px; background-size: cover; background-position: center; margin: 5px;"></div>
            `)
            const $overlay = $(`
                <div class="overlay">
                    <div class="overlay-content"></div>
                </div>
            `);
            const deleteButton = $(`<button class="btn btn-xs btn-danger"><i class="fa fa-trash"></i></button>`);

            deleteButton
                .appendTo($overlay.find(".overlay-content"))
                .on("click", () => this.delete_image(image));
            $overlay.appendTo($image);
            $image.appendTo(this.wrapper);
        });
    }
}