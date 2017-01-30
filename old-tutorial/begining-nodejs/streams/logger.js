var Writable = require('stream').Writable;
var util = require('util');

function Logger () {
	Writable.call(this);
}

util.inherits(Logger, Writable);

Logger.prototype._write = function (chunk) {
	console.log(chunk.toString());
};

var logger = new Logger();
var readStream = require('fs').createReadStream('example.txt');
readStream.pipe(logger);