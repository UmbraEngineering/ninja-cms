
var conf     = require('./conf');
var express  = require('express');

// 
// TODO create express server
// 

app.listen(conf.http.port, conf.http.address, function() {
	logger.log('Express server listening to ' + conf.http.address + ':' + conf.http.port + '...');
});
