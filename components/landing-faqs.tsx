"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "What courses do you offer?",
      answer: "We offer industry-focused courses like Digital Marketing, Cyber Security, Data Science, Data Analytics, Software Testing, and Python programming designed for beginners and professionals."
    },
    {
      question: "Which course is best for beginners?",
      answer: "Python and Digital Marketing are great for beginners as they require no prior technical knowledge and offer strong career opportunities."
    },
    {
      question: "Do you provide placement assistance after course completion?",
      answer: "Yes, we provide 100% placement assistance including resume building, interview preparation, and job referrals."
    },
    {
      question: "What is the duration of your courses?",
      answer: "Course duration varies from 2 to 6 months depending on the program and learning level (basic to advanced)."
    },
    {
      question: "Are your courses practical or theory-based?",
      answer: "Our courses are highly practical with live projects, real-world case studies, and hands-on training."
    },
    {
      question: "Can I learn Data Science or Cyber Security without coding?",
      answer: "Basic coding knowledge helps, but we start from fundamentals, so beginners can easily learn step by step."
    },
    {
      question: "Do you provide certification after course completion?",
      answer: "Yes, we provide industry-recognized certificates after successful completion of the course."
    },
    {
      question: "What career opportunities are available after these courses?",
      answer: "You can apply for roles like Digital Marketer, Data Analyst, Cyber Security Analyst, Software Tester, and Python Developer."
    },
    {
      question: "Are online classes available?",
      answer: "Yes, we offer both online and offline classes with flexible batch timings."
    },
    {
      question: "Why should I choose your institute for IT courses?",
      answer: "We provide expert trainers, practical training, updated curriculum, placement support, and affordable fees — making us one of the best choices for IT training."
    }
  ];

  return (
    <section className="py-24 bg-[#fcfcfc] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a3c8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
              General <span className="text-[#00a3c8]">Inquiries</span>
            </h2>
            <p className="mt-4 text-gray-500 font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-2">
              <HelpCircle size={16} className="text-[#00a3c8]" /> Helping you grow step by step
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00a3c8]/10 text-[#00a3c8] rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <span className="text-sm font-black text-gray-800">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* --- FAQ List --- */}
        <div className="space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`group transition-all duration-500 ease-in-out ${
                  isOpen ? 'scale-[1.02]' : 'scale-100'
                }`}
              >
                <div 
                  className={`bg-white rounded-[2rem] border-2 transition-all duration-300 overflow-hidden ${
                    isOpen 
                    ? 'border-[#00a3c8] shadow-2xl shadow-cyan-100/50' 
                    : 'border-gray-100 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-7 md:p-9 text-left"
                  >
                    <span className={`text-lg md:text-xl font-black tracking-tight leading-tight max-w-[85%] ${
                      isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-[#00a3c8]'
                    }`}>
                      {item.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isOpen ? 'bg-[#00a3c8] text-white rotate-0' : 'bg-gray-100 text-gray-400 rotate-90'
                    }`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <div 
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-7 md:px-9 pb-9 text-gray-500 font-semibold leading-relaxed border-t border-gray-50 pt-6">
                      <p className="pl-6 border-l-2 border-[#00a3c8]/30">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;