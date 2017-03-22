## Modules

Node organizes code into what is called modules.  Node has built in modules like `http`, and `fs` as you have already used. When you want to use a node module, you import it into your file like this:  

```javascript
var http = require('http');
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
var user = require('./routes/user');
```

A module can also be thought of as a class or an object that belongs to your entire software system. A class is the blueprint from which objects are created. An object is a bundle of code with properties and behavior that models a real world object. 

You can create such an object in javascript like this:

```javascript
function Book(isbn, title, author) {
	this.isbn = isbn;
	this.title = title;
	this.author = author;
}

Book.prototype.setIsbn = function (newIsbn) {
	this.isbn = newIsbn;
};

module.exports = Book;
```

You create a new object like this:

```javascript
var myBook = new Book(1234, 'Oliver Twist', 'Charles Dickens');
```
### Module patterns

1. Exporting a function
useful for creating request handlers 

```js
exports.name = function (req, res) {
	res.send("hello");
}
```
2. Exporting an object
useful when we are creating database models or classes

```js
var publicMethod = function () {

}
 module.exports = publicMethod
```

3. Exporting more than one function
A variation on exporting multiple functions

```js
module.exports = {
	functionA: publicMethodA,
	functionB: publicMethodB
}
```

4. Aggregation module
organizes files so that we only need to require one file

```js
exports.moduleA = require('./moduleA');
exports.moduleB = require('./moduleB');
```

## Testing

### Assertion testing with node

Node has a built in testing framework you can use in your applications.  To get started, import the assert module:

```js
var assert = require('assert');  
```
Tests if a value is truthy  
`assert.ok(value, message);`

Test equality with the `==` operator  
`assert.equal(actual, expected, message);`

Tests equality with the `!=` operator  
`assert.notEqual(actual, expected, message);`

Tests equality with the `===` operator  
`assert.strictEqual(actual, expected, message);`

Tests equality of object properties using the `==` operator  
`assert.deepEqual(actual, expected, message);`

Tests equality of object properties using the `!=` operator  
`assert.notDeepEqual(actual, expected, message);`

Tests equality of object properties using `===` operator  
`assert.deepStrictEqual(actual, expected, message);`

Tests equality of object properties using `!==` operator  
`assert.notDeepStrictEqual(actual, expected, message);`

#### Expect style assertions

It takes the form `expect(actual_value).matcherFn(expected_value)` where matcherFn is a matcher function that specifies what we are testing.  Here is a list of matcher functions:

- expect(x).toBe(obj)  
- expect(x).toEqual(val)
- expect(x).toMatch(regex)
- expect(x).toBeDefined() 
- expect(x).toBeUndefined() 
- expect(x).toBeNull()
- expect(x).toBeTruthy() 
- expect(x).toBeFalsy()
- expect(x).toContain(y)
- expect(x).toBeLessThan(y)
- expect(x).toBeGreaterThan(y)
- expect(x).toBeCloseTo(min, max)
- expect(x).toThrow(y)
- expect(x).toThrowError()

Any of the matcher functions can be inverted by adding `not` before it like this:  
- expect(x).not.toBe(obj)
- expect(x).not.toEqual(val)
- expect(x).not.toBeNull()


#### Should style assertions

- should.deepEqual(actual, expected, [message])
- should.throws(block, [error], [message])
- should.doesNotThrow(block, [message])
- should.equal(actual, expected, [message])
- should.exist(obj, [message])
- should.not.exist(obj, [message])
- should.notDeepEqual(actual, expected, [message])
- should.notEqual(actual, expected, [message])
- should.strictEqual(actual, expected, [message])
- should.notStrictEqual(actual, expected, [message])
- should.ok(value, [message])
- x.should.be.ok()
- x.should.not.be.ok()
- x.should.be.true()
- x.should.not.be.true()
- x.should.be.false()
- x.should.not.be.false()

### Mocha

Mocha is a javascript test framework that runs in node.  To get started, run the following commands from your terminal:

```bash
install our testing library
$ npm install -g mocha
$ npm install --save-dev mocha
install chai so we can use should, expect, or assert style testing
$ npm install --save-dev chai
create a test directory
$mkdir test
```

Create a test file in the test directory.

```js
//book.spec.js

var Book = require('./book'),
	chai = require('chai'),
	assert = chai.assert,
	expect = chai.expect,
	should = chai.should();

describe('Book module', function() {
	var myBook = new Book(1234, 'Oliver Twist', 'Charles Dickens');

	it('should initialize the isbn', function() {
		assert.equal(myBook.isbn, 1234);
	});

	it('should initialize the title', function() {
		expect(myBook.title).to.equal('Oliver Twist');
	});

	it('should initialize the author', function() {
		myBook.author.should.equal('Charles Dickdens');
	});
});
```

Run the test.

```bash
$mocha
Or
$mocha testDirectory
```

Where testDirectory is the name of directory where the test files live.  Or:

```bash
$mocha path/to/test.spec.js
```
Where path/to/test.spec.js is the absolute path of the test file.

The `describe` block groups related tests together.  It contains one or more it blocks.  The `it` block is the test or spec.  An it block contains one or more assertions. An assertion is either true or false.  Other methods you can use include:

- beforeEach(callback) - called before each it block
- afterEach(callback) - called after each it block
- beforeAll(callback) - called before all it blocks
- afterAll(callback) - called after all it blocks


## Exercise

- Refactor your code from the previous lesson by putting your request handlers into their own module.  
- Create functions to start and shutdown your server and export them.
- Create a module for a BookStore that stores a list of books and can add books to the list, get books from the list, and delete books from the list. It should use the Book module to create books.
- Create a json file with example books and load it into your list of books in the book store.
- Write unit tests for your BookStore module that cover all functionality.

## Resources

- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)  
- [Pro JavaScript Design Patterns](http://www.apress.com/us/book/9781590599082)
- [Mocha](https://mochajs.org)

