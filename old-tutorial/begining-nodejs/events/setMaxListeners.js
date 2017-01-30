var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.setMaxListeners(30);

for (var i = 0; i < 20; i++) {
	console.log(i);
	emitter.on('foo', function () {});
}

console.log('done');