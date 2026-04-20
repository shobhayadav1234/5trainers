"use client";

import React from 'react';

const Badge = () => {
  return (
    <div className="w-full bg-[#fdfaf7] py-10 border-y border-gray-100">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Main Flex Container: Items center aur line mein rakhne ke liye */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
          
          {/* Left Text: Isse flex-shrink-0 diya hai taaki ye dabbe nahi */}
          <div className="text-gray-700 font-bold text-xl md:text-2xl lg:text-3xl whitespace-nowrap shrink-0 lg:text-left text-center">
            CIIM is Partnered with
          </div>

          {/* Badges Container: Ek hi row mein bade sizes ke saath */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end gap-6 md:gap-10 lg:gap-12 w-full">
            
            {/* Amazon Ads */}
            <div className="flex flex-col items-center shrink-0">
              <img 
                src="/Amazon_Ads_Verified-_Partner.png" 
                alt="Amazon Ads" 
                className="h-14 md:h-20 lg:h-17 object-contain" 
              />
              <span className="text-[10px] md:text-[12px] text-gray-400 font-medium mt-1">Verified partner</span>
            </div>

            {/* ISO Badge */}
            <div className="flex items-center gap-3 border border-green-200 px-5 py-3 rounded-md bg-white shadow-sm shrink-0">
              <img src="/Google .jpg" alt="ISO" className="h-12 md:h-16 lg:h-17 object-contain" />
              <div className="text-[10px] md:text-[12px] leading-tight font-extrabold text-gray-500 uppercase">
                ISO 9001:2015 <br /> <span className="text-green-600">Certified</span>
              </div>
            </div>

            {/* Google Partner */}
            <div className="flex items-center shrink-0">
               <img 
                 src="/meta-business-partner-badge.png" 
                 alt="Google Partner" 
                 className="h-16 md:h-24 lg:h-17 object-contain" 
               />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 shrink-0">
               <img src="/iso_banner.png" alt="Meta" className="h-10 md:h-4 lg:h-15 object-contain" />
               <div className="flex flex-col">
                 <div className="text-gray-700 font-bold text-xl lg:text-2xl leading-none">Meta</div>
                 <span className="text-[10px] md:text-[12px] text-gray-400 font-medium">Business Partner</span>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Badge;