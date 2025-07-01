import mongoose from 'mongoose';

const curriculumSchema = new mongoose.Schema({
  que: { type: String, required: true },
  ans: { type: String, required: true }
});

const faqSchema = new mongoose.Schema({
  que: { type: String, required: true },
  ans: { type: String, required: true }
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDesc: { type: String },
  description: { type: String },
  rating: { type: String },
  duration: { type: String },
  level: { type: String },
  category: { type: String },
  link: { type: String },
  videoLink: { type: String },
  curriculum_data: [curriculumSchema],
  skills_data: [String],
  faqs_data: [faqSchema]
}, {
  timestamps: true
});

export default mongoose.models.Course || mongoose.model('Course', courseSchema);
