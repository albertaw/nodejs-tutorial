//fully exposed object, uses ‘this’ keyword to define 
//properties inside constructor, defines methods with 
//prototype

var Book = function (isbn, title, author) {
	//public
	this.isbn = isbn;
	this.title = title;
	this.author = author;
}

Book.prototype.display = function () {
	return "isbn: " + this.isbn + " title: " +
            this.title + " author: " + this.author
}

/*
Book.prototype = {
	getIsbn: function () {
		return this.isbn;
	},
	setIsbn: function (isbn) {
		this.isbn = isbn;
	}
}
*/

var book = new Book(1234, "hello", "Alberta");
console.log(book.display());
