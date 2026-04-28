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

  // Infinite loop ke liye logos repeat kiye hain
  const scrollLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
            5Trainers's <span className="text-[#00a3c8]">Placement Partners</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
            We have 1700+ placement partners who hire our talent for diverse digital marketing roles in their companies.
          </p>
        </div>

        {/* --- Fast Auto-Scrolling Marquee --- */}
        <div className="relative">
          {/* Edge Fading Effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-fast whitespace-nowrap py-8 items-center">
              {scrollLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="mx-10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                >
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Speed control via CSS */}
      <style jsx>{`
        @keyframes marqueeFast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          /* Speed ko 15s rakha hai fast scroll ke liye */
          animation: marqueeFast 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PlacementPartners;