"use client";
import React from 'react';
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
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "10+ Years IT Experience",
      desc: "Benefit from a decade of corporate expertise, real-world projects, and proven industry success.",
      icon: <Briefcase size={28} />,
      accent: "border-[#1db954]" // Emerald Green from logo
    },
    {
      title: "Expert Industry Faculty",
      desc: "Train with professionals actively working on live technologies and enterprise solutions.",
      icon: <Users size={28} />,
      accent: "border-[#f59e0b]" // Amber from logo
    },
    {
      title: "Globally Certified Programs",
      desc: "Curriculum aligned with Google, AWS, Microsoft, and global certification standards.",
      icon: <Award size={28} />,
      accent: "border-[#6366f1]" // Purple from logo
    },
    {
      title: "100% Placement Assistance",
      desc: "Dedicated placement support, interview preparation, and hiring network access.",
      icon: <Trophy size={28} />,
      accent: "border-[#1db954]"
    },
    {
      title: "Soft Skills & Interview Prep",
      desc: "Complete personality development, communication mastery, and mock interviews.",
      icon: <MessageSquare size={28} />,
      accent: "border-[#f59e0b]"
    },
    {
      title: "Lifetime Mentor Support",
      desc: "Continuous trainer guidance even after course completion for long-term success.",
      icon: <LifeBuoy size={28} />,
      accent: "border-[#6366f1]"
    },
  ];

  return (
    <section className="py-28 bg-black overflow-hidden font-sans relative">
  {/* Premium Background Effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#20c9b0]/8 rounded-full blur-[140px]" />
    <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#5b7cfd]/8 rounded-full blur-[140px]" />
  </div>

  {/* Subtle Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#20c9b0_1px,transparent_1px),linear-gradient(to_bottom,#20c9b0_1px,transparent_1px)] bg-[size:70px_70px]" />

  <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

    {/* Header Section */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-14 mb-24">

      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20c9b0]/10 border border-[#20c9b0]/20 text-[#20c9b0] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles size={14} />
          Why Mindweave Academy
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
          Building Careers with{" "}
          <span className="text-[#20c9b0]">
            Industry Excellence
          </span>
        </h2>
      </div>

      <div className="lg:max-w-md">
        <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-[#f4c430] pl-6">
          Mindweave Academy combines advanced learning, expert mentorship,
          and real-world skill development to shape future-ready professionals.
        </p>
      </div>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((item, index) => (
        <div
          key={index}
          className="group relative bg-[#0b1120] border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:border-[#20c9b0]/30 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(32,201,176,0.08)]"
        >
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-[#20c9b0]" />

          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#20c9b0]/10 text-[#20c9b0] mb-6 group-hover:scale-110 transition-transform duration-500">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#20c9b0] transition-colors">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed text-sm mb-8">
            {item.desc}
          </p>

          {/* Footer Badge */}
          <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
            <Check size={14} className="text-[#f4c430]" />
            Premium Learning
          </div>
        </div>
      ))}
    </div>

    {/* CTA Section */}
    <div className="mt-28 relative rounded-3xl overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0b1120] border border-white/5" />

      {/* Glow */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#20c9b0]/10 blur-[120px] rounded-full" />

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

        <button className="flex items-center gap-4 bg-[#20c9b0] hover:bg-[#18b39d] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-wider text-sm transition-all shadow-2xl active:scale-95 group">
          Get Started
          <ArrowRight
            size={20}
            className="group-hover:translate-x-2 transition-transform"
          />
        </button>
      </div>
    </div>
  </div>
</section>
  );
};

export default WhyChooseUs;