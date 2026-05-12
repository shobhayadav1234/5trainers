import mongoose, { Schema, models } from "mongoose";

const CourseSchema = new Schema({
  slug: { type: String, required: true, unique: true },

  title: String,
  description: String,
  image: String,
  category: String,

  aboutTitle: String,
  aboutPara1: String,
  aboutPara2: String,
  aboutPara3: String,

  learningObjectives: [String],
  modules: [String],
  requirements: [String],

  courseName: String,
});

export default models.Course || mongoose.model("Course", CourseSchema);