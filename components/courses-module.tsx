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
  requirements = [],
  courseName = "",
}: any) => {
  return (
    <section className="bg-white py-8 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-10 md:space-y-12">

            {/* About Section */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
                {aboutTitle}
              </h2>

              <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base font-medium">
                <p>{aboutPara1}</p>
                <p>{aboutPara2}</p>
                <p>{aboutPara3}</p>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-black rounded-2xl p-5 md:p-8 text-white shadow-xl border border-slate-800">
              <h3 className="text-lg md:text-xl font-black mb-6 uppercase tracking-wide text-[#20c9b0]">
                Learning Objectives
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {learningObjectives.length > 0 ? (
                  learningObjectives.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-[#20c9b0] shrink-0 mt-1"
                        size={16}
                      />
                      <span className="text-xs md:text-sm text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400 text-sm">
                    No learning objectives available
                  </p>
                )}
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                Requirements of {courseName} Training Course
              </h2>

              <ul className="space-y-6 text-slate-600 text-sm md:text-base font-medium">
                {requirements.length > 0 ? (
                  requirements.map((item: string, index: number) => (
                    <li key={index} className="flex gap-3 items-start">
                      <span className="text-[#20c9b0] font-black mt-1 shrink-0">
                        →
                      </span>
                      <p>{item}</p>
                    </li>
                  ))
                ) : (
                  <p className="text-slate-400 text-sm">
                    No requirements available
                  </p>
                )}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 border-b border-slate-200 pb-3">
                {courseName} Course Curriculum
              </h2>

              <div className="grid grid-cols-1 gap-1">
                {modules.length > 0 ? (
                  modules.map((title: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 py-3 px-2 border-b border-slate-100 hover:bg-slate-50 transition group cursor-pointer rounded-lg"
                    >
                      <ChevronRight
                        size={16}
                        className="text-[#20c9b0] group-hover:translate-x-1 transition"
                      />

                      <span className="text-xs md:text-sm text-slate-700">
                        <span className="font-black text-slate-900">
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
                  <p className="text-slate-400 text-sm">
                    No modules available
                  </p>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="w-full sm:w-auto bg-[#20c9b0] hover:bg-black text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-2 font-black shadow-lg active:scale-95 uppercase tracking-wider transition-all">
                Call Now +91 87505 00075→
              </button>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-1 lg:sticky lg:top-6 mt-10 lg:mt-0">
            <div className="bg-black rounded-2xl p-6 md:p-8 shadow-2xl text-white border border-slate-800">
              <h3 className="text-xl md:text-2xl font-black mb-2">
                Book your <span className="text-[#20c9b0]">Trial Demo Class</span>
              </h3>

              <p className="text-slate-400 text-xs md:text-sm mb-6">
                You can call us at +91-87505 00075
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm outline-none border-none focus:ring-2 focus:ring-[#20c9b0]"
                />

                <input
                  type="email"
                  placeholder="Your Email ID"
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm outline-none border-none focus:ring-2 focus:ring-[#20c9b0]"
                />

                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 text-sm outline-none border-none focus:ring-2 focus:ring-[#20c9b0]"
                />

                <select className="w-full px-4 py-3 rounded-xl bg-white text-slate-500 text-sm outline-none border-none appearance-none cursor-pointer">
                  <option>Select Course</option>
                  <option>{courseName}</option>
                </select>

                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                  <input
                    type="text"
                    placeholder="Captcha"
                    className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-white text-slate-800 text-sm outline-none border-none"
                  />
                  <div className="bg-white px-4 py-2 rounded-xl font-mono font-black text-[#20c9b0] text-sm select-none shadow-inner text-center">
                    w3gdWc
                  </div>
                </div>

                <p className="text-right text-[10px] text-slate-400 underline cursor-pointer hover:text-white">
                  Reload
                </p>

                <button
                  type="submit"
                  className="w-full bg-[#20c9b0] text-white py-4 rounded-2xl font-black hover:bg-white hover:text-black transition-all mt-4 uppercase tracking-widest shadow-lg active:scale-95"
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