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

async function getCourseFromBackend(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/${slug}`,
      {
        cache: "no-store",
      }
    );

    const json = await res.json();

    return json.data;


  } catch (error) {
    console.error("Backend fetch failed:", error);
    return null;
  }

}

export default async function CoursePage({ params }: PageProps) {



  const resolvedParams = await params;
  const slug = resolvedParams?.courses;

  if (!slug) {
    notFound();
  }


  const normalizedSlug = slug.trim().toLowerCase();

  const backendCourse = await getCourseFromBackend(normalizedSlug);
  console.log("Backend Course:", backendCourse);

  return (
    <>
      <HeroSection
        title={backendCourse?.hero?.title || ""}
        description={backendCourse?.hero?.description || ""}
        image={backendCourse?.hero?.image || ""}
        category={backendCourse?.hero?.category || ""}
        delivery={backendCourse?.hero?.delivery || ""}
        language={backendCourse?.hero?.language || ""}
        download={backendCourse?.hero?.download || ""}
        mobile={backendCourse?.hero?.mobile || ""}
      />

      <Write
        courseName={backendCourse?.write?.courseName || ""}
        aboutTitle={backendCourse?.write?.aboutTitle || ""}
        aboutPara1={backendCourse?.write?.aboutPara1 || ""}
        learningObjectives={backendCourse?.write?.learningObjectives || []}
        requirements={backendCourse?.write?.requirements || []}
        modules={backendCourse?.write?.modules || []}
      />


      <Courses
        heading={backendCourse?.training?.heading || ""}
        subHeading={backendCourse?.training?.subHeading || ""}
        trainingModes={backendCourse?.training?.trainingModes || []}
        targetAudience={backendCourse?.training?.targetAudience || []}
      />

      <Book
        title={backendCourse?.book?.title || ""}
        paragraphs={backendCourse?.book?.paragraphs || []}
        highlights={backendCourse?.book?.highlights || []}
      />

      <Drop
        title={backendCourse?.faq?.title || ""}
        faqs={backendCourse?.faq?.faqs || []}
      />

      <Testimonials
        title={backendCourse?.testimonials?.title || "Student Testimonials"}
        testimonials={backendCourse?.testimonials?.items || []}
      />
    </>
  );
}