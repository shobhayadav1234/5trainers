"use client";

import React from "react";

const Badge = () => {
  return (
    <div className="w-full bg-[#fdfaf7] py-10 border-y border-gray-100">

      {/* ✅ SAME WIDTH AS NAVBAR */}
      <div className="max-w-8xl mx-auto px-4 md:px-6">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

        <div className="flex items-center gap-2 text-gray-700 font-bold text-xl md:text-2xl lg:text-3xl">
        <span>Our Partnered</span>
        <span className="ml-auto lg:ml-0">with</span>
        </div>
          {/* ✅ BADGES (single line, no wrap) */}
          <div className="flex flex-nowrap items-center gap-8 overflow-x-auto w-full lg:w-auto">

            {/* Amazon Ads */}
            <div className="flex items-center gap-2 shrink-0">
              <img
                src="/Amazon_Ads_Verified-_Partner.png"
                alt="Amazon Ads"
                className="h-12"
              />
              <span className="text-xs text-gray-500">Verified</span>
            </div>

            {/* Google */}
            <div className="shrink-0">
              <img
                src="/Google .jpg"
                alt="Google"
                className="h-12"
              />
            </div>

            {/* ISO */}
            <div className="shrink-0">
              <img
                src="/iso_banner.png"
                alt="ISO"
                className="h-12"
              />
            </div>

            {/* Meta Badge */}
            <div className="shrink-0">
              <img
                src="/meta-business-partner-badge.png"
                alt="Meta"
                className="h-12"
              />
            </div>

            {/* ISO Certified Box */}
            <div className="flex items-center gap-2 border border-green-200 px-4 py-2 rounded-lg bg-white shadow-sm shrink-0">
              <img
                src="/Amazon_Ads_Verified-_Partner.png"
                alt="ISO"
                className="h-10"
              />
              <div className="text-xs font-bold text-gray-600 uppercase leading-tight">
                ISO 9001:2015 <br />
                <span className="text-green-600">Certified</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Badge;