
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  const partners = [
    { name: "iBilt", logo: "alumini2.jpg" },
    { name: "Accenture", logo: "alumini3.jpg" },
    { name: "Aditya Birla", logo: "alumini4.jpg"},
    { name: "Algoscalé", logo: "alumini5.jpg" },
    { name: "BAJAJ", logo: "alumini3.jpg" },
    { name: "BirlaSoft", logo: "alumini1.jpg" },
    { name: "CSC", logo: "alumini3.jpg" },
    { name: "Cognizant", logo: "alumini4.jpg" },
    { name: "IBM", logo: "alumini3.jpg" },
    { name: "TCS", logo:  "alumini1.jpg"},
  ];

  // Infinite scroll ke liye list ko double kiya hai
  const scrollLogos = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading matching the screenshot */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#051C33] inline-block border-b-4 border-[#00A9A5] pb-2 uppercase tracking-wider">
            Our Placement Partners
          </h2>
        </div>

        {/* Auto-Scrolling Logo Container */}
        <div className="relative flex items-center overflow-hidden h-32">
          <motion.div 
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 20, 
              repeat: Infinity 
            }}
          >
            {scrollLogos.map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Fading Gradients on sides for smooth look */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

        {/* Button Section */}
        <div className="text-center mt-12">
          <button className="bg-[#2A5C9A] hover:bg-[#1e4474] text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-lg uppercase tracking-wide">
            View All Partners
          </button>
        </div>

      </div>
    </section>
  );
};

export default Logo;