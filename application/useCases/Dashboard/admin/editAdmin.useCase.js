const AdminRepo = require("../../../../frameworks/mongoDB/repositories/root.repositories");
const {
  ApiError,
  ApiResponse,
} = require("../../../../abstraction/root.abstraction");

async function updateAdmin(adminId, adminEntity) {
  try {
    const updatedAdmin = await AdminRepo.updateAdmin(adminId, adminEntity);
    if (!updatedAdmin) {
      throw new ApiError(404, "Admin not found");
    }
    return new ApiResponse(200, "Admin updated successfully", updatedAdmin);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    } else {
      throw new ApiError(500, "Error updating admin in the database");
    }
  }
}

module.exports = updateAdmin;
