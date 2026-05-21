"use client";

import React from "react";
import Link from "next/link";
import { Star, Phone, ArrowRight, Sparkles } from "lucide-react";

const courses = [
  {
    img: "/software-testing-methods.jpg",
    rating: "175 Reviews",
    title: "Software Testing Course",
    desc: "Software Testing Training teaches manual and automation testing techniques to identify bugs and ensure software quality.",
  },
  {
    img: "/se.jpg",
    rating: "149 Reviews",
    title: "Cyber Security & Ethical Hacking",
    desc: "Learn network security, ethical hacking, vulnerability assessment, penetration testing, cyber defense strategies, and real-world security practices."
  },
  {
    img: "/datase.jpg",
    rating: "133 Reviews",
    title: "Data Science Fundamentals",
    desc: "Learn data analysis, data visualization, machine learning basics, Python programming, and real-world data-driven problem solving."
  },
  {
    img: "/AI-text.jpg ",
    rating: "142 Reviews",
    title: "Artificial Intelligence",
    desc: "Learn AI concepts, machine learning, neural networks, automation, and real-world AI applications with hands-on projects.",
  },
  {
    img: "/digital-marketing-with.jpg",
    rating: "142 Reviews",
    title: "Digital Marketing",
    desc: "Learn SEO, social media marketing, Google Ads, content marketing, email marketing, and real-world digital marketing strategies.",
  },
  {
    img: "/What-is-Full-stack-development.jpg",
    rating: "142 Reviews",
    title: "Full Stack Development",
    desc: "Learn frontend and backend development using React, Node.js, databases, APIs, and build real-world web applications.",
  },
];

export default function TrendingCourses() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-6">

        {/* HEADER - Mindweave Academy Theme */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-slate-100 pb-8">

          <div>
            <div className="flex items-center gap-2 text-[#20c9b0] font-bold text-xs uppercase tracking-[0.2em] mb-2">
              <Sparkles size={14} /> Career Growth
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
              Trending <span className="text-[#20c9b0]">Mindweave Courses</span>
            </h2>
          </div>


          <Link
            href="/programs"
            className="mt-6 md:mt-0 inline-block bg-black text-white px-8 py-4 rounded-2xl font-bold text-base min-w-[220px] text-center transition-all hover:bg-[#20c9b0] hover:text-black shadow-xl"
          >
            View All Courses
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {courses.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row bg-slate-50 border border-slate-100 rounded-[2rem] overflow-hidden hover:border-[#20c9b0]/30 hover:shadow-2xl hover:shadow-[#20c9b0]/5 transition-all duration-500 group"
            >

              {/* IMAGE */}
              <div className="sm:w-2/5 relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* CONTENT */}
              <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-white">

                {/* ⭐ RATING */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex text-[#f4c430]">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                        stroke="none"
                      />
                    ))}
                  </div>

                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">
                    {item.rating}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight group-hover:text-[#20c9b0] transition-colors">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-500 text-sm md:text-base mt-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* CONTACT */}
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#20c9b0]/10 flex items-center justify-center text-[#20c9b0]">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">
                      Admissions Open
                    </p>

                    <p className="text-slate-900 font-bold text-sm md:text-base tracking-tight">
                      +91 84474 04770
                    </p>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}