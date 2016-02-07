//uses facade pattern to expose api
var Book = function() { 

  // Private static attributes.
   var isbn, title, author;

  // Private static method.
  function checkIsbn(isbn) {
   
  }

  function display() {
  	return "isbn: " + isbn + " title: " +
            title + " author: " + author
  }

	return {
	   // Privileged methods.
	   display: display,
	   getIsbn: function() {
	   	return isbn;
	   },
	   setIsbn: function(newIsbn) {
		   //if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
		   isbn = newIsbn;
	   },

	   getTitle: function() {
	   	return title;
	   },
	   setTitle: function(newTitle) {
			title = newTitle || 'No title specified';
	   },

	   getAuthor: function() {
	   	return author;
	   },
	   setAuthor: function(newAuthor) {
	   	author = newAuthor || 'No author specified';
	   }

	}
};

var book = new Book();
book.setIsbn(1234)
book.setTitle("hello");
book.setAuthor("Alberta");
console.log(book.display());