"use client";

import React from "react";

export default function Center() {
  return (
    <section className="w-full flex items-center justify-center bg-[oklch(0.45_0.15_250)] mb-10">
      
      {/* FULL WIDTH CONTAINER */}
      <div className="w-8xl px-4 flex flex-col md:flex-row">
        
        {/* Left Side: Image (SMALLER + TIGHT) */}
        <div className="md:w-1/2 flex items-center justify-center px-4 md:px-10 py-2 md:py-4">
          
          <img
            src="/girl.png"
            alt="Cyber Security Student"
            className="w-full max-w-[200px] md:max-w-[250px] h-auto object-contain"
          />

        </div>

        {/* Right Side: Content (TIGHT HEIGHT) */}
        <div className="md:w-1/2 px-6 md:px-16 py-2 md:py-4 flex flex-col justify-center text-white">
          
          <h2 className="text-base md:text-4xl font-bold leading-tight">
            Ready to Start Your Career in <br />
            5 Trainers Institute
          </h2>

          <p className="mt-2 md:mt-4 text-blue-100 text-xs md:text-lg font-medium">
            Mobile Number :  |   +91 8750500075
          </p>

          <div className="mt-3 md:mt-5">
            <button className="bg-white text-[oklch(0.45_0.15_250)] font-bold py-2 px-4 md:px-8 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg">
              Book your Seat Now
              <span className="text-base md:text-xl">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}