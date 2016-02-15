# Routing in Express

## TODO
Implement the route handlers that are given in the routes in
the app.js file. In app.js create an array called users and
initialize with a few user objects. A user will have an id, first name, last name, and email address. Output the response as json.

## Overview
Routing is mapping requests to code to execute.  The request consists of a method, route, headers, and a body. In return the web sends back a response.  You make a get request when you enter a url into browser and you get an html page in the rsponse.  

**Methods**  
GET - retrieves a resource  
POST - creates a resource  
PUT - updates a resource  
DELETE - deletes a resource  

This is the general formula for creating a route in express:
```js
app.method('url', requesteHandler)
```

To create a route that uses parameters add a colon before the parameter name in the route. In express, to extract a parameter from a url we use `request.params.parameterName` or `req.params.parameterName` depending on how you named the argument in your request handler. 
```js
app.get('/user/:id', function(req, res) {
  res.json(users[req.params.id]);
});
```
**Express request object methods and attributes**

- request.query - query string parameters, everything to the right of the ?
- request.params - URL parameters
- request.body - request body data, requires the body-parser module to be installed
- request.route - the current route's information such as:  
 	-path  
  -method  
  -keys  
  -regex  
	-params  
- request.cookies - cookie data, required for express sessions middleware, must install cookie-parser module
- request.signedCookies - gives cookie a private value for identification
- request.header() and request.get() - retrieves request headers by their name

**Express response object methods and attributes**

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

## curl

**Overview**  
curl is a command line tool for querying URLs. You can use this to 
test that your URLs work correctly. 
To make  a GET request to a URL:
```bash
curl http://example.com/api/users
```
-X flag allows us to use HTTP request methods other than GET

**Sending parameters**  
Append a query string at the end of the url begining with a ? 
and each parameter separated by a &:
```bash
curl -X POST "http://example.com/api/users?fname=Alberta&lname=Williams"
```
Pass data in a request body using the -d flag:
```bash
curl -X POST http://example.com/users -d "fname=Alberta&lname=Williams"
```
Send json as data:
```bash
curl -X POST http://example.com/users -d "{'fname':'Alberta','lname':'Williams'}"
```
Send a file as a request body using @filename:
```bash
curl -X POST http://example.com/api/users -d @users.json 
```
To submit user credentials with a url use the -u flag:
```bash
curl -X POST -u "user1:password1" http://example.com/login
```

## Resources
[test API routes](https://www.getpostman.com/)  
[curl tutorial](http://conqueringthecommandline.com/book/curl)  
[pretty print json](http://benw.me/posts/colourized-pretty-printed-json-with-curl/)
