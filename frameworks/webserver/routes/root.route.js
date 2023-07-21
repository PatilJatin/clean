// root.route.js
const express = require("express");
const AdminRouter = require("./adminDashboard/admin.route");
const router = express.Router();

router.use("/admin", AdminRouter);

module.exports = router;
