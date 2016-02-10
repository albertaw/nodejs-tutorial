//INCLUDE MODULES
//==============================
//web framework
var express = require('express');
//core module for working with http protocol
var http = require('http');
//core module for handling file paths
var path = require('path');
//log http requests to the console
var morgan = require('morgan'); 

//INSTANTIATE OBJECTS
//==============================
//create our app with express
var app = express();

//CONFIGURE SETTINGS
//==============================
//set port variable
app.set('port', process.env.PORT || 3000);

//DEFINE MIDDLEWARE
//==============================
//serve static files from the /public directory
app.use(express.static(path.join(__dirname, '/public')));
//log every request to the console
app.use(morgan('dev'));

//DEFINE ROUTES
//==============================
//create the /hello route
app.get('/hello', function (req, res) {
	res.send('Hello World');
});
//send a 400 error for all undefined routes 
app.all('*', function (req, res) {
	res.sendStatus(404);
});

//START APP
//==============================
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
