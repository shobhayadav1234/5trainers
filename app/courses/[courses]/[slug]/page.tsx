// app/courses/[courses]/[slug]/page.tsx

import { notFound } from "next/navigation";

// Components
import Write from "@/components/courses-module";
import Move from "@/components/courses-banners";
import Courses from "@/components/courses-modes-training";
import Book from "@/components/course-software-key-highlight";
import Drop from "@/components/courses-faqs";
import Testimonials from "@/components/courses-testimonials";

// Data imports
import { softwareTestingCourses } from "@/content/courses/software-testing/index";
import { digitalMarketingCourses } from "@/content/courses/digital-marketing/index";
import webDevelopmentCourses from "@/content/courses/web-development/index";

interface PageProps {
  params: Promise<{
    courses: string;
    slug: string;
  }>;
}

export default async function SubCoursePage({ params }: PageProps) {
  const { courses, slug } = await params;

  console.log("Courses:", courses);
  console.log("Slug:", slug);

  if (!courses || !slug) {
    notFound();
  }

  let course: any = null;

  const category = courses.toLowerCase();
  const courseSlug = slug.toLowerCase();

  // Match main category
  switch (category) {
    case "software-testing":
      course = softwareTestingCourses[courseSlug];
      break;

    case "digital-marketing":
      course = digitalMarketingCourses[courseSlug];
      break;


    case "web-development":
      course = webDevelopmentCourses[courseSlug];
      break;

      
    default:
      notFound();
  }

  if (!course) {
    console.error(`❌ Sub-course not found: ${category}/${courseSlug}`);
    notFound();
  }

  return (
    <>
      {/* COURSE DETAILS */}
      <Write
        courseName={course.write.courseName}
        aboutTitle={course.write.aboutTitle}
        aboutPara1={course.write.aboutPara1}
        aboutPara2={course.write.aboutPara2}
        aboutPara3={course.write.aboutPara3}
        learningObjectives={course.write.learningObjectives || []}
        requirements={course.write.requirements || []}
        modules={course.write.modules || []}
      />

      {/* BANNER */}
      <Move
        titleLine1={course.move?.titleLine1 || ""}
        titleLine2={course.move?.titleLine2 || ""}
        description={course.move?.description || ""}
      />

      {/* TRAINING MODES */}
      <Courses
        heading={course.training.heading}
        subHeading={course.training.subHeading}
        trainingModes={course.training.trainingModes || []}
        targetAudience={course.training.targetAudience || []}
      />

      {/* COURSE OVERVIEW */}
      <Book
        title={course.book.title}
        paragraphs={course.book.paragraphs || []}
        highlights={course.book.highlights || []}
      />

      {/* FAQ */}
      <Drop title={course.faq.title} faqs={course.faq.faqs || []} />

      {/* TESTIMONIALS */}
      <Testimonials
        title={course.testimonials?.title || "Student Reviews"}
        testimonials={course.testimonials?.items || []}
      />
    </>
  );
}