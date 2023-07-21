// abstract-book.entity.js
class AbstractBook {
  constructor(title, author, sellingPrice) {
    this.title = title;
    this.author = author;
    this.sellingPrice = sellingPrice;
  }
}

module.exports = AbstractBook;
