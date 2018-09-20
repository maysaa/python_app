# Copyright (c) 2013, fefe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _

def execute(filters=None):
	columns, data = [], []

	columns+= [
		{"label":"Name","fieldtype":"Data","fieldname":"name"},
		{"label":_("Test") ,"width":80,"fieldtype": "Data","fieldname":"test"}
	]
	if filters.get("ch"):
		columns+= [{"label":"New","fieldtype":"Date"}]		
	
	doc_data = get_data(filters)


	#row = {"name":"test","test":"sss"}
	#data.append(row)

	for doc in frappe.db.sql("select name , test from tabDashTable"):
		#frappe.msgprint(doc[0])
		row = {"Name":doc[0],"Test":doc[1]} 

		data.append(row)

	return columns, data


def get_data(filters=None):
	#frappe.msgprint(filters.get("test"))
	#myfilters = 'test = %(test)s'
	#myfilters += 'name = %(to_date)s'

	
	data= frappe.db.sql("select name , test from tabDashTable ")

	return data
