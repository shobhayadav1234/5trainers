"use client";

import React, { useState, useMemo } from "react";
import { Search, BookOpen, Clock, Star, ArrowRight } from "lucide-react";

// Mock Data - Aap ise apni API se replace kar sakte hain
const ALL_COURSES = [
  { id: 1, title: "Digital Marketing Masterclass", category: "Marketing", duration: "3 Months", rating: 4.8, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Full Stack Web Development", category: "Development", duration: "6 Months", rating: 4.9, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Cyber Security & Ethical Hacking", category: "Cyber Security", duration: "4 Months", rating: 4.7, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "AI & Machine Learning", category: "Data Science", duration: "5 Months", rating: 4.9, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "SEO Specialist Course", category: "Marketing", duration: "2 Months", rating: 4.6, image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=80" },
  // ... Baaki 30 courses yahan add karein
];

const categories = ["All", "Marketing", "Development", "Cyber Security", "Data Science"];

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Real-time Filtering Logic
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || course.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
   <div className="min-h-screen bg-slate-50 py-12 md:py-20 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    
  {/* Header Section */}
<div className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16 px-4 sm:px-6">
  <h1 className="font-black text-slate-900 leading-[1.15] tracking-tight mx-auto max-w-5xl text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
    <span className="block">Explore Our</span>
    <span className="block text-[#20c9b0] mt-2 sm:mt-3">
      Professional Programs
    </span>
  </h1>

  <p className="mt-4 sm:mt-5 md:mt-6 text-slate-500 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
    Choose from over 30+ industry-focused courses designed to launch
    your tech career.
  </p>
</div>

    {/* Search & Filter Bar */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center justify-between mb-10 md:mb-12">
      
      {/* Search Input */}
      <div className="relative w-full md:w-1/3">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search for courses..."
          className="w-full pl-12 pr-4 py-3 md:py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]/50 transition-all shadow-sm text-sm md:text-base"
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
            className={`px-4 sm:px-5 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap text-sm md:text-base font-bold transition-all ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Course Image */}
            <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#20c9b0]">
                {course.category}
              </div>
            </div>

            {/* Course Details */}
            <div className="p-5 sm:p-6 md:p-8">
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

              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 group-hover:text-[#20c9b0] transition-colors leading-tight">
                {course.title}
              </h3>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 text-slate-500 text-xs sm:text-sm font-medium mb-6">
                <span className="flex items-center gap-2">
                  <Clock size={16} /> {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen size={16} /> 12 Modules
                </span>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 md:py-4 bg-slate-900 text-white rounded-xl font-bold text-sm md:text-base group-hover:bg-[#20c9b0] transition-all">
                View Course Details <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      /* Empty State */
      <div className="text-center py-16 md:py-20 bg-white rounded-3xl border border-dashed border-slate-200">
        <Search size={40} className="mx-auto text-slate-300 mb-4" />
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
          No courses found
        </h3>
        <p className="text-slate-500 text-sm md:text-base px-4">
          Try searching for something else or change the category.
        </p>
      </div>
    )}
  </div>
</div>
  );
}