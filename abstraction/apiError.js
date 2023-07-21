class ErrorClass {
  constructor(status, message, name) {
    this.status = status;
    this.message = message;
    this.name = name;
  }
}

class ApiError extends ErrorClass {
  constructor(status, message, name = "ApiError") {
    super(status, message, name);
    this.success = false;
  }
}

module.exports = ApiError;
