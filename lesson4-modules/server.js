var http = require("http");

var start = function () {
	//create a new webserver object
	http.createServer(function (request, response) {
		//set the header and status code
		response.writeHead(200, {'Content-Type': 'text/plain'});
		//text to send to response body
		response.write('hello world');
		//sends and ends the response
		response.end();
		//begin accepting connections on port 3000
	}).listen(3000);
}

//make the start function available as a module
exports.start = start;