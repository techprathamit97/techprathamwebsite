import mongoose from "mongoose";

const curriculumSchema = new mongoose.Schema({
  que: { type: String, required: true },
  ans: { type: String, required: true },
  topics: [String],
});

const faqSchema = new mongoose.Schema({
  que: { type: String, required: true },
  ans: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  objective: { type: String, required: true },
});

const courseSchema = new mongoose.Schema(
  {
    link: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortDesc: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    category: { type: String, required: true },
    placement_report: { type: String, required: true },
    curriculum: { type: String, required: true },
    interview: { type: String, required: true },
    videoLink: { type: String, required: true },
    curriculum_data: [curriculumSchema],
    skills_data: [String],
    assesment_link: { type: String, required: true },
    faqs_data: [faqSchema],
    project_data: [projectSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
