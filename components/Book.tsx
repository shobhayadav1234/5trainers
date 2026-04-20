"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Book = () => {
  // Animation Variants for the Slide Down effect
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -80 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 20,
        duration: 1,
        delay: 0.1
      } 
    }
  };

  const highlights = [
    { title: "Selenium WebDriver", desc: "Learn to automate browser interactions, simulate user actions, and test web applications. Gain proficiency in writing robust automation scripts to handle dynamic web elements and complex scenarios." },
    { title: "Programming Language (Java/Python)", desc: "The course covers test script development using popular programming languages like Java or Python. Students will learn how to write clear, reusable, and maintainable test scripts." },
    { title: "TestNG Framework", desc: "Understand how to use TestNG for test case management, parallel test execution, reporting, and logging." },
    { title: "Handling Dynamic Elements", desc: "Learn techniques for handling dynamic web elements such as dropdowns, modals, and pop-ups, which are commonly encountered in modern web applications." },
    { title: "Continuous Integration (CI)", desc: "Learn to integrate automated test scripts with Jenkins for continuous integration, enabling automated testing during the build and deployment process." },
    { title: "Version Control", desc: "Gain hands-on experience with Git to manage test scripts and collaborate with team members in version control systems." },
    { title: "Real-World Projects", desc: "The course offers practical exposure through real-world projects, allowing students to apply their learning to actual web applications and solve testing challenges." },
  { title: "Real-World Projects", desc: "The course offers practical exposure through real-world projects, allowing students to apply their learning to actual web applications and solve testing challenges." }
 ]; 
  return (
    // Is main div ko overflow-hidden rakha hai taaki arrow screen se bahar na jaye
    <div className="bg-[#fcfdfe] font-sans min-h-screen py-16 px-6 md:py-24 overflow-hidden relative">
      
      <div className="container mx-auto max-w-6xl relative">
        
        {/* Animated Main Card */}
        <motion.div
          className="bg-white p-8 md:p-16 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-gray-100 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariants}
        >
          {/* Header Section */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a202c] mb-8 leading-tight">
            Selenium Automation Software Testing Course in Mohali Overview
          </h2>
          
          <div className="text-gray-600 space-y-6 leading-relaxed mb-12 text-sm md:text-lg">
            <p>
              The <span className="font-semibold text-black">Selenium Automation Software Testing Course in Mohali</span> is designed to provide comprehensive training in both manual and automated software testing, with a strong focus on <span className="font-semibold text-[#00a8b4]">Selenium WebDriver</span>—the most widely used tool for automating web application testing.
            </p>
            <p>
              In this course, participants will gain a deep understanding of the <span className="font-semibold text-black">software testing lifecycle</span>, types of testing, and the importance of quality assurance. The journey starts with manual testing and transitions into automation with <span className="font-semibold text-black">Selenium WebDriver, TestNG</span>, and other tools.
            </p>
          </div>

          {/* Highlights Section */}
          <h3 className="text-2xl font-bold text-[#1a202c] mb-8 border-b pb-4">Key Highlights</h3>
          
          <ul className="space-y-6">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="text-[#00a8b4] mt-1 text-xl font-bold group-hover:scale-125 transition-transform">•</span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  <span className="font-bold text-black">{item.title}:</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Decorative Elements from image_fa9c61 */}
        {/* Blue Dots Grid */}
        <div className="absolute right-[-40px] bottom-40 opacity-20 hidden lg:block z-0">
          <div className="grid grid-cols-5 gap-3">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#00a8b4] rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Blue Arrow/Triangle */}
        <div className="absolute right-0 bottom-10 opacity-30 hidden lg:block z-0">
            <svg width="60" height="60" viewBox="0 0 50 50" fill="none" stroke="#005cff" strokeWidth="2">
                <path d="M10 10L40 25L10 40Z" />
            </svg>
        </div>

      </div>
    </div>
  );
};

export default Book;