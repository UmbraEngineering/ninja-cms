
var fs       = require('fs');
var http     = require('http');
var https    = require('https');
var conf     = require('./conf');
var express  = require('express');
var logger   = require('./logger');

var app = module.exports = express();

// Parse request bodies
app.use(express.bodyParser({strict: false}));

// Check for method overrides
app.use(express.methodOverride());

// Add Ninja CMS to X-Powered-By header
app.use(function(req, res, next) {
	res.setHeader('X-Powered-By', 'Ninja CMS, Express');
	next();
});

// Run through the router
app.use(app.router);

// Determine what server(s) to create
var httpsEnabled = conf.https && conf.https.enabled;
var httpEnabled = httpsEnabled ? conf.https.allowNonSsl : true;

// Create the HTTP server
if (httpEnabled) {
	http.createServer(app).listen(conf.http.port, conf.http.address, function() {
		logger.log('HTTP server listening to ' + conf.http.address + ':' + conf.http.port + '...');
	});
}

// Create the HTTPS server
if (httpsEnabled) {
	var creds = {
		key: fs.readFileSync(conf.https.keyFile),
		cert: fs.readFileSync(conf.https.certFile)
	};

	if (conf.https.caFile) {
		creds.ca = fs.readFileSync(conf.https.caFile);
	}

	https.createServer(creds, app).listen(conf.https.port, conf.https.address, function() {
		logger.log('HTTPS server listening to ' + conf.https.address + ':' + conf.https.port + '...');
	});
}
