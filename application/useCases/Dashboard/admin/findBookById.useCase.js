const BookRepo = require("../../../../frameworks/mongoDB/repositories/book.repo");
const BookMapper = require("../../../../frameworks/mongoDB/mappers/book.mapper");
const ApiError = require("../../../../abstraction/apiError");
const ApiResponse = require("../../../../abstraction/apiResponse");

async function findBookById(id) {
  try {
    const book = await BookRepo.findBookById(id);
    if (book) {
      const bookResponse = BookMapper.entityToResponseMapper(book);
      return new ApiResponse(200, "Book found", bookResponse);
    } else {
      return new ApiResponse(404, "Book not found");
    }
  } catch (error) {
    // Log the error for debugging purposes
    // console.error("Error finding book by ID:", error);

    // Create an ApiError instance for the 500 status code
    throw new ApiError(500, "Error finding book in the database");
  }
}

module.exports.findBookById = findBookById;
