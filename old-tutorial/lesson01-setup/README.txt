TODO: test installation by running a javascript file from the terminal


Download and install software to your computer
https://nodejs.org

confirm the installation worked by starting the node repl from your terminal
$node
Press ctr + c to exit the repl

Launch a node.js script from your terminal. This is how you will start your apps
$node filename
*you do not have to type the extension of filename to run the script 

Node Package manager (npm) - allows you to download modules made by other developers and manage the packages in your projects.  

Your package.json file will hold the information
about the node modules you ave installed.  To create a file type npm init from the terminal.

$npm install packageName
When you download a package, it will create a folder called node_modules.  The -g flag will install the module globally. 
--save will save a reference to the package in your package.json file.  Core modules do not need to be downloaded.

core npm modules:
http - responsible for http server
http.createServer() - returns a new webserver object
http.listen() - accepts connections on the specified port
http.serverRequest() - passes incoming requests to request handlers
	request.method()
	request.url()
http.serverResonse() - automatically created by the http server and is used as an output of request handlers.
	reponse.writeHead() - sends a response header to the request
	response.write() - sends a response body
	response.end() - sends and ends a response
util
querystring
url
fs

