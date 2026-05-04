// app/courses/[courses]/page.tsx

import { notFound } from "next/navigation";
import { courses } from "@/content/courses";

// Components
import HeroSection from "@/components/courses-hero-section";
import Write from "@/components/courses-module";
import Move from "@/components/courses-banners";
import Courses from "@/components/courses-modes-training";
import Book from "@/components/course-software-key-highlight";
import Drop from "@/components/courses-faqs";
import Testimonials from "@/components/courses-testimonials";

interface PageProps {
  params: Promise<{
    courses: string;
  }>;
}

export default async function CoursePage({ params }: PageProps) {
  /* ==============================
     NEXT JS 15 PARAMS FIX
  ============================== */
  const resolvedParams = await params;
  const slug = resolvedParams?.courses;

  if (!slug) {
    notFound();
  }

  /* ==============================
     DYNAMIC SLUG NORMALIZATION
     Example:
     software-testing
     web-development
     ai
     data-science
  ============================== */
  const normalizedSlug = slug.trim().toLowerCase();

  /* ==============================
     FETCH COURSE DYNAMICALLY
     from content/courses/index.ts
  ============================== */
  const course = courses[normalizedSlug];

  if (!course) {
    console.error(`Course not found for slug: ${normalizedSlug}`);
    notFound();
  }

  return (
    <>
      {/* HERO SECTION */}
      <HeroSection
        title={course.hero?.title || ""}
        description={course.hero?.description || ""}
        image={course.hero?.image || ""}
        category={course.hero?.category || ""}
      />

      {/* WRITE SECTION */}
      <Write
        courseName={course.write?.courseName || ""}
        aboutTitle={course.write?.aboutTitle || ""}
        aboutPara1={course.write?.aboutPara1 || ""}
        aboutPara2={course.write?.aboutPara2 || ""}
        aboutPara3={course.write?.aboutPara3 || ""}
        learningObjectives={course.write?.learningObjectives || []}
        requirements={course.write?.requirements || []}
        modules={course.write?.modules || []}
      />

      {/* BANNER SECTION */}
      <Move
        titleLine1={course.move?.titleLine1 || ""}
        titleLine2={course.move?.titleLine2 || ""}
        description={course.move?.description || ""}
      />

      {/* TRAINING MODES */}
      <Courses
        heading={course.training?.heading || ""}
        subHeading={course.training?.subHeading || ""}
        trainingModes={course.training?.trainingModes || []}
        targetAudience={course.training?.targetAudience || []}
      />

      {/* COURSE OVERVIEW */}
      <Book
        title={course.book?.title || ""}
        paragraphs={course.book?.paragraphs || []}
        highlights={course.book?.highlights || []}
      />

      {/* FAQ */}
      <Drop
        title={course.faq?.title || ""}
        faqs={course.faq?.faqs || []}
      />

      {/* TESTIMONIALS */}
      <Testimonials
        title={course.testimonials?.title || "Student Testimonials"}
        testimonials={course.testimonials?.items || []}
      />
    </>
  );
}