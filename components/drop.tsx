"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu } from 'radix-ui';

const Drop = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Left side se move hone wali animation variants
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -100 // Left side se start hoga
    },
    visible: (i: number) => ({
      opacity: 1, 
      x: 0, 
      transition: { 
        delay: i * 0.1, // Ek ke baad ek aayenge (Stagger effect)
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    })
  };

  const faqs = [
    { question: "Who is this course for?", answer: "This course is ideal for quality assurance engineers, software developers, and students who want to master automation testing using Selenium and stay ahead in the tech industry." },
    { question: "Do I need any prior experience in programming?", answer: "While basic programming knowledge is helpful, we cover the fundamentals of Java/Python within the course to ensure everyone can build automation scripts." },
    { question: "What tools will I learn in this course?", answer: "You will master Selenium WebDriver, TestNG, Maven, Jenkins, Git, and GitHub for a complete automation lifecycle." },
    { question: "What programming languages are covered in this course?", answer: "The primary focus is on Java, but we also provide guidance and resources for Python-based Selenium automation." },
    { question: "What is the duration of the course?", answer: "The course typically spans 2.5 to 3 months, including hands-on projects and practical lab sessions." },
    { question: "Do I need to bring my own laptop?", answer: "Yes, we recommend bringing your own laptop so you can configure the environment and practice at home as well." },
    { question: "What is Selenium WebDriver?", answer: "Selenium WebDriver is an open-source tool used for automating web application testing across different browsers and platforms." },
    { question: "What are the prerequisites for this course?", answer: "A basic understanding of manual testing concepts and computer fundamentals is all you need to get started." },
    { question: "Will I get practical experience?", answer: "Absolutely. The course is 70% practical, focusing on real-world projects and live website testing." },
    { question: "What career opportunities can this course lead to?", answer: "You can apply for roles like Automation Test Engineer, QA Lead, SDET (Software Development Engineer in Test), and Quality Analyst." },
    { question: "Is there any certification at the end of the course?", answer: "Yes, you will receive a professional certification from Cyberyaan upon successful completion of the course and projects." },
    { question: "Do you provide job assistance?", answer: "Yes, we provide resume building, mock interviews, and job alerts to help you land your dream job." },
    { question: "Can I attend a demo class?", answer: "Yes, you can book a free trial demo class to understand our teaching methodology before enrolling." }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00a8b4] mb-2">
            Frequently Asked Questions
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            for Automation Software Testing Course
          </h3>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-4 md:p-5 rounded-full transition-all duration-300 text-left shadow-lg hover:brightness-110 ${
                  index % 2 === 0 ? 'bg-[#00a8b4]' : 'bg-[#4b6574]'
                } text-white`}
              >
                <span className="font-semibold text-sm md:text-lg pl-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="pr-4"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              {/* DROPDOWN CONTENT */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-50 mt-2 p-6 rounded-3xl text-gray-700 border border-gray-200 mx-6 shadow-inner">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drop;