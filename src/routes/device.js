"use strict";

var deviceController = require('src/controllers/device');

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/devices/{id}',
			config : {
				handler: deviceController.findByID
			}
		},
		{
			method: 'GET',
			path: '/devices',
			config : {
				handler: deviceController.find
			}
		}
	];
}();