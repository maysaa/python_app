// Copyright (c) 2018, fefe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Python Course', {
	refresh: function(frm) {
	cur_frm.fields_dict['child'].grid.get_field('tets').set_query = function(doc, cdt, cdn) {
	return
	{
		'filters':{'name':frm.doc.email}

	}}



	frm.set_query('tets1', 'child', function(doc, cdt, cdn) {


		}





		console.log(frm)
		console.log(frm.doc.__islocal)
    		cur_frm.set_df_property("data_1", "read_only", frm.doc.__islocal ? 0 : 1);
		//if (frm.is_new)
		frm.set_value("data_1","Hello");
//frm.get_value("data_1");
		//frappe.model.set_value("test","hello");
		//frappe.model.get_value("test","hello");
		//frappe.model.get_values("");
		//frappe.model.with_doc("doctype name","field",function(r){});
		console.log(cur_frm.doc.users);
		console.log( frappe.model.get_doc('User',{'email':cur_frm.doc.users} ) )
		console.log( frappe.get_doc('User',{'email':cur_frm.doc.users} ) )
		//frappe.model.with_doc('User',frm.doc.user,function(r){
		//	r.email
		//	}

		//frappe.msgprint("Hello")



	if (frm.is_new() && frm.doc.child==[] ){
		var doc =frappe.model.add_child(frm.doc, "Child Python", "child");
		doc.data_1 = "test";
		var raw1 =frappe.model.add_child(frm.doc, "Child Python", "child");
		raw1.data_1 = "Python";

        frm.doc.child.forEach(function(d) { frappe.msgprint(d.data_1) });
		

		frm.refresh_fields()}
		//refresh_field('child')
		//refresh_field(frm.doc,'child','data_1')
		//doc.set_value('data_1','test')
	},
	email: function(frm) {
	 	//cur_frm.toggle_display("email", frm.doc.data_1=="test");

    		//cur_frm.set_df_property("email", "unique", frm.doc.__islocal ? 0 : 1);
    		cur_frm.set_df_property("dataa", "options", ['test1','test2']);
	},
	child:function(frm) {
		frappe.msgprint('Hi Child')
	},
	user: function(frm) {




		console.log(frm.doc.email);
		frappe.call({
			method: "frappe.client.get_value",
			args: {
				doctype: 'User',
				fieldname: ['name','email'],
				filters: {'email':cur_frm.doc.users}
			},
			callback: function(r) {
				console.log(r);

				}

			});




	return frappe.call({
			method: "frappe.client.get_list",
			args: {
				doctype: 'User'
			},
			callback: function(r) {
				console.log(r);

				}

			});
		return frappe.call({
			method: "frappe.client.get_single_value",
			args: {
				doctype: 'Single Doctype',
				field:'data_1',
			},
			callback: function(r) {
				console.log(r);

				}

			});


		//frappe.new_doc('User',{'email':frm.doc.email});
	}

});

//frappe.ui.form.on('Python Course',"child", {
//
	//test:function(frm) {}


//});



frappe.ui.form.on('Child Python', {

	test:function(frm,cdt,cdn) {
		var d = locals[cdt][cdn];
		console.log(d.tets1) 
		d.tets1 ='dedfe';

		}


});


cur_frm.cscript.email_validate = function(doc) {

}

