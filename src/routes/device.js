"use strict";

var deviceController = require('src/controllers/device');

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/v1/devices',
			config : {
				handler: deviceController.find
			}
		},
		{
			method: 'GET',
			path: '/v1/devices/{id}',
			config : {
				handler: deviceController.findByID
			}
		}		
	];
}();