import { CourseContent } from "@/content/courses/web-development/types";
import javaFullStackAI from "./javafullstack";
import javaFullStackGenAI from "./javafullstackdeveloper";
import diplomaFullStackJava from "./diploma-in-full-stack-web-development-java";
import nodeJsFullStackMern from "./node-js-full-stack";
import meanFullStack from "./mean-full-stack";




const webDevelopmentCourses: Record<string, CourseContent> = {
  "java-fullstack-professional-ai": javaFullStackAI,
  "javafullstackdeveloper": javaFullStackGenAI,
  "diploma-in-full-stack-web-development-java": diplomaFullStackJava,
  "node-js-full-stack": nodeJsFullStackMern,
  "mean-full-stack": meanFullStack,
};

export default webDevelopmentCourses;