// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt

/**
 * Make a standard page layout with a toolbar and title
 *
 * @param {Object} opts
 *
 * @param {string} opts.parent [HTMLElement] Parent element
 * @param {boolean} opts.single_column Whether to include sidebar
 * @param {string} [opts.title] Page title
 * @param {Object} [opts.make_page]
 *
 * @returns {frappe.ui.Page}
 */

/**
 * @typedef {Object} frappe.ui.Page
 */

frappe.ui.make_app_page = function (opts) {
	opts.parent.page = new frappe.ui.Page(opts);
	return opts.parent.page;
};

frappe.ui.pages = {};

frappe.ui.Page = class Page {
	constructor(opts) {
		$.extend(this, opts);

		this.set_document_title = true;
		this.buttons = {};
		this.fields_dict = {};
		this.views = {};

		this.make();
		frappe.ui.pages[frappe.get_route_str()] = this;


	}

	make() {

		this.wrapper = $(this.parent);
		this.add_main_section();
		this.setup_scroll_handler();
		this.setup_sidebar_toggle();

	}

	setup_scroll_handler() {
		let last_scroll = 0;
		$(window).scroll(
			frappe.utils.throttle(() => {
				$(".page-head").toggleClass("drop-shadow", !!document.documentElement.scrollTop);
				let current_scroll = document.documentElement.scrollTop;
				if (current_scroll > 0 && last_scroll <= current_scroll) {
					$(".page-head").css("top", "-15px");
				} else {
					$(".page-head").css("top", "var(--navbar-height)");
				}
				last_scroll = current_scroll;
			}, 500)
		);
	}

	get_empty_state(title, message, primary_action) {
		return $(`<div class="page-card-container">
  			<div class="page-card">
  				<div class="page-card-head">
  					<span class="indicator blue">
  						${title}</span>
  				</div>
  				<p>${message}</p>
  				<div>
  					<button class="btn btn-primary btn-sm">${primary_action}</button>
  				</div>
  			</div>
  		</div>`);
	}

	load_lib(callback) {
		frappe.require(this.required_libs, callback);

	}

	add_main_section() {
		$(frappe.render_template("page", {})).appendTo(this.wrapper);

		if (this.single_column) {
			// nesting under col-sm-12 for consistency
			this.add_view(
				"main",
				'<div class="row layout-main">\
					<div class="col-md-12 layout-main-section-wrapper">\
						<div class="layout-main-section"></div>\
						<div class="layout-footer hide"></div>\
					</div>\
				</div>'
			);
		} else {
			this.add_view(
				"main",
				`
				<div class="row layout-main">
					<div class="col-lg-2 layout-side-section"></div>
					<div class="col layout-main-section-wrapper">
						<div class="layout-main-section"></div>
						<div class="layout-footer hide"></div>
					</div>
					<div class="col-lg-2 layout-right-section sidebar-right-comment"></div>
				</div>
			`
			);
		}

		this.setup_page();
		$(".navbar-current-docname").addClass("active-sidebar");
		$(".navbar-expand").addClass("active-sidebar");
		$(".navbar-back-button-icon").toggleClass("active-sidebar");
	}
	show_current_page(title) {
		setTimeout(function () {
			let path = $("body").attr("data-route");
			if (path != null) {
				let splitted_path = path.split("/");
				let list_name = '';
				let cur_docname = title;
				list_name = splitted_path[1];
				if (splitted_path[0] == "List") {
					cur_docname = splitted_path[1];
				}
				if (list_name == "Sales Invoice" || list_name == "Payment Entry") {
					cur_docname = splitted_path[2]
				} else {
					cur_docname = document.title;
					cur_docname = cur_docname.split('-');
					cur_docname = cur_docname[0];
				}

				if (cur_docname != null && $("#navbar-current-docname").length) {
					$("#navbar-current-docname").text(cur_docname);
				}
				if (list_name != null && $("#navbar-header-text").length) {
					$("#navbar-header-text").text(list_name);
				}
			}
		}, 1000);

	}
	setup_page() {

		this.$title_area = this.wrapper.find(".title-area");

		this.$sub_title_area = this.wrapper.find("h6");

		if (this.title) this.set_title(this.title);

		if (this.icon) this.get_main_icon(this.icon);

		this.body = this.main = this.wrapper.find(".layout-main-section");
		this.container = this.wrapper.find(".page-body");
		this.sidebar = this.wrapper.find(".layout-side-section");
		this.footer = this.wrapper.find(".layout-footer");
		this.indicator = this.wrapper.find(".indicator-pill");

		this.page_actions = this.wrapper.find(".page-actions");

		this.btn_primary = this.page_actions.find(".primary-action");
		this.btn_secondary = this.page_actions.find(".btn-secondary");

		this.menu = this.page_actions.find(".menu-btn-group .dropdown-menu");
		this.menu_btn_group = this.page_actions.find(".menu-btn-group");

		this.actions = this.page_actions.find(".actions-btn-group .dropdown-menu");
		this.actions_btn_group = this.page_actions.find(".actions-btn-group");

		this.standard_actions = this.page_actions.find(".standard-actions");
		this.custom_actions = this.page_actions.find(".custom-actions");

		this.page_form = $('<div class="page-form row hide"></div>').prependTo(this.main);
		this.inner_toolbar = this.custom_actions;
		this.icon_group = this.page_actions.find(".page-icon-group");

		if (this.make_page) {
			this.make_page();
		}

		this.card_layout && this.main.addClass("frappe-card");

		// keyboard shortcuts
		let menu_btn = this.menu_btn_group.find("button");
		menu_btn.attr("title", __("Menu")).tooltip({ delay: { show: 600, hide: 100 } });
		frappe.ui.keys
			.get_shortcut_group(this.page_actions[0])
			.add(menu_btn, menu_btn.find(".menu-btn-group-label"));

		let action_btn = this.actions_btn_group.find("button");
		frappe.ui.keys
			.get_shortcut_group(this.page_actions[0])
			.add(action_btn, action_btn.find(".actions-btn-group-label"));

		// https://axesslab.com/skip-links
		this.skip_link_to_main = $("<button>")
			.addClass("sr-only sr-only-focusable btn btn-primary-light my-2")
			.text(__("Navigate to main content"))
			.attr({ tabindex: 0, role: "link" })
			.on("click", (e) => {
				e.preventDefault();
				const main = this.main.get(0);
				main.setAttribute("tabindex", -1);
				main.focus();
				main.addEventListener(
					"blur",
					() => {
						main.removeAttribute("tabindex");
					},
					{ once: true }
				);
			})
			.appendTo(this.sidebar);
		this.show_current_page(this.title);
	}

	setup_sidebar_toggle() {
		let sidebar_toggle = $(".page-head").find(".sidebar-toggle-btn");
		let new_custom_sidebar_toggle = $("#top-navbar-toggle-sidebar");
		let sidebar_wrapper = this.wrapper.find(".layout-side-section");
		if (this.disable_sidebar_toggle || !sidebar_wrapper.length) {
			sidebar_toggle.last().remove();
		} else {
			if (!frappe.is_mobile()) {
				sidebar_toggle.attr("title", __("Toggle Sidebar"));
			}
			sidebar_toggle.attr("aria-label", __("Toggle Sidebar"));
			sidebar_toggle.tooltip({
				delay: { show: 600, hide: 100 },
				trigger: "hover",
			});
			sidebar_toggle.click(() => {
				if (frappe.utils.is_xs() || frappe.utils.is_sm()) {
					this.setup_overlay_sidebar();
				} else {
					sidebar_wrapper.toggle();
				}
				$(document.body).trigger("toggleSidebar");
				this.update_sidebar_icon();
			});
			new_custom_sidebar_toggle.click(() => {
				let rightside = $("#rightside");
				if (frappe.utils.is_xs() || frappe.utils.is_sm()) {
					this.setup_overlay_sidebar();
				} else {
					sidebar_wrapper.toggle();
					if (rightside.hasClass("active")) {
						setTimeout(function () {///workaround
							rightside.removeClass("active");
							$('.page-container').removeClass('page-container-setup');
							// rightside.css({ "display": "none" });
							// $(".layout-side-section").css({ "display": "none" });
							$(".layout-side-section").removeClass("active");
							$(".page-container").css({ "margin-left": "0" });

							$(".navbar-current-docname").removeClass("active-sidebar");
							$(".navbar-expand").removeClass("active-sidebar");
							$(".navbar-back-button-icon").removeClass("active-sidebar");
							$(".layout-side-section").removeClass('sidebar_actived');
							$(document.body).removeClass("left-sidebar-active");
						}, 10);
					} else {
						setTimeout(function () {///workaround
							// rightside.css({ "display": "block" });
							rightside.addClass("active");
							$('.page-container').addClass('page-container-setup');
							$(".layout-side-section").addClass("active");
							// $(".layout-side-section").css({ "display": "block" });
							$(".page-container").css({ "margin-left": "var(--right-sidebar-size)" });
							$(".layout-side-section").addClass('sidebar_actived');
							$(".navbar-current-docname").addClass("active-sidebar");
							$(".navbar-expand").addClass("active-sidebar");
							$(".navbar-back-button-icon").toggleClass("active-sidebar");

							$(document.body).addClass("left-sidebar-active");							
						}, 10);
					}
				}

				$(document.body).trigger("toggleSidebar");
				this.update_sidebar_icon();
			});
		}
		new_custom_sidebar_toggle.click(() => {
			let rightside = $("#rightside");
			if (frappe.utils.is_xs() || frappe.utils.is_sm()) {
				this.setup_overlay_sidebar();
			} else {
				sidebar_wrapper.toggle();
				if (rightside.hasClass("active")) {
					setTimeout(function () {///workaround
						rightside.removeClass("active");
						// rightside.css({ "display": "none" });
						$(".layout-side-section").removeClass("active");
						$("#open-sidebar-top-navbar-ico").css({ "display": "inline-block" });
						$("#close-sidebar-top-navbar-ico").css({ "display": "none" });
						$(".page-container").css({ "margin-left": "0" });
					}, 10);


				} else {
					setTimeout(function () {///workaround
						// rightside.css({ "display": "block" });
						rightside.addClass("active");
						$("#open-sidebar-top-navbar-ico").css({ "display": "none" });
						$("#close-sidebar-top-navbar-ico").css({ "display": "inline-block" });

						$(".layout-side-section").addClass("active");
						$(".page-container").css({ "margin-left": "var(--right-sidebar-size)" });
					}, 10);
				}
			}

			$(document.body).trigger("toggleSidebar");
			this.update_sidebar_icon();
		});
	}

	setup_overlay_sidebar() {
		this.sidebar.find(".close-sidebar").remove();
		let overlay_sidebar = this.sidebar.find(".overlay-sidebar").addClass("opened");
		$('<div class="close-sidebar">').hide().appendTo(this.sidebar).fadeIn();
		let scroll_container = $("html").css("overflow-y", "hidden");

		this.sidebar.find(".close-sidebar").on("click", (e) => this.close_sidebar(e));
		this.sidebar.on("click", "button:not(.dropdown-toggle)", (e) => this.close_sidebar(e));

		this.close_sidebar = () => {
			scroll_container.css("overflow-y", "");
			this.sidebar.find("div.close-sidebar").fadeOut(() => {
				overlay_sidebar
					.removeClass("opened")
					.find(".dropdown-toggle")
					.removeClass("text-muted");
			});
		};
	}

	update_sidebar_icon() {
		let sidebar_toggle = $(".page-head").find(".sidebar-toggle-btn");
		let sidebar_toggle_icon = sidebar_toggle.find(".sidebar-toggle-icon");
		let sidebar_wrapper = this.wrapper.find(".layout-side-section");
		let is_sidebar_visible = $(sidebar_wrapper).is(":visible");
		sidebar_toggle_icon.html(
			frappe.utils.icon(
				is_sidebar_visible ? "es-line-sidebar-collapse" : "es-line-sidebar-expand",
				"md"
			)
		);
	}

	set_indicator(label, color) {
		this.clear_indicator().removeClass("hide").html(`<span>${label}</span>`).addClass(color);
	}

	add_action_icon(icon, click, css_class = "", tooltip_label) {
		const button = $(`
			<button class="text-muted btn btn-default ${css_class} icon-btn">
				${frappe.utils.icon(icon)}
			</button>
		`);
		// ideally, we should pass tooltip_label this is just safe gaurd.
		if (!tooltip_label) {
			if (icon.startsWith("es-")) {
				icon = icon.replace("es-line-", "");
				icon = icon.replace("es-solid-", "");
				icon = icon.replace("es-small-", "");
			}
			tooltip_label = frappe.unscrub(icon);
		}

		button.appendTo(this.icon_group.removeClass("hide"));
		button.click(click);
		button
			.attr("title", __(tooltip_label))
			.tooltip({ delay: { show: 600, hide: 100 }, trigger: "hover" });

		return button;
	}

	clear_indicator() {
		return this.indicator
			.removeClass()
			.addClass("indicator-pill no-indicator-dot whitespace-nowrap hide");
	}

	get_icon_label(icon, label) {
		let icon_name = icon;
		let size = "xs";
		if (typeof icon === "object") {
			icon_name = icon.icon;
			size = icon.size || "xs";
		}
		return `${icon ? frappe.utils.icon(icon_name, size) : ""} <span class="hidden-xs"> ${__(
			label
		)} </span>`;
	}

	set_action(btn, opts) {
		let me = this;
		if (opts.icon) {
			opts.iconHTML = this.get_icon_label(opts.icon, opts.label);
		}

		this.clear_action_of(btn);
			btn.removeClass("hide")
			.prop("disabled", false)
			.html('<a class="activate"> <span> <svg> <use xlink:href="#circle"> </svg> <svg> <use xlink:href="#arrow"> </svg> <svg> <use xlink:href="#check"> </svg> </span> <ul> <li>'+ opts.label +'</li> <li>Waiting</li> <li>Activated</li> </ul> </a> <svg xmlns="http://www.w3.org/2000/svg" style="display: none;"> <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="circle"> <circle cx="8" cy="8" r="7.5"></circle> </symbol> <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="arrow"> <path d="M2.7008908,5.37931459 L2.7008908,5.37931459 C2.9224607,5.60207651 3.2826628,5.60304283 3.50542472,5.38147293 C3.52232305,5.36466502 3.53814843,5.34681177 3.55280728,5.32801875 L5.34805194,3.02646954 L5.34805194,10.3480519 C5.34805194,10.7081129 5.63993903,11 6,11 L6,11 C6.36006097,11 6.65194806,10.7081129 6.65194806,10.3480519 L6.65194806,3.02646954 L8.44719272,5.32801875 C8.6404327,5.57575732 8.99791646,5.61993715 9.24565503,5.42669716 C9.26444805,5.41203831 9.28230129,5.39621293 9.2991092,5.37931459 L9.2991092,5.37931459 C9.55605877,5.12098268 9.57132199,4.70855346 9.33416991,4.43193577 L6.75918715,1.42843795 C6.39972025,1.00915046 5.76841509,0.960656296 5.34912761,1.32012319 C5.31030645,1.35340566 5.27409532,1.38961679 5.24081285,1.42843795 L2.66583009,4.43193577 C2.42867801,4.70855346 2.44394123,5.12098268 2.7008908,5.37931459 Z"></path> </symbol> <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="check"> <path id="test" d="M4.76499011,6.7673683 L8.2641848,3.26100386 C8.61147835,2.91299871 9.15190114,2.91299871 9.49919469,3.26100386 C9.51164115,3.27347582 9.52370806,3.28637357 9.53537662,3.29967699 C9.83511755,3.64141434 9.81891834,4.17816549 9.49919469,4.49854425 L5.18121271,8.82537365 C4.94885368,9.05820878 4.58112654,9.05820878 4.34876751,8.82537365 L2.50080531,6.97362503 C2.48835885,6.96115307 2.47629194,6.94825532 2.46462338,6.93495189 C2.16488245,6.59321455 2.18108166,6.0564634 2.50080531,5.73608464 C2.84809886,5.3880795 3.38852165,5.3880795 3.7358152,5.73608464 L4.76499011,6.7673683 Z"></path> </symbol> </svg> <!-- dribbble --> <a class="dribbble" href="https://dribbble.com/shots/5709751-Activate-Button" target="_blank"><img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt=""></a>')
			.attr("data-label", opts.label)
			.addClass('savebtnstyle')
			.on("click", function () {
				let response = opts.click.apply(this, [btn]);
				me.btn_disable_enable(btn, response);
			});

		if (opts.working_label) {
			btn.attr("data-working-label", opts.working_label);
		}

		// alt shortcuts
		let text_span = btn.find("span");
		frappe.ui.keys.get_shortcut_group(this).add(btn, text_span.length ? text_span : btn);
	}

	set_primary_action(label, click, icon, working_label) {
		this.set_action(this.btn_primary, {
			label: label,
			click: click,
			icon: icon,
			working_label: working_label,
		});
		return this.btn_primary;
	}

	set_secondary_action(label, click, icon, working_label) {
		this.set_action(this.btn_secondary, {
			label: label,
			click: click,
			icon: icon,
			working_label: working_label,
		});

		return this.btn_secondary;
	}

	clear_action_of(btn) {
		btn.addClass("hide").unbind("click").removeAttr("data-working-label");
	}

	clear_primary_action() {
		this.clear_action_of(this.btn_primary);
	}

	clear_secondary_action() {
		this.clear_action_of(this.btn_secondary);
	}

	clear_actions() {
		this.clear_primary_action();
		this.clear_secondary_action();
	}

	clear_custom_actions() {
		this.custom_actions.addClass("hide").empty();
	}

	clear_icons() {
		this.icon_group.addClass("hide").empty();
	}

	//--- Menu --//

	add_menu_item(label, click, standard, shortcut, show_parent) {
		return this.add_dropdown_item({
			label,
			click,
			standard,
			parent: this.menu,
			shortcut,
			show_parent,
		});
	}

	add_custom_menu_item(parent, label, click, standard, shortcut, icon = null) {
		return this.add_dropdown_item({
			label,
			click,
			standard,
			parent: parent,
			shortcut,
			icon,
		});
	}

	clear_menu() {
		this.clear_btn_group(this.menu);
	}

	show_menu() {
		this.menu_btn_group.removeClass("hide");
	}

	hide_menu() {
		this.menu_btn_group.addClass("hide");
	}

	show_icon_group() {
		this.icon_group.removeClass("hide");
	}

	hide_icon_group() {
		this.icon_group.addClass("hide");
	}

	//--- Actions Menu--//

	show_actions_menu() {
		this.actions_btn_group.removeClass("hide");
	}

	hide_actions_menu() {
		this.actions_btn_group.addClass("hide");
	}

	add_action_item(label, click, standard) {
		return this.add_dropdown_item({
			label,
			click,
			standard,
			parent: this.actions,
		});
	}

	add_actions_menu_item(label, click, standard, shortcut) {
		return this.add_dropdown_item({
			label,
			click,
			standard,
			shortcut,
			parent: this.actions,
			show_parent: false,
		});
	}

	clear_actions_menu() {
		this.clear_btn_group(this.actions);
	}

	//-- Generic --//

	/*
	 * Add label to given drop down menu. If label, is already contained in the drop
	 * down menu, it will be ignored.
	 * @param {string} label - Text for the drop down menu
	 * @param {function} click - function to be called when `label` is clicked
	 * @param {Boolean} standard
	 * @param {object} parent - DOM object representing the parent of the drop down item lists
	 * @param {string} shortcut - Keyboard shortcut associated with the element
	 * @param {Boolean} show_parent - Whether to show the dropdown button if dropdown item is added
	 */
	add_dropdown_item({
		label,
		click,
		standard,
		parent,
		shortcut,
		show_parent = true,
		icon = null,
	}) {
		if (show_parent) {
			parent.parent().removeClass("hide hidden-xl");
		}

		let $link = this.is_in_group_button_dropdown(parent, "li > a.grey-link > span", label);
		if ($link) return $link;

		let $li;
		let $icon = ``;

		if (icon) {
			$icon = `<span class="menu-item-icon">${frappe.utils.icon(icon)}</span>`;
		}

		if (shortcut) {
			let shortcut_obj = this.prepare_shortcut_obj(shortcut, click, label);
			$li = $(`
				<li>
					<a class="grey-link dropdown-item" href="#" onClick="return false;">
						${$icon}
						<span class="menu-item-label">${label}</span>
						<kbd class="pull-right">
							<span>${shortcut_obj.shortcut_label}</span>
						</kbd>
					</a>
				</li>
			`);
			frappe.ui.keys.add_shortcut(shortcut_obj);
		} else {
			$li = $(`
				<li>
					<a class="grey-link dropdown-item" href="#" onClick="return false;">
						${$icon}
						<span class="menu-item-label">${label}</span>
					</a>
				</li>
			`);
		}

		$link = $li.find("a").on("click", (e) => {
			if (e.ctrlKey || e.metaKey) {
				frappe.open_in_new_tab = true;
			}
			return click();
		});

		if (standard) {
			$li.appendTo(parent);
		} else {
			this.divider = parent.find(".dropdown-divider");
			if (!this.divider.length) {
				this.divider = $('<li class="dropdown-divider user-action"></li>').prependTo(
					parent
				);
			}
			$li.addClass("user-action").insertBefore(this.divider);
		}

		// alt shortcut
		frappe.ui.keys
			.get_shortcut_group(parent.get(0))
			.add($link, $link.find(".menu-item-label"));

		return $link;
	}

	prepare_shortcut_obj(shortcut, click, label) {
		let shortcut_obj;
		// convert to object, if shortcut string passed
		if (typeof shortcut === "string") {
			shortcut_obj = { shortcut };
		} else {
			shortcut_obj = shortcut;
		}
		// label
		if (frappe.utils.is_mac()) {
			shortcut_obj.shortcut_label = shortcut_obj.shortcut
				.replace("Ctrl", "⌘")
				.replace("Alt", "⌥");
		} else {
			shortcut_obj.shortcut_label = shortcut_obj.shortcut;
		}

		shortcut_obj.shortcut_label = shortcut_obj.shortcut_label.replace("Shift", "⇧");

		// actual shortcut string
		shortcut_obj.shortcut = shortcut_obj.shortcut.toLowerCase();
		// action is button click
		if (!shortcut_obj.action) {
			shortcut_obj.action = click;
		}
		// shortcut description can be button label
		if (!shortcut_obj.description) {
			shortcut_obj.description = label;
		}
		// page
		shortcut_obj.page = this;
		return shortcut_obj;
	}

	/*
	 * Check if there already exists a button with a specified label in a specified button group
	 * @param {object} parent - This should be the `ul` of the button group.
	 * @param {string} selector - CSS Selector of the button to be searched for. By default, it is `li`.
	 * @param {string} label - Label of the button
	 */
	is_in_group_button_dropdown(parent, selector, label) {
		if (!selector) selector = "li";

		if (!label || !parent) return false;

		const item_selector = `${selector}[data-label="${encodeURIComponent(label)}"]`;

		const existing_items = $(parent).find(item_selector);
		return existing_items?.length > 0 && existing_items;
	}

	clear_btn_group(parent) {
		parent.empty();
		parent.parent().addClass("hide");
	}

	add_divider() {
		return $('<li class="dropdown-divider"></li>').appendTo(this.menu);
	}

	get_or_add_inner_group_button(label) {
		var $group = this.inner_toolbar.find(
			`.inner-group-button[data-label="${encodeURIComponent(label)}"]`
		);
		if (!$group.length) {
			$group = $(
				`<div class="inner-group-button" data-label="${encodeURIComponent(label)}">
					<button type="button" class="btn btn-default ellipsis" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						${label}
						${frappe.utils.icon("select", "xs")}
					</button>
					<div role="menu" class="dropdown-menu"></div>
				</div>`
			).appendTo(this.inner_toolbar);
		}
		return $group;
	}

	get_inner_group_button(label) {
		return this.inner_toolbar.find(
			`.inner-group-button[data-label="${encodeURIComponent(label)}"]`
		);
	}

	set_inner_btn_group_as_primary(label) {
		this.get_or_add_inner_group_button(label)
			.find("button")
			.removeClass("btn-default")
			.addClass("btn-primary");
	}

	btn_disable_enable(btn, response) {
		if (response && response.then) {
			btn.prop("disabled", true);
			response.then(() => {
				btn.prop("disabled", false);
			});
		} else if (response && response.always) {
			btn.prop("disabled", true);
			response.always(() => {
				btn.prop("disabled", false);
			});
		}
	}

	/*
	 * Add button to button group. If there exists another button with the same label,
	 * `add_inner_button` will not add the new button to the button group even if the callback
	 * function is different.
	 *
	 * @param {string} label - Label of the button to be added to the group
	 * @param {object} action - function to be called when button is clicked
	 * @param {string} group - Label of the group button
	 */
	add_inner_button(label, action, group, type = "default") {
		var me = this;
		let _action = function () {
			let btn = $(this);
			let response = action();
			me.btn_disable_enable(btn, response);
		};
		// Add actions as menu item in Mobile View
		let menu_item_label = group ? `${group} > ${label}` : label;
		let menu_item = this.add_menu_item(menu_item_label, _action, false, false, false);
		menu_item.parent().addClass("hidden-xl");
		if (this.menu_btn_group.hasClass("hide")) {
			this.menu_btn_group.removeClass("hide").addClass("hidden-xl");
		}

		if (group) {
			var $group = this.get_or_add_inner_group_button(group);
			$(this.inner_toolbar).removeClass("hide");

			if (!this.is_in_group_button_dropdown($group.find(".dropdown-menu"), "a", label)) {
				return $(
					`<a class="dropdown-item" href="#" onclick="return false;" data-label="${encodeURIComponent(
						label
					)}">${label}</a>`
				)
					.on("click", _action)
					.appendTo($group.find(".dropdown-menu"));
			}
		} else {
			let button = this.inner_toolbar.find(
				`button[data-label="${encodeURIComponent(label)}"]`
			);
			if (button.length == 0) {
				button = $(`<button data-label="${encodeURIComponent(
					label
				)}" class="btn btn-${type} ellipsis">
					${__(label)}
				</button>`);
				button.on("click", _action);
				button.appendTo(this.inner_toolbar.removeClass("hide"));
			}
			return button;
		}
	}

	remove_inner_button(label, group) {
		if (typeof label === "string") {
			label = [label];
		}
		// translate
		label = label.map((l) => __(l));

		if (group) {
			var $group = this.get_inner_group_button(__(group));
			if ($group.length) {
				$group.find(`.dropdown-item[data-label="${encodeURIComponent(label)}"]`).remove();
			}
			if ($group.find(".dropdown-item").length === 0) $group.remove();
		} else {
			this.inner_toolbar.find(`button[data-label="${encodeURIComponent(label)}"]`).remove();
		}
	}

	change_inner_button_type(label, group, type) {
		let btn;

		if (group) {
			var $group = this.get_inner_group_button(__(group));
			if ($group.length) {
				btn = $group.find(`.dropdown-item[data-label="${encodeURIComponent(label)}"]`);
			}
		} else {
			btn = this.inner_toolbar.find(`button[data-label="${encodeURIComponent(label)}"]`);
		}

		if (btn) {
			btn.removeClass().addClass(`btn btn-${type} ellipsis`);
		}
	}

	add_inner_message(message) {
		let $message = $(`<span class='inner-page-message text-muted small'>${message}</div>`);
		this.inner_toolbar.find(".inner-page-message").remove();
		this.inner_toolbar.removeClass("hide").prepend($message);

		return $message;
	}

	clear_inner_toolbar() {
		this.inner_toolbar.empty().addClass("hide");
	}

	clear_user_actions() {
		this.menu.find(".user-action").remove();
	}

	// page::title
	get_title_area() {
		return this.$title_area;
	}

	set_title(title, icon = null, strip = true, tab_title = "", tooltip_label = "") {
		if (!title) title = "";
		if (strip) {
			title = strip_html(title);
		}
		this.title = title;
		frappe.utils.set_title(tab_title || title);
		if (icon) {
			title = `${frappe.utils.icon(icon)} ${title}`;
		}
		let title_wrapper = this.$title_area.find(".title-text");
		title_wrapper.html(title);
		title_wrapper.attr("title", tooltip_label || this.title);

		if (tooltip_label) {
			title_wrapper.tooltip({ delay: { show: 600, hide: 100 }, trigger: "hover" });
		}
	}

	set_title_sub(txt) {
		// strip icon
		this.$sub_title_area.html(txt).toggleClass("hide", !!!txt);
	}

	get_main_icon(icon) {
		return this.$title_area
			.find(".title-icon")
			.html('<i class="' + icon + ' fa-fw"></i> ')
			.toggle(true);
	}

	add_help_button(txt) {
		//
	}

	add_button(label, click, opts) {
		if (!opts) opts = {};
		let button = $(`<button
			class="btn ${opts.btn_class || "btn-default"} ${opts.btn_size || "btn-sm"} ellipsis">
				${opts.icon ? frappe.utils.icon(opts.icon) : ""}
				${label}
		</button>`);
		// Add actions as menu item in Mobile View (similar to "add_custom_button" in forms.js)
		let menu_item = this.add_menu_item(label, click, false);
		menu_item.parent().addClass("hidden-xl");

		button.appendTo(this.custom_actions);
		button.on("click", click);
		this.custom_actions.removeClass("hide");

		return button;
	}

	add_custom_button_group(label, icon, parent) {
		let dropdown_label = `<span class="hidden-xs">
			<span class="custom-btn-group-label">${__(label)}</span>
			${frappe.utils.icon("select", "xs")}
		</span>`;

		if (icon) {
			dropdown_label = `<span class="hidden-xs">
				${frappe.utils.icon(icon)}
				<span class="custom-btn-group-label">${__(label)}</span>
				${frappe.utils.icon("select", "xs")}
			</span>
			<span class="visible-xs">
				${frappe.utils.icon(icon)}
			</span>`;
		}

		let custom_btn_group = $(`
			<div class="custom-btn-group">
				<button type="button" class="btn btn-default btn-sm ellipsis" data-toggle="dropdown" aria-expanded="false">
					${dropdown_label}
				</button>
				<ul class="dropdown-menu" role="menu"></ul>
			</div>
		`);

		if (!parent) parent = this.custom_actions;
		parent.removeClass("hide").append(custom_btn_group);

		return custom_btn_group.find(".dropdown-menu");
	}

	add_dropdown_button(parent, label, click, icon) {
		frappe.ui.toolbar.add_dropdown_button(parent, label, click, icon);
	}

	// page::form
	add_label(label) {
		this.show_form();
		return $("<label class='col-md-1 page-only-label'>" + label + " </label>").appendTo(
			this.page_form
		);
	}
	add_select(label, options) {
		var field = this.add_field({ label: label, fieldtype: "Select" });
		return field.$wrapper.find("select").empty().add_options(options);
	}
	add_data(label) {
		var field = this.add_field({ label: label, fieldtype: "Data" });
		return field.$wrapper.find("input").attr("placeholder", label);
	}
	add_date(label, date) {
		var field = this.add_field({ label: label, fieldtype: "Date", default: date });
		return field.$wrapper.find("input").attr("placeholder", label);
	}
	add_check(label) {
		return $("<div class='checkbox'><label><input type='checkbox'>" + label + "</label></div>")
			.appendTo(this.page_form)
			.find("input");
	}
	add_break() {
		// add further fields in the next line
		this.page_form.append('<div class="clearfix invisible-xs"></div>');
	}
	add_field(df, parent) {
		this.show_form();

		if (!df.placeholder) {
			df.placeholder = df.label;
		}

		df.input_class = "input-xs";

		var f = frappe.ui.form.make_control({
			df: df,
			parent: parent || this.page_form,
			only_input: df.fieldtype == "Check" ? false : true,
		});
		f.refresh();
		$(f.wrapper)
			.addClass("col-md-2")
			.attr("title", __(df.label, null, df.parent))
			.tooltip({
				delay: { show: 600, hide: 100 },
				trigger: "hover",
			});

		// html fields in toolbar are only for display
		if (df.fieldtype == "HTML") {
			return;
		}

		// hidden fields dont have $input
		if (!f.$input) f.make_input();

		f.$input.attr("placeholder", __(df.label, null, df.parent));

		if (df.fieldtype === "Check") {
			$(f.wrapper).find(":first-child").removeClass("col-md-offset-4 col-md-8");
		}

		if (df.fieldtype == "Button") {
			$(f.wrapper).find(".page-control-label").html("&nbsp;");
			f.$input.addClass("btn-xs").css({ width: "100%", "margin-top": "-1px" });
		}

		if (df["default"]) f.set_input(df["default"]);
		this.fields_dict[df.fieldname || df.label] = f;
		return f;
	}
	clear_fields() {
		this.page_form.empty();
	}
	show_form() {
		this.page_form.removeClass("hide");
	}
	hide_form() {
		this.page_form.addClass("hide");
	}
	get_form_values() {
		var values = {};
		for (let fieldname in this.fields_dict) {
			let field = this.fields_dict[fieldname];
			values[fieldname] = field.get_value();
		}
		return values;
	}
	add_view(name, html) {
		let element = html;
		if (typeof html === "string") {
			element = $(html);
		}
		this.views[name] = element.appendTo($(this.wrapper).find(".page-content"));
		if (!this.current_view) {
			this.current_view = this.views[name];
		} else {
			this.views[name].toggle(false);
		}
		return this.views[name];
	}
	set_view(name) {
		if (this.current_view_name === name) return;
		this.current_view && this.current_view.toggle(false);
		this.current_view = this.views[name];

		this.previous_view_name = this.current_view_name;
		this.current_view_name = name;

		this.views[name].toggle(true);

		this.wrapper.trigger("view-change");

	}
};
