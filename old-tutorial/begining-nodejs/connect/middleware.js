var util = require('util');
var connect = require('connect');

//a simple loggin middleware
function logit(req, res, next) {
	util.log(util.format('Request received: %s, %s', req.method, req.url));
	next();
}

function echo(req, res, next) {
	req.pipe(res);
}

//configurable middleware creator
function greeter(message) {
	return function (req, res, next) {
		res.end(message);
	}
}

var helloWorldGreeter = greeter('Hello world!');
var heyThereGreeter = greeter('Hey there!');

connect()
	.use('/hello', helloWorldGreeter)
	.use('/hey', heyThereGreeter)
	//.use(function (req, res) {res.end('Wassup!');})
	.listen(3000);