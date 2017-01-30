var connect = require('connect'),
	http = require('http');

//create a connect dispatcher
var app = connect();
//register with http
http.createServer(app).listen(3000);
console.log('server running on port 3000'); 