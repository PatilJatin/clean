const AdminRepo = require("../../../../frameworks/mongoDB/repositories/root.repositories");
const {
  ApiError,
  ApiResponse,
} = require("../../../../abstraction/root.abstraction");

async function findAdminById(adminId) {
  try {
    const admin = await AdminRepo.findAdminById(adminId);
    if (!admin) {
      throw new ApiError(404, "Admin not found");
    }
    return new ApiResponse(200, "Admin found", admin);
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    } else {
      throw new ApiError(500, "Error finding admin in the database");
    }
  }
}

module.exports = findAdminById;
