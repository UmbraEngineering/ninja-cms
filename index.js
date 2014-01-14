
var path = require('path');

exports.start = function(dirname) {
	dirname = exports.approot = dirname || path.resolve(__dirname, '../../..');

	// Expose config
	exports.conf = require('./lib/conf');

	// Load express/create server(s)
	exports.express = require('./lib/express');

	// 
	// TODO
	//  - Load/create any existing routes already in MongoDB
	//  - Define admin panel routes
	// 
};
