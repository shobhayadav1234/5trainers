"use client";
import React from 'react';
import { 
  Briefcase, 
  Users, 
  Award, 
  Trophy, 
  MessageSquare, 
  LifeBuoy, 
  Check 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "10 Years IT Experience",
      desc: "Real-world corporate exposure from a decade-old IT company legacy.",
      icon: <Briefcase className="text-[#00a3c8]" size={32} />,
    },
    {
      title: "Experienced Faculty",
      desc: "Learn from specialists who live technology and work on live projects.",
      icon: <Users className="text-[#00a3c8]" size={32} />,
    },
    {
      title: "Google Certified",
      desc: "Curriculum and trainers recognized by global industry standards.",
      icon: <Award className="text-[#00a3c8]" size={32} />,
    },
    {
      title: "100% Placement Support",
      desc: "Dedicated cell to help you land your dream job in top tech firms.",
      icon: <Trophy className="text-[#00a3c8]" size={32} />,
    },
    {
      title: "Interview & Soft Skills",
      desc: "Complete personality development and mock interview sessions.",
      icon: <MessageSquare className="text-[#00a3c8]" size={32} />,
    },
    {
      title: "Lifetime Trainer Support",
      desc: "Get guidance even after course completion whenever you're stuck.",
      icon: <LifeBuoy className="text-[#00a3c8]" size={32} />,
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-[#00a3c8] font-black uppercase tracking-[0.3em] text-sm mb-4">
              Our Value Proposition
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a3c8] to-cyan-600">5Trainers?</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm border-l-4 border-gray-100 pl-4">
            We don't just teach code; we build careers with real industry DNA and 24/7 mentorship.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00a3c8] group-hover:rotate-[360deg] transition-all duration-700">
                <span className="group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>

              {/* Bottom Decoration */}
              <div className="absolute bottom-6 right-8 opacity-10 group-hover:opacity-100 transition-opacity">
                <Check className="text-[#00a3c8]" size={24} />
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom CTA Bar --- */}
        <div className="mt-20 bg-gray-900 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Ready to start your journey?</h3>
            <p className="text-gray-400">Join 500+ students already placed in top IT companies.</p>
          </div>
          <button className="relative z-10 bg-[#00a3c8] text-white font-black px-10 py-5 rounded-2xl uppercase tracking-widest text-sm hover:bg-white hover:text-[#00a3c8] transition-all duration-300 shadow-xl">
            Get Started Now
          </button>
          
          {/* Decorative background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a3c8] opacity-10 blur-[100px] -mr-32 -mt-32" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;