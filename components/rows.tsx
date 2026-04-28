"use client";

import React from "react";
import { Star, Phone, ArrowRight } from "lucide-react";

const courses = [
  {
    img: "/basic.jpg",
    rating: "175 Reviews",
    title: "Ethical Hacking Course",
    desc: "Ethical Hacking Training teaches legal hacking methods to identify vulnerabilities and secure systems.",
  },
  {
    img: "/corse.jpg",
    rating: "149 Reviews",
    title: "Penetration Testing",
    desc: "Covers network security, web app security, ethical hacking techniques and methodology.",
  },
  {
    img: "/py.jpg",
    rating: "133 Reviews",
    title: "Basic Networking",
    desc: "Covers protocols, hardware, configurations and network connectivity basics.",
  },
  {
    img: "/pe.jpg",
    rating: "142 Reviews",
    title: "Python Programming",
    desc: "Learn variables, functions, OOP, modules and real-world programming skills.",
  },
];

export default function TrendingCourses() {
  return (
    <section className="w-full py-10">

      {/* ✅ SAME WIDTH AS NAVBAR */}
      <div className="max-w-8xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">

          <h2 className="text-xl md:text-3xl font-bold text-black">
            Trending Courses
          </h2>

          <button className="mt-3 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5 py-2 text-sm md:text-base rounded-full font-medium shadow-md hover:opacity-90">
            View All Courses <ArrowRight size={18} />
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {courses.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >

              {/* IMAGE */}
              <div className="sm:w-1/3">
                <img
                  src={item.img}
                  alt="course"
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="sm:w-2/3 p-4 flex flex-col justify-center">

                {/* ⭐ RATING */}
                <div className="flex items-center gap-1 text-yellow-500 text-xs md:text-sm font-medium">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} fill="#facc15" stroke="none" />
                  ))}
                  <span className="text-gray-600 ml-1">
                    ({item.rating})
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-base md:text-lg font-bold mt-2">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-xs md:text-sm mt-2 leading-snug">
                  {item.desc}
                </p>

                {/* 📞 CONTACT */}
                <div className="flex items-center gap-2 text-blue-600 text-xs md:text-sm mt-3 font-medium">
                  <Phone size={14} />
                  <span>+91-87505 00075 </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}