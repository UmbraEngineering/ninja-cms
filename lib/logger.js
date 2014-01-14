
var conf = require('./conf');

// 
// Wrapper for console.log
// 
exports.log = function() {
	if (conf.logging && conf.logging.enabled) {
		console.log.apply(console, arguments);
	}
};
