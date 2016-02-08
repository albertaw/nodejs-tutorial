var fs = require('fs');  
var http = require('http');

var rs = fs.createReadStream('index.html');
var data = "";
//interpret the data as utf8 and return as a string
rs.setEncoding('utf8');
//listen to data events
rs.on('data', function(chunk) {
	data += chunk;
});

var server = http.createServer(function (req, res) {
  //send file contents as a response
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
});

server.listen(3000);  
