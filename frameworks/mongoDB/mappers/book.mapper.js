
const BookRequest = require('../request/book.request');
const BookResponse = require('../response/book.response');

class BookMapper {
  static requestToEntityMapper(requestPayload) {
    const { title, author, sellingPrice } = requestPayload;
    return new BookRequest(title, author, sellingPrice);
  }

  static entityToResponseMapper(entity) {
    const { title, author, sellingPrice, id } = entity;
    return new BookResponse(title, author, sellingPrice, id);
  }
}

module.exports = BookMapper;
