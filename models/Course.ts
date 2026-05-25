import mongoose, { Schema, model, models } from "mongoose";

const CourseSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },

    hero: {
      type: Object,
      default: {},
    },

    write: {
      type: Object,
      default: {},
    },

    training: {
      type: Object,
      default: {},
    },

    book: {
      type: Object,
      default: {},
    },

    faq: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Course =
  models.Course || model("Course", CourseSchema);

export default Course;