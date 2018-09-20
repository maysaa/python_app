frappe.pages['test'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: __('Test'),
		single_column: true
	});

	//page.frappe.render_template("test",{});
	//frappe.render_template("test",{}).appendTo(page.main)
	frappe.test.make(page);
	
	wrapper.page.set_primary_action(__("GO"),function() { 

		frappe.test.go(page);
		});

	wrapper.page.add_menu_item(__('Refresh'), function() {
		frappe.test.make(page);
	});
	wrapper.page.add_menu_item(__('sss'), function() {
		frappe.test.make(page);
	});
}

frappe.test= {

	make: function(page) {
		var me = frappe.test;
		me.page = page;

		$(frappe.render_template("test",{'name':frappe.session.user})).appendTo(me.page.main);
	},
	go: function(page) {
		frappe.msgprint('test')
	}

}
