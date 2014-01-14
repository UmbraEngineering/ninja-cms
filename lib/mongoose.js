
var conf = require('./conf');

var mongoose = module.exports = require('mongoose');

mongoose.connect(conf.mongodb.url);
