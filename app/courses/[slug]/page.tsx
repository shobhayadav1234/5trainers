import { notFound } from "next/navigation";
import { courses } from "@/content/courses";
import { Monitor, Globe, BookOpen } from "lucide-react";

import HeroSection from "@/components/hero section";
import Write from "@/components/write";
import Move from "@/components/move";
import Courses from "@/components/courses";
import Book from "@/components/Book";
import Drop from "@/components/drop";
import Test from "@/components/Tests";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;

  const course = courses[slug];

  if (!course) {
    return notFound();
  }

  // ✅ ICON MAP
  const iconMap: any = {
    monitor: <Monitor size={40} />,
    globe: <Globe size={40} />,
    book: <BookOpen size={40} />,
  };

  // ✅ IMPORTANT FIX
  const trainingModesWithIcons = course.training.trainingModes.map((mode: any) => ({
    ...mode,
    icon: iconMap[mode.icon],
  }));

  return (
    <main className="min-h-screen">

      <HeroSection
        title={course.hero.title}
        description={course.hero.description}
        image={course.hero.image}
        category={course.hero.category}
      />

      <Write {...course.write} />

      <Move {...course.move} />

      {/* ✅ FIX APPLIED HERE */}
      <Courses
        heading={course.training.heading}
        subHeading={course.training.subHeading}
        trainingModes={trainingModesWithIcons}
        targetAudience={course.training.targetAudience}
      />

      <Book {...course.book} />

      <Drop {...course.faq} />

      <Test
        title={course.testimonials.title}
        testimonials={course.testimonials.items}
      />

    </main>
  );
}