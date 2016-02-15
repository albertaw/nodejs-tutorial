var fs = require('fs');  
var http = require('http');

var server = http.createServer(function (req, res) {
  var rs = fs.createReadStream('index.html');
  rs.on('data', function(chunk) {
		res.write(chunk);
	});
  
  rs.on('end', function(){
  	res.end();
  });
});

server.listen(3000);  
