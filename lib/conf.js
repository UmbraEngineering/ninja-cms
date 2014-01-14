
var app     = require('../index');
var config  = require('node-conf');

config.setRootDir(app.approot);

module.exports = config.load(process.env.NODE_ENV || 'production');
