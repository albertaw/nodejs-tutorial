# Web servers
 
Now that you have deployed an app, I will go into depth about how it works.  You should have accomplished creating a web server that displays a web page when someone visits your web address.  In order for you to add pages to your web app and have it do different things based on the URL that’s visited, we need to understand how the Internet and web servers work. Throughout this lesson I will reference a conversation between 2 people, Alice and Bob, to illustrate the concepts.
 
Let’s go through what your node app will need to do at a high level:
 
1. Serve web pages
2. Route requests  
3. Display content
 
Next, I’ll explain each part.
 
### Serving web pages
 
Because we want to serve web pages, we will need an HTTP server.  So we use the `http` module that is built in node.  HTTP stands for Hypertext Transfer Protocol.  HTTP is a means for clients and servers to send messages to each other over the Internet.  I would call it a language. (Though I’m not sure that’s technically correct.)  The client is the thing requesting information, and the server is the thing sending it.  And the middle man that operates between the two is the HTTP (web) server (confirm this analogy).   It is the responsibility of a the web server to manage the requests made by the client.  If your application did something other than serve web pages it would require a different kind of server.  For example if you were making an application to send and receive email, you would need an email (SMTP) server.     
  
In order for the client to send requests to the server it must first connect to the server.  This process starts when you enter a URL into a web browser.  When you want to connect to your node app locally, your URL might look like this: `http://localhost:3000/home`.  A URL has the following structure:  

1. http protocol → http
2. hostname → localhost
3. port → 3000
4. path → /home

In order for the client to establish a connection with the server, the server must listen for and accept the connections. In the hello world web server from the Getting Started section we did this with the following code:
 
```js
http.createServer(…).listen(3000);
```
 
The `createServer` method creates an object that contains information about our web server. The listen method watches for connections to our server.  Now that we are listening for connections, we can start accepting requests. The `...` that I left out is where our request listener goes. This will contain all of the logic for what to do with the requests. Let’s take a look at Alice and Bob to see a web server in action:
 
__Alice:__  Hey Bob, can you GET me the web page at /home?  
__Bob:__  OK, I see for /home I’m supposed to give you this HTML file.  Here you go.  
__Alice:__ Bob, I want to see the post at /posts/123. Can you GET it for me?  
__Bob:__ Let me check. Sorry, Alice. I didn’t find it.  
__Alice:__ That’s no problem. I would like to /login.  I will POST to you my email and password.  
__Bob:__ Thanks.  I will take this information to /login. Success.   Your information has been found. I will redirect you to your dashboard now.  
 
When Alice asks Bob to give her the /home page she was sending a request to Bob.  And when Bob sent her an HTML file, he sent a response to Alice.  In this scenario, Alice is our client, a web browser, and Bob is our web server.
 
### Routing requests
 
When you enter `http://localhost:3000/home` in your browser, Alice will connect to Bob then give him the message which will look like this:
```
GET /home HTTP/1.1
Accept: text/html   
Accept-Language: en-US
Host: localhost:3000
```

In general a message will have the following format:  
```
1. Start line
2. One or more headers
3. An empty line
4. The body
```

#### 1. Start line
Format: [request method] [path] [HTTP version number]

For a request message the start line will be the request.  The request method tells Bob how to act on the request.  Here is the kinds of requests Alice can make to Bob:  
 
- GET – retrieve data  
- POST – send data  
- PUT – update data
- DELETE – remove data  
- HEAD - get the status line and headers  
- CONNECT - establish a network connection  
- OPTIONS - get the http methods supported by the web server  
- TRACE - get the contents of the request message  
 
Then Alice has to specify what her request is for, the path.  Last, the HTTP version is given to specify the rules for Alice and Bob to communicate with each other.   

#### 2. Headers
Format: [fieldname]: [value]

The headers are used to send instructions with the request.  For example, when Alice asks Bob for a web page, she puts a note in the headers that she wants to accept text/html.  This is the list of headers she can use:

- Accept-Charset
- Accept-Encoding
- Accept-Language
- Authorization
- Expect
- From
- Host
- If-Match
- If-Modified-Since
- If-None-Match
- If-Range
- If-Unmodified-Since
- Max-Forwards
- Proxy-Authorization
- Range
- Referer
- TE
- User-Agent

#### 3 Empty line
This indicates the end of the headers.

#### 4 Body
This contains the actual request data and is optional.  It may be data from a form or data that is uploaded to the server. When Alice asks to login, she sends her email and password in the body of the request.  Her message she sends to Bob will look something like this:

```
POST /login HTTP/1.1
Host: localhost:3000 
Content-Type: application/x-www-form-urlencoded

email=alice@example.com&password=s4389ohwegh#iklag!
```
 
 Bob’s job is to take this information and route it to the code in your app that is responsible for handling this request.  We will call that code the request handler. The request handler will execute some commands then will tell Bob what to give Alice.  Bob then responds to Alice with the data.  The gist of routing is mapping requests to request handlers.
 
In our hello world web server example from the Getting Started section, our request handler is designed to write “hello world” to the screen for any request.  Our request handler is the callback function passed into `createServer()`. We could have rewritten our code to look like this:
 
```js
var http = require('http');
var port = process.env.PORT || 3000;

var onRequest = function(request, response) {
  //set the header and status code
  response.writeHead(200, {'Content-Type': 'text/plain'});
  //text to send to response body
  response.write('hello world');
  //sends and ends the response
  response.end();
};
 
//create a new web server object, pass it a request handler and begin listening to connections on port 3000
http.createServer(onRequest).listen(port);
```
 
When Bob receives the request, he looks for the request handling code to see how he is supposed to compose his message for Alice.  In our hello world example, when Alice sends Bob the request for `/` he lets her know it is `OK` by stating the status in the header and he sends text back that says “hello world”.  This is what the server’s response message will look like:

```
1. Status line:   HTTP/1.1 200 OK
2. Headers:       Content-Type: text/plain
3. Empty line:
4. Body:          hello world
```
 
#### 1. Status line <http version> <status code> <status message>
Status codes will be a three digit number with the following format:

- 1xx: Informational
- 2xx: Success
- 3xx: Redirection
- 4xx: Client Error
- 5xx: Server Error

#### 2. Response headers <field name>: <field value>
The headers provide additional information about the response. These are a list of field names:

- Accept-Ranges
- Age
- ETag
- Location
- Proxy-Authenticate
- Retry-After
- Server
- Vary
- WWW-Authenticate


#### 4. Response body
This can be text, html or another content type.

In node, your request handlers will have a request and response object passed to it: `function(request, response)`. This is a summary of some of the properties and methods you can use on the request and response object:
 
- request.headers – object containing header names and values
- request.method – the request method as a string (ex. ‘GET’)
- request.statusCode – the HTTP response code (ex. 200)
- request.statusMessage – the HTTP response status message (ex. ‘OK’)
- request.url – the URL string (ex. ‘/home’)
- response.writeHead() - sends a response header to the request
- response.write() - sends a response body
- response.end() - sends and ends a response
 

### Displaying content
 
One of the requests Bob needed to fulfill was sending an HTML page to Alice.  In Getting Started, I left you with an exercise to send HTML to the client instead of text. Your code may have looked something like this:
 
```js
//set the header and status code
response.writeHead(200, {'Content-Type': 'text/html'});
//html to send to response body
response.write('<h1>hello</h1>');
```
 
But what if you had hundreds of lines of HTML you needed to send back to the client?  It would not be convenient to put it all inside of the `write` function.  It’s better if we keep our HTML in its own file then serve the contents of the file to the client. Node gives us a mechanism to do this with the `fs` (file system) module.  The `fs` module gives us a means to deal with files as if they were streams of data. If we wanted to refactor our code we could move the HTML to a file named index.html.  Then modify our node app like this:
 
```js
//core module for web server
var http = require('http');
//core module for file system
var fs = require('fs'); 
var port = process.env.PORT || 3000;
 
//request listener
var onRequest = function(request, response) {
  //make our file into a readable stream of data
  var rs = fs.createReadStream('index.html');
  //when a chunk of data is available
  rs.on('data', function(chunk) {
  //send data to the response body
    response.write(chunk);
  });
 
  //when there is no more data to be received
  rs.on('end', function(){
    //send and end the response
    response.end();
  });
};
 
//create the web server and begin listening
//to connections on port 3000
http.createServer(onRequest).listen(port); 
```
 
Alternatively you could achieve the same thing like this:
 
```js
//core module for web server
var http = require('http');
//core module for file system
var fs = require('fs'); 
var port = process.env.PORT || 3000;
 
//request listener
var onRequest = function(request, response) {
  //make our file into a readable stream of data
  var rs = fs.createReadStream('index.html');
  //send file contents to the response object
  rs.pipe(response);
};
 
//create the web server and begin listening
//to connections on port 3000
http.createServer(onRequest).listen(port); 
```
 
### Task
 
Create a web server that routes requests to a home page, about page, and a contact page.  If any other page is requested, the server should return an error page.
 
 
### Resources
[Node documentation](https://nodejs.org/api/http.html)
[Tutorials Point tutorial on http](https://www.tutorialspoint.com/http)
[Mozilla http overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
