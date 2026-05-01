"use client";

import React from "react";
import { Atom } from "lucide-react";

const Badge = () => {
  return (
    <section className="w-full bg-white py-12 border-y border-slate-100 overflow-hidden">

      {/* Container - Responsive width matching your premium layout */}
      <div className="max-w-8xl mx-auto px-4 md:px-6">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Brand Header Section */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-[#020817] border border-[#20c9b0]/20 flex items-center justify-center shadow-md">
              <Atom size={28} className="text-[#20c9b0] animate-spin-slow" />
            </div>

            <div className="flex flex-col">
              <span className="text-[#20c9b0] uppercase tracking-[0.3em] text-[10px] font-black">
                Official
              </span>

              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Our Industry{" "}
                <span className="text-[#20c9b0]">
                  Partners
                </span>
              </h2>
            </div>
          </div>

          {/* BADGES WRAPPER - Original Colors, No Hover Effects */}
          <div className="flex flex-nowrap items-center gap-10 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">

            {/* Amazon Ads */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="h-20 flex items-center justify-center">
                <img
                  src="/Amazon_Ads_Verified-_Partner.png"
                  alt="Amazon Ads"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Verified Partner</span>
            </div>

            {/* Google */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="h-20 flex items-center justify-center">
                <img
                  src="/Google .jpg"
                  alt="Google"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Certified</span>
            </div>

            {/* ISO Banner */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="h-20 flex items-center justify-center">
                <img
                  src="/iso_banner.png"
                  alt="ISO"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Quality Standard</span>
            </div>

            {/* Meta Badge */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="h-20 flex items-center justify-center">
                <img
                  src="/meta-business-partner-badge.png"
                  alt="Meta"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Business Partner</span>
            </div>

            {/* ISO 9001:2015 Information Box */}
            <div className="flex items-center gap-4 border-l-4 border-[#1db954] pl-6 py-2 bg-slate-50 rounded-r-2xl shrink-0">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Accredited Agency</span>
                <div className="text-sm font-black text-slate-900 leading-tight">
                  ISO 9001:2015 <br />
                  <span className="text-[#1db954]">Certified Organization</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Custom Styles for a clean, scrollbar-less look on mobile */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Badge;