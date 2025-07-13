import mongoose from "mongoose";

const enrolledSchema = new mongoose.Schema(
  {
    course_link: { type: String, required: true, unique: true },
    course_title: { type: String, required: true },
    course_desc: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    category: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    advance: { type: Boolean, default: false },
    advanceAmount: { type: Number, default: 0 },
    totalAmount: { type: Number, default: 0 },
    verifyPayment: { type: Boolean, default: false },
    courseCompletion: { type: Boolean, default: false }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Enrolled || mongoose.model("Enrolled", enrolledSchema);
