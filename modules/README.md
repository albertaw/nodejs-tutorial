Node organizes code into what is called modules.  Node has built in modules like `http`, and `fs` as you have already used. When you want to use a node module, you import it into your file like this:  

```javascript
var http = require(‘http’);
```
 You can also create your own modules.  This is necessary to separate the logic of your app and make your code more maintainable.  Each file is it’s own module.  To make the properties and methods available to be used in other files, you have export it.  You will do this using `module.exports` or `exports.name` where name is how you have defined your property or method. To use a module that you have written, import it into your file like this:

```javascript
var module = require('./path/to/module');
```
Where `module` is the name of the file the module is in, and `./path/to/module` is the relative path of the file.  Your modules will always begin with `./`.  




Here are some different patterns to create a module.

1. exporting a function, useful for creating route handlers 
exports.name = function (req, res) {
	res.send("hello");
}
2. exporting an object, useful when we are creating our models in mongo db
var publicMethod = function () {

}
 module.exports = publicMethod

3. exporting more than one obect 
module.exports = {
	functionA: publicMethodA,
	functionB: publicMethodB
}
4. aggregation module, organizes files so that we only need 
to require one file
exports.moduleA = require(‘./moduleA);
exports.moduleB = require(‘./moduleB);

<explain testing in mocha>

### Exercise
In the web servers exercise, you were given the task to create a few routes for you app.  Refactor your code by putting your routes into their own module.  
