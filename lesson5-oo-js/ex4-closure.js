//creational class, private members through closure.
//closure allows us to reference an instance of a local
//variable in an enclosing function.
var Book = function(newIsbn, newTitle, newAuthor) { 

  // declaring varibales with the var keyword makes them private attributes.
  var isbn, title, author;

  // Private method.
  function checkIsbn(isbn) {

  }

  // Privileged methods. Have the privilage to access private variables
  // but can also be used by outside classes. A closure.
  this.getIsbn = function() {
    return isbn;
  };
  this.setIsbn = function(newIsbn) {
    isbn = newIsbn;
  };

  //initialization code
  this.setIsbn(newIsbn);
   
};


// Public, non-privileged methods. Does not need access to private members
Book.prototype = {
   display: function() {
      return "isbn: " + this.getIsbn()
   }
};
var myBook = new Book(1234, "Hello", "Alberta");
console.log(myBook.display());  