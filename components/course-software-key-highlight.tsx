"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const Book = ({
  title = "",
  paragraphs = [],
  highlights = []
}: any) => {

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: -80 },
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

  return (
    <div className="bg-[#fcfdfe] font-sans min-h-screen py-16 px-6 md:py-24 overflow-hidden relative">
      
      <div className="container mx-auto max-w-6xl relative">
        
        {/* MAIN CARD */}
        <motion.div
          className="bg-white p-8 md:p-16 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-gray-100 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariants}
        >

          {/* 🔥 Dynamic TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a202c] mb-8 leading-tight">
            {title}
          </h2>

          {/* 🔥 Dynamic PARAGRAPHS */}
          <div className="text-gray-600 space-y-6 leading-relaxed mb-12 text-sm md:text-lg">
            {paragraphs.length > 0 ? (
              paragraphs.map((para: string, index: number) => (
                <p key={index}>{para}</p>
              ))
            ) : (
              <p>No content available</p>
            )}
          </div>

          {/* 🔥 Highlights */}
          <h3 className="text-2xl font-bold text-[#1a202c] mb-8 border-b pb-4">
            Key Highlights
          </h3>

          <ul className="space-y-6">
            {highlights.length > 0 ? (
              highlights.map((item: any, index: number) => (
                <li key={index} className="flex items-start gap-4 group">
                  <span className="text-[#00a8b4] mt-1 text-xl font-bold group-hover:scale-125 transition-transform">
                    •
                  </span>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    <span className="font-bold text-black">
                      {item.title}:
                    </span>{" "}
                    {item.desc}
                  </p>
                </li>
              ))
            ) : (
              <p>No highlights available</p>
            )}
          </ul>
        </motion.div>

        {/* DESIGN ELEMENTS SAME */}
        <div className="absolute right-[-40px] bottom-40 opacity-20 hidden lg:block z-0">
          <div className="grid grid-cols-5 gap-3">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#00a8b4] rounded-full"></div>
            ))}
          </div>
        </div>

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