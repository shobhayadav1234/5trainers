"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Content() {
  return (
    <section className="w-full flex items-center justify-center px-6 py-20 md:py-32 bg-[#0b1120] relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1db954]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6366f1]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#1db954] text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
          <Sparkles size={14} /> Future Ready Careers
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tighter">
          Master Tech Skills with <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1db954] to-[#6366f1]">
            Skill Nexus
          </span>
        </h1>

        {/* Paragraph */}
        <div className="flex justify-center">
          <p className="mt-10 text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
            Advance your career with <span className="text-white">Skill Nexus'</span> expert-led training programs. 
            Our curriculum is thoughtfully designed by industry veterans to equip you with real-world, job-ready skills 
            through intensive hands-on sessions and live projects.
          </p>
        </div>

        {/* Buttons / Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative bg-[#f59e0b] hover:bg-white text-black font-black py-5 px-10 rounded-2xl shadow-[0_20px_50px_rgba(245,158,11,0.2)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-widest flex items-center gap-3">
            Start Learning Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="text-white font-bold py-5 px-10 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-sm uppercase tracking-widest">
            View Courses
          </button>
        </div>

        {/* Floating Stats or Trust markers (Optional for Professional look) */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-50">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-xs uppercase tracking-tighter text-slate-500">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10+</div>
            <div className="text-xs uppercase tracking-tighter text-slate-500">Industry Experts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs uppercase tracking-tighter text-slate-500">Practical Work</div>
          </div>
        </div>

      </div>
    </section>
  );
}