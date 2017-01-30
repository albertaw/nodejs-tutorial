var express = require('express');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var path = require('path');

var app = express()
	.use(express.static(path.join(__dirname, 'public')))
	.use(serveIndex(__dirname + '/public'))
	.listen(3000);