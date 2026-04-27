import React from 'react';

const Alumni = () => {
  const partners = [
    { name: "iBilt", logo: "/alumini1.jpg" },
    { name: "Accenture", logo: "/alumini2.jpg"},
    { name: "Aditya Birla", logo: "/alumini3.jpg" },
    { name: "Algoscalé", logo: "/alumini4.jpg" },
    { name: "BAJAJ", logo: "/alumini5.jpg" },
    { name: "BirlaSoft", logo: "/alumini6.jpg" },
    { name: "CSC", logo: "/alumini7.jpg" },
    { name: "Cognizant", logo: "/alumini8.jpg"},
    { name: "Hewitt", logo: "/alumini9.jpg"},
    { name: "IBM", logo: "/alumini10.jpg" },
    { name: "Sopra Steria", logo: "/alumini1.jpg" },
    { name: "TCS", logo: "/alumini5.jpg" },
    { name: "Jubilant", logo: "/alumini4.jpg" },
    { name: "Infosys", logo: "/alumini5.jpg" },
  ];

  return (
    <section className="relative w-full bg-[#051C33] overflow-hidden">
      {/* Background Pattern Overlay (Optional: creates the diamond/grid effect) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              ALUMNI PLACED
            </h2>
            
            <p className="text-[#FFD700] font-semibold text-lg mb-8 italic">
              IT Training Accelerates Your Skills!
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              We believe in interactive learning that is 7 times more effective than passive 
              learning. Today, every company requires digital transformation and they are 
              looking for effective ways to minimize the skills gap. We help corporates with best 
              training programs to align cutting-edge technologies and employees together.
            </p>
          </div>

          {/* Right Side: Logos Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 flex items-center justify-center h-20 shadow-lg transform transition-transform hover:scale-105"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Alumni;