// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt

frappe.ui.form.save = function (frm, action, callback, btn) {
	$(btn).prop("disabled", true);
	// specified here because there are keyboard shortcuts to save
	const working_label = {
		Save: __("Saving", null, "Freeze message while saving a document"),
		Submit: __("Submitting", null, "Freeze message while submitting a document"),
		Update: __("Updating", null, "Freeze message while updating a document"),
		Amend: __("Amending", null, "Freeze message while amending a document"),
		Cancel: __("Cancelling", null, "Freeze message while cancelling a document"),
	}[toTitle(action)];

	var freeze_message = working_label ? __(working_label) : "";

	var save = function () {
		if(frm.doctype == 'Item'){
			if(frm.doc.__islocal){
				// var headers = $('.apps-nav-bar-top');
				// if (headers.length > 0) {
				// 	var default_tabs = headers.html();
				// 	var imageslist = $(frm.$wrapper[0]).find('.images_list').html();
				// 	var structure = '<div class="ite_insert_state"><canvas id="item_canvas" width="600" height="200"></canvas></div>';
				// 	headers.html(structure);

					// const popcorn = new rive.Rive({
					// 	src: "/assets/erpnext/images/delivery_demo_7.riv",
					// 	canvas: document.getElementById("item_canvas"),
					// 	autoplay: true,
					// 	stateMachines: "State Machine 1",
					// 	onLoad: (e) => {
					// 		const stateMachineInputs = popcorn.stateMachineInputs("State Machine 1");
					// 		const isPressedInput = stateMachineInputs.find(input => input.name === "isPressed");
					// 		setTimeout(() => { 
					// 			isPressedInput.fire();
					// 		}, 2000);
					// 	}
					// });
					
					
				}
			}
			//return;
		//}
		remove_empty_rows();
		var j_btn = $(btn);
		$(frm.wrapper).addClass("validated-form");
		if ((action !== "Save" || frm.is_dirty()) && check_mandatory()) {
			j_btn.find('a').addClass('loading');
			if(frm.doctype == 'Sales Invoice'){
				if(frm.doc.__islocal){
					var headers = $('.apps-nav-bar-top');

					$(window).bind('popstate', function(e){
						location.reload()
					});

					if (headers.length > 0) {
						var loadingFreeze = `<div id="freeze" class="modal-backdrop fade in blur"><div class="freeze-message-container"><div class="freeze-message"><p class="lead"></p></div></div></div>`
						var default_tabs = headers.html();
						var imageslist = $(frm.$wrapper[0]).find('.images_list').html();
						var creatingIcon = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M22.4991 4.73578L19.8778 1.12579L19.8707 1.13068L19.1326 0.135995C19.1075 0.101521 19.0755 0.0721519 19.0385 0.049597C19.0014 0.0270421 18.96 0.0117515 18.9167 0.00461181C18.8734 -0.00252571 18.8291 -0.00136902 18.7863 0.00801669C18.7434 0.0174002 18.703 0.0348259 18.6673 0.0592768L16.9027 1.25136C14.6563 2.78572 13.25 4.20205 12.342 5.82494C11.9158 6.58758 11.5982 7.39622 11.3782 8.29455L10.8862 8.01125C10.5891 7.3243 10.4178 6.57572 10.3526 5.7745L10.1882 3.68358C10.1806 3.59725 10.1396 3.51809 10.074 3.46324C10.0084 3.40839 9.9235 3.38226 9.83768 3.3905L5.39246 3.84968L5.39315 3.85827L4.16043 3.99843C4.11796 4.00285 4.07646 4.0158 4.03835 4.03653C4.00023 4.05726 3.96627 4.08536 3.93842 4.11919C3.91057 4.15302 3.8894 4.19191 3.87613 4.2336C3.86287 4.27528 3.85777 4.31893 3.86115 4.36201L4.01395 6.4822C4.22305 9.1897 4.74971 11.1126 5.70485 12.7083C6.15382 13.4575 6.69696 14.136 7.36669 14.775L6.87344 15.059C6.12902 14.972 5.39401 14.7458 4.66631 14.4018L2.76854 13.4984C2.68978 13.4617 2.60054 13.4576 2.52012 13.4868C2.4397 13.516 2.37457 13.5763 2.33881 13.6545L0.514909 17.7237L0.522713 17.7274L0.0280564 18.8622C0.0106581 18.9011 0.00115393 18.9435 9.87304e-05 18.9867C-0.000956607 19.03 0.00645751 19.0734 0.0219079 19.1144C0.0373601 19.1554 0.060541 19.1931 0.0901043 19.2254C0.119666 19.2577 0.15502 19.2839 0.194109 19.3025L2.11148 20.2307C4.56696 21.4038 6.49992 21.9103 8.36309 21.8832C9.23834 21.87 10.0993 21.74 10.9892 21.4809V22.0503C10.5416 22.6496 9.97778 23.1711 9.31548 23.6275L7.58216 24.815C7.51098 24.8647 7.46276 24.9397 7.44793 25.0238C7.4331 25.1078 7.45285 25.1942 7.50291 25.2642L10.1242 28.8742L10.1313 28.8693L10.8694 29.864C10.8945 29.8985 10.9265 29.9278 10.9635 29.9504C11.0006 29.973 11.042 29.9882 11.0853 29.9954C11.1286 30.0025 11.1729 30.0014 11.2158 29.992C11.2586 29.9826 11.299 29.9652 11.3347 29.9407L13.0993 28.7486C15.3457 27.2143 16.752 25.7979 17.66 24.1751C18.0862 23.4124 18.4038 22.6038 18.6238 21.7055L19.1138 21.9876C19.4109 22.6746 19.5822 23.4231 19.6474 24.2244L19.8118 26.3153C19.8194 26.4016 19.8604 26.4808 19.926 26.5356C19.9916 26.5905 20.0765 26.6166 20.1623 26.6084L24.6075 26.1492L24.6068 26.1406L25.8396 26.0004C25.882 25.996 25.9235 25.9831 25.9617 25.9623C25.9998 25.9416 26.0337 25.9135 26.0616 25.8797C26.0894 25.8458 26.1106 25.8069 26.1239 25.7653C26.1371 25.7236 26.1422 25.6799 26.1389 25.6368L25.9861 23.5166C25.7769 20.8092 25.2503 18.8863 24.2952 17.2905C23.8462 16.5413 23.303 15.8628 22.6333 15.2238L23.1266 14.9398C23.871 15.0268 24.606 15.253 25.3337 15.597L27.2315 16.5005C27.3102 16.5371 27.3995 16.5412 27.4799 16.512C27.5603 16.4828 27.6254 16.4225 27.6612 16.3443L29.4851 12.2751L29.4773 12.2714L29.9719 11.1366C29.9893 11.0977 29.9988 11.0554 29.9999 11.0121C30.001 10.9688 29.9935 10.9254 29.9781 10.8844C29.9626 10.8435 29.9395 10.8057 29.9099 10.7734C29.8803 10.7411 29.845 10.7149 29.8059 10.6963L27.8885 9.76816C25.433 8.59502 23.5001 8.08849 21.6369 8.11562C20.7623 8.12882 19.902 8.2586 19.0128 8.51733V7.94965C19.4604 7.35043 20.0242 6.82892 20.6865 6.37254L22.4199 5.18505C22.491 5.13533 22.5392 5.06032 22.5541 4.97624C22.5689 4.89217 22.5492 4.80578 22.4991 4.73578ZM13.8889 10.0321C14.1132 9.34766 14.3639 8.67642 14.4299 8.5448C14.452 8.50078 14.4884 8.41592 14.5281 8.32344C14.607 8.13941 14.6989 7.92522 14.7165 7.94274C14.7257 7.95192 14.7321 8.06635 14.7417 8.2355C14.7595 8.55137 14.7881 9.05806 14.8654 9.42663C14.9842 9.99258 15.2349 10.7033 15.4196 10.9929C16.2642 12.3353 17.729 13.3225 20.0911 14.1517C20.4322 14.2717 20.9344 14.3912 21.3502 14.4901C21.7547 14.5864 22.0774 14.6632 22.0905 14.7021C22.1148 14.7872 21.2664 14.8855 20.7832 14.9415C20.7433 14.9462 20.7059 14.9505 20.6717 14.9545C18.336 15.2309 16.8053 17.0472 15.5252 21.0483C15.5045 21.115 15.4812 21.1914 15.4566 21.272C15.3403 21.6532 15.1949 22.1302 15.1513 22.1302C15.1213 22.1302 15.0885 21.8788 15.0488 21.5747C15.0186 21.3435 14.9845 21.0819 14.9446 20.8772C14.7202 19.6137 14.3244 18.8898 13.4138 17.9948C12.5047 17.1108 11.2045 16.6958 8.94796 15.9757C8.58409 15.8595 8.19536 15.7355 7.77939 15.6002C7.47587 15.5081 8.26729 15.2835 9.20422 15.0861C10.2995 14.8492 11.2232 14.3622 11.8831 13.6515C12.6352 12.8355 13.4138 11.4272 13.8889 10.0321Z" fill="#006AFF"/>
						</svg>`
						var svgimgs = '<svg width="30" height="30" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="38" height="38" rx="19" fill="black"/> <circle opacity="0.4" cx="19" cy="19" r="12.047" stroke="#37C058" stroke-width="1.90596"/> <path d="M19.7049 6.91999C22.0666 7.12661 24.314 8.02892 26.1629 9.51281C28.0118 10.9967 29.3791 12.9955 30.092 15.2565C30.8049 17.5175 30.8313 19.9392 30.1679 22.2152C29.5045 24.4912 28.1811 26.5194 26.365 28.0432C24.5489 29.5671 22.3218 30.5182 19.9651 30.7763C17.6085 31.0344 15.2282 30.5879 13.1254 29.4932C11.0225 28.3985 9.29151 26.7049 8.15121 24.6264C7.01092 22.5479 6.51258 20.178 6.7192 17.8163" stroke="#37C058" stroke-width="2.5" stroke-linecap="round"/> </svg>';
						var structure = '<div class="save_state"><div class="first_action"><h3>' + creatingIcon + 'Creating Order</h3><span>'+svgimgs+'</span></div>     <div class="second_action"><div class="order_totals">  <span class="total_title">Total (THB)</span> <span class="total_value">฿ '+ frm.doc.base_grand_total.toFixed(2) +'</span>   </div></div>            <div class="third_action"><div class="images_list">'+imageslist+'</div></div>      <div class="fourth_action"><div class="tickicon"><svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M28.5 56.1484C13.2695 56.1484 0.609375 43.4883 0.609375 28.2578C0.609375 13 13.2422 0.367188 28.4727 0.367188C43.7305 0.367188 56.3906 13 56.3906 28.2578C56.3906 43.4883 43.7578 56.1484 28.5 56.1484ZM28.5 51.5C41.4062 51.5 51.7695 41.1641 51.7422 28.2578C51.7148 15.3516 41.3789 5.01562 28.4727 5.01562C15.5664 5.01562 5.28516 15.3516 5.28516 28.2578C5.28516 41.1641 15.5938 51.5 28.5 51.5ZM25.4922 41.2461C24.5898 41.2461 23.8516 40.8633 23.168 39.9609L16.4961 31.7852C16.1133 31.2656 15.8672 30.6641 15.8672 30.0898C15.8672 28.8594 16.7969 27.9023 17.9727 27.9023C18.7383 27.9023 19.3398 28.1484 19.9961 29.0234L25.3828 35.9688L36.7305 17.7852C37.25 16.9648 37.9336 16.5547 38.6172 16.5547C39.7656 16.5547 40.8594 17.3477 40.8594 18.5508C40.8594 19.1523 40.5039 19.7812 40.2031 20.3008L27.707 39.9609C27.1602 40.8086 26.3945 41.2461 25.4922 41.2461Z" fill="#37C058"></path> </svg></div></div>      </div>';
						headers.html(structure);
						$("#body").append(loadingFreeze)

						const first_action = $('.first_action');
						const second_action = $('.second_action');
						const third_action = $('.third_action');
						const fourth_action = $('.fourth_action');
						const save_state = $('.save_state')

						gsap.set(second_action, {display: "block", height: "0", opacity: 0, y: 50});
						gsap.set(third_action, {display: "block", height: "0", opacity: 0, y: 50, x:14, filter:"blur(15px)", scale:0.5});
						gsap.set(fourth_action, {display: "block", height: "0", opacity: 0, y: 50, padding:"25px",marginTop:"-135px",textAlign:"center"});
						setTimeout(() => { 
							gsap.to(third_action, {duration:0.5,height: "auto", opacity: 1, y: -60,x: 0,ease: "power2.out", filter:"blur(0px)",transformOrigin:"0"});
							gsap.to(third_action, {duration:2,ease: "elastic.out(2, 1)",scale:1});
							gsap.to(fourth_action, {duration:1,padding:"30px",ease: "power2.out"});
							gsap.to(save_state, {duration:1,padding:"17px 13px",ease:"power2.out"})
							gsap.to($('.save_state .first_action svg'), {duration:1, width:"42px", height:"42px", ease:"power2.out"})

							let images = $(".save_state .third_action .images_list .image_f")
							images.each(function(index) {
								setTimeout(() => {
									$(this).css({ opacity: 1, transition: "opacity 500ms" });
								}, (2000 / images.length) * index);
							});
						}, 3000);
						setTimeout(() => { 
							gsap.to(third_action, {duration:1,height: "auto", scale:1,ease: "elastic.out(1.5, 1)"});
							gsap.to(second_action, {duration: 1.5,height: "80px", opacity: 1, y: -20, ease: "elastic.out(1.5, 1)"});
						}, 5000);
						setTimeout(() => { 
							gsap.to(first_action, {duration:0.5, opacity: 0, y: 0, ease: "power2.out"});
							gsap.to(second_action, {duration: 1.5,height: "60px", opacity: 1, y: 80, ease: "elastic.out(1.5, 1)"});
							gsap.to(third_action, {duration: 1.5, display: "block", height: "0", opacity: 0, y: 50,ease: "elastic.out(1.5, 1)"});
							gsap.to(fourth_action, {duration: 1.5,height: "180px", opacity: 1, y: 0,ease: "elastic.out(1.5, 1)",padding:"25px 25px 100px"});
						}, 7000);
						setTimeout(() => {
							$(first_action).addClass("is_saved")
							$(first_action).html(`<svg width="50" height="50" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M22.4991 4.73578L19.8778 1.12579L19.8707 1.13068L19.1326 0.135995C19.1075 0.101521 19.0755 0.0721519 19.0385 0.049597C19.0014 0.0270421 18.96 0.0117515 18.9167 0.00461181C18.8734 -0.00252571 18.8291 -0.00136902 18.7863 0.00801669C18.7434 0.0174002 18.703 0.0348259 18.6673 0.0592768L16.9027 1.25136C14.6563 2.78572 13.25 4.20205 12.342 5.82494C11.9158 6.58758 11.5982 7.39622 11.3782 8.29455L10.8862 8.01125C10.5891 7.3243 10.4178 6.57572 10.3526 5.7745L10.1882 3.68358C10.1806 3.59725 10.1396 3.51809 10.074 3.46324C10.0084 3.40839 9.9235 3.38226 9.83768 3.3905L5.39246 3.84968L5.39315 3.85827L4.16043 3.99843C4.11796 4.00285 4.07646 4.0158 4.03835 4.03653C4.00023 4.05726 3.96627 4.08536 3.93842 4.11919C3.91057 4.15302 3.8894 4.19191 3.87613 4.2336C3.86287 4.27528 3.85777 4.31893 3.86115 4.36201L4.01395 6.4822C4.22305 9.1897 4.74971 11.1126 5.70485 12.7083C6.15382 13.4575 6.69696 14.136 7.36669 14.775L6.87344 15.059C6.12902 14.972 5.39401 14.7458 4.66631 14.4018L2.76854 13.4984C2.68978 13.4617 2.60054 13.4576 2.52012 13.4868C2.4397 13.516 2.37457 13.5763 2.33881 13.6545L0.514909 17.7237L0.522713 17.7274L0.0280564 18.8622C0.0106581 18.9011 0.00115393 18.9435 9.87304e-05 18.9867C-0.000956607 19.03 0.00645751 19.0734 0.0219079 19.1144C0.0373601 19.1554 0.060541 19.1931 0.0901043 19.2254C0.119666 19.2577 0.15502 19.2839 0.194109 19.3025L2.11148 20.2307C4.56696 21.4038 6.49992 21.9103 8.36309 21.8832C9.23834 21.87 10.0993 21.74 10.9892 21.4809V22.0503C10.5416 22.6496 9.97778 23.1711 9.31548 23.6275L7.58216 24.815C7.51098 24.8647 7.46276 24.9397 7.44793 25.0238C7.4331 25.1078 7.45285 25.1942 7.50291 25.2642L10.1242 28.8742L10.1313 28.8693L10.8694 29.864C10.8945 29.8985 10.9265 29.9278 10.9635 29.9504C11.0006 29.973 11.042 29.9882 11.0853 29.9954C11.1286 30.0025 11.1729 30.0014 11.2158 29.992C11.2586 29.9826 11.299 29.9652 11.3347 29.9407L13.0993 28.7486C15.3457 27.2143 16.752 25.7979 17.66 24.1751C18.0862 23.4124 18.4038 22.6038 18.6238 21.7055L19.1138 21.9876C19.4109 22.6746 19.5822 23.4231 19.6474 24.2244L19.8118 26.3153C19.8194 26.4016 19.8604 26.4808 19.926 26.5356C19.9916 26.5905 20.0765 26.6166 20.1623 26.6084L24.6075 26.1492L24.6068 26.1406L25.8396 26.0004C25.882 25.996 25.9235 25.9831 25.9617 25.9623C25.9998 25.9416 26.0337 25.9135 26.0616 25.8797C26.0894 25.8458 26.1106 25.8069 26.1239 25.7653C26.1371 25.7236 26.1422 25.6799 26.1389 25.6368L25.9861 23.5166C25.7769 20.8092 25.2503 18.8863 24.2952 17.2905C23.8462 16.5413 23.303 15.8628 22.6333 15.2238L23.1266 14.9398C23.871 15.0268 24.606 15.253 25.3337 15.597L27.2315 16.5005C27.3102 16.5371 27.3995 16.5412 27.4799 16.512C27.5603 16.4828 27.6254 16.4225 27.6612 16.3443L29.4851 12.2751L29.4773 12.2714L29.9719 11.1366C29.9893 11.0977 29.9988 11.0554 29.9999 11.0121C30.001 10.9688 29.9935 10.9254 29.9781 10.8844C29.9626 10.8435 29.9395 10.8057 29.9099 10.7734C29.8803 10.7411 29.845 10.7149 29.8059 10.6963L27.8885 9.76816C25.433 8.59502 23.5001 8.08849 21.6369 8.11562C20.7623 8.12882 19.902 8.2586 19.0128 8.51733V7.94965C19.4604 7.35043 20.0242 6.82892 20.6865 6.37254L22.4199 5.18505C22.491 5.13533 22.5392 5.06032 22.5541 4.97624C22.5689 4.89217 22.5492 4.80578 22.4991 4.73578ZM13.8889 10.0321C14.1132 9.34766 14.3639 8.67642 14.4299 8.5448C14.452 8.50078 14.4884 8.41592 14.5281 8.32344C14.607 8.13941 14.6989 7.92522 14.7165 7.94274C14.7257 7.95192 14.7321 8.06635 14.7417 8.2355C14.7595 8.55137 14.7881 9.05806 14.8654 9.42663C14.9842 9.99258 15.2349 10.7033 15.4196 10.9929C16.2642 12.3353 17.729 13.3225 20.0911 14.1517C20.4322 14.2717 20.9344 14.3912 21.3502 14.4901C21.7547 14.5864 22.0774 14.6632 22.0905 14.7021C22.1148 14.7872 21.2664 14.8855 20.7832 14.9415C20.7433 14.9462 20.7059 14.9505 20.6717 14.9545C18.336 15.2309 16.8053 17.0472 15.5252 21.0483C15.5045 21.115 15.4812 21.1914 15.4566 21.272C15.3403 21.6532 15.1949 22.1302 15.1513 22.1302C15.1213 22.1302 15.0885 21.8788 15.0488 21.5747C15.0186 21.3435 14.9845 21.0819 14.9446 20.8772C14.7202 19.6137 14.3244 18.8898 13.4138 17.9948C12.5047 17.1108 11.2045 16.6958 8.94796 15.9757C8.58409 15.8595 8.19536 15.7355 7.77939 15.6002C7.47587 15.5081 8.26729 15.2835 9.20422 15.0861C10.2995 14.8492 11.2232 14.3622 11.8831 13.6515C12.6352 12.8355 13.4138 11.4272 13.8889 10.0321Z" fill="#006AFF"></path>
								</svg>
								<div>
									<h3>Order created</h3>
									<p>${frm.doc.name}</p>
								</div>`)
							gsap.to(first_action, {duration:0.5, opacity: 1, y: 0, ease: "power2.out"});
						}, 7500)
					}
				}
			}

			setTimeout(function() { 
				_call({
					freeze : false,
					method: "frappe.desk.form.save.savedocs",
					args: { doc: frm.doc, action: action },
					callback: function (r) {
							if(frm.doctype == 'Sales Invoice' && frm.doc.__islocal == 1){
								var headers = $('.apps-nav-bar-top');
								$("#freeze").remove()
								$(".first_action").removeClass("is_saved")
								if (headers.length > 0) {
									headers.html(default_tabs)
								}
							}
							$("body").removeClass("new-doc-view");

							if (frm.doc.doctype === "Item"){
								$('header.navbar.navbar-expand').removeClass("hide")
							}

							j_btn.find('a').addClass('done');
							$(document).trigger("save", [frm.doc]);
							j_btn.find('a').removeClass('loading done');
							callback(r);
					},
					error: function (r) {
						callback(r);
						j_btn.find('a').removeClass('loading');
					}
				});
			}, 9000);

		} else {
			j_btn.find('a').addClass('loading');
			!frm.is_dirty() &&
				frappe.show_alert({ message: __("No changes in document"), indicator: "orange" });
			$(btn).prop("disabled", false);
			j_btn.find('a').removeClass('loading');
		}
	};

	var remove_empty_rows = function () {
		/*
			This function removes empty rows. Note that in this function, a row is considered
			empty if the fields with `in_list_view: 1` are undefined or falsy because that's
			what users also consider to be an empty row
		*/
		const docs = frappe.model.get_all_docs(frm.doc);

		// we should only worry about table data
		const tables = docs.filter((d) => {
			return frappe.model.is_table(d.doctype);
		});

		let modified_table_fields = [];

		tables.map((doc) => {
			const cells = frappe.meta.docfield_list[doc.doctype] || [];

			const in_list_view_cells = cells.filter((df) => {
				return cint(df.in_list_view) === 1;
			});

			const is_empty_row = function (cells) {
				for (let i = 0; i < cells.length; i++) {
					if (
						locals[doc.doctype][doc.name] &&
						locals[doc.doctype][doc.name][cells[i].fieldname]
					) {
						return false;
					}
				}
				return true;
			};

			if (is_empty_row(in_list_view_cells)) {
				frappe.model.clear_doc(doc.doctype, doc.name);
				modified_table_fields.push(doc.parentfield);
			}
		});

		modified_table_fields.forEach((field) => {
			frm.refresh_field(field);
		});
	};

	var cancel = function () {
		var args = {
			doctype: frm.doc.doctype,
			name: frm.doc.name,
		};

		// update workflow state value if workflow exists
		var workflow_state_fieldname = frappe.workflow.get_state_fieldname(frm.doctype);
		if (workflow_state_fieldname) {
			$.extend(args, {
				workflow_state_fieldname: workflow_state_fieldname,
				workflow_state: frm.doc[workflow_state_fieldname],
			});
		}

		_call({
			method: "frappe.desk.form.save.cancel",
			args: args,
			callback: function (r) {
				$(document).trigger("save", [frm.doc]);
				callback(r);
			},
			btn: btn,
			freeze_message: freeze_message,
		});
	};

	var check_mandatory = function () {
		var has_errors = false;
		frm.scroll_set = false;

		if (frm.doc.docstatus == 2) return true; // don't check for cancel

		$.each(frappe.model.get_all_docs(frm.doc), function (i, doc) {
			var error_fields = [];
			var folded = false;

			$.each(frappe.meta.docfield_list[doc.doctype] || [], function (i, docfield) {
				if (docfield.fieldname) {
					const df = frappe.meta.get_docfield(doc.doctype, docfield.fieldname, doc.name);

					if (df.fieldtype === "Fold") {
						folded = frm.layout.folded;
					}

					if (
						is_docfield_mandatory(doc, df) &&
						!frappe.model.has_value(doc.doctype, doc.name, df.fieldname)
					) {
						has_errors = true;
						error_fields[error_fields.length] = __(df.label, null, df.parent);
						// scroll to field
						if (!frm.scroll_set) {
							scroll_to(doc.parentfield || df.fieldname);
						}

						if (folded) {
							frm.layout.unfold();
							folded = false;
						}
					}
				}
			});

			if (frm.is_new() && frm.meta.autoname === "Prompt" && !frm.doc.__newname) {
				has_errors = true;
				error_fields = [__("Name"), ...error_fields];
			}

			if (error_fields.length) {
				let meta = frappe.get_meta(doc.doctype);
				let message;
				if (meta.istable) {
					const table_field = frappe.meta.docfield_map[doc.parenttype][doc.parentfield];

					const table_label = __(
						table_field.label || frappe.unscrub(table_field.fieldname)
					).bold();

					message = __("Mandatory fields required in table {0}, Row {1}", [
						table_label,
						doc.idx,
					]);
				} else {
					message = __("Mandatory fields required in {0}", [__(doc.doctype)]);
				}
				message = message + "<br><br><ul><li>" + error_fields.join("</li><li>") + "</ul>";
				frappe.msgprint({
					message: message,
					indicator: "red",
					title: __("Missing Fields"),
				});
				frm.refresh();
			}
		});

		return !has_errors;
	};

	let is_docfield_mandatory = function (doc, df) {
		if (df.reqd) return true;
		if (!df.mandatory_depends_on || !doc) return;

		let out = null;
		let expression = df.mandatory_depends_on;
		let parent = frappe.get_meta(df.parent);

		if (typeof expression === "boolean") {
			out = expression;
		} else if (typeof expression === "function") {
			out = expression(doc);
		} else if (expression.substr(0, 5) == "eval:") {
			try {
				out = frappe.utils.eval(expression.substr(5), { doc, parent });
				if (parent && parent.istable && expression.includes("is_submittable")) {
					out = true;
				}
			} catch (e) {
				frappe.throw(__('Invalid "mandatory_depends_on" expression'));
			}
		} else {
			var value = doc[expression];
			if ($.isArray(value)) {
				out = !!value.length;
			} else {
				out = !!value;
			}
		}

		return out;
	};

	const scroll_to = (fieldname) => {
		frm.scroll_to_field(fieldname);
		frm.scroll_set = true;
	};

	var _call = function (opts) {
		// opts = {
		// 	method: "some server method",
		// 	args: {args to be passed},
		// 	callback: callback,
		// 	btn: btn
		// }

		if (frappe.ui.form.is_saving) {
			// this is likely to happen if the user presses the shortcut cmd+s for a longer duration or uses double click
			// no need to show this to user, as they can see "Saving" in freeze message
			console.log("Already saving. Please wait a few moments.");
			throw "saving";
		}

		// ensure we remove new docs routes ONLY
		if (frm.is_new()) {
			frappe.ui.form.remove_old_form_route();
		}
		frappe.ui.form.is_saving = true;

		return frappe.call({
			freeze: false,
			// freeze_message: opts.freeze_message,
			method: opts.method,
			args: opts.args,
			btn: opts.btn,
			callback: function (r) {
				opts.callback && opts.callback(r);
			},
			error: opts.error,
			always: function (r) {
				$(btn).prop("disabled", false);
				frappe.ui.form.is_saving = false;

				if (r) {
					var doc = r.docs && r.docs[0];
					if (doc) {
						frappe.ui.form.update_calling_link(doc);
					}
				}
			},
		});
	};

	if (action === "cancel") {
		cancel();
	} else {
		save();
	}
};

frappe.ui.form.remove_old_form_route = () => {
	let current_route = frappe.get_route().join("/");
	frappe.route_history = frappe.route_history.filter(
		(route) => route.join("/") !== current_route
	);
};

frappe.ui.form.update_calling_link = (newdoc) => {
	if (!frappe._from_link) return;
	var doc = frappe.get_doc(frappe._from_link.doctype, frappe._from_link.docname);

	let is_valid_doctype = () => {
		if (frappe._from_link.df.fieldtype === "Link") {
			return newdoc.doctype === frappe._from_link.df.options;
		} else {
			// dynamic link, type is dynamic
			return newdoc.doctype === doc[frappe._from_link.df.options];
		}
	};

	if (is_valid_doctype()) {
		frappe.model.with_doctype(newdoc.doctype, () => {
			let meta = frappe.get_meta(newdoc.doctype);
			// set value
			if (doc && doc.parentfield) {
				//update values for child table
				$.each(
					frappe._from_link.frm.fields_dict[doc.parentfield].grid.grid_rows,
					function (index, field) {
						if (field.doc && field.doc.name === frappe._from_link.docname) {
							if (meta.title_field && meta.show_title_field_in_link) {
								frappe.utils.add_link_title(
									newdoc.doctype,
									newdoc.name,
									newdoc[meta.title_field]
								);
							}
							frappe._from_link.set_value(newdoc.name);
						}
					}
				);
			} else {
				if (meta.title_field && meta.show_title_field_in_link) {
					frappe.utils.add_link_title(
						newdoc.doctype,
						newdoc.name,
						newdoc[meta.title_field]
					);
				}
				frappe._from_link.set_value(newdoc.name);
			}

			// refresh field
			frappe._from_link.refresh();

			// if from form, switch
			if (frappe._from_link.frm) {
				frappe
					.set_route(
						"Form",
						frappe._from_link.frm.doctype,
						frappe._from_link.frm.docname
					)
					.then(() => {
						frappe.utils.scroll_to(frappe._from_link_scrollY);
					});
			}

			frappe._from_link = null;
		});
	}
};
