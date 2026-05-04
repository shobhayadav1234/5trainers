import { CourseContent } from "@/content/courses/web-development/types";
import javaFullStackAI from "./javafullstack";
import javaFullStackGenAI from "./javafullstackdeveloper";
import diplomaFullStackJava from "./diploma-in-full-stack-web-development-java";

const webDevelopmentCourses: Record<string, CourseContent> = {
  "java-fullstack-professional-ai": javaFullStackAI,
  "javafullstackdeveloper": javaFullStackGenAI,
  "diploma-in-full-stack-web-development-java": diplomaFullStackJava,
};

export default webDevelopmentCourses;