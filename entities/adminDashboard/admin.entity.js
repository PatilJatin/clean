// admin.entity.js
class AbstractAdmin {
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
    this.name = name; 
    this.email = email;
    this.phone = phone;
    this.brand = brand;
    this.jobTitle = jobTitle;
    this.superAdmin = superAdmin;
    this.admin = admin;
    this.permissions = permissions;
    this.active = active;
    this.outlet = outlet;
  }
}

module.exports = AbstractAdmin;
