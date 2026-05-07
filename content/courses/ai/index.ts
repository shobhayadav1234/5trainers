import { CourseContent } from "./types";
import transformingGraphicsGenAI from "./generative-ai ";
import scalingMarketingAI from "./scaling-marketing-with-ai-agents";
import devopsAutomationAI from "./devops-automation-powered-by-generative-ai ";
import agenticAIToolsAnalytics from "./agentic-ai-tools-for-data-analytics";

const aiCourses: Record<string, CourseContent> = {
  "generative-ai": transformingGraphicsGenAI,
  "scaling-marketing-with-ai-agents": scalingMarketingAI,
  "devops-automation-powered-by-generative-ai": devopsAutomationAI,
  "agentic-ai-tools-for-data-analytics": agenticAIToolsAnalytics,

};

export default aiCourses;