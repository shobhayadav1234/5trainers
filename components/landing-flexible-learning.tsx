"use client";
import React from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Target, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

const FlexibleLern = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* --- Decorative Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-cyan-100 text-[#00a3c8] text-[10px] font-black uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles size={12} /> Flexible Schedule
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase">
            Flexible <span className="text-[#00a3c8]">Learning</span> Options
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">
            Choose a schedule that works for you. We offer multiple slots to balance your life and studies.
          </p>
        </div>

        {/* --- Batch Options Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Working Days Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white p-8 md:p-10 shadow-xl shadow-slate-200/50 hover:shadow-cyan-100 transition-all group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-gray-900 rounded-2xl text-white group-hover:bg-[#00a3c8] transition-colors shadow-lg shadow-gray-200">
                  <Calendar size={28} />
                </div>
                <span className="text-[10px] font-black text-[#00a3c8] bg-cyan-50 px-3 py-1 rounded-full">Mon - Fri</span>
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 uppercase mb-4 tracking-tight">Working Days Batches</h3>
              <p className="text-gray-500 mb-8 text-sm font-medium leading-relaxed">
                Perfect for students and professionals who prefer learning during the week.
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Clock size={12} className="text-[#00a3c8]" /> Batch Timings
                  </h4>
                  <p className="text-sm font-bold text-gray-800 italic">Morning, Afternoon & Evening slots</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Core Benefits</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {["Regular practice sessions", "Doubt-clearing every day", "Consistent progress tracking"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold text-gray-400 italic">
                    <span className="text-gray-900 uppercase not-italic mr-2">Best For:</span> 
                    Students & Job Seekers
                  </p>
                </div>
              </div>
            </div>
            {/* Background Decor for Card */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
          </div>

          {/* Weekend Batches Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white p-8 md:p-10 shadow-xl shadow-slate-200/50 hover:shadow-blue-100 transition-all group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-[#00a3c8] rounded-2xl text-white shadow-lg shadow-cyan-100">
                  <Target size={28} />
                </div>
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Sat - Sun</span>
              </div>

              <h3 className="text-2xl font-black text-gray-900 uppercase mb-4 tracking-tight">Weekend Batches</h3>
              <p className="text-gray-500 mb-8 text-sm font-medium leading-relaxed">
                Ideal for working professionals or busy students who can only attend on weekends.
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Clock size={12} className="text-[#00a3c8]" /> Batch Timings
                  </h4>
                  <p className="text-sm font-bold text-gray-800 italic">Flexible morning & afternoon slots</p>
                </div>

                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Core Benefits</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {["Compact intensive sessions", "Focused practical training", "Perfect work-life balance"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold text-gray-400 italic">
                    <span className="text-gray-900 uppercase not-italic mr-2">Best For:</span> 
                    Full-time Employees & Entrepreneurs
                  </p>
                </div>
              </div>
            </div>
            {/* Background Decor for Card */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
          </div>

        </div>

        {/* --- Simple Footer Button --- */}
        <div className="mt-16 text-center">
          <button className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#00a3c8] transition-all shadow-xl shadow-slate-200 flex items-center gap-2 mx-auto group">
            Check Availability <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FlexibleLern;