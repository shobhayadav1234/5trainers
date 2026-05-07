import { CourseContent } from "./types";

import socialmediaCourse from "./advanced-excel-gen-ai";
import influencerMarketing from "./influencer-marketing";

const socialmediaCourses: Record<string, CourseContent> = {
    "advanced-excel-gen-ai": socialmediaCourse,
    "influencer-marketing": influencerMarketing,
   

};

export default socialmediaCourses;