import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    profile: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    userType: {
      type: String,
      default: "user",
    },
    position: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);