"use client";

import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

const Write = ({
  aboutTitle = "",
  aboutPara1 = "",
  aboutPara2 = "",
  aboutPara3 = "",
  learningObjectives = [],
  modules = [],
  requirements = [], // ✅ NEW
  courseName = "",
}: any) => {
  return (
    <section className="bg-white py-8 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-10 md:space-y-12">

            {/* 1. About Section */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                {aboutTitle}
              </h2>

              <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
                <p>{aboutPara1}</p>
                <p>{aboutPara2}</p>
                <p>{aboutPara3}</p>
              </div>
            </div>

            {/* 2. Learning Objectives */}
            <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-8 text-white shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-6">
                Learning Objectives
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {learningObjectives.length > 0 ? (
                  learningObjectives.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-cyan-400 shrink-0 mt-1"
                        size={16}
                      />
                      <span className="text-xs md:text-sm text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">
                    No learning objectives available
                  </p>
                )}
              </div>
            </div>

            {/* 3. Requirements (NOW DYNAMIC BUT SAME UI) */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Requirements of {courseName} Training Course
              </h2>

              <ul className="space-y-6 text-gray-600 text-sm md:text-base">
                {requirements.length > 0 ? (
                  requirements.map((item: string, index: number) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-cyan-600 font-bold mt-1 shrink-0">
                        →
                      </span>
                      <p>{item}</p>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">
                    No requirements available
                  </p>
                )}
              </ul>
            </div>

            {/* 4. Curriculum */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-b pb-2">
                {courseName} Course Curriculum
              </h2>

              <div className="grid grid-cols-1 gap-1">
                {modules.length > 0 ? (
                  modules.map((title: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 py-2.5 px-1 border-b border-gray-100 hover:bg-gray-50 transition group cursor-pointer"
                    >
                      <ChevronRight
                        size={14}
                        className="text-cyan-500 group-hover:translate-x-1 transition"
                      />

                      <span className="text-xs md:text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Module{" "}
                          {index + 1 < 10
                            ? `0${index + 1}`
                            : index + 1}
                          :
                        </span>{" "}
                        {title}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">
                    No modules available
                  </p>
                )}
              </div>
            </div>

            {/* 5. Button */}
            <div className="pt-4">
              <button className="w-full sm:w-auto bg-[#00a8b4] hover:bg-[#008c96] text-white px-8 py-3.5 rounded-md flex items-center justify-center gap-2 font-bold shadow-md active:scale-95">
                Call Now +91 7428748576 →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE FORM (UNCHANGED UI) */}
          <div className="lg:col-span-1 lg:sticky lg:top-6 mt-10 lg:mt-0">
            <div className="bg-[#00a8b4] rounded-xl p-6 md:p-8 shadow-2xl text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Book your Trial Demo Class
              </h3>

              <p className="text-white/90 text-xs md:text-sm mb-6">
                You can call us at +91 7428748576
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm outline-none border-none focus:ring-2 focus:ring-black/10"
                />

                <input
                  type="email"
                  placeholder="Your Email ID"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm outline-none border-none focus:ring-2 focus:ring-black/10"
                />

                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm outline-none border-none focus:ring-2 focus:ring-black/10"
                />

                <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-500 text-sm outline-none border-none appearance-none cursor-pointer">
                  <option>Select Course</option>
                  <option>{courseName}</option>
                </select>

                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                  <input
                    type="text"
                    placeholder="Captcha"
                    className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white text-gray-800 text-sm outline-none border-none"
                  />
                  <div className="bg-white px-4 py-2 rounded-lg font-mono font-bold text-red-500 text-sm select-none shadow-inner text-center">
                    w3gdWc
                  </div>
                </div>

                <p className="text-right text-[10px] text-white underline cursor-pointer opacity-80 hover:opacity-100">
                  Reload
                </p>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-all mt-4 uppercase tracking-widest shadow-lg active:scale-95"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Write;