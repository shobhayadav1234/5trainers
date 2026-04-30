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
    <section className="py-28 bg-[#0b1120] overflow-hidden font-sans relative">
      {/* Background Decorative Elements - Matching image_009896.png nodes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#1db954]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#6366f1]/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1db954]/10 border border-[#1db954]/20 text-[#1db954] text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Our Competitive Edge
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Why Choose <span className="text-[#1db954]">Skill Nexus?</span>
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-[#f59e0b] pl-6">
              We deliver more than training — we build future-ready careers through expert mentorship 
              and industry-driven transformation.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-[#0f172a] border-t-4 ${item.accent} rounded-2xl p-8 transition-all duration-500 hover:bg-[#161e31] hover:-translate-y-2 shadow-xl shadow-black/20`}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-800/50 text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#1db954] transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed text-sm mb-8">
                {item.desc}
              </p>

              {/* Bottom Badge */}
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                <Check size={14} className="text-[#1db954]" /> Trusted Advantage
              </div>
            </div>
          ))}
        </div>

        {/* Professional CTA Card */}
        <div className="mt-28 relative rounded-3xl overflow-hidden">
          {/* Subtle Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-white/5" />
          
          {/* Animated Glow in Corner */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#1db954]/10 blur-[100px] rounded-full" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-white text-3xl md:text-4xl font-black mb-4">
                Ready to Build Your IT Career?
              </h3>
              <p className="text-slate-400 text-lg">
                Join 500+ successful students who transformed their careers through Skill Nexus' 
                practical programs and expert mentorship.
              </p>
            </div>

            <button className="flex items-center gap-4 bg-[#f59e0b] hover:bg-white text-black px-10 py-5 rounded-xl font-black uppercase tracking-wider text-sm transition-all shadow-2xl active:scale-95 group">
              Get Started Now
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;