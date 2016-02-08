var fs = require('fs');  
var http = require('http');

//create a read stream
var rs = fs.createReadStream('index.html');

var server = http.createServer(function (req, res) {
  //send file contents as a response
  rs.pipe(res);
});

server.listen(3000);  