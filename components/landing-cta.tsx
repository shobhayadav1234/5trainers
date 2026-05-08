"use client";

import React from "react";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

export default function Center() {
  return (
    <section className="w-full flex items-center justify-center bg-black mb-8 relative overflow-hidden py-4 md:py-0">
      
      {/* Logo Based Glows */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#10b981]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#6366f1]/10 blur-[100px] pointer-events-none" />
      
      {/* MAIN CONTAINER - Height Reduced */}
      <div className="max-w-7xl w-[94%] md:w-full mx-auto bg-[#0a0a0a] rounded-[1.5rem] md:rounded-[2.5rem] relative z-10 border border-white/5 overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Left Side: Image (Height adjusted) */}
        <div className="md:w-1/3 flex items-end justify-center pt-6 md:pt-10 px-6 animate-in fade-in slide-in-from-left duration-700">
          <img
            src="/girl.png"
            alt="Student"
            className="w-full max-w-[140px] md:max-w-[220px] h-auto object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          />
        </div>

        {/* Right Side: Content (Padding reduced for low height) */}
        <div className="md:w-2/3 px-6 md:px-12 py-6 md:py-8 flex flex-col justify-center text-white animate-in fade-in slide-in-from-right duration-700">
          
          <div className="flex items-center gap-2 mb-3 bg-white/5 self-start px-3 py-1 rounded-full border border-white/10">
             <Sparkles size={12} className="text-[#f59e0b]" />
             <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Fast-Track Training</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black leading-tight uppercase tracking-tighter">
            Ready to Start Your <br /> 
           <span className="text-[#20c9b0]">Career in</span> Mindweave Academy Institute
          </h2>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-6">
            {/* Compact Contact Pill */}
            <div className="flex items-center gap-3 bg-white/[0.03] px-4 py-2 rounded-xl border border-white/10 hover:border-[#10b981]/40 transition-all cursor-pointer group">
              <Phone size={16} className="text-[#10b981]" fill="#10b981" />
              <p className="text-white text-base md:text-xl font-bold tracking-tight">
                +91 84474 04770
              </p>
            </div>

            {/* CTA Button - Compact */}
            <button className="bg-white text-black font-black py-2.5 px-8 rounded-xl flex items-center gap-3 hover:bg-[#10b981] hover:text-white transition-all duration-300 shadow-xl text-xs uppercase tracking-wider">
              Book Seat
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#6366f1] opacity-40" />
      </div>
    </section>
  );
}