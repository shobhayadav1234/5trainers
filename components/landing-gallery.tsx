"use client";

import React from "react";
// Atom icon React logo ki tarah dikhta hai aur industry standard hai
import { Star, Award, ExternalLink, Atom } from "lucide-react";

const trainers = [
  {
    name: "Amit Sharma",
    role: "Cyber Security Expert",
    experience: "8+ Years Experience",
    specialization: "Ethical Hacking, Penetration Testing, SOC Operations",
    image: "/pngtree-handsome-young-indian-man.jpg",
    color: "text-[#1db954]",
    bg: "bg-[#1db954]/5",
  },
  {
    name: "Priya Verma",
    role: "Data Analytics Specialist",
    experience: "6+ Years Experience",
    specialization: "Power BI, Python, SQL, Business Intelligence",
    image: "/a-business-man-stands.jpg",
    color: "text-[#f59e0b]",
    bg: "bg-[#f59e0b]/5",
  },
  {
    name: "Rahul Mehta",
    role: "Cloud Computing Instructor",
    experience: "7+ Years Experience",
    specialization: "AWS, Azure, DevOps, Cloud Security",
    image: "/smiling-female.jpg",
    color: "text-[#6366f1]",
    bg: "bg-[#6366f1]/5",
  },
  {
    name: "Sneha Kapoor",
    role: "Digital Marketing Mentor",
    experience: "5+ Years Experience",
    specialization: "SEO, Social Media Marketing, Google Ads",
    image: "/successful-busines.jpg",
    color: "text-[#1db954]",
    bg: "bg-[#1db954]/5",
  },
  {
    name: "Vikas Yadav",
    role: "Full Stack Development Coach",
    experience: "9+ Years Experience",
    specialization: "React, Next.js, Node.js, MongoDB",
    image: "/smiling.jpg",
    color: "text-[#f59e0b]",
    bg: "bg-[#f59e0b]/5",
  },
  {
    name: "Tanya Kapoor",
    role: "Digital Marketing Mentor",
    experience: "5+ Years Experience",
    specialization: "SEO, Social Media Marketing, Google Ads",
    image: "/gores.jpg",
    color: "text-[#6366f1]",
    bg: "bg-[#6366f1]/5",
  },
];

export default function OurTrainers() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 text-[#1db954] font-black text-xs uppercase tracking-[0.3em] mb-4">
             <Atom size={18} className="animate-spin-slow" /> Powered by React
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1db954] via-[#f59e0b] to-[#6366f1]">Industry Experts</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Hamare mentors sirf teachers nahi, balki working professionals hain jo real-world 
            projects aur advanced industry standards par aapko train karte hain.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {trainers.map((trainer, index) => (
            <div key={index} className="group relative flex flex-col items-center text-center">
              
              {/* Image Container */}
              <div className="relative mb-8">
                <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full ${trainer.bg} flex items-center justify-center z-10 group-hover:scale-110 transition-transform`}>
                  <Star size={20} className={trainer.color} fill="currentColor" />
                </div>
                
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-[3rem] overflow-hidden border-4 border-slate-50 shadow-2xl group-hover:rounded-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="px-4">
                <p className={`text-sm font-black uppercase tracking-widest mb-2 ${trainer.color}`}>
                  {trainer.experience}
                </p>
                
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                  {trainer.name}
                </h3>

                <p className="text-slate-900 font-bold text-base mb-4 bg-slate-100 inline-block px-4 py-1 rounded-full">
                  {trainer.role}
                </p>

                {/* Social Actions */}
                <div className="flex items-center justify-center gap-6 mt-4">
                 
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-black transition-all">
                    <ExternalLink size={16} /> Portfolio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}