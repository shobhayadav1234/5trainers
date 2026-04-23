"use client";

import React from "react";
import { Award, BookOpen, MonitorPlay, Users } from "lucide-react";

const cardData = [
  {
    title: "Best Teaching",
    desc: "The best teaching involves engaging students, fostering critical thinking, and adapting methods to individual learning styles effectively.",
    icon: <Award className="w-6 h-6 text-yellow-300" />,
    bgColor: "bg-[#FFFCE4]", // Light Yellow
    iconBg: "bg-yellow-100",
  },
  {
    title: "Convenient Practice",
    desc: "Convenient practice offers flexibility and accessibility, enabling efficient skill development at one's preferred time and location.",
    icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    bgColor: "bg-[#FDF2FF]", // Light Pink/Purple
    iconBg: "bg-purple-100",
  },
  {
    title: "Video Lecture",
    desc: "We provide visual and auditory learning experiences, enhancing comprehension & engagement with educational content.",
    icon: <MonitorPlay className="w-8 h-8 text-red-600" />,
    bgColor: "bg-[#FFF1F1]", // Light Red/Orange
    iconBg: "bg-red-100",
  },
  {
    title: "Live Classes",
    desc: "Live classes facilitate real-time interaction, engagement, and immediate feedback, enhancing learning experiences through dynamic participation.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    bgColor: "bg-[#F0F9FF]", // Light Blue
    iconBg: "bg-blue-100",
  },
];

export default function Cards() {
  return (
    <section className="w-full px-4 md:px-16 py-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-5 rounded-xl flex flex-col items-start transition-transform hover:-translate-y-1 duration-300`}
          >
            {/* Icon Container */}
            <div className={`p-3 rounded-lg mb-6 shadow-sm`}>   
              {card.icon}
            </div>

            {/* Content */}
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {card.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              {card.desc}
            </p>

            {/* Learn More Link */}
            <button className="mt-auto flex items-center gap-1 text-sm font-bold text-gray-800 hover:gap-2 transition-all">
              Learn More <span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}