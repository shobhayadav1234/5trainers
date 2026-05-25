import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { connectDB } from "../lib/mongodb";
import Course from "../models/Course";
import aiCourse from "@/content/courses/ai";
import cloudcomputeringCourse from "@/content/courses/cloud-computering";
import cyberCourse from "@/content/courses/cyber";
import dataanalyticsCourse from "@/content/courses/data-analytics";
import datascienceCourse from "@/content/courses/data-science";
import devopsCourse from "@/content/courses/devops";
import digitalmarketingCourse from "@/content/courses/digital-marketing";
import googleadsCourse from "@/content/courses/google-ads";
import metaadsCourse from "@/content/courses/meta-ads";
import networkingCourse from "@/content/courses/networking";
import pythonCourse from "@/content/courses/pythons";
import socialmediaCourse from "@/content/courses/social-media";
import softwaretestingCourse from "@/content/courses/software-testing";
import webdevelopmentCourse from "@/content/courses/web-development";



async function seed() {
    await connectDB();

    await Course.deleteMany({});

    await Course.insertMany([
        aiCourse,
        cloudcomputeringCourse,
        cyberCourse,
        dataanalyticsCourse,
        datascienceCourse,
        devopsCourse,
        digitalmarketingCourse,
        googleadsCourse,
        metaadsCourse,
        networkingCourse,
        pythonCourse,
        socialmediaCourse,
        softwaretestingCourse,
        webdevelopmentCourse
    ]);


    console.log("Course Added Successfully");

    process.exit();
}

seed();