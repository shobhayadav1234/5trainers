"use client";

import React from 'react';
import { Monitor, Globe, BookOpen } from 'lucide-react';

const Courses = () => {
  // Modes of Training Data
  const trainingModes = [
    {
      title: "Classroom Training",
      icon: <Monitor size={48} />,
      description: "In-person communication with teachers and students in the classroom setting ensures immediate doubt resolution and fosters a collaborative learning environment through direct interaction."
    },
    {
      title: "Online Learning",
      icon: <Globe size={48} />,
      description: "Flexible remote learning that can be accessed via e-learning platforms enables students to master skills at their own pace while providing 24/7 access to high-quality study materials and interactive virtual sessions."
    },
    {
      title: "Blended Learning",
      icon: <BookOpen size={48} />,
      description: "Balanced approach of classroom and online sessions for effective training strategies that combine the benefits of face-to-face interaction with the convenience of self-paced digital learning.",
    }
  ];

  const targetAudience = [
    "Cybersecurity Professionals", "IT Professionals", "Ethical Hackers and Penetration Testers",
    "Students and Aspiring Cybersecurity Specialists", "Information Security Enthusiasts",
    "Security Researchers", "Corporate Security Teams", "Entrepreneurs and Business Owners",
    "Law Enforcement and Government Personnel", "Compliance and Risk Management Professionals"
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* HEADING & PARAGRAPH */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#006677] mb-4">
            Modes of Training
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Cyberyaan offers flexibility in terms of training modes to accommodate various learning preferences:
          </p>
        </div>

        {/* CARDS GRID (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* 3 Training Mode Cards */}
          {trainingModes.map((mode, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group transition-all min-h-[420px] w-full"
            >
              {/* ICON: Blue to Black on Hover */}
              <div className="text-[#00a8b4] mb-10 transition-colors duration-300 group-hover:text-black">
                {mode.icon}
              </div>
              <h3 className="text-xl font-bold text-[#d16b2a] mb-6">
                {mode.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {mode.description}
              </p>
            </div>
          ))}

          {/* 4th Card: Target Audience (Same size as others) */}
          <div className="bg-white p-8 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 group transition-all min-h-[420px] w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
              Target Audience
            </h3>
            <p className="text-gray-500 text-[11px] mb-4 leading-relaxed">
              The target audience for an ethical hacking course typically includes individuals with certain backgrounds, interests, and career goals.
            </p>
            <ul className="space-y-1.5">
              {targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[10px] text-gray-600">
                  <span className="text-[#00a8b4] font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Courses;