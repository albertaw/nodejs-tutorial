# Getting Started

Download and install the node software to your computer
[https://nodejs.org]

Confirm the installation worked by typing the command `node -v`. 
If everything is fine, you will get see the version number for your node installation.  One of the things you can do with node is run JavaScript
code from within your terminal.  To do this type the `node` command
in your terminal to start a node repl. To exit the repl press `ctrl + c `
twice.  

__TASK: Print 'hello world' from within the node repl__  

To run code you have stored in a file from your terminal type the
command `node filename`. Where _filename_ is replaced with the name of your JavaScript file. You do not have to type the `js` extension of filename to run the script. And you must be in the root directory where
the file lives.  

__TASK: Create a new file and put a print statement inside of it. Then run the code from the terminal__


### Create a web server

Create a file named `server.js` and add the following code to it:

```js
//load the http module
var http = require('http');
var port = process.env.PORT || 3000;

//create a new web server object and pass it a request listener
http.createServer(function (request, response) {
	//set the header and status code
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//text to send to response body
	response.write('hello world');
	//sends and ends the response
	response.end();
	//begin accepting connections on port 3000
}).listen(port, function () {
	//output message to the console
	console.log('Server running on port 3000');
});

```

Run the code from your terminal with the command `node server`.  To see your code in action, open a browser window and navigate to `localhost:3000`.  You should see __hello world__ printed on the page. Additionally, you can use your terminal to see your request by typing the following command:

```bash
$ curl http://localhost:3000
```

### Deploy to Heroku

First, in the root of your directory create a package.json file.  You can do this by entering the command `npm init` from your terminal.  This file is used to manage your app’s dependencies. A dependency is just another piece of code or software.  It might be jQuery or anything else that doesn’t come with node or that you haven’t written.  The package.json file is also necessary for Heroku so that it recognizes your app as a node.js app.

Next, in the root of your directory create a file and name it `Procfile`. Inside the file add the following: 

```txt
web: node server.js
``` 
This file tells Heroku how to run your code.  In our example, we are telling Heroku we have a web app and the command to run our app is 
`node server.js`. This is the same command you use to run your app locally on your computer. 

Commit your changes to git.
```bash
$ git add .
$ git commit -m ‘first commit’
```

[Heroku instructions for deploying node apps](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)



Create an account with Heroku.  

Download the Heroku CLI. This allows you to use Heroku from 
your terminal.

Login to Heroku.
```bash
$ heroku login
```

Create an app on Heroku.  This is where your code will be sent. 
```bash
$ heroku create
```

Deploy the code to Heroku:
```bash
$ git push heroku master
```
You have seen how to create a simple node app and put it online.  Next we will go more in depth with how your code works and how web servers work in general.


### Exercise

Modify your app to send an html document.  You will need to change the content type and the value passed to `response.write`. Commit your changes to github and deploy to Heroku.




