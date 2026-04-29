"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Drop = ({
  title = "Frequently Asked Questions",
  faqs = []
}: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8fafc] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00a8b4] mb-12">
          {title}
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((item: any, index: number) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                  delay: index * 0.05
                }}
                className={`border rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-gray-200"
                    : "bg-[#00a8b4] border-[#00a8b4]"
                }`}
              >

                {/* QUESTION */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span
                    className={`font-semibold text-sm md:text-base transition ${
                      isOpen ? "text-gray-800" : "text-white"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`text-xl font-bold transition ${
                      isOpen ? "text-[#00a8b4]" : "text-white"
                    }`}
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </motion.button>

                {/* ANSWER */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed bg-white">
                    {item.answer}
                  </div>
                </motion.div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Drop;