"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Globe, Download, Phone, Star, ChevronRight } from "lucide-react";

const HeroSection = ({
  title,
  description,
  image,
  category,
}: {
  title: string;
  description: string;
  image: string;
  category: string;
}) => {
  return (
    <section className="relative min-h-[600px] md:h-[700px] w-full overflow-hidden flex items-center py-12 md:py-0">
      
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75 md:bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 z-10">
        <div className="max-w-3xl text-white">
          
          {/* Breadcrumb */}
          <nav className="text-[12px] md:text-sm mb-4 text-gray-400 flex items-center gap-1">
            Home <ChevronRight size={12} /> {category}
          </nav>

          {/* Heading */}
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>

          {/* Badge + Rating */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="bg-[#eab308] text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded">
              Bestseller
            </span>

            <div className="flex items-center gap-1 text-[#eab308]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <span className="ml-1 text-white text-xs md:text-sm border-b border-white/50 cursor-pointer hover:text-cyan-400">
                Course Review
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <Monitor size={18} className="text-cyan-400" />
              <span>
                Course Delivery:{" "}
                <span className="font-semibold text-cyan-400">
                  Online & Offline
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={18} className="text-cyan-400" />
              <span>
                Language:{" "}
                <span className="font-semibold text-cyan-400">
                  Hindi, English
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Download size={18} className="text-cyan-400" />
              <span className="cursor-pointer hover:underline">
                Download:{" "}
                <span className="font-semibold text-cyan-400">
                  Course Content
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-cyan-400" />
              <span>
                Mobile:{" "}
                <span className="font-semibold text-cyan-400">
                  +91 87505 00075
                </span>
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="w-full sm:w-auto bg-[#00a8b4] hover:bg-[#008c96] text-white px-8 py-3.5 rounded-md flex items-center justify-center gap-2 font-semibold shadow-lg">
            View Course Content →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;