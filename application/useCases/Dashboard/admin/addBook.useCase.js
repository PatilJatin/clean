const BookRepo = require("../../../../frameworks/mongoDB/repositories/book.repo");
const BookMapper = require("../../../../frameworks/mongoDB/mappers/book.mapper");
const ApiError = require("../../../../abstraction/apiError");
const ApiResponse = require("../../../../abstraction/apiResponse");

async function addBook(requestPayload) {
  try {
    const bookEntity = await BookMapper.requestToEntityMapper(requestPayload);
    await BookRepo.addBook(bookEntity);
    return new ApiResponse(200, "Book added successfully", "success");
  } catch (error) {
    // If the error is an instance of ApiError, rethrow it as is
    if (error instanceof ApiError) {
      throw error;
    } else {
      // Otherwise, create a new ApiError with 500 status code and the error message
      throw new ApiError(500, "Error adding book to the database");
    }
  }
}

module.exports.addBook = addBook;
