"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  const partners = [
    { name: "iBilt", logo: "/alumini2.jpg" },
    { name: "Accenture", logo: "/alumini3.jpg" },
    { name: "Aditya Birla", logo: "/alumini4.jpg" },
    { name: "Algoscalé", logo: "/alumini5.jpg" },
    { name: "BAJAJ", logo: "/alumini3.jpg" },
    { name: "BirlaSoft", logo: "/alumini1.jpg" },
    { name: "CSC", logo: "/alumini3.jpg" },
    { name: "Cognizant", logo: "/alumini4.jpg" },
    { name: "IBM", logo: "/alumini3.jpg" },
    { name: "TCS", logo: "/alumini1.jpg" },
  ];

  const scrollLogos = [...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#20C9B0]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FFB81C]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-black text-[#051C33] inline-block border-b-4 border-[#20C9B0] pb-3 uppercase tracking-wider">
            Our Placement Partners
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by leading global companies hiring Mindweave Academy graduates.
          </p>
        </motion.div>

        {/* Logo Scroller */}
        <div className="relative flex items-center overflow-hidden h-36 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">

          <motion.div
            className="flex gap-14 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 22,
              repeat: Infinity,
            }}
          >
            {scrollLogos.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.12,
                  y: -6,
                }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex-shrink-0 w-44 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Fade Effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link href="/placement" scroll={true}>
            <motion.button
              whileHover={{
                scale: 1.06,
                y: -3,
              }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[#FFB81C] hover:bg-[#b68a2b] text-white font-black py-4 px-12 rounded-full transition-all duration-300 shadow-xl uppercase tracking-widest text-sm"
            >
              View All Partners
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Logo;