//Structural class, good for namespacing or configuration objects

var Book = {
	isbn: "1234",
	title: "hello",
	author: "Alberta",
	display: function() {
		return "isbn: " + this.isbn + " title: " +
            this.title + " author: " + this.author
	}
}


console.log(Book.display());