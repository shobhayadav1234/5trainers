// content/courses/software-testing/index.ts

import appiumtrainingCourse from "./appium-training";
import manualseleniumCourse from "./manual-selenium";
import penetrationtestingCourse from "./Penetration-testing";
import seleniumjavaCourse from "./selenium-java";
import fullstackqawithaiCourse from "./fullstack-qa-with-ai";
import playwrightjavascriptCourse from "./playwright-javascript";
import seleniumpythonCourse from "./selenium-python";
import apitestingCourse from "./api-testing";

export const softwareTestingCourses: Record<string, any> = {
  "appium-training": appiumtrainingCourse,
  "manual-selenium": manualseleniumCourse,
  "penetration-testing": penetrationtestingCourse,
  "selenium-java": seleniumjavaCourse,
  "fullstack-qa-with-ai": fullstackqawithaiCourse,
  "playwright-javascript": playwrightjavascriptCourse,
  "selenium-python": seleniumpythonCourse,
  "api-testing": apitestingCourse,
};