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
  <section className="py-24 bg-[#020817] font-sans">
  <div className="max-w-5xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20c9b0]/10 border border-[#20c9b0]/20 text-[#20c9b0] text-xs font-bold uppercase tracking-[0.25em] mb-6">
        <Sparkles size={14} /> Mindweave Academy FAQs
      </div>

      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
        Frequently Asked <span className="text-[#20c9b0]">Questions</span>
      </h2>

      <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
        Find answers about courses, certifications, placements, and career support at Mindweave Academy.
      </p>
    </div>

    {/* FAQ Cards */}
    <div className="space-y-5">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-3xl border transition-all duration-300 ${
              isOpen
                ? "border-[#20c9b0] bg-[#0f172a] shadow-lg shadow-[#20c9b0]/10"
                : "border-slate-800 bg-[#0b1120]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-8 py-7 text-left"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-3 h-3 rounded-full ${
                    isOpen ? "bg-[#20c9b0]" : "bg-slate-600"
                  }`}
                />
                <span
                  className={`text-lg md:text-xl font-bold ${
                    isOpen ? "text-white" : "text-slate-300"
                  }`}
                >
                  {item.question}
                </span>
              </div>

              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                  isOpen
                    ? "bg-[#20c9b0] text-black"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {isOpen ? (
                  <Minus size={20} strokeWidth={3} />
                ) : (
                  <Plus size={20} strokeWidth={3} />
                )}
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-8 pb-8 pt-2 border-t border-slate-800">
                <p className="text-slate-400 text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 bg-[#0f172a] border border-slate-800 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-black text-white mb-2">
          Need Personal Guidance?
        </h3>
        <p className="text-slate-400">
          Connect with our expert counselors for course selection and career advice.
        </p>
      </div>

      <button className="px-8 py-4 bg-[#20c9b0] hover:bg-[#18b39d] text-white font-bold rounded-2xl transition-all flex items-center gap-3 shadow-lg">
        <MessageCircle size={18} />
        Contact Us
      </button>
    </div>

  </div>
</section>
  );
};

export default FAQ;