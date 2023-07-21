const AddBookUseCase = require("../application/useCases/Dashboard/admin/addBook.useCase");
const DeleteBookUseCase = require("../application/useCases/Dashboard/admin/deleteBook.useCase");
const FindAllBooksUseCase = require("../application/useCases/Dashboard/admin/findAllBooks.useCase");
const FindBookByIdUseCase = require("../application/useCases/Dashboard/admin/findBookById.useCase");
const ApiError = require("../abstraction/apiError");
const ApiResponse = require("../abstraction/apiResponse");

class BookService {
  static async addBook(requestPayload) {
    try {
      const result = await AddBookUseCase.addBook(requestPayload);
      return new ApiResponse(200, "Book added successfully", result);
    } catch (error) {
      if (error instanceof ApiError) {
        return new ApiResponse(error.status, error.message);
      } else {
        const apiError = new ApiError(500, "Error adding book to the database");
        return new ApiResponse(apiError.status, apiError.message);
      }
    }
  }

  static async deleteBook(id) {
    try {
      await DeleteBookUseCase.deleteBook(id);
      return new ApiResponse(200, "Book deleted successfully", "success");
    } catch (error) {
      if (error instanceof ApiError) {
        return new ApiResponse(error.status, error.message);
      } else {
        const apiError = new ApiError(
          500,
          "Error deleting book from the database"
        );
        return new ApiResponse(apiError.status, apiError.message);
      }
    }
  }

  static async findAllBooks() {
    try {
      const books = await FindAllBooksUseCase.findAllBooks();
      const data = books.map((book) => book.toJson()); // Assuming FindAllBooksUseCase returns book objects with toJson() method
      return new ApiResponse(200, "Books found", data);
    } catch (error) {
      if (error instanceof ApiError) {
        return new ApiResponse(error.status, error.message);
      } else {
        const apiError = new ApiError(
          500,
          "Error finding books in the database"
        );
        return new ApiResponse(apiError.status, apiError.message);
      }
    }
  }

  static async findBookById(id) {
    try {
      const book = await FindBookByIdUseCase.findBookById(id);
      if (book) {
        return new ApiResponse(200, "Book found", book.toJson());
      } else {
        return new ApiResponse(404, "Book not found");
      }
    } catch (error) {
      if (error instanceof ApiError) {
        return new ApiResponse(error.status, error.message);
      } else {
        const apiError = new ApiError(
          500,
          "Error finding book in the database"
        );
        return new ApiResponse(apiError.status, apiError.message);
      }
    }
  }
}

module.exports = BookService;
