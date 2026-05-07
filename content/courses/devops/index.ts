import { CourseContent } from "./types";

import devopsCourse from "./devops-training";
import devopsProfessional from "./devops-for-professional";
const devopstrainingCourses: Record<string, CourseContent> = {
    "devops-training": devopsCourse,
    "devops-for-professional": devopsProfessional,


};

export default devopstrainingCourses;