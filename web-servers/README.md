# Web servers
 
Now that you have deployed an app, I will go into depth about how it works.  You should have accomplished creating a web server that displays a web page when someone visits your web address.  In order for you to add pages to your web app and have it do different things based on the URL that’s visited, we need to understand how the Internet and web servers work. Throughout this lesson I will reference a conversation between 2 people, Alice and Bob, to illustrate the concepts.
 
Let’s go through what your node app will need to do at a high level:
 
1. Serve web pages
2. Route requests  
3. Display content
 
Next, I’ll explain each part.
 
### Serving web pages
 
Because we want to serve web pages, we will need an HTTP server.  So we use the `http` module that is built in node.  HTTP stands for Hyper Text Transfer Protocol.  HTTP is a means for clients and servers to communicate with each other over the Internet.  I would call it a language. (Though I’m not sure that’s technically correct.)  The client is the thing requesting information, and the server is the thing sending it.  And the middle man that operates between the two is the HTTP (web) server.   It is the responsibility of a the web server to manage the requests made by the client.  If your application did something other than serve web pages it would require a different kind of server.  For example if you were making an application to send and receive email, you would need an email (SMTP) server.     
 
 
In order for the client to send requests to the server it must first connect to the server.  The server must listen for these connections and accept the connection to receive the request. In the hello world web server from the Getting Started section we did this with the following code:
 
```js
http.createServer(…).listen(3000);
```
 
The `createServer` method creates an object that contains information about our web server. The listen method watches for connections to our server.  So now that we are listening for connections, we can start accepting requests. The `...` that I left out is where our request listener goes. This will contain all of the logic for what to do with requests. Let’s take a look at Alice and Bob to see a web server in action:
 
Alice:  Hey Bob, can you GET me the web page at /home?
Bob:  OK, I see for /home I’m supposed to give you this HTML file.  Here you go.
Alice: Bob, I want to see the post at /posts/123. Can you GET it for me?
Bob: Let me check. Sorry, Alice. I didn’t find it.
Alice: That’s no problem. I would like to /login.  I will POST to you my email and password.
Bob: Thanks.  I will take this information to /login. Success. Your information has been found. I will redirect you to your dashboard now.
 
When Alice asks Bob to give her the /home page she was sending a request to Bob.  And when Bob sent her an HTML file, he sent a response to Alice.  In this scenario, Alice would be a web browser and Bob would your web server.

 
### Routing requests
 
This interaction brings us to #2 routing requests.  Alice is limited in the kinds of requests she can make.  She can make a GET request, a POST request, a PUT request, or a DELETE request to name a few.  
 
GET – Retrieves data
POST – Sends data
PUT – Sends data (to update information)
DELETE – remove data  
 
Then Alice has to specify where her request is being sent.  /home, /posts/123, and /login are the destination for her request to take. This take the form of a URL.
 
 Bob’s job is to take this information and route it to the code in your app that is responsible for handling this request.  We will call that code the request handler. The request handler will execute some commands then will tell Bob what to give Alice.  Bob then responds to Alice with the data.  The gist of routing is mapping requests to request handlers.
 
In our hello world web server example from the Getting Started section, our request handler is designed to write “hello world” to the screen for any request.  Our request handler is the callback function passed into `createServer()`. We could have rewritten our code to look like this:
 
```js
var http = require('http');
 
var onRequest = function(request, response) {
        	//set the header and status code
        	response.writeHead(200, {'Content-Type': 'text/plain'});
        	//text to send to response body
        	response.write('hello world');
        	//sends and ends the response
        	response.end();
};
 
//create a new web server object, pass it a request listener and begin listening to connections on port 3000
http.createServer(onRequest).listen(3000);
```
 
As you can see in our request handler, we are doing more than just sending the text “hello world.”  And Bob is sending more than just a web page to Alice.  The web page just comprises the body of the response.  Bob responds with the status of Alice’s request by telling her `OK`.  There is a code associated with the status message as well.  `OK` would have a status code of 200.  Bob can give Alice the extra information about the response via the header of the response.  For example he can tell her what type of content is being sent. If he is sending a web page the Content-Type will be ‘text/html’. This is what a response

This is a summary of some of the node properties and methods you can use on the request and response object:
 
request.headers – object containing header names and values
request.method – the request method as a string (ex. ‘GET’)
request.statusCode – the HTTP response code (ex. 200)
request.statusMessage – the HTTP response status message (ex. ‘OK’)
request.url – the URL string (ex. ‘/home’)
response.writeHead() - sends a response header to the request
response.write() - sends a response body
response.end() - sends and ends a response
 
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
http.createServer(onRequest).listen(3000); 
```
 
Alternatively you could achieve the same thing like this:
 
```js
//core module for web server
var http = require('http');
//core module for file system
var fs = require('fs'); 
 
//request listener
var onRequest = function(request, response) {
        	//make our file into a readable stream of data
        	var rs = fs.createReadStream('index.html');
        	//send file contents to the response object
        	rs.pipe(response);
};
 
//create the web server and begin listening
//to connections on port 3000
http.createServer(onRequest).listen(3000); 
```
 
### Task
 
Create a web server that routes requests to a home page, about page, and a contact page.  If any other page is requested, the server should return an error page.
 
 
### Resources
[Tutorials Point](https://www.tutorialspoint.com/http)


