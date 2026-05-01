"use client";
import React from 'react';

const PlacementPartners = () => {
  const logos = [
    { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "Zomato", url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" },
    { name: "Blinkit", url: "/logo-10.jpg" },
    { name: "Indeed", url: "/logo-07.jpg" },
    { name: "Urban Company", url: "/logo-08.jpg" },
    { name: "BIZAMPS", url: "/logo-09.jpg" },
    { name: "ACS World", url: "/logo-13.JPG" },
    { name: "Fresco", url: "/logo-05.jpg" },
  ];

  // Infinite loop logic
  const scrollLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-8xl mx-auto px-6">

        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#20c9b0]/10 text-[#20c9b0] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Career Excellence
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            Our <span className="text-[#20c9b0]">Placement Partners</span>
          </h2>

          <p className="text-slate-500 max-w-3xl mx-auto font-medium text-lg md:text-xl leading-relaxed">
            Humare <span className="text-slate-900 font-bold">1700+ placement partners</span> top-tier companies hain jo Mindweave Academy ke skilled students ko hire karte hain.
          </p>
        </div>

        {/* --- Smooth Auto-Scrolling Marquee --- */}
        <div className="relative group">
          {/* Clean Edge Fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-continuous whitespace-nowrap py-12 items-center">
              {scrollLogos.map((logo, index) => (
                <div
                  key={index}
                  className="mx-12 flex-shrink-0 transition-all duration-500 transform hover:scale-110"
                >
                  <div className="bg-slate-50 hover:bg-[#20c9b0]/5 border border-slate-100 hover:border-[#20c9b0]/20 rounded-2xl px-8 py-6 shadow-sm hover:shadow-md transition-all duration-500">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="h-10 md:h-14 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
    @keyframes marqueeContinuous {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-marquee-continuous {
      animation: marqueeContinuous 25s linear infinite;
    }

    .group:hover .animate-marquee-continuous {
      animation-play-state: paused;
    }
  `}</style>
    </section>
  );
};

export default PlacementPartners;