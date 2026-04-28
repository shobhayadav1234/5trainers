"use client";
import React from 'react';

const Vision = () => {
  return (
    <section className="bg-[#2d2d2d] text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 space-y-12">
          
          {/* Our Vision */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              At Cyberyuan, our vision is to create a more secure digital world by providing 
              businesses with comprehensive cybersecurity solutions. We believe that every 
              business should have access to effective and affordable cybersecurity services, 
              regardless of their size or industry. Our goal is to be a trusted partner for 
              businesses seeking to protect themselves against cyber threats. We aim to 
              provide our clients with the knowledge and tools they need to defend against 
              cyber attacks and safeguard their digital assets and sensitive information.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Our mission is to help businesses identify and mitigate their cybersecurity risks 
              through our suite of services, which include vulnerability assessments, 
              penetration testing, incident response, security consulting, and managed security 
              services. We believe in taking a collaborative approach to cybersecurity and 
              working closely with our clients to understand their unique needs and challenges.
            </p>
          </div>

        </div>

        {/* Right Side: Illustration Container */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            {/* Note: Since this is a custom illustration, you can replace the <img> src 
               with your actual SVG or PNG path from your public folder.
            */}
            <img 
              src="/our-vision.jpg" 
              alt="Vision and Mission Illustration" 
              className="w-full h-auto drop-shadow-2xl"
            />
            
            {/* Decorative background shape to mimic the UI in the image */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0073b1]/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Vision;