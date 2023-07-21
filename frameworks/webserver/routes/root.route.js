// root.route.js
const express = require("express");
const BookRouter = require("./book.route");
const AdminRouter = require("./adminDashboard/admin.route");
const router = express.Router();

router.use("/book", BookRouter);
router.use("/admin", AdminRouter);

module.exports = router;
