import { CourseContent } from "./types";
import transformingGraphicsGenAI from "./generative-ai ";

const aiCourses: Record<string, CourseContent> = {
  "generative-ai": transformingGraphicsGenAI,
};

export default aiCourses;