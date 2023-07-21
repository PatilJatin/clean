// book.route.js
const express = require("express");
const BookService = require("../../../services/book.service");

const router = express.Router();

router.get("/findAll", async (req, res) => {
  const books = await BookService.findAllBooks();
  res.json(books);
});

router.post("/add", async (req, res) => {
  const requestPayload = req.body;
  await BookService.addBook(requestPayload);
  res.json({ message: "success" });
});

router.get("/findById/:id", async (req, res
  ) => {
  const { id } = req.params;
  const book = await BookService.findBookById(id);
  res.json(book);
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await BookService.deleteBook(id);
  res.json({ message: "success" });
});

module.exports = router;
