// Copyright (c) 2018, fefe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Python Course', {
	refresh: function(frm) {




frappe.call({
    method: "test_fun", //dotted path to server method
    args: {'args1':'test'},
    doc: frm.doc,
    callback: function(r) {
        // code snippet
    }
})




		show_alert({message:'Hi, do you have a new message', indicator:'orange'});

	frappe.msgprint("<b>Server Status</b>"
    + "<hr>"
    + "<ul>"
            + "<li><b>28%</b> Memory</li>"
            + "<li><b>12%</b> Processor</li>"
            + "<li><b>0.3%</b> Disk</li>"
    + "</ul>", 'Server Info')

var d = new frappe.ui.Dialog({

     'title': 'Test Dialog',
    'fields': [
        {'fieldname': 'ht', 'fieldtype': 'Data','lable':'tets'},
        {'fieldname': 'today', 'fieldtype': 'Date', 'default': frappe.datetime.nowdate()}
    ],
    primary_action: function(){
        d.hide();
        console.log(d.get_values());
    },
  'primary_action_label': __("Add"),
});

console.log(d.fields_dict.ht.value); 
d.show();
console.log(d.fields_dict.ht.value); 


	frm.add_custom_button(('Test'), function(){
		frappe.msgprint("Added");
		}, __("Test group") );


	frm.add_custom_button(('Test btn'), function(){
		frappe.msgprint("yesss");
		}, __("Test group") );



	}




});





