const AbstractAdmin = require("../../../../entities/root.entity");

class AdminResponse extends AbstractAdmin {
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
