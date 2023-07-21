// root.route.js
const express = require('express');
const BookRouter = require('./book.route');

const router = express.Router();

router.use('/book', BookRouter);

module.exports = router;