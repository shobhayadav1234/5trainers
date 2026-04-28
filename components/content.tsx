"use client";

import React from "react";

export default function Content() {
  return (
    <section className="w-full flex items-center justify-center px-4 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading - Responsive text sizes */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[oklch(0.45_0.15_250)] leading-[1.1] tracking-tight">
          Tech skills with 5 Trainers <br className="hidden md:block" />
          institute
        </h1>

        {/* Paragraph - Responsive width and spacing */}
        <div className="flex justify-center">
          <p className="mt-8 text-gray-700 text-base md:text-xl leading-relaxed max-w-4xl px-2">
            Advance your career with 5 Trainers Institute’s expert-led training programs. 
            Our curriculum is thoughtfully designed by experienced industry trainers to equip you with real-world, job-ready skills. 
            <br className="hidden md:block" /><br className="hidden md:block" />
            You will learn the latest tools, technologies, and practical approaches used in today’s professional environment. 
            Through our intensive hands-on sessions, you’ll gain real experience working on live projects and industry-based scenarios. 
            <br className="hidden md:block" /><br className="hidden md:block" />
            Build strong problem-solving abilities, improve technical expertise, and gain the confidence needed to succeed in your career.
          </p>
        </div>

        {/* Button - Mobile friendly padding */}
        <div className="mt-10">
          <button className="bg-[oklch(0.45_0.15_250)] hover:opacity-90 text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 active:scale-95 text-lg">
            Start Learning Now
          </button>
        </div>

      </div>
    </section>
  );
}