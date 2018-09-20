from frappe import _

def get_data():
	return {
		'heatmap': True,
		'heatmap_message': _('This is based on the attendance of this Employee'),
		'fieldname': 'name',
	
		'transactions': [
			{
				'label': _('Test'),
				'items': ['User', 'Python Course']
			},
			{
				'label': _('Test2'),
				'items': ['User', 'Python Course']
			}

	]


}
