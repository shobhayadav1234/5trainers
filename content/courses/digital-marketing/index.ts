// content/courses/digital-marketing/index.ts

import digitalMarketingTrainingCourse from "./digital-marketing-training";
import advancedDigitalMarketingCourse from "./advance-digital-marketing-course";
import diplomaInDigitalMarketingWithAICourse from "./diploma-in-digital-marketing-with-ai";




export const digitalMarketingCourses: Record<string, any> = {
  "digital-marketing-training": digitalMarketingTrainingCourse,
  "advance-digital-marketing-course": advancedDigitalMarketingCourse,
  "diploma-with-ai": diplomaInDigitalMarketingWithAICourse
};