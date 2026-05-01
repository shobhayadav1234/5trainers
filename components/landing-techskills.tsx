"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Content() {
  return (
    <section className="w-full flex items-center justify-center px-6 py-20 md:py-32 bg-black relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#20c9b0]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#20c9b0]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#20c9b0_1px,transparent_1px),linear-gradient(to_bottom,#20c9b0_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#20c9b0] text-xs font-bold uppercase tracking-[0.2em] mb-8">
          <Sparkles size={14} /> Future Ready Careers
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tighter">
          Build Your Future with <br className="hidden lg:block" />
          <span className="text-[#20c9b0]">
            Mindweave Academy
          </span>
        </h1>

        {/* Paragraph */}
        <div className="flex justify-center">
          <p className="mt-10 text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
            Transform your career through <span className="text-white">Mindweave Academy’s</span> 
            expert-led programs in Data Science, AI, Cyber Security, Cloud, and next-generation technologies.
            Our industry-focused training equips students with practical knowledge, live project experience,
            and job-ready expertise to succeed in today’s digital world.
          </p>
        </div>

        {/* Buttons / Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative bg-[#20c9b0] hover:bg-[#18b39d] text-black font-black py-5 px-10 rounded-2xl shadow-[0_20px_50px_rgba(32,201,176,0.2)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-widest flex items-center gap-3">
            Start Learning Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button className="text-white font-bold py-5 px-10 rounded-2xl border border-[#20c9b0]/20 hover:bg-[#20c9b0]/10 transition-all text-sm uppercase tracking-widest">
            View Courses
          </button>
        </div>

        {/* Trust Stats */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-80">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#20c9b0]">500+</div>
            <div className="text-xs uppercase tracking-tighter text-slate-500">
              Students Trained
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-[#20c9b0]">10+</div>
            <div className="text-xs uppercase tracking-tighter text-slate-500">
              Industry Experts
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-[#20c9b0]">100%</div>
            <div className="text-xs uppercase tracking-tighter text-slate-500">
              Practical Learning
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}