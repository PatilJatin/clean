const AdminModel = require("../../models/root.model");
const {
  ApiError,
  ApiResponse,
} = require("../../../../abstraction/root.abstraction");

class AdminRepo {
  static async createAdmin(admin) {
    try {
      const adminModel = new AdminModel(admin);
      const newAdmin = await adminModel.save();
      return new ApiResponse(201, "Admin added successfully", newAdmin);
    } catch (error) {
      throw new ApiError(500, "Error adding admin to the database");
    }
  }

  static async deleteAdmin(adminId) {
    try {
      const deletedAdmin = await AdminModel.findByIdAndDelete(adminId);
      if (!deletedAdmin) {
        throw new ApiError(404, "Admin not found");
      }
      return new ApiResponse(200, "Admin deleted successfully", deletedAdmin);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      } else {
        throw new ApiError(500, "Error deleting admin from the database");
      }
    }
  }

  static async updateAdmin(adminId, adminEntity) {
    try {
      const updatedAdmin = await AdminModel.findByIdAndUpdate(
        adminId,
        adminEntity,
        {
          new: true,
          runValidators: true,
        }
      );
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

  static async findAdminById(adminId) {
    try {
      const admin = await AdminModel.findById(adminId);
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
}

module.exports = AdminRepo;
