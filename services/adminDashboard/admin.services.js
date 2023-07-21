const AdminRepo = require("../../frameworks/mongoDB/repositories/root.repositories");
const AdminMapper = require("../../frameworks/mongoDB/mappers/root.mapper");
const { ApiResponse, ApiError } = require("../../abstraction/root.abstraction");
const {
  addAdmin,
  deleteAdmin,
  editAdmin,
  findAdmin,
} = require("../../application/useCases/root.useCases");
class AdminService {
  static async createAdmin(requestPayload) {
    try {
      const adminEntity = await AdminMapper.requestToEntityMapper(
        requestPayload
      );
      await addAdmin(adminEntity);
      return new ApiResponse(201, "Admin created successfully", adminEntity);
    } catch (error) {
      if (error instanceof ApiError) {
        return new ApiResponse(error.status, error.message);
      } else {
        const apiError = new ApiError(500, "Error creating admin");
        return new ApiResponse(apiError.status, apiError.message);
      }
    }
  }

  static async editAdmin(adminId, requestPayload) {
    try {
      const adminEntity = await AdminMapper.requestToEntityMapper(
        requestPayload
      );
      await editAdmin(adminId, adminEntity);
      return new ApiResponse(200, "Admin updated successfully", adminEntity);
    } catch (error) {
      if (error instanceof ApiError) {
        return new ApiResponse(error.status, error.message);
      } else {
        const apiError = new ApiError(500, "Error updating admin");
        return new ApiResponse(apiError.status, apiError.message);
      }
    }
  }

  static async getAdminById(adminId) {
    try {
      const adminEntity = await findAdmin(adminId);
      if (!adminEntity) {
        return new ApiResponse(404, "Admin not found");
      }
      const adminResponse = AdminMapper.entityToResponseMapper(adminEntity);
      return new ApiResponse(200, "Admin found", adminResponse);
    } catch (error) {
      if (error instanceof ApiError) {
        return new ApiResponse(error.status, error.message);
      } else {
        const apiError = new ApiError(
          500,
          "Error finding admin in the database"
        );
        return new ApiResponse(apiError.status, apiError.message);
      }
    }
  }

  static async deleteAdmin(adminId) {
    try {
      await deleteAdmin(adminId);
      return new ApiResponse(200, "Admin deleted successfully", "success");
    } catch (error) {
      if (error instanceof ApiError) {
        return new ApiResponse(error.status, error.message);
      } else {
        const apiError = new ApiError(
          500,
          "Error deleting admin from the database"
        );
        return new ApiResponse(apiError.status, apiError.message);
      }
    }
  }
}

module.exports = AdminService;
