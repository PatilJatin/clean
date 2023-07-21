const AdminRepo = require("../../../../frameworks/mongoDB/repositories/root.repositories");
const {
  ApiError,
  ApiResponse,
} = require("../../../../abstraction/root.abstraction");

async function deleteAdmin(adminId) {
  try {
    const deletedAdmin = await AdminRepo.deleteAdmin(adminId);
    if (!deletedAdmin) {
      throw new ApiError(404, "Admin not found");
    }
    return new ApiResponse(200, "Admin deleted successfully", "success");
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    } else {
      throw new ApiError(500, "Error deleting admin from the database");
    }
  }
}

module.exports = deleteAdmin;
