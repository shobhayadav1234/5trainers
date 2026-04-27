import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const Placement = () => {
  return (
    <div className="relative min-h-[500px] w-full font-sans overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')`, // Using a similar professional office background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div> {/* The dark tint */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] text-center px-4 py-20">
        
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#FF8C00] uppercase tracking-wide mb-4">
          Best Placement Offered
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-white font-medium max-w-4xl border-t border-white/20 pt-4">
          We provide best career guidance along with appropriate placements.
        </p>

        {/* Floating Side Bar (Right) */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 bg-[#1e40af] p-2 rounded-l-md shadow-lg">
           <button className="p-2 text-white hover:bg-blue-700 transition-colors">
             <Phone size={20} />
           </button>
           <button className="p-2 text-white hover:bg-blue-700 transition-colors">
             <MessageCircle size={20} />
           </button>
           <button className="p-2 text-white hover:bg-blue-700 transition-colors">
             <Mail size={20} />
           </button>
        </div>

        {/* Bottom Placement Notification (Left) */}
        <div className="absolute bottom-10 left-4 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl border-l-4 border-orange-500 animate-bounce-slow">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-orange-600 font-bold">🎓</span>
          </div>
          <div className="text-left text-sm">
            <p className="font-semibold text-gray-800">Om Prakash Kumar is Placed</p>
            <p className="text-gray-500 text-xs">in BitsFlow Technology</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Placement;