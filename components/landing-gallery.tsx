"use client";

import React from "react";
import { Star, ExternalLink, Atom } from "lucide-react";

const trainers = [
  {
    name: "Amit Sharma",
    role: "Cyber Security Expert",
    experience: "8+ Years Experience",
    specialization: "Ethical Hacking, Penetration Testing, SOC Operations",
    image: "/pngtree-handsome-young-indian-man.jpg",
  },
  {
    name: "Priya Verma",
    role: "Data Analytics Specialist",
    experience: "6+ Years Experience",
    specialization: "Power BI, Python, SQL, Business Intelligence",
    image: "/a-business-man-stands.jpg",
  },
  {
    name: "Rahul Mehta",
    role: "Cloud Computing Instructor",
    experience: "7+ Years Experience",
    specialization: "AWS, Azure, DevOps, Cloud Security",
    image: "/smiling-female.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "Digital Marketing Mentor",
    experience: "5+ Years Experience",
    specialization: "SEO, Social Media Marketing, Google Ads",
    image: "/successful-busines.jpg",
  },
  {
    name: "Vikas Yadav",
    role: "Full Stack Development Coach",
    experience: "9+ Years Experience",
    specialization: "React, Next.js, Node.js, MongoDB",
    image: "/smiling.jpg",
  },
  {
    name: "Tanya Kapoor",
    role: "Digital Marketing Mentor",
    experience: "5+ Years Experience",
    specialization: "SEO, Social Media Marketing, Google Ads",
    image: "/gores.jpg",
  },
];

export default function OurTrainers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#14b8a6] font-bold text-xs uppercase tracking-[0.25em] mb-4">
            <Atom size={16} />
            Mindweave Academy Experts
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Learn from{" "}
            <span className="text-[#14b8a6]">
              Industry Experts
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed">
            Our trainers are experienced professionals delivering practical,
            job-focused education to help students build real-world technical expertise.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                  <Star
                    size={18}
                    className="text-[#14b8a6]"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-[#14b8a6] mb-2">
                  {trainer.experience}
                </p>

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {trainer.name}
                </h3>

                <p className="text-sm font-semibold text-slate-700 mb-4">
                  {trainer.role}
                </p>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {trainer.specialization}
                </p>

                {/* Portfolio Button */}
                <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#14b8a6] transition-colors">
                  <ExternalLink size={16} />
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}