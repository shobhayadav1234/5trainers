"use client";

import React from "react";
import { Award, BookOpen, MonitorPlay, Users, ArrowRight } from "lucide-react";

const cardData = [
  {
    title: "Best Teaching",
    desc: "The best teaching involves engaging students, fostering critical thinking, and adapting methods to individual learning styles effectively.",
    icon: <Award className="w-6 h-6 text-yellow-500" />,
    bgColor: "bg-[#FFFCE4]",
    iconBg: "bg-yellow-100",
  },
  {
    title: "Convenient Practice",
    desc: "Convenient practice offers flexibility and accessibility, enabling efficient skill development at one's preferred time and location.",
    icon: <BookOpen className="w-6 h-6 text-purple-600" />,
    bgColor: "bg-[#FDF2FF]",
    iconBg: "bg-purple-100",
  },
  {
    title: "Video Lecture",
    desc: "We provide visual and auditory learning experiences, enhancing comprehension & engagement with educational content.",
    icon: <MonitorPlay className="w-6 h-6 text-red-600" />,
    bgColor: "bg-[#FFF1F1]",
    iconBg: "bg-red-100",
  },
  {
    title: "Live Classes",
    desc: "Live classes facilitate real-time interaction, engagement, and immediate feedback, enhancing learning experiences through dynamic participation.",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    bgColor: "bg-[#F0F9FF]",
    iconBg: "bg-blue-100",
  },
];

export default function Cards() {
  return (
    <section className="w-full py-12 bg-white">

      {/* ✅ SAME WIDTH AS NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} p-5 rounded-xl flex flex-col items-start transition-all hover:-translate-y-1 hover:shadow-lg duration-300`}
            >
              
              {/* ICON */}
              <div className={`p-3 rounded-lg mb-5 ${card.iconBg}`}>
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {card.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {card.desc}
              </p>

              {/* BUTTON */}
              <button className="mt-auto flex items-center gap-2 text-sm font-bold text-gray-800 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}