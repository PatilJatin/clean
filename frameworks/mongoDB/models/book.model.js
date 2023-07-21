const mongoose = require("mongoose");

const BookModel = mongoose.model("Book", {
  title: String,
  author: String,
  sellingPrice: Number,
  purchasePrice: Number,
});

module.exports = BookModel;
