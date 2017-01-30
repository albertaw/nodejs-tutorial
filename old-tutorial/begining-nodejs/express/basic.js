var express = require('express'),
	http = require('http');
//create express application
var app = express()
			//register middleware
			.use(function (req, res, next) {
				res.end('hello express');
			});

//register with http
http.createServer(app).listen(3000);