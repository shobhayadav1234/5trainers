"use client";

import React, { useState } from "react";
import Image from "next/image";

interface RelatedCourseProps {
  courses: {
    title: string;
    image: string;
    duration: string;
    rating: string;
    reviews: string;
    description: string;
    tag: string;
    price?: string;
  }[];
}

const RelatedCourses: React.FC<RelatedCourseProps> = ({ courses }) => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{
    title: string;
    price?: string;
  } | null>(null);

  if (!courses) return null;

  const openDemoModal = (course: any) => {
    setSelectedCourse(course);
    setDemoModalOpen(true);
  };

  const openEnrollModal = (course: any) => {
    setSelectedCourse(course);
    setEnrollModalOpen(true);
  };

  return (
    <section className="py-22 px-4 max-w-7xl mx-auto bg-white">
      <div className="mb-8">
        <span className="text-[#00A78E] font-bold text-xs tracking-widest uppercase">
          • CAREER BOOST
        </span>

        <h2 className="text-3xl font-bold text-[#1e293b] mt-2">
          Related Courses
        </h2>

        <p className="text-gray-500 mt-1">
          Handpicked curriculum designed to expand your skill set.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-700 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00A78E]"></span>
                {course.tag}
              </div>

              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>🕒 {course.duration}</span>

                <span className="text-yellow-500 font-bold">
                  ★ {course.rating}{" "}
                  <span className="text-gray-400 font-normal">
                    {course.reviews}
                  </span>
                </span>
              </div>

              <h3 className="font-bold text-lg leading-tight text-gray-800 mb-2 group-hover:text-[#00A78E] transition-colors">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500 line-clamp-2 mb-6">
                {course.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => openDemoModal(course)}
                  className="flex-1 py-2 px-3 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                  Book Demo
                </button>

                <button
                  onClick={() => openEnrollModal(course)}
                  className="flex-1 py-2 px-3 bg-[#0070f3] text-white rounded-lg text-sm font-semibold hover:bg-[#005ecb] transition-colors"
                >
                  Enroll Now &gt;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Book Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative">
            
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-4 right-4 text-3xl text-slate-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-3xl font-black text-center text-slate-900 mb-3">
              Book Demo Class
            </h2>

            <p className="text-slate-500 text-center mb-6">
              {selectedCourse?.title}
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]"
              />

              <button
                type="submit"
                className="w-full bg-[#20c9b0] hover:bg-[#18b39d] text-white font-bold py-4 rounded-xl transition-all"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Enroll Modal */}
      {enrollModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative">

            <button
              onClick={() => setEnrollModalOpen(false)}
              className="absolute top-4 right-4 text-3xl text-slate-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-3xl font-black text-center text-slate-900 mb-3">
              Enroll Now
            </h2>

            <p className="text-slate-500 text-center mb-4">
              {selectedCourse?.title}
            </p>

            {/* Price Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center mb-6">
              <p className="text-sm text-slate-500">Course Fee</p>
              <h3 className="text-3xl font-black text-[#0070f3]">
                {selectedCourse?.price || "₹45,000"}
              </h3>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
              />

              <input
                type="text"
                value={selectedCourse?.price || "₹45,000"}
                readOnly
                className="w-full bg-slate-100 border border-slate-300 rounded-xl px-4 py-3 font-bold text-[#0070f3]"
              />

              <button
                type="submit"
                className="w-full bg-[#0070f3] hover:bg-[#005ecb] text-white font-bold py-4 rounded-xl transition-all"
              >
                Submit Enrollment
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default RelatedCourses;