function Animal(name) {
	this.name = name;
}

Animal.prototype.walk = function (destination) {
	console.log(this.name, 'is walking to', destination);
}

var animal = new Animal('elephant');
animal.walk('melbourne');

//To call a parent constructor:
//Parent.call(this, args)
function Bird(name) {
	//call the Animal constructor
	Animal.call(this, name);
}

//setup the prototype chain between Bird and Animal
//so that Bird instances contain all of the parent
//prototype functions. Bird.prototype.__proto__ = Animal.prototype;
var inherits = require('util').inherits;
inherits(Bird, Animal);

Bird.prototype.fly = function (destination) {
	console.log(this.name, 'is flying to',destination);
}

//create child instance
var bird = new Bird('sparrow');
bird.walk('sydney');
bird.fly('melbourne');
console.log(bird.constructor.name);
