## Routing

To review, routing is mapping requests to request handlers.  The request consists of a method, route, headers, and a body. In return the web server sends back a response.  One of the ways you can make a request is by entering a url into the browser.  The server will respond with a resource, which is usually an HTML page.  Users of your app may also make requests by filling out forms on your app to login or to create an account.  

Writing this code can become very unwieldy. That is why we use frameworks. A framework gives your app structure.  This structure comes in the form of pre built functionality you can use so that building your app becomes easier. It also helps you with organizing your code.  The main functionality we want to be able to build in our Node app is creating a web server and adding routing. I will cover how to do this using the web framework Express.js.

### Express.js

If you want to create a basic web server using Express it would look like this:

```javascript
//web framework
var express = require('express');
//core module for working with http protocol
var http = require('http');

//create our app with express
var app = express();

//set port variable
app.set('port', process.env.PORT || 3000);

//define a route for the root page
app.get('/', function (req, res) {
	res.send('Hello World');
});

//send a 400 error for all undefined routes 
app.all('*', function (req, res) {
	res.sendStatus(404);
});

//start app
http.createServer(app).listen(app.get('port'), function () {
console.log('Express server listening on port ' + app.get('port'));
});
```

As opposed to creating a request listener like we did in previous examples, we create an Express object.  This provides us a cleaner way to add routes and other functionality to our app because they get attached to this object.  What this code does is create a web server that prints “Hello World” to the web page when you visit the root path.  And it sends a 404 error for all other routes.  

Another task I had you do was serve html files for different routes.  Express has a method that lets us serve static resources like html files, javascript files, and css files from a directory.  To use it we will need to put these files inside their own folder and include the `path` module.  Then add this statement right before your routes:

```javascript
//serve static files from the /public directory
app.use(express.static(path.join(__dirname, '/public')));
```

`app.use` is how we add middleware to our Express app. The middleware passed into this function will get processed with the request.  We can use middleware from other modules like logging middleware.  Or we can define our own middleware. For example middleware to check if a user has been authenticated. This is the format for defining and using your own middleware:

```javascript
var middleware = function(request, response, next) {
	//code here
	next();
};

//register your middleware
app.use(middleware);
```

Where `middleware` is replaced with the name you give to your middleware function. You can also link your middleware to a particular route.  You may want to do this if you want to make sure users are authenticated before they can access certain routes.  Like seeing a user dashboard. Or for logging and session handling.

```javascript
app.use('/route', middleware);
``` 

### Architecting a Rest API

An API consists of resources and actions.  A resource is the information that will be retrieved. It is represented as a URL or a relative path, also known as an endpoint.  The action is one of the HTTP methods like GET, PUT, POST, or DELETE.  These are examples of routes for a book resource:

List all books
```
GET /books
```
Create new book
```
POST /books
```
List a specific book
```
GET /books/:id
```
Update a book
```
PUT /books/:id
```
Delete a book
```
DELETE /books/:id
```
List the authors of a book
```
GET /books/:id/authors
```
List the reviews of a book
```
GET /books/:id/reviews
```

The `:id` part of the path is a parameter.  Parameters allow us to create multiple routes based on a particular pattern.  This is the general form for creating route handlers in express:

```js
app.method('/path', requestHandler)
```

This code matches the request to what needs to handle the request. The request handler receives the request object and a response object. This is an example of a route handler for `GET /books`:

```js
app.get('/books',  function(req, res) {
  //get the books from the datastore
  res.json(books);
});
```

Express request object methods and attributes

- request.query - query string parameters, everything to the right of the question mark (?)
- request.params - URL parameters
- request.body - request body data, requires the body-parser module to be installed
- request.cookies - cookie data, required for express sessions middleware, must install cookie-parser module
- request.signedCookies - gives cookie a private value for identification
- request.get(name) - retrieves request headers by their name

Express response object methods and attributes

- response.render(name, data, callback) - generates HTML out of templates (like jade)
- response.locals - allows you to pass data to templates
- response.set(field, value) - set headers
- response.status(status) - sends the status in the response  
	-200:OK  
	-201:Created  
	-301:Moved Permanently  
	-401:Unauthorized  
	-404:Not Found  
	-500:Internal Server Error  
- response.send(data) - outputs any kind of data passed to it (string, json, array, etc)
- response.json(data) - sends json data
- response.jsonp(data) - sends json data wrapped in a javascript function call
- response.redirect(path) - redirect requests to another route


## Exercise

- Refactor your code so that it uses Express and serves your static pages from their own directory.
- Create a json file of books that have the following attributes: title, author, isbn, reviews.
- Implement the route handlers that are given above for the books in your app.js file

## Resources

- [Architectural Styles and the Design of Network-based Software Architectures](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
- [Pro REST API Development with Node.js](http://www.apress.com/us/book/9781484209189)
- [Express - Node framework](https://expressjs.com/en/4x/api.html)

