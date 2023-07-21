const AdminRepo = require("../../../../frameworks/mongoDB/repositories/root.repositories");
const {
  ApiError,
  ApiResponse,
} = require("../../../../abstraction/root.abstraction");

async function addAdmin(adminEntity) {
  try {
    await AdminRepo.createAdmin(adminEntity);
    return new ApiResponse(200, "Admin added successfully", "success");
  } catch (error) {
    throw new ApiError(500, "Error adding admin to the database");
  }
}

module.exports = addAdmin;
