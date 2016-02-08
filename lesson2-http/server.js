//create a web server

//load the core module
var http = require('http');

//create a new webserver object and pass it a request listener
var server = http.createServer(function (request, response) {
	//set the header and status code
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//text to send to response body
	response.write('hello world');
	//sends and ends the response
	response.end();
});

//begin accepting connections on port 3000
server.listen(3000);
//output message to the console
console.log('Server running on port 3000');

//open a browser window and type localhost:3000 to see the page

/* alternate syntax
http.createServer(callBack).listen(3000);
*/