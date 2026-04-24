"use client";

import React from 'react';

const Badge = () => {
  return (
    <div className="w-full bg-[#fdfaf7] py-10 border-y border-gray-100">
      <div className="container mx-auto px-4 lg:px-10">
        
        {/* Main Flex Container: Column on mobile, Row on desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          
          {/* Left Text */}
          <div className="text-gray-700 font-bold text-xl md:text-2xl lg:text-3xl whitespace-nowrap shrink-0 text-center lg:text-left">
            Our Partnered with
          </div>

          {/* Badges Container: Sabhi logos ka size uniform hai */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-8 gap-y-6 md:gap-x-12 w-full lg:w-auto">
            
            {/* Amazon Ads */}
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="flex items-center justify-center h-14 w-auto object-contain">
                <img 
                  src="/Amazon_Ads_Verified-_Partner.png" 
                  alt="Amazon Ads" 
                  className="max-h-full max-w-full"
                />
              </div>
              <span className="text-[11px] md:text-[13px] text-gray-500 font-medium">Verified partner</span>
            </div>

            {/* Google */}
            <div className="flex items-center justify-center h-14 w-auto object-contain shrink-0">
               <img 
                 src="/Google .jpg" 
                 alt="Google" 
                 className="max-h-full max-w-full" 
               />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 shrink-0">
               <div className="flex items-center justify-center h-14 w-auto object-contain">
                 <img 
                   src="/iso_banner.png" 
                   alt="Meta" 
                   className="max-h-full max-w-full" 
                 />
               </div>
               <div className="flex flex-col">
                 <div className="text-gray-700 font-bold text-2xl lg:text-3xl leading-none">Meta</div>
                 <span className="text-[11px] md:text-[13px] text-gray-500 font-medium whitespace-nowrap">Business Partner</span>
               </div>
            </div>

            {/* Meta Business Partner Badge */}
            <div className="flex items-center justify-center h-14 w-auto object-contain shrink-0">
               <img 
                 src="/meta-business-partner-badge.png" 
                 alt="Meta Business Partner" 
                 className="max-h-full max-w-full" 
               />
            </div>

            {/* ISO Badge */}
            <div className="flex items-center gap-3 border border-green-200 px-5 py-2.5 rounded-lg bg-white shadow-sm shrink-0">
              <div className="flex items-center justify-center h-14 w-auto object-contain">
                <img 
                  src="/Amazon_Ads_Verified-_Partner.png" 
                  alt="ISO" 
                  className="max-h-full max-w-full" 
                />
              </div>
              <div className="text-[11px] md:text-[13px] leading-tight font-extrabold text-gray-600 uppercase">
                ISO 9001:2015 <br /> <span className="text-green-600">Certified</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Badge;