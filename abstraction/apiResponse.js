class ApiResponse {
  constructor(statusCode, message, data = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode >= 200 && statusCode < 300;
    this.data = data;
  }

  toJson() {
    const json = {
      status: this.statusCode,
      message: this.message,
      success: this.success,
    };

    if (this.data !== null) {
      json.data = this.data;
    }

    return json;
  }
}

module.exports = ApiResponse;
