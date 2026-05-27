import mongoose, { Schema, model, models } from "mongoose";

const CourseSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },

    // HERO SECTION
    hero: {
      title: {
        type: String,
        default: "",
      },

      description: {
        type: String,
        default: "",
      },

      image: {
        type: String,
        default: "",
      },

      category: {
        type: String,
        default: "",
      },

      // NEW FIELDS
      delivery: {
        type: String,
        default: "Online & Offline",
      },

      language: {
        type: String,
        default: "Hindi, English",
      },

      download: {
        type: String,
        default: "Course Content",
      },

      mobile: {
        type: String,
        default: "+91 84474 04770",
      },
    },

    // WRITE SECTION
    write: {
      courseName: {
        type: String,
        default: "",
      },

      aboutTitle: {
        type: String,
        default: "",
      },

      aboutPara1: {
        type: String,
        default: "",
      },

      learningObjectives: {
        type: [String],
        default: [],
      },

      requirements: {
        type: [String],
        default: [],
      },

      modules: {
        type: [String],
        default: [],
      },
    },

    // TRAINING SECTION
    training: {
      type: Object,
      default: {},
    },

    // BOOK SECTION
    book: {
      type: Object,
      default: {},
    },

    // FAQ SECTION
    faq: {
      type: Object,
      default: {},
    },

    // TESTIMONIALS
    testimonials: {
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