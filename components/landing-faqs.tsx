"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "What courses do you offer at Skill Nexus?",
      answer: "We offer industry-focused courses like Data Science, AI, Digital Marketing, Cyber Security, and Python programming designed to connect students with industry needs."
    },
    {
      question: "Which course is best for beginners?",
      answer: "Python and Digital Marketing are great for beginners as they require no prior technical knowledge and offer strong career opportunities."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide 100% placement assistance including resume building, interview preparation, and job referrals through our extensive industry connect."
    },
    {
      question: "What is the duration of your courses?",
      answer: "Course duration varies from 2 to 6 months depending on the program and learning level (basic to advanced)."
    },
    {
      question: "Are your courses practical or theory-based?",
      answer: "Our courses are highly practical with live projects, real-world case studies, and hands-on training to ensure you are industry-ready."
    },
    {
      question: "Can I learn Data Science or AI without coding?",
      answer: "Basic coding knowledge helps, but we start from fundamentals, so beginners can easily learn step by step."
    },
    {
      question: "Do you provide certification after course completion?",
      answer: "Yes, we provide industry-recognized certificates after successful completion of the course, recognized by our hiring partners."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f1a] relative overflow-hidden font-sans">
      {/* Logo-Inspired Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Sparkles size={14} className="text-[#f59e0b]" /> Skill Nexus Knowledge Base
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#6366f1]">Questions</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-slate-400 font-medium text-lg">
            Where Data Science + AI + Students + Industry Connect. Get all your doubts cleared here.
          </p>
        </div>

        {/* --- FAQ List --- */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            // Cycling through logo colors for borders
            const colors = ['border-[#10b981]', 'border-[#f59e0b]', 'border-[#6366f1]'];
            const shadowColors = ['shadow-[#10b981]/20', 'shadow-[#f59e0b]/20', 'shadow-[#6366f1]/20'];
            const activeColor = colors[index % colors.length];
            const activeShadow = shadowColors[index % shadowColors.length];

            return (
              <div 
                key={index}
                className="transition-all duration-300"
              >
                <div 
                  className={`bg-[#111827] rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                    isOpen 
                    ? `${activeColor} shadow-[0_0_40px_rgba(0,0,0,0.3)] ${activeShadow} translate-y-[-4px]` 
                    : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-7 md:p-9 text-left"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-2 h-2 rounded-full ${isOpen ? 'animate-pulse bg-white' : 'bg-slate-600'}`} />
                      <span className={`text-lg md:text-xl font-bold tracking-tight leading-tight ${
                        isOpen ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {item.question}
                      </span>
                    </div>
                    
                    <div className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                      isOpen 
                      ? 'bg-white text-black border-white rotate-0' 
                      : 'bg-transparent text-slate-500 border-white/10 rotate-90'
                    }`}>
                      {isOpen ? <Minus size={22} strokeWidth={3} /> : <Plus size={22} strokeWidth={3} />}
                    </div>
                  </button>

                  <div 
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-7 md:px-14 pb-9 text-slate-400 font-medium text-lg leading-relaxed">
                      <div className="pt-6 border-t border-white/5 italic">
                        "{item.answer}"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Section - Logo Style */}
        <div className="mt-20 p-[2px] rounded-[2.5rem] bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#6366f1]">
            <div className="bg-[#0a0f1a] rounded-[2.4rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Still Unclear?</h4>
                    <p className="text-slate-500 mt-2">Connect with our industry experts today.</p>
                </div>
                <button className="group relative px-10 py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95">
                    <span className="relative z-10 flex items-center gap-2">
                        <MessageCircle size={20} /> Let's Connect
                    </span>
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;