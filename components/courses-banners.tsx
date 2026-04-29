"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const Move = ({
  titleLine1 = "Selenium Automation",
  titleLine2 = "Software Testing",
  description = "Learn Selenium automation for web testing, creating efficient test scripts and ensuring software quality.",
  buttonText = "CALL TO EXPERT NOW"
}: any) => {

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const leftMoveVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const zoomInVariants: Variants = {
    hidden: { scale: 0.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="bg-[#f2f4f6] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-center">
          
          <motion.div
            className="md:col-span-6 space-y-6"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              
              <motion.span variants={leftMoveVariants} className="block">
                {titleLine1}
              </motion.span>

              <motion.span 
                variants={leftMoveVariants} 
                className="block text-[#00a8b4]"
              >
                {titleLine2}
              </motion.span>

            </motion.h1>

            <motion.p 
              variants={leftMoveVariants}
              className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
            >
              {description}
            </motion.p>
          </motion.div>

          <motion.div 
            className="md:col-span-4 flex justify-center md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.button
              variants={zoomInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-base md:text-lg px-8 py-3 rounded-md shadow-2xl shadow-red-500/20 transition-colors uppercase"
            >
              {buttonText}
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Move;