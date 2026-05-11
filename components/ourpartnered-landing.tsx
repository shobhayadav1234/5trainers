"use client";

import React from "react";
import { Atom } from "lucide-react";

const Badge = () => {
  return (
    <section className="relative w-full bg-white py-16 border-y border-slate-100 overflow-hidden">
      {/* Decorative Background Element - Adds a "Premium" feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#20c9b0_0%,_transparent_70%)]" />
      </div>

      {/* Container */}
      <div className="max-w-8xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Brand Header Section with Highlighted Icon */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#20c9b0] to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-14 h-14 rounded-2xl bg-[#020817] border border-[#20c9b0]/30 flex items-center justify-center shadow-xl">
                <Atom size={32} className="text-[#20c9b0] animate-[spin_10s_linear_infinite]" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[#20c9b0] uppercase tracking-[0.4em] text-[11px] font-black mb-1">
                Official
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                Our Industry{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#20c9b0]">Partners</span>
                  {/* Subtle underline highlight */}
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#20c9b0]/10 -z-10"></span>
                </span>
              </h2>
            </div>
          </div>

          {/* BADGES WRAPPER - Increased spacing and subtle divider */}
          <div className="flex flex-nowrap items-center gap-12 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 no-scrollbar">
            
            {/* Individual Badge Styles */}
            {[
              { src: "/Amazon_Ads_Verified-_Partner.png", label: "Verified Partner", alt: "Amazon" },
              { src: "/Google .jpg", label: "Certified", alt: "Google" },
              { src: "/iso_banner.png", label: "Quality Standard", alt: "ISO" },
              { src: "/meta-business-partner-badge.png", label: "Business Partner", alt: "Meta" }
            ].map((partner, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 shrink-0 group">
                <div className="h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-14 w-auto object-contain filter grayscale-[0.2] group-hover:grayscale-0 transition-all"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#20c9b0] transition-colors">
                  {partner.label}
                </span>
              </div>
            ))}

            {/* ISO 9001:2015 Box - Made to look like a "Certificate" */}
            <div className="flex items-center gap-5 border-l-2 border-slate-200 pl-8 py-3 shrink-0">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#1db954] uppercase tracking-widest mb-1">
                  Accredited Agency
                </span>
                <div className="text-base font-black text-slate-900 leading-tight">
                  ISO 9001:2015 <br />
                  <span className="bg-[#1db954]/10 text-[#1db954] px-1 rounded">
                    Certified Organization
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Badge;