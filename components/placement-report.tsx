"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { 
  FileText, 
  BookOpen, 
  CheckSquare, 
  HelpCircle, 
  Award, 
  TrendingUp, 
  Shield, 
  Lock 
} from "lucide-react";
import { CourseContent } from "@/types";

interface PlacementReportProps {
  course: CourseContent;
}

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
}

export default function PlacementReport({ course }: PlacementReportProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const handleButtonClick = (actionType: string, url?: string) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert(`${actionType} action triggered dynamically for ${course.write?.courseName || "this course"}`);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log("Placement Lead captured:", data);
    alert(`Thank you ${data.fullName}! Your request has been submitted.`);
    reset();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="w-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-6 md:p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Block: Course Details & Action CTAs */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-8">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-white mb-4">
                {course.move?.titleLine1 || "Security Testing Course"} Insights & Ecosystem
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                {course.move?.description || "Explore placement parameters, active hiring drives, and performance metrics associated with our specialized training batch modules."}
              </p>
            </div>

            {/* Accreditations Dynamic Row Block using Lucide Icons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Accredited By & Rated
              </p>
              
              <div className="flex flex-wrap gap-3 items-center">
                {course.accreditations && course.accreditations.length > 0 ? (
                  course.accreditations.map((acc, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-800 shadow-2sm"
                    >
                      <Award className="w-4 h-4 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {acc.name}
                      </span>
                      {acc.rating && (
                        <span className="text-[11px] bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 font-bold px-1.5 py-0.5 rounded ml-1">
                          {acc.rating} ★
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-800">
                      <Shield className="w-4 h-4 text-sky-600 flex-shrink-0" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">NASSCOM MEMBER</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-800">
                      <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">4.9/5 (1.2K Votes)</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Core Action Grid Buttons using Lucide Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleButtonClick('Placement Report', course.placementReportUrl)}
                className="inline-flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white font-bold h-14 rounded-xl shadow-sm transition-all active:scale-[0.99] group text-sm tracking-wider"
              >
                <FileText className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                PLACEMENT REPORT
              </button>

              <button
                type="button"
                onClick={() => handleButtonClick('Download Syllabus', course.syllabusUrl)}
                className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-bold h-14 rounded-xl shadow-sm transition-all active:scale-[0.99] group text-sm tracking-wider"
              >
                <BookOpen className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                DOWNLOAD SYLLABUS
              </button>

              <button
                type="button"
                onClick={() => handleButtonClick('Mock Test', course.mockTestUrl)}
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-14 rounded-xl shadow-sm transition-all active:scale-[0.99] group text-sm tracking-wider"
              >
                <CheckSquare className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                ATTEMPT MOCK TEST
              </button>

              <button
                type="button"
                onClick={() => handleButtonClick('Interview Questions', course.interviewQuestionsUrl)}
                className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white font-bold h-14 rounded-xl shadow-sm transition-all active:scale-[0.99] group text-sm tracking-wider"
              >
                <HelpCircle className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                INTERVIEW QUESTIONS
              </button>
            </div>
          </div>

          {/* Right Block: Job Stats & Lead Form Module */}
          <div className="lg:col-span-1 flex flex-col space-y-6 w-full">

            {/* Current Job Market Analytics Tracker */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 border border-blue-100/60 dark:border-blue-950/50 p-5 rounded-2xl shadow-sm">
              <div className="mb-3.5">
                <h3 className="text-xs font-extrabold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Current Job Market
                </h3>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Open Jobs</span>
                  <p className="text-base font-black text-slate-900 dark:text-slate-100">{course.stats?.openJobs || "12.5k+"}</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Avg Package</span>
                  <p className="text-base font-black text-slate-900 dark:text-slate-100">{course.stats?.avgPackage || "8.5 LPA"}</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Places</span>
                  <p className="text-base font-black text-slate-900 dark:text-slate-100">{course.stats?.places || "2,100+"}</p>
                </div>
              </div>
            </div>

            {/* Lead Capture Card with Lucide Lock icon */}
            <div className="bg-slate-950 border border-slate-800 text-white shadow-xl rounded-2xl p-6">
              <div className="text-center mb-5">
                <h3 className="text-lg font-bold tracking-tight text-white">
                  Fast-Track Your Career
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Limited Counselling Slots Available
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    {...register("fullName", { required: "Name is required" })}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 font-medium px-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email syntax" }
                    })}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 font-medium px-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex rounded-xl overflow-hidden border border-slate-800 bg-slate-900 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                    <span className="inline-flex items-center px-3 border-r border-slate-800 bg-slate-850 text-slate-400 text-sm font-medium select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      className="w-full bg-transparent border-0 text-white placeholder-slate-500 h-12 px-4 py-2.5 text-sm focus:outline-none"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: { value: /^[0-9]{10}$/, message: "Enter valid 10 digit layout" }
                      })}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-400 font-medium px-1">{errors.phone.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 active:scale-[0.99] text-white font-extrabold h-12 rounded-xl text-xs tracking-wider uppercase shadow-md transition duration-200 mt-2 flex items-center justify-center"
                >
                  CLAIM FREE CAREER ROADMAP →
                </button>
              </form>
              
              <div className="flex items-center justify-center space-x-1 text-slate-500 mt-4">
                <Lock className="w-3 h-3" />
                <p className="text-[10px] tracking-wide">
                  Your details are 100% secure
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}