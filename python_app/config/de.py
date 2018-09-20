# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
		"label": _("Documents"),
		"items": [
			{
				"type": "page",
				"label": _("Test Page"),
				"name":"test"
			}
			]
		}
	]
