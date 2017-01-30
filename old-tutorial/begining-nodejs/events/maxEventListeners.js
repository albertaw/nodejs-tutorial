var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var listenersCalled = 0;

function someCallback() {
	emitter.on('foo', function () {
		listenersCalled++;
	});
};

for (var i = 0; i < 20; i++) {
	someCallback();
}

//will throw error
emitter.emit('foo');
//will get called
console.log('listeners called:', listenersCalled);