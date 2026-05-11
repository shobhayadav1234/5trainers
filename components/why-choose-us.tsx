"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Users,
  Award,
  Trophy,
  MessageSquare,
  LifeBuoy,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: "10+ Years IT Experience",
      desc: "Benefit from a decade of corporate expertise, real-world projects, and proven industry success.",
      icon: <Briefcase size={28} />,
    },
    {
      title: "Expert Industry Faculty",
      desc: "Train with professionals actively working on live technologies and enterprise solutions.",
      icon: <Users size={28} />,
    },
    {
      title: "Globally Certified Programs",
      desc: "Curriculum aligned with Google, AWS, Microsoft, and global certification standards.",
      icon: <Award size={28} />,
    },
    {
      title: "100% Placement Assistance",
      desc: "Dedicated placement support, interview preparation, and hiring network access.",
      icon: <Trophy size={28} />,
    },
    {
      title: "Soft Skills & Interview Prep",
      desc: "Complete personality development, communication mastery, and mock interviews.",
      icon: <MessageSquare size={28} />,
    },
    {
      title: "Lifetime Mentor Support",
      desc: "Continuous trainer guidance even after course completion for long-term success.",
      icon: <LifeBuoy size={28} />,
    },
  ];

  return (
    <section className="py-28 bg-black overflow-hidden font-sans relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#20c9b0]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#5b7cfd]/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-14 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20c9b0]/10 border border-[#20c9b0]/20 text-[#20c9b0] text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              Why Mindweave Academy
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Building Careers with{" "}
              <span className="text-[#20c9b0]">Industry Excellence</span>
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-[#f4c430] pl-6">
              Mindweave Academy combines advanced learning, expert mentorship,
              and real-world skill development to shape future-ready professionals.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#0b1120] border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:border-[#20c9b0]/30 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-[#20c9b0]" />

              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#20c9b0]/10 text-[#20c9b0] mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#20c9b0] transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed text-sm mb-8">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <Check size={14} className="text-[#f4c430]" />
                Premium Learning
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-28 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[#0b1120] border border-white/5" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-white text-3xl md:text-4xl font-black mb-4">
                Ready to Launch Your Tech Career?
              </h3>

              <p className="text-slate-400 text-lg">
                Upskill with Mindweave Academy’s future-focused programs in AI,
                Data Science, Web Development, Cloud, and Cyber Security.
              </p>
            </div>

            {/* Get Started Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-4 bg-[#20c9b0] hover:bg-[#18b39d] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-wider text-sm transition-all shadow-2xl active:scale-95 group"
            >
              Get Started
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative">
            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-black text-2xl font-bold"
            >
              ×
            </button>

            <h2 className="text-3xl font-black text-slate-900 mb-2 text-center">
              Get Started Today
            </h2>

            <p className="text-slate-500 text-center mb-8">
              Fill out the form and our team will contact you.
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]"
              />

              <select className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]">
                <option>Select Course</option>
                <option>Digital Marketing</option>
                <option>Full Stack Development</option>
                <option>Cyber Security</option>
                <option>Data Science</option>
                <option>AI & Machine Learning</option>
              </select>

              <button
                type="submit"
                className="w-full bg-[#20c9b0] hover:bg-[#18b39d] text-white font-bold py-4 rounded-xl transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUs;