import { CourseContent } from "./types";
import pythonFullStackAI from "./python-fullstack-with-ai";
import pythonSqlDjango from "./python-sql-django";
import pythonDataScienceMLPowerBI from "./python-full-stack-data-scientist ";


const pythonCourses: Record<string, CourseContent> = {
  "python-fullstack-with-ai": pythonFullStackAI,
  "python-sql-django": pythonSqlDjango,
  "python-full-stack-data-scientist": pythonDataScienceMLPowerBI,
  
};

export default pythonCourses;