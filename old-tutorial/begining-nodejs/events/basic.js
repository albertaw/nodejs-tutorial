var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

//Subscribe
emitter.on('foo', function (arg1, arg2) {
	console.log('Foo raised, Args:', arg1, arg2);
});

//Emit 
emitter.emit('foo', {a: 123}, {b: 456});

//Subscribe
emitter.on('bar', function () {
	console.log('subscriber 1');
});

emitter.on('bar', function () {
	console.log('subscriber 2');
})

//Emit
emitter.emit('bar');