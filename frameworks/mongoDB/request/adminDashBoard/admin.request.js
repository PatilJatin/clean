// admin.request.js
const Admin = require("../../../../entities/root.entity");

class AdminRequest extends Admin {
  constructor(
    name,
    email,
    phone,
    brand,
    jobTitle,
    superAdmin = false,
    admin = false,
    permissions = [],
    active = true,
    outlet
  ) {
    super(
      name,
      email,
      phone,
      brand,
      jobTitle,
      superAdmin,
      admin,
      permissions,
      active,
      outlet
    );
  }
}

module.exports = AdminRequest;
