// Copyright (c) 2016, fefe and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Test REport"] = {
	"filters": [
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			"reqd": 1
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			"fieldname":"test",
			"label": __("Test"),
			"fieldtype": "Data"
		},
		{
			"fieldname":"ch",
			"label": __("Active"),
			"fieldtype": "Check",
			on_change: function() {
			//var data = frappe.query_report.get_values().to_date
			var data = frappe.query_report.get_filter_value('to_date');
			frappe.query_report.set_filter_value("test",data);
			frappe.query_report.refersh()
	}
		}
	],
	"onload": function() {
		//frappe.msgprint("Test");
		},
	"formatter": function(value, row, column, data, default_formatter) {
			console.log(data)
			if (data.Test== undefined)
				value="<span style='color:red'>"+value+"</span>"


	return value
				
	}
}
