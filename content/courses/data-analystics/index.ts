import { CourseContent } from "./types";

import dataAnalyticsPro from "./data-analytics-pro";
import dataAnalyticsProAI from "./data-analytics-pro-ai";
import businessAnalytics from "./business-analytics";
const datatrainingCourses: Record<string, CourseContent> = {
    "data-analytics-pro": dataAnalyticsPro,
    "data-analytics-pro-ai": dataAnalyticsProAI,
    "business-analytics": businessAnalytics
};

export default datatrainingCourses;