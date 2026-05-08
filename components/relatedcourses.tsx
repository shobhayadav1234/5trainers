import React from 'react';
import Image from 'next/image';

interface RelatedCourseProps {
  courses: {
    title: string;
    image: string;
    duration: string;
    rating: string;
    reviews: string;
    description: string;
    tag: string;
  }[];
}

const RelatedCourses: React.FC<RelatedCourseProps> = ({ courses }) => {
  if (!courses) return null;

  return (
    <section className="py-22 px-4 max-w-7xl mx-auto bg-white">
      <div className="mb-8">
        <span className="text-[#00A78E] font-bold text-xs tracking-widest uppercase">• CAREER BOOST</span>
        <h2 className="text-3xl font-bold text-[#1e293b] mt-2">Related Courses</h2>
        <p className="text-gray-500 mt-1">Handpicked curriculum designed to expand your skill set.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div 
            key={index} 
            className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-700 flex items-center gap-1">
                 <span className="w-2 h-2 rounded-full bg-[#00A78E]"></span> {course.tag}
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
                <span className="flex items-center gap-1">🕒 {course.duration}</span>
                <span className="flex items-center gap-1 text-yellow-500 font-bold">
                  ★ {course.rating} <span className="text-gray-400 font-normal">{course.reviews}</span>
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
                <button className="flex-1 py-2 px-3 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                  Book Demo
                </button>
                <button className="flex-1 py-2 px-3 bg-[#0070f3] text-white rounded-lg text-sm font-semibold hover:bg-[#005ecb] transition-colors">
                  Enroll Now &gt;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedCourses;