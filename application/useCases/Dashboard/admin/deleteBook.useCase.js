const BookRepo = require("../../../../frameworks/mongoDB/repositories/book.repo");
const ApiError = require("../../../../abstraction/apiError");
const ApiResponse = require("../../../../abstraction/apiResponse");


async function deleteBook(id) {
  try {
    await BookRepo.deleteBook(id);
    return new ApiResponse(200, "Book deleted successfully", "success");
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    } else {
      throw new ApiError(500, "Error deleting book from the database");
    }
  }
}

module.exports.deleteBook = deleteBook;
