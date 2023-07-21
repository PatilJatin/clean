// book.entity.js
class BookEntity {
    constructor(id, title, author, sellingPrice, purchasePrice) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.sellingPrice = sellingPrice;
      this.purchasePrice = purchasePrice;
    }
  }
  
  module.exports = BookEntity;