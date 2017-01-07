# Getting Started

Download and install software to your computer
https://nodejs.org

Confirm the installation worked by typing the command `node -v`. 
If everything is fine, you will get see the version number for your node installation.  One of the things you can do with node is run JavaScript
code from within your terminal.  To do this type the `node` command
in your temrinal to start a node repl. To exit the repl press ctr + c 
twice.  

#### TASK: Print 'hello world' from within the node repl  

To run code you have stored in a file from your terminal type the
command `node filename`. Where _filename_ is replaced with the name of your JavaScript file. You do not have to type the `js` extension of filename to run the script. And you must be in the root directory where
the file lives.

#### TASK: Create a new file and put a print statement inside of it.
Then run the code from the terminal


### Create a webserver

```js
//load the http module
var http = require('http');

//create a new webserver object and pass it a request listener
http.createServer(function (request, response) {
	//set the header and status code
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//text to send to response body
	response.write('hello world');
	//sends and ends the response
	response.end();
	//begin accepting connections on port 3000
}).listen(3000, function () {
	//output message to the console
	console.log('Server running on port 3000');
});

```

To see your code in action, open a browser window and navigate to
`localhost:3000`.  You should see _hello world_ printed on the page. Additionally, you can use your terminal to see
info about your request by typing the following command:
```bash
$ curl -i http://localhost:3000
```

### Deploy to Heroku

https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction


In the root of your directory create a file and name it `Procfile`.
Inside the file add the following: 
```txt
web: node index.js
``` 
This file tells Heroku how to run your code.  In our example, we are telling Heroku we have a web app and the command to run our app is 
`node index.js`. This is the same command you use to run your app
locally on your computer. 

Commit your changes to git.

Create an account with Heroku.  

Download the Heroku CLI. This allows you to use Heroku from 
your terminal.

Login to Heroku. From the terminal type the command:
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
You have seen how to create a simple node app and put it
online.  Next we will go more in depth with how web severs
work.


#### TASK: Modify your app to send an html document. 
You will need to change the content type and the value
passed to `response.write`. Commit your changes to github
and deploy to Heroku.



