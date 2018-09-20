frappe.views.calendar["Python Course"] = {

		field_map: {
		"start": "start_date",
		"end": "end_date",
		"id": "name",
		"title": "email",
		"allDay": "allDay",
		"progress": 80
	},
	gantt: true,
	get_events_method: "frappe.desk.calendar.get_events"
}
