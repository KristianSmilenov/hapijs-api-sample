"use strict";

var alertController = require('src/controllers/alert');
var alertValidate = require('src/validate/alert');

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/alerts/{id}',
			config : {
				handler: alertController.findByID,
				validate: alertValidate.findByID
			}
		},
		{
			method: 'GET',
			path: '/alerts',
			config : {
				handler: alertController.find
			}
		},
		{
			method: 'POST',
			path: '/alerts',
			config : {
				handler : alertController.insert,
				validate : alertValidate.insert
			}
		},
		{
			method: 'PUT',
			path: '/alerts/{id}',
			config : {
				handler: alertController.update,
				validate : alertValidate.update
			}
		},
		{
			method: 'DELETE',
			path: '/alerts/{id}',
			config : {
				handler: alertController.delete,
				validate : alertValidate.delete
			}
		}
	];
}();