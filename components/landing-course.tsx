"use client";

import React from "react";
import { Award, BookOpen, MonitorPlay, Users, ArrowRight } from "lucide-react";

const cardData = [
  {
    title: "Best Teaching",
    desc: "The best teaching involves engaging students, fostering critical thinking, and adapting methods to individual learning styles effectively.",
    icon: <Award className="w-6 h-6 text-[#20c9b0]" />,
    hoverBg: "hover:bg-[#20c9b0]/5",
    accentBorder: "border-b-[#20c9b0]",
    iconBg: "bg-[#20c9b0]/10",
  },
  {
    title: "Convenient Practice",
    desc: "Convenient practice offers flexibility and accessibility, enabling efficient skill development at one's preferred time and location.",
    icon: <BookOpen className="w-6 h-6 text-[#20c9b0]" />,
    hoverBg: "hover:bg-[#20c9b0]/5",
    accentBorder: "border-b-[#20c9b0]",
    iconBg: "bg-[#20c9b0]/10",
  },
  {
    title: "Video Lecture",
    desc: "We provide visual and auditory learning experiences, enhancing comprehension & engagement with educational content.",
    icon: <MonitorPlay className="w-6 h-6 text-[#20c9b0]" />,
    hoverBg: "hover:bg-[#20c9b0]/5",
    accentBorder: "border-b-[#20c9b0]",
    iconBg: "bg-[#20c9b0]/10",
  },
  {
    title: "Live Classes",
    desc: "Live classes facilitate real-time interaction, engagement, and immediate feedback, enhancing learning experiences through dynamic participation.",
    icon: <Users className="w-6 h-6 text-[#20c9b0]" />,
    hoverBg: "hover:bg-[#20c9b0]/5",
    accentBorder: "border-b-[#20c9b0]",
    iconBg: "bg-[#20c9b0]/10",
  },
];

export default function Cards() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {cardData.map((card, index) => (
            <div
              key={index}
              className={`group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-start transition-all duration-500 hover:shadow-2xl hover:shadow-[#20c9b0]/10 border-b-4 ${card.accentBorder} ${card.hoverBg}`}
            >

              {/* ICON */}
              <div
                className={`p-4 rounded-2xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${card.iconBg}`}
              >
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#20c9b0] transition-colors">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                {card.desc}
              </p>

              {/* BUTTON */}
              <button className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-[#20c9b0] transition-all">
                Learn More

                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#20c9b0] group-hover:text-black group-hover:border-[#20c9b0] transition-all duration-300">
                  <ArrowRight size={16} />
                </div>
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}