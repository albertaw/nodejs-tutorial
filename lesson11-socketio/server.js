var express = require('express');
var http = require('http');

//create the application
var app = express();

//configurations
app.set('port', (process.env.PORT || 4000));

//connect middleware
app.use(express.static(__dirname + '/public'));

//register with http
var server = http.createServer(app).listen(app.get('port'));

//setup socket to listen to server
var io = require('socket.io').listen(server);

//register event listeners
io.sockets.on('connection', function (socket) {
	socket.on('helloEvent', function(content) {
		console.log(content);
	});

	socket.on('disconnect', function () {
		socket.broadcast.emit('serverMessage', socket.username + ' has left');
	});
});