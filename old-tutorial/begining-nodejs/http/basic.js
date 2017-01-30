var http = require('http');

var server = http.createServer(function (request, response) {
	console.log('request headers...');
	console.log(request.headers);
	response.write('hello world');
	response.end();
})

server.listen(3000);
console.log('Server running at 127.0.0.1:3000');