const BookRepo = require("../../../../frameworks/mongoDB/repositories/book.repo");
const BookMapper = require("../../../../frameworks/mongoDB/mappers/book.mapper");
const ApiError = require("../../../../abstraction/apiError");
const ApiResponse = require("../../../../abstraction/apiResponse");


async function findAllBooks() {
  try {
    const books = await BookRepo.findAllBooks();
    const data = books.map((book) => BookMapper.entityToResponseMapper(book));
    return new ApiResponse(200, "Books found", data);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    } else {
      throw new ApiError(500, "Error finding books in the database");
    }
  }
}

module.exports.findAllBooks = findAllBooks;
