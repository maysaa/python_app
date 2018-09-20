frappe.treeview_settings["Python Course"] = {
	title: __("Test Chart"),
	//get_tree_nodes: 'myget_children',
	//add_tree_node:'add_node',
	root_label: "Test",
	fields: [
		{fieldtype:'Data', fieldname:'data_1', label:__('New Child'), reqd:true,
			description: __("Name ")}
	],
	ignore_fields:["parent_python_course"]
}
