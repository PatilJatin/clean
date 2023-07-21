// admin.response.js
const Admin = require("../../../../entities/root.entity");

class AdminResponse extends Admin {
  constructor(
    name,
    email,
    phone,
    brand,
    jobTitle,
    superAdmin,
    admin,
    permissions,
    active,
    outlet,
    id
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
    this.id = id;
  }
}

module.exports = AdminResponse;
