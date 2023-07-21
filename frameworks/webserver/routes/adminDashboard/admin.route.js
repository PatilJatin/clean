// admin.route.js
const express = require("express");
const AdminService = require("../../../../services/root.services");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const admin = await AdminService.getAdminById(id);
  res.json(admin);
});

router.post("/create", async (req, res) => {
  const requestPayload = req.body;
  const response = await AdminService.createAdmin(requestPayload);
  res.json(response);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const requestPayload = req.body;
  const response = await AdminService.editAdmin(id, requestPayload);
  res.json(response);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await AdminService.deleteAdmin(id);
  res.json(response);
});

module.exports = router;
