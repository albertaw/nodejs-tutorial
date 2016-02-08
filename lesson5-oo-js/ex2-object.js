//creational class for creating new objects.  Attributes are public
var Book = function (isbn, title, author) {
	this.isbn = isbn;
	this.title = title;
	this.author = author;
	this.display = function () {
		return "isbn: " + this.isbn + " title: " +
            this.title + " author: " + this.author
	}
}

var myBook = new Book(1234, "Hello", "Alberta");
console.log(myBook.display());  