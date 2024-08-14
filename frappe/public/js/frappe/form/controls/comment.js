import Quill from "quill";
import Mention from "./quill-mention/quill.mention";

Quill.register("modules/mention", Mention, true);

frappe.ui.form.ControlComment = class ControlComment extends frappe.ui.form.ControlTextEditor {
	make_wrapper() {
		this.comment_wrapper = !this.no_wrapper
			? $(`
			<div class="comment-input-wrapper">
				<div class="comment-input-header">
				<span>${__("Comments")}</span>
				</div>
				<div class="comment-input-container">
				${frappe.avatar(frappe.session.user, "avatar-medium")}
					<div class="frappe-control col"></div>
				</div>
				<button class="btn hidden btn-comment btn-xs" style="margin-left:48px;">
					<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.302734 7.77344C0.302734 7.25586 0.654297 6.89453 1.16211 6.89453H11.0352L13.1152 6.97266L9.91211 4.0332L7.75391 1.83594C7.58789 1.67969 7.50977 1.44531 7.50977 1.21094C7.50977 0.722656 7.88086 0.361328 8.35938 0.361328C8.60352 0.361328 8.81836 0.458984 9.01367 0.654297L15.4883 7.10938C15.625 7.24609 15.7227 7.40234 15.7617 7.56836V1.19141C15.7617 0.683594 16.123 0.332031 16.6406 0.332031C17.1484 0.332031 17.5098 0.683594 17.5098 1.19141V14.3652C17.5098 14.8633 17.1484 15.2051 16.6406 15.2051C16.123 15.2051 15.7617 14.8633 15.7617 14.3652V7.96875C15.7227 8.13477 15.625 8.29102 15.4883 8.42773L9.01367 14.8828C8.81836 15.0781 8.60352 15.166 8.35938 15.166C7.88086 15.166 7.50977 14.8145 7.50977 14.3262C7.50977 14.0918 7.58789 13.8574 7.75391 13.6914L9.91211 11.5039L13.125 8.57422L11.0352 8.64258H1.16211C0.654297 8.64258 0.302734 8.28125 0.302734 7.77344Z" fill="#007AFF"></path>
					</svg>
				</button>
			</div>
		`)
			: $('<div class="frappe-control"></div>');

		this.comment_wrapper.appendTo(this.parent);

		// wrapper should point to frappe-control
		this.$wrapper = !this.no_wrapper
			? this.comment_wrapper.find(".frappe-control")
			: this.comment_wrapper;

		this.wrapper = this.$wrapper;

		this.button = this.comment_wrapper.find(".btn-comment");
	}

	bind_events() {
		super.bind_events();

		this.button.click(() => {
			this.submit();
		});

		this.$wrapper.on("keydown", (e) => {
			const key = frappe.ui.keys.get_key(e);
			if (key === "ctrl+enter") {
				e.preventDefault();
				this.submit();
			}
		});

		this.quill.on(
			"text-change",
			frappe.utils.debounce(() => {
				this.update_state();
			}, 300)
		);
	}

	submit() {
		this.on_submit && this.on_submit(this.get_value());
	}

	update_state() {
		const value = this.get_value();
		if (strip_html(value).trim() != "" || value.includes("img")) {
			this.button.removeClass("hidden").addClass("btn-primary");
		} else {
			this.button.addClass("hidden").removeClass("btn-primary");
		}
	}

	get_quill_options() {
		const options = super.get_quill_options();
		return Object.assign(options, {
			theme: "bubble",
			bounds: this.quill_container[0],
			placeholder: __("Type a reply / comment"),
		});
	}

	get_toolbar_options() {
		return [
			["bold", "italic", "underline", "strike"],
			["blockquote", "code-block"],
			[{ direction: "rtl" }],
			["link", "image"],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ align: [] }],
			["clean"],
		];
	}

	clear() {
		this.quill.setText("");
	}

	disable() {
		this.quill.disable();
		this.button.prop("disabled", true);
	}

	enable() {
		this.quill.enable();
		this.button.prop("disabled", false);
	}
};
