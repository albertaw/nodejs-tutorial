//web framework
var express = require('express');

//instantiate express object
var app = express();

//define a route for the home page
app.get('/', function (req, res) {
	res.send('Hello World');
});

//start server
app.listen(3000);
