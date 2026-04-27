"use client";

import React from "react";

export default function Content() {
  return (
    <section className="w-full flex items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-8xl text-center">
        
        {/* Heading - Primary OKLCH Color applied */}
        <h1 className="text-7xl md:text-6xl font-extrabold text-[oklch(0.45_0.15_250)] leading-tight">
            Tech skills with 5  Trainers <br />
          institute  
        </h1>

        {/* Paragraph - 12 Lines centered */}
        <p className=" w-5xl mt-8 text-gray-700 text-base md:text-xl leading-relaxed text-center">
         Advance your career with 5 Trainers Institute’s expert-led training programs. 
         Our curriculum is thoughtfully designed by experienced industry trainers to equip you with real-world, job-ready skills. 

         You will learn the latest tools, technologies, and practical approaches used in today’s professional environment. 
        Through our intensive hands-on sessions, you’ll gain real experience working on live projects and industry-based scenarios. 

         Build strong problem-solving abilities, improve technical expertise, and gain the confidence needed to succeed in your career.
        </p>

        {/* Button - Custom OKLCH Background */}
        <div className="mt-10">
          <button className="bg-[oklch(0.45_0.15_250)] hover:opacity-90 text-white font-bold py-4 px-10 rounded-lg shadow-xl transition duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>

      </div>
    </section>
  );
}