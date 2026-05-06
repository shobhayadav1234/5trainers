import ai from "./ai";
import cyber from "./cyber";
import softwaretesting from "./software-testing";
import webdevelopment from "./web-development";
import metaadsCourse from "./meta-ads";
import pythonCourse from "./pythons";
import socialmediaCourse from "./social-media";
import googleadsCourse from "./google-ads";
import digitalmarketingCourse from "./digital-marketing";
import datascienceCourse from "./data-science";
import dataanalyticsCourse from "./data-analytics";
import devopsCourse from "./devops";
import cloudcomputingCourse from "./cloud-computering";
import networkingCourse from "./networking";

export const courses: Record<string, any> = {
  ai,
  "cyber-security": cyber,
  "software-testing": softwaretesting,
  "web-development": webdevelopment,
  "meta-ads": metaadsCourse,
  "pythons": pythonCourse,
  "social-media": socialmediaCourse,
  "google-ads": googleadsCourse,
  "digital-marketing": digitalmarketingCourse,
  "data-science": datascienceCourse,
  "data-analytics": dataanalyticsCourse,
  devops: devopsCourse,
  "cloud-computering": cloudcomputingCourse,
  networking: networkingCourse,
};