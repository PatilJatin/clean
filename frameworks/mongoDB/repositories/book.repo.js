// useCases/book.repo.js
const BookModel = require("../../mongoDB/models/book.model");

class BookRepo {
  static findAllBooks() {
    return BookModel.find().exec();
  }

  static findBookById(id) {
    return BookModel.findById(id).exec();
  }

  static deleteBook(id) {
    return BookModel.findByIdAndDelete(id).exec();
  }

  static addBook(book) {
    const bookModel = new BookModel(book);
    return bookModel.save();
  }
}

module.exports = BookRepo;
