//Creational, immdiately executing function that instantiates the object,
//returns the constructor.
var Book = (function() {

   // Private static attributes.
   var numBooks = 0;
   
   // Private static method.
   function checkIsbn(isbn) {
      return true;
   }

   // Return the constructor.
   return function(newIsbn, newTitle, newAuthor) { // implements Publication

    // Private attributes.
   var isbn, author, title;

   // Privileged methods.
   this.getIsbn = function() {
     return isbn;
   };
   this.setIsbn = function(newIsbn) {
     if(!checkIsbn(newIsbn)) throw new Error('Book: Invalid ISBN.');
     isbn = newIsbn;
   };
   this.getTitle = function() {

     return title;
   };
   this.setTitle = function(newTitle) {
     title = newTitle || 'No title specified';
   };

   this.getAuthor = function() {
     return author;
   };
   this.setAuthor = function(newAuthor) {
     author = newAuthor || 'No author specified';
   };
   this.getNumBooks = function () {
    return numBooks;
   }

   //Keep track of how many Books have been instantiated
   numBooks++; 
   //Initialization code.
   this.setIsbn(newIsbn);
   this.setTitle(newTitle);
   this.setAuthor(newAuthor);
  }
})();

// Public, non-privileged methods.
Book.prototype = {
   display: function() {
     return "isbn: " + this.getIsbn() + " title: " +
        this.getTitle() + " author: " + this.getAuthor();
   },
   getBookCount: function(inputString) {
    return this.getNumBooks();
  }
};

var myBook = new Book(1234, "Oliver Twist", "Charles Dickens");
console.log(myBook.display());
var Book = new Book(5678, "Christmas Carol", "Charles Dickens");
console.log(Book.getBookCount());
