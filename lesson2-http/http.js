//create a web server

//loaod the core module
var http = require('http');

//create a new webserver object
var server = http.createServer(function (request, response) {
	//set the header and status code
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//text to send to response body
	response.write('hello world');
	//sends and ends the response
	response.end();
})

//begin accepting connections on port 3000
server.listen(3000);
//output message to the console
console.log('Server running on port 3000');

/* alternate syntax
http.createServer(function(req, res) {
	...
}).listen(3000);

*/