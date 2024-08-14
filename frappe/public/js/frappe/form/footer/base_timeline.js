// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt

class BaseTimeline {
	constructor(opts) {
		Object.assign(this, opts);
		this.make();
	}

	make() {
		this.timeline_wrapper = $(`<div class="new-timeline">`);
		this.wrapper = this.timeline_wrapper;
		this.timeline_items_wrapper = $(`<div class="timeline-top-bar">`);
		this.timeline_actions_wrapper = $(`
			<div class="menu-btn-group show">
				<button type="button" class="btn btn-default icon-btn" data-toggle="dropdown" aria-expanded="true" aria-label="Menu" title="" data-original-title="Menu">
					<span>
					<span class="menu-btn-group-label" data-label="">
						<svg class="icon icon-sm">
						<use href="#icon-dot-horizontal"></use>
						</svg>
					</span>
					</span>
				</button>
				<ul class="dropdown-menu footer-menus">
				</ul>
				</div>
		`);
		//$(`.timeline-top-bar`).append(this.timeline_actions_wrapper);
		this.timeline_actions_wrapper.hide();
		this.timeline_wrapper.append(this.timeline_items_wrapper);

		this.parent.replaceWith(this.timeline_wrapper);
		this.timeline_items = [];
	}

	refresh() {
		this.render_timeline_items();
	}

	add_action_button(label, action, icon = null, btn_class = null) {
		let icon_element = icon ? frappe.utils.icon(icon, "xs") : null;
		this.timeline_actions_wrapper.show();
		let action_btn = $(`<li><button class="btn btn-xs ${btn_class || "btn-default"} action-btn">
			${label}
		</button></li>`);
		action_btn.click(action);
		this.timeline_actions_wrapper.find(".footer-menus").append(action_btn);
		return action_btn;
	}

	render_timeline_items() {
		this.timeline_items_wrapper.empty();
		this.timeline_items = [];
		this.doc_info = (this.frm && this.frm.get_docinfo()) || {};
		let response = this.prepare_timeline_contents();
		if (response instanceof Promise) {
			response.then(() => {
				this.timeline_items.sort(
					(item1, item2) => new Date(item1.creation) - new Date(item2.creation)
				);
				this.timeline_items.forEach(this.add_timeline_item.bind(this));
			});
		} else {
			this.timeline_items.sort(
				(item1, item2) => new Date(item1.creation) - new Date(item2.creation)
			);
			this.timeline_items.forEach(this.add_timeline_item.bind(this));
		}
	}

	prepare_timeline_contents() {
		//
	}

	add_timeline_item(item, append_at_the_end = true) {
		let timeline_item = this.get_timeline_item(item);
		if (append_at_the_end) {
			this.timeline_items_wrapper.append(timeline_item);
		} else {
			this.timeline_items_wrapper.prepend(timeline_item);
		}
		return timeline_item;
	}

	add_timeline_items(items, append_at_the_end = false) {
		items.forEach((item) => this.add_timeline_item(item, append_at_the_end));
	}

	add_timeline_items_based_on_creation(items) {
		items.forEach((item) => {
			this.timeline_items_wrapper.find(".timeline-item").each((i, el) => {
				let creation = $(el).attr("data-timestamp");
				if (creation && new Date(creation) < new Date(item.creation)) {
					$(el).before(this.get_timeline_item(item));
					return false;
				}
			});
		});
	}

	get_timeline_item(item) {
		// item can have content*, creation*,
		// timeline_badge, icon, icon_size,
		// hide_timestamp, is_card


		// if(item.content[0]){
		// 	var uservalue = $(`<div class="timeline-item">`).find('.ml-2').text();
		// 	console.log(uservalue);
		// }

		const timeline_item = $(`<div class="timeline-item">`);

		if (item.name == "load-more") {
			timeline_item.append(
				`<div class="timeline-load-more">
					<button class="btn btn-default btn-sm btn-load-more">
						<span>${item.content}</span>
					</button>
				</div>`
			);
			timeline_item.find(".btn-load-more").on("click", async () => {
				let more_items = await this.get_more_communication_timeline_contents();
				timeline_item.remove();
				this.add_timeline_items_based_on_creation(more_items);
			});
			return timeline_item;
		}

		timeline_item.attr({
			"data-doctype": item.doctype,
			"data-name": item.name,
			"data-timestamp": item.creation,
		});
		if (item.icon) {
			timeline_item.append(`
				<div class="timeline-badge" title='${item.title || frappe.utils.to_title_case(item.icon)}'>
					${frappe.utils.icon(item.icon, item.icon_size || "md", item.icon_class || "")}
				</div>
			`);
		} else if (item.timeline_badge) {
			timeline_item.append(item.timeline_badge);
		} else {
			timeline_item.append(`<div class="timeline-dot">`);
		}

		timeline_item.append(
			`<div class="timeline-content ${item.is_card ? "frappe-card" : ""}">`
		);
		let timeline_content = timeline_item.find(".timeline-content");

		timeline_content.html(item.content);

		if (!item.hide_timestamp && !item.is_card) {
			timeline_content.append(`<span> · ${comment_when(item.creation)}</span>`);
		}
		if (item.id) {
			timeline_content.attr("id", item.id);
		}
		var commentuser = timeline_item.find('.ml-2').html();
		if (commentuser == "You") {
			timeline_item.addClass("chat-you");
		}
		return timeline_item;
	}
}

export default BaseTimeline;
