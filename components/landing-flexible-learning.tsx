"use client";
import React from "react";
import Link from "next/link"; 
import {
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Zap,
} from "lucide-react";

const FlexibleLearn = () => {
  return (
    <section className="py-20 bg-white text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#14b8a6]/20 text-[#14b8a6] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Zap size={14} />
            Mindweave Academy
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Flexible Learning for{" "}
            <span className="text-[#14b8a6]">
              Career Growth
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed">
            Choose weekday or weekend batches designed for students and working
            professionals to build industry-ready technical skills.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Weekday */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-[#14b8a6]/40 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#14b8a6]/10 flex items-center justify-center text-[#14b8a6]">
                <Calendar size={28} />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Weekday Batch
              </span>
            </div>

            <h3 className="text-2xl font-black mb-4">
              Tech Mastery <span className="text-[#14b8a6]">Programs</span>
            </h3>

            <div className="space-y-3 mb-6">
              {[
                "Full Stack Development",
                "Cyber Security",
                "Data Science",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#14b8a6]" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock size={16} />
              Morning & Evening Sessions
            </div>
          </div>

          {/* Weekend */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-[#5b7cfd]/40 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#5b7cfd]/10 flex items-center justify-center text-[#5b7cfd]">
                <Calendar size={28} />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Weekend Batch
              </span>
            </div>

            <h3 className="text-2xl font-black mb-4">
              Professional <span className="text-[#5b7cfd]">Programs</span>
            </h3>

            <div className="space-y-3 mb-6">
              {[
                "Cloud & DevOps",
                "Digital Marketing",
                "Business Analytics",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#5b7cfd]" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock size={16} />
              Full Day Sessions
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: ShieldCheck,
              title: "Certification",
              color: "text-[#14b8a6]",
            },
            {
              icon: Briefcase,
              title: "Placement Support",
              color: "text-[#f4c430]",
            },
            {
              icon: GraduationCap,
              title: "Expert Mentorship",
              color: "text-[#5b7cfd]",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center hover:shadow-lg transition-all"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-center ${item.color}`}
              >
                <item.icon size={26} />
              </div>

              <h4 className="text-xl font-bold mb-2">{item.title}</h4>

              <p className="text-sm text-slate-500">
                Real-world practical learning with professional guidance.
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
           <Link href="/programs">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold rounded-2xl transition-all shadow-md">
            Explore Programs
            <ChevronRight size={18} />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlexibleLearn;