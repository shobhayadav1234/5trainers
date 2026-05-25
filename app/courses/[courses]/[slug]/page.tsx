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
import pythonCourses from "@/content/courses/pythons/index";
import cyberSecurityCourses from "@/content/courses/cyber-security/index";
import aiCourses from "@/content/courses/ai/index";
import dataScienceCourses from "@/content/courses/data-science/index";
import datatrainingCourses from "@/content/courses/data-analystics/index";
import ccnaCourses from "@/content/courses/networking/index";
import cloudComputingCourses from "@/content/courses/cloud-computering/index"
import socialmediaCourses from "@/content/courses/social-media/index";
import devopstrainingCourses from "@/content/courses/devops/index";
import metaCourses from "@/content/courses/meta-ads/index";
import googleCourses from "@/content/courses/google-ads/index";
import UpcomingBatches from "@/components/upcoming-batches";
import RelatedCourses from "@/components/relatedcourses";
import PlacementReport from "@/components/placement-report";
import TopPlacement from "@/components/top-placement";



interface PageProps {
  params: Promise<{
    courses: string;
    slug: string;
  }>;
}

export default async function SubCoursePage({ params }: PageProps) {
  const { courses, slug } = await params;


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

    case "pythons":
      course = pythonCourses[courseSlug];
      break;

    case "cyber-security":
      course = cyberSecurityCourses[courseSlug];
      break;

    case "ai":
      course = aiCourses[courseSlug];
      break;

    case "data-science":
      course = dataScienceCourses[courseSlug];
      break;


    case "networking":
      course = ccnaCourses[courseSlug];
      break;

    case "cloud-computering":
      course = cloudComputingCourses[courseSlug];
      break;
    case "social-media":
      course = socialmediaCourses[courseSlug];
      break;

    case "devops":
      course = devopstrainingCourses[courseSlug];
      break;

    case "meta-ads":
      course = metaCourses[courseSlug];
      break;

    case "google-ads":
      course = googleCourses[courseSlug];
      break;
    case "data-analytics":
      course = datatrainingCourses[courseSlug];
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


      {/* DYNAMIC UPCOMING BATCHES SECTION */}
      {course.batches && (
        <UpcomingBatches
          heading={course.batches.heading}
          subHeading={course.batches.subHeading}
          items={course.batches.items}
        />
      )}

      {/* RELATED COURSES ADDED HERE */}
      {course.relatedCourses && (
        <RelatedCourses courses={course.relatedCourses} />
      )}


      {/* PLACEMENT REPORT SECTION */}
      {course.placementSection && (
        <PlacementReport
          badge={course.placementSection.badge}
          title={course.placementSection.title}
          description={course.placementSection.description}
          extraDescription={course.placementSection.extraDescription}
          rating={course.placementSection.rating}
          actionButtons={course.placementSection.actionButtons}
          marketStats={course.placementSection.marketStats}
          form={course.placementSection.form}
        />
      )}

      {course.topPlacements && (
        <TopPlacement
          badge={course.topPlacements.badge}
          title={course.topPlacements.title}
          description={course.topPlacements.description}
          items={course.topPlacements.items}
        />
      )}

      {/* TRAINING MODES (COURSES) */}
      <Courses
        heading={course.training.heading}
        subHeading={course.training.subHeading}
        trainingModes={course.training.trainingModes || []}
        targetAudience={course.training.targetAudience || []}
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