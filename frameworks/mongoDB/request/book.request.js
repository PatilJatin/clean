// book.request.js
const AbstractBook = require("../../../entities/abstract-book.entity");

class BookRequest extends AbstractBook {
  constructor(title, author, sellingPrice) {
    super(title, author, sellingPrice);
  }
}

module.exports = BookRequest;
