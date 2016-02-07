//private members through closure
var Book = function(newIsbn, newTitle, newAuthor) { 

  // declaring varibales with the var keyword makes them private attributes.
  var isbn, title, author;

  // Private method.
  function checkIsbn(isbn) {

  }

  // Privileged methods. Have the privilage to access private variables
  // but can also be used by outside classes
  this.getIsbn = function() {
    return isbn;
  };
  this.setIsbn = function(newIsbn) {
  // if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
  isbn = newIsbn;
  };

  // Constructor code
  this.setIsbn(newIsbn);
  this.setTitle(newTitle);
  this.setAuthor(newAuthor);
   
};


// Public, non-privileged methods. Does not need access to private members
Book.prototype = {
   display: function() {
      return "isbn: " + this.getIsbn()
   }
};
var myBook = new Book(1234, "Hello", "Alberta");
console.log(myBook.display());  