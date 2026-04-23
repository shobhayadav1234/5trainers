"use client";
import React from 'react';

// Modules data array - exact content from image
const modules = [
  {
    title: "Introduction to Web Application Security",
    description:
      "You will learn the basics of the web application Penetration Testing Course, such as common vulnerabilities and attack vectors. The web application security course will address the OWASP Top 10 vulnerabilities, secure coding techniques, and the necessity of penetration testing in online application security.",
  },
  {
    title: "Penetration Testing Methodology",
    description:
      "You will learn about the methodology and procedures used for web application penetration testing. This comprises reconnaissance, scanning, enumeration, and exploitation methods. The emphasis will be on learning how attackers use vulnerabilities to obtain unauthorized access to web applications.",
  },
  {
    title: "Common Web Application Vulnerabilities",
    description:
      "This course will cover the discovery and exploitation of common web application vulnerabilities like SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), insecure direct object references (IDOR), and others. Participants will acquire practical experience in finding, exploiting, and mitigating these vulnerabilities.",
  },
  {
    title: "Penetration Testing Tools",
    description:
      "You will learn about a variety of industry-standard penetration testing tools used for online application security testing. This Web Application Penetration Testing training includes tools like Burp Suite for web application analysis, OWASP ZAP for automated security testing, Metasploit for exploitation, etc. Practical exercises will help learners become adept at using these tools successfully.",
  },
  {
    title: "Hands-on Labs and Real-World Scenarios",
    description:
      "The Web Application Security course contains hands-on labs and real-world scenarios intended to emulate web application penetration testing problems. Participants will use their knowledge and skills in simulated situations to obtain practical experience detecting and mitigating security risks.",
  },
];

const Sevencard = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 font-sans relative overflow-hidden">
      {/* Container to maintain width from sides */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          
          {/* Card Mapping */}
          {modules.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 md:p-10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:border-[#01AEEF]/50 hover:shadow-[0_10px_50px_-5px_rgba(1,174,239,0.1)] h-full ${
                // Custom alignment for the last two cards on desktop (2nd row)
                idx === 3 ? 'md:col-start-1 lg:col-start-1 lg:translate-x-1/2' : ''
              } ${
                idx === 4 ? 'md:col-start-2 lg:col-start-2 lg:translate-x-1/2' : ''
              }`}
            >
              {/* Card Title - Blue Color */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#01AEEF] mb-6 border-b pb-4 border-gray-100 leading-snug">
                {item.title}
              </h3>
              
              {/* Card Description - Text color same as image */}
              <p className="text-gray-600 text-[15px] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
          
          {/* Optional decorative background pattern (like dots and triangles from image) */}
          <div className="absolute top-0 right-[-50px] opacity-20 z-0 hidden lg:block">
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
              <circle cx="5" cy="5" r="3" fill="#01AEEF"/>
              <circle cx="25" cy="5" r="3" fill="#01AEEF"/>
              {/* ...more dots here if needed */}
              <path d="M70 20 L90 40 L70 60 Z" stroke="#01AEEF" strokeWidth="2"/>
            </svg>
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
};

export default Sevencard;