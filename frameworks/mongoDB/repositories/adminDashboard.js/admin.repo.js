const AdminModel = require("../../models/root.model");

class AdminRepo {
  static createAdmin(admin) {
    const adminModel = new AdminModel(admin);
    return adminModel.save();
  }
}

module.exports = AdminRepo;
