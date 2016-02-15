//a singleton implemented as a immediately executing function to 
//instantiate the object.  Uses this keyword
var Book = (function() { 

  // Private attributes.
   var isbn, title, author;


	return {
	  // Public methods.
	  display: function() {
	   	return "isbn: " + this.isbn + " title: " +
            this.title + " author: " + this.author
     },
	   getIsbn: function() {
	   	return isbn;
	   },
	   setIsbn: function(newIsbn) {
		   this.isbn = newIsbn;
	   },

	   getTitle: function() {
	   	return title;
	   },
	   setTitle: function(newTitle) {
			this.title = newTitle || 'No title specified';
	   },

	   getAuthor: function() {
	   	return author;
	   },
	   setAuthor: function(newAuthor) {
	   	this.author = newAuthor || 'No author specified';
	   }

	}
})();

Book.setIsbn(1234)
Book.setTitle("hello");
Book.setAuthor("Alberta");
console.log(Book.display());