const addAdmin = require("./Dashboard/admin/createAdmin.useCase");
const deleteAdmin = require("./Dashboard/admin/deleteAdmin.useCase");
const editAdmin = require("./Dashboard/admin/editAdmin.useCase");
const findAdmin = require("./Dashboard/admin/findAdminById.useCase");

module.exports = { addAdmin, deleteAdmin, editAdmin, findAdmin };
