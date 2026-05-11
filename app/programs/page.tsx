"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, BookOpen, Clock, Star, ArrowRight } from "lucide-react";

// Courses Data
const ALL_COURSES = [
  {
    id: 1,
    slug: "digital-marketing-masterclass",
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    duration: "3 Months",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    category: "Development",
    duration: "6 Months",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    slug: "cyber-security-ethical-hacking",
    title: "Cyber Security & Ethical Hacking",
    category: "Cyber Security",
    duration: "4 Months",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    category: "Data Science",
    duration: "5 Months",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    slug: "seo-specialist-course",
    title: "SEO Specialist Course",
    category: "Marketing",
    duration: "2 Months",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=80",
  }, {
    id: 6,
    slug: "Front-end Development",
    title: "Front-end Development",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/front-end-development-service.jpg",
  },
   {
    id: 7,
    slug: "Back-end Development",
    title: "Back-end Development",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/backend-is.png",
  },
   {
    id: 8,
    slug: "Full-Stack Python",
    title: "Full-Stack Python development",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/65191ee47aed71696145124.Full_Stack_Python_Developer.jpg",
  },
   {
    id: 9,
    slug: "Full-Stack Java",
    title: "Full-Stack Java development",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/Pros-and-Cons-of-Full-Stack-JavaScript-Development.jpg",
  },
   {
    id: 10,
    slug: "Java + SpringBoot",
    title: "Java + SpringBoot Development",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/s2aay3zqz4ccfrgwkkol.jpg",
  },
   {
    id: 11,
    slug: "React JS Development",
    title: "React JS Development",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/react-js-development-service-500x500.jpg",
  },
   {
    id: 12,
    slug: "FullStack Development",
    title: "Full-Stack Development",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/full-stack-web-development.jpg",
  },
   {
    id: 13,
    slug: "Best Web Designing Course",
    title: "Best Web Designing Course",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/Web-Designing-Courses-for-Beginners.jpg",
  },
   {
    id: 14,
    slug: "Best Anugular Course",
    title: "Best Anugular Course",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/6115337_7ac9_3.jpg",
  },
   {
    id: 15,
    slug: "Best Django course",
    title: "Best Django course",
    category: "Development",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/image_750x_68284d3c82f5d.jpg",
  },
 {
    id: 16,
    slug: "Advance MicrosoftExcel",
    title: "Advance MicrosoftExcel",
    category: "marketing",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/ezgif.com-gif-maker-13.jpg",
  },
   {
    id: 17,
    slug: "DevOps with Cloud",
    title: "DevOps with Cloud",
    category: "Devops",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/Cloud-Devops.jpg",
  },
   {
    id: 18,
    slug: "Google Cloud Associate Engineer",
    title: "Google Cloud Associate Engineer",
    category: "Devops",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/images.jfif",
  },
   {
    id: 19,
    slug: "Azure DevOps",
    title: "Azure DevOps",
    category: "Devops",
    duration: "3 Months",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=80",
  },
   {
    id: 20,
    slug: "Best Chat Gpt Course",
    title: "Best Chat Gpt Course",
    category: "Data Science",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/2172552.png",
  },
   {
    id: 21,
    slug: "Machine Learning with R Programming",
    title: "Machine Learning with R Programming",
    category: "Data Science",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/cover.jpg",
  },
   {
    id: 22,
    slug: "Artifical Intelligence(AI)Course",
    title: "Artifical Intelligence(AI)Course",
    category: "Data Science",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/Machine-Learning-with-R.png",
  },
   {
    id: 23,
    slug: "Python for Data Science",
    title: "Python for Data Science",
    category: "Python",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/6115337_7ac9_3.jpg",
  },
   {
    id: 24,
    slug: "Django Framework",
    title: "Django Framework",
    category: "Python",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/django-views-1.jpg",
  },
   {
    id: 25,
    slug: "Core Python",
    title: "Core Python",
    category: "Python",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/65191ee47aed71696145124.Full_Stack_Python_Developer.jpg",
  },
  {
    id: 26,
    slug: "Data Analytics Master",
    title: "Data Analytics Master",
    category: "Data analytics",
    duration: "3 Months",
    rating: 4.8,
    image:
      " /data-analytics-masters.jpg",
  },
    {
    id: 27,
    slug: "Agentics AI course",
    title: "Agentics AI course",
    category: "Data analytics",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/images (3).jfif",
  },
    {
    id: 28,
    slug: "Business Analyst Course",
    title: "Business Analyst Course",
    category: "Data analytics",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/business-analyst (1).png",
  },
    {
    id: 29,
    slug: "Microsoft Power Apps Training",
    title: "Microsoft Power Apps Training",
    category: "Data analytics",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/images (4).jfif",
  },
    {
    id: 30,
    slug: "Power Automate Training",
    title: "Power Automate Training",
    category: "Data analytics",
    duration: "3 Months",
    rating: 4.8,
    image:
      "/1752870988869.jfif",
  },
];

const categories = [
  "All",
  "Marketing",
  "Development",
  "Cyber Security",
  "Data Science",
];

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4">
            Explore Our{" "}
            <span className="text-[#20c9b0]">Professional Programs</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Choose from over 30+ industry-focused courses designed to launch
            your tech career.
          </p>
        </div>

        {/* Search + Category */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]/50 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#20c9b0] text-white shadow-lg shadow-[#20c9b0]/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#20c9b0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#20c9b0]">
                    {course.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={
                            i < Math.floor(course.rating)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-400">
                      {course.rating}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#20c9b0] transition-colors leading-tight">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-6 text-slate-500 text-sm font-medium mb-6">
                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <BookOpen size={16} />
                      12 Modules
                    </span>
                  </div>

                  {/* Working Button */}
                  <Link href={`/programs/${course.slug}`}>
                    <button className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-xl font-bold group-hover:bg-[#20c9b0] transition-all">
                      View Course Details
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <Search size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900">
              No courses found
            </h3>
            <p className="text-slate-500">
              Try searching for something else or change the category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}