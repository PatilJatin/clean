// book.response.js
const AbstractBook = require("../../../entities/abstract-book.entity");

class BookResponse extends AbstractBook {
  constructor(title, author, sellingPrice, id) {
    super(title, author, sellingPrice);
    this.id = id;
  }
}

module.exports = BookResponse;
