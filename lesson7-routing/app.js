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
//get parameters from request body
var bodyParser = require('body-parser');	

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
//parse json
app.use(bodyParser.json());
//parse urlencoded bodies like "fname=Jane&lname="Doe"
app.use(bodyParser.urlencoded({'extended':'true'}));

//DEFINE ROUTES
//==============================
//curl http://localhost:3000/api/users
app.get('/api/users', function (req, res){

});
//curl http://localhost:3000/api/users/1
app.get('/api/users/:id', function (req, res){
	
});
//curl -X PUT curl http://localhost:3000/api/users/1 -d "fname=Jane&lname=Doe" 
app.put('/api/users/:id', function (req, res){
	
});
//curl -X POST http://localhost:3000/api/users -d "id=2&fname=Jane&lname=Doe&email=jane@example.com"
app.post('/api/users', function (req, res){
	
});
//curl -X DELETE http://localhost:3000/api/users/1
app.delete('/api/users/:id', function (req, res){
	
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
