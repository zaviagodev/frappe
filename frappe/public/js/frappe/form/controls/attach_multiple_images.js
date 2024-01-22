frappe.ui.form.ControlAttachMultipleImages = class ControlAttachMultipleImages extends frappe.ui.form.ControlAttach {
    make() {
        super.make();
        this.imageGrid = new ImageGrid({
            frm: this.frm,
            parent: this.wrapper,
            control: this,
            images: this.frm.doc[this.df.fieldname] ?? [],
            pending_delete: [],
        });

        if (this.frm) {
            this.frm.imageGrids[this.frm.imageGrids.length] = this;

            // sync with attachments
            frappe.ui.form.on(this.frm.doctype, {
                onload: () => {
                    frappe.db.get_list("File", {
                        filters: {
                            attached_to_name: this.frm.docname,
                            attached_to_field: this.df.fieldname,
                        }
                    }).then((attachments) => {
                        const extra_attachments = attachments.filter(attachment => !this.imageGrid.images.find(img => img.image === attachment.name));
                        for (const attachment of extra_attachments) {
                            this.frm.attachments.remove_attachment(attachment.name);
                        }
                        this.frm.attachments.refresh();
                    });
                },
                before_save: () => {
                    for (const image of this.imageGrid.pending_delete) {
                        this.frm.attachments.remove_attachment(image.image);
                    }
                    this.frm.attachments.refresh();
                },
                after_save: () => {
                    const missing_attachments = this.imageGrid.images.filter(img => !this.frm.attachments.get_attachments().find(attachment => attachment.name === img.image));
                    for (const attachment of missing_attachments) {
                        frappe.db.set_value("File", attachment.image, {
                            attached_to_name: this.frm.docname,
                            attached_to_field: this.df.fieldname,
                        });
                    }
                    this.frm.attachments.refresh();
                },
            });
        }
    }

    refresh_input() {
        super.refresh_input();
        this.imageGrid.refresh();
    }

    set_value(attachment) {
        this.images = [...this.imageGrid.images, attachment];
        this.imageGrid.images = this.images;
        this.imageGrid.render();

        // attachment lifecycle 
        this.imageGrid.pending_delete = this.imageGrid.pending_delete.filter(img => img.image !== attachment.image);
    }

    set_upload_options() {
        super.set_upload_options();
        this.upload_options.allow_multiple = true;
        this.upload_options.restrictions.allowed_file_types = ["image/*"];
        this.upload_options.make_attachments_public = true;
    }

    async on_upload_complete(attachment) {
        const newImage = {
            image: attachment.name,
            file_type: attachment.file_type,
            file_url: attachment.file_url,
            thumbnail_url: attachment?.thumbnail_url,
            file_size: attachment.file_size,
        };
        if (this.frm) {
            this.frm.set_value(this.df.fieldname, [
                ...this.imageGrid.images,
                newImage,
            ]);
        }
        this.set_value(newImage);
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
        new Sortable(this.wrapper[0], {
            animation: 150,
            ghostClass: "sortable-ghost",
            onEnd: (e) => {
                let newSort = []
                e.to.querySelectorAll(".grid-image").forEach((img) => newSort.push(img.getAttribute("image")));
                newSort = newSort.map((img, index) => ({
                    ...this.images.find((i) => i.image === img),
                    idx: index + 1
                }));
                this.images = newSort;
                this.frm.set_value(this.control.df.fieldname, this.images);
                this.frm.dirty();
            },
        });
    }

    refresh() {
        this.images = this.frm.doc[this.control.df.fieldname] ?? [];
        this.render();
    }

    delete_image(image) {
        this.images = this.images.filter(img => img.image !== image.image);
        this.frm.set_value(this.control.df.fieldname, this.images);
        this.pending_delete.push(image);
        this.render();
    }

    render() {
        this.wrapper.empty();
        this.images.forEach((image) => {
            const $image = $(`
            <div class="grid-image rounded" style="background-image: url(${image.file_url}); width: 100px; height: 100px; background-size: cover; background-position: center; margin: 5px;" image="${image.image}"></div>
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