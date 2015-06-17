"use strict";

module.exports = function() {

	var env = process.env.NODE_ENV || 'development';
	var dbContants = databaseConfig();
	var appConstants = applicationConfig();

	var obj = {
		application : {
			url : appConstants[env]['url'],
			host : appConstants[env]['host'],
			port : appConstants[env]['port'],
		},
		database : {
			host     : dbContants[env]['host'],
			user     : dbContants[env]['user'],
			password : "",
			database : dbContants[env]['database']
		},
		server : {
			defaultHost : 'http://localhost:81'
		}
	};

	if (!obj.application['host']) {
		throw new Error('Missing constant application.host. ' +
			'Check your enviroment variables NODE_HOST.');
	} else if (!obj.application['port']) {
		throw new Error('Missing constant application.port. ' +
			'Check your enviroment variable NODE_PORT.');
	} else if (!obj.database['host']) {
		throw new Error('Missing constant database.host. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['user']) {
		throw new Error('Missing constant database.user. ' +
			'Check your enviroment variables.');
	// } else if (!obj.database['password']) {
	// 	throw new Error('Missing constant database.password. ' +
	// 		'Check your enviroment variables.');
	} else if (!obj.database['database']) {
		throw new Error('Missing constant database.database. ' +
			'Check your enviroment variables.');
	}

	return obj;

	function databaseConfig(){
		return {
			'production' : {
				'host' : process.env.DB_PRD_HOST,
				'user' : process.env.DB_PRD_USER,
				'password' : process.env.DB_PRD_PASS,
				'database' : 'net'
			},
			'development' : {
				'host' : 'localhost',
				'user' : process.env.DB_DEV_USER,
				'password' : process.env.DB_DEV_PASS,
				'database' : 'net'
			},
			'test' : {
				'host' : 'localhost',
				'user' : process.env.DB_TEST_USER,
				'password' : process.env.DB_TEST_PASS,
				'database' : 'net'
			}
		};
	}

	function applicationConfig(){
		return {
			'production' : {
				'url' : 'https://' + process.env.NODE_HOST + ':' + 
					process.env.NODE_PORT,
				'host' : process.env.NODE_HOST,
				'port' : process.env.NODE_PORT
			},
			'development' : {
				'url' : 'http://' + process.env.NODE_HOST + ':' + 
				process.env.NODE_PORT,
				'host' : process.env.NODE_HOST,
				'port' : process.env.NODE_PORT
			},
			'test' : {
				'url' : 'http://' + process.env.NODE_HOST + ':' + 
				process.env.NODE_PORT,
				'host' : process.env.NODE_HOST,
				'port' : process.env.NODE_PORT
			}
		};
	}
}();