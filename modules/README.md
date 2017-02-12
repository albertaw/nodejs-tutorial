## Modules

Node organizes code into what is called modules.  Node has built in modules like `http`, and `fs` as you have already used. When you want to use a node module, you import it into your file like this:  

```javascript
var http = require(‘http’);
```
 You can also create your own modules.  This is necessary to separate the logic of your app and make your code more maintainable.  Each file is it’s own module.  A module is also a way to organize your software. To make the properties and methods available to be used in other files, you have export it.  The first way you can export a module is by using `module.exports = something`.  Where the `something` must be a function or object. 

```javascript
module.exports = function() {
	//do something
}
```

The next way is to add properties to the exports object by saying  `exports.prop = something` where `prop` is the name of the property and `something` and is the value.

```javascript
exports.getUser = function() {
	//do something
}
```

To import the module you require it like this:

```javascript
var module = require('./path/to/module');
```
Where `module` is the filename of the module, and `./path/to/module` is the relative path to the file.  Your modules will always begin with `./`.  If we had a module named user.js in a folder named routes, this is how we would import it into our server file:

```javascript
var user = require(‘./routes/user);
```

__Task:  Create a function to start and shutdown your server.  And export it to be used in an index file

### Object oriented programming 

A module can also be thought of as a class or an object that belongs to your entire software system. A class is the blueprint from which objects are created.  An object is a bundle of code with properties and behavior that models a real world object. 

You can create such an object in javascript like this:

```javascript
var User = function(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName ;
this.display = function() {
	return this.firstName + “ “ + this.lastName;
}
}
```

The above example creates an object named User that has a firstName and lastName (properties) and a display method (behavior). This is our blueprint for creating new objects. You create a new object like this:

```javascript
var myUser = new User(“Alberta”, “Williams”);
```
__Task: Create a module for a post object that has a title, author, and body property.
 
## Module patterns
1. exporting a function, useful for creating route handlers 
exports.name = function (req, res) {
	res.send("hello");
}
2. exporting an object, useful when we are creating our database models
var publicMethod = function () {

}
 module.exports = publicMethod

3. exporting more than one object 
module.exports = {
	functionA: publicMethodA,
	functionB: publicMethodB
}
4. aggregation module, organizes files so that we only need 
to require one file
exports.moduleA = require(‘./moduleA);
exports.moduleB = require(‘./moduleB);


### Exercise
In the web servers exercise, you were given the task to create a few routes for you app.  Refactor your code by putting your routes into their own module.  


### Resources
[Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)  
[Pro JavaScript Design Patterns](http://www.apress.com/us/book/9781590599082)

