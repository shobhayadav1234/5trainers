"use client";

import React from 'react';
import { Monitor, Globe, BookOpen } from 'lucide-react';

const Courses = ({
  heading = "Modes of Training",
  subHeading = "Cyberyaan offers flexibility in terms of training modes to accommodate various learning preferences:",
  trainingModes = [],
  targetAudience = []
}: any) => {

  // ✅ Default fallback (agar props na aaye)
  const defaultModes = [
    {
      title: "Classroom Training",
      icon: <Monitor size={48} />,
      description: "In-person communication with teachers and students in the classroom setting ensures immediate doubt resolution."
    },
    {
      title: "Online Learning",
      icon: <Globe size={48} />,
      description: "Flexible remote learning that can be accessed via e-learning platforms."
    },
    {
      title: "Blended Learning",
      icon: <BookOpen size={48} />,
      description: "Balanced approach of classroom and online sessions for effective training strategies."
    }
  ];

  const modes = trainingModes.length > 0 ? trainingModes : defaultModes;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-12">

        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#006677] mb-4">
            {heading}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {subHeading}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          {/* Training Cards */}
          {modes.map((mode: any, index: number) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group transition-all min-h-[420px] w-full"
            >
              <div className="text-[#00a8b4] mb-10 group-hover:text-black">
                {mode.icon}
              </div>

              <h3 className="text-xl font-bold text-[#ec300f] mb-6">
                {mode.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {mode.description}
              </p>
            </div>
          ))}

          {/* Target Audience */}
          <div className="bg-white p-8 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 min-h-[420px] w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
              Target Audience
            </h3>

            <ul className="space-y-1.5">
              {targetAudience.length > 0 ? (
                targetAudience.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-2 text-[10px] text-gray-600">
                    <span className="text-[#00a8b4] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-400 text-sm">No data available</li>
              )}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Courses;