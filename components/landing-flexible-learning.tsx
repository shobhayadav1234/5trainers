"use client";
import React from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  Atom,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Zap,
} from 'lucide-react';

const FlexibleLearn = () => {
  return (
    <section className="py-28 bg-[#030712] relative overflow-hidden font-sans text-white">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] text-xs font-black uppercase tracking-[0.3em] mb-8">
            <Zap size={14} className="fill-current" /> Future-Ready Learning
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#3b82f6] to-[#8b5cf6]">Skills Today</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
            Weekday aur weekend batches jo aapke schedule ke mutabiq design kiye gaye hain, 
            taki aap bina break liye industry expert ban sakein.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Weekdays - Dark Glassmorphism */}
          <div className="relative bg-slate-900/50 border border-slate-800 rounded-[3rem] p-10 backdrop-blur-xl overflow-hidden group hover:border-[#10b981]/50 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/10 rounded-full blur-3xl group-hover:bg-[#10b981]/20 transition-all" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="p-4 bg-[#10b981]/10 rounded-2xl text-[#10b981]">
                  <Calendar size={32} />
                </div>
                <div className="px-4 py-1.5 rounded-full border border-slate-700 text-[10px] font-black uppercase tracking-widest bg-slate-800">
                  Weekday Access
                </div>
              </div>

              <h3 className="text-3xl font-black mb-4 tracking-tight">Tech Mastery <span className="text-[#10b981]">Batches</span></h3>
              <p className="text-slate-400 mb-8 font-medium italic">"Consistent learning leads to exponential growth."</p>

              <div className="space-y-4 mb-10">
                {['MERN Stack Development', 'Cyber Security Ops', 'UI/UX Design Systems'].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-800">
                    <CheckCircle2 size={18} className="text-[#10b981]" />
                    <span className="text-sm font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest">
                <Clock size={14} /> Available: Morning & Evening
              </div>
            </div>
          </div>

          {/* Weekend - Gradient Impact */}
          <div className="relative bg-gradient-to-br from-[#1e1b4b] to-[#030712] border border-indigo-500/30 rounded-[3rem] p-10 overflow-hidden group hover:border-indigo-400 transition-all duration-500">
             <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#8b5cf6]/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="p-4 bg-[#8b5cf6]/10 rounded-2xl text-[#8b5cf6]">
                  <Atom size={32} className="animate-spin-slow" />
                </div>
                <div className="px-4 py-1.5 rounded-full border border-indigo-500/30 text-[10px] font-black uppercase tracking-widest bg-indigo-500/20 text-indigo-300">
                  Weekend Special
                </div>
              </div>

              <h3 className="text-3xl font-black mb-4 tracking-tight">Professional <span className="text-[#8b5cf6]">Sprints</span></h3>
              <p className="text-slate-400 mb-8 font-medium italic">"Transform your weekends into career milestones."</p>

              <div className="space-y-4 mb-10">
                {['Advanced DevOps', 'Data Analytics', 'Digital Strategy'].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                    <CheckCircle2 size={18} className="text-[#8b5cf6]" />
                    <span className="text-sm font-bold text-indigo-100">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-black text-indigo-400/60 uppercase tracking-widest">
                <Clock size={14} /> Full Day Intensive Sessions
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: 'Pro Certification', color: 'text-[#10b981]' },
            { icon: Briefcase, title: 'Job Assurance', color: 'text-[#3b82f6]' },
            { icon: GraduationCap, title: '1:1 Mentorship', color: 'text-[#8b5cf6]' },
          ].map((s, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-900/30 border border-slate-800 hover:bg-slate-800/50 transition-all text-center">
              <div className={`w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-slate-800 ${s.color}`}>
                <s.icon size={28} />
              </div>
              <h4 className="text-xl font-black mb-2">{s.title}</h4>
              <p className="text-sm text-slate-500 font-medium">Industry standard training with real-world application.</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-[#10b981] hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
            Explore Programs
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlexibleLearn;