function Publication (name, isbn) {
	this.name = name;
	this.isbn = isbn;
}

Publication.prototype.display = function () {
	console.log(this.name, this.isbn);
}

function Book (name, author, isbn) {
	this.name = name;
	this.author = author;
	this.isbn = isbn;
}

Book.prototype = new Publication();

var b = new Book('Story', 'Al', 3333);
b.display();

//The prototype of a class is the properties and methods 
//of the class