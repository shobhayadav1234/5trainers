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

/* ==============================
   BACKEND FETCH ONLY FOR
   HERO + WRITE SECTION
============================== */
async function getCourseFromBackend(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error("Backend fetch failed:", error);
    return null;
  }
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
     NORMALIZE SLUG
  ============================== */
  const normalizedSlug = slug.trim().toLowerCase();

  /* ==============================
     STATIC DATA FOR OTHER SECTIONS
  ============================== */
  const staticCourse = courses[normalizedSlug];

  if (!staticCourse) {
    console.error(`Course not found for slug: ${normalizedSlug}`);
    notFound();
  }

  /* ==============================
     BACKEND DATA FOR HERO + WRITE
  ============================== */
  const backendCourse = await getCourseFromBackend(normalizedSlug);

  return (
    <>
      {/* HERO SECTION (Backend Priority) */}
      <HeroSection
        title={backendCourse?.title || staticCourse.hero?.title || ""}
        description={
          backendCourse?.description || staticCourse.hero?.description || ""
        }
        image={backendCourse?.image || staticCourse.hero?.image || ""}
        category={backendCourse?.category || staticCourse.hero?.category || ""}
      />

      {/* WRITE SECTION (Backend Priority) */}
      <Write
        courseName={
          backendCourse?.courseName || staticCourse.write?.courseName || ""
        }
        aboutTitle={
          backendCourse?.aboutTitle || staticCourse.write?.aboutTitle || ""
        }
        aboutPara1={
          backendCourse?.aboutPara1 || staticCourse.write?.aboutPara1 || ""
        }
        aboutPara2={
          backendCourse?.aboutPara2 || staticCourse.write?.aboutPara2 || ""
        }
        aboutPara3={
          backendCourse?.aboutPara3 || staticCourse.write?.aboutPara3 || ""
        }
        learningObjectives={
          backendCourse?.learningObjectives ||
          staticCourse.write?.learningObjectives ||
          []
        }
        requirements={
          backendCourse?.requirements ||
          staticCourse.write?.requirements ||
          []
        }
        modules={
          backendCourse?.modules || staticCourse.write?.modules || []
        }
      />

      {/* BANNER SECTION (Static) */}
      <Move
        titleLine1={staticCourse.move?.titleLine1 || ""}
        titleLine2={staticCourse.move?.titleLine2 || ""} 
        description={staticCourse.move?.description || ""}
      />

      {/* TRAINING MODES (Static) */}
      <Courses
        heading={staticCourse.training?.heading || ""}
        subHeading={staticCourse.training?.subHeading || ""}
        trainingModes={staticCourse.training?.trainingModes || []}
        targetAudience={staticCourse.training?.targetAudience || []}
      />

      {/* COURSE OVERVIEW (Static) */}
      <Book
        title={staticCourse.book?.title || ""}
        paragraphs={staticCourse.book?.paragraphs || []}
        highlights={staticCourse.book?.highlights || []}
      />

      {/* FAQ (Static) */}
      <Drop
        title={staticCourse.faq?.title || ""}
        faqs={staticCourse.faq?.faqs || []}
      />

      {/* TESTIMONIALS (Static) */}
      <Testimonials
        title={
          staticCourse.testimonials?.title || "Student Testimonials"
        }
        testimonials={staticCourse.testimonials?.items || []}
      />
    </>
  );
}