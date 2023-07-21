const AdminRequest = require("../../request/root.request");
const AdminResponse = require("../../response/root.response");

class AdminMapper {
  static requestToEntityMapper(requestPayload) {
    const {
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
    } = requestPayload;
    return new AdminRequest(
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

  static entityToResponseMapper(entity) {
    const {
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
      id,
    } = entity;
    return new AdminResponse(
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
    );
  }
}

module.exports = AdminMapper;
