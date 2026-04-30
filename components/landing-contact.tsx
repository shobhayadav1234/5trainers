"use client";
import React from 'react';
import { MapPin, Mail, Phone, Users, CheckCircle, Shield, Sparkles } from "lucide-react"; 
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="relative bg-[#0a0f1a] text-white py-24 px-6 overflow-hidden">
      {/* --- Background Branding Elements --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: Brand Content --- */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <Sparkles size={14} className="text-[#f59e0b]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Skill Nexus Connect</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
                Expert <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#6366f1]">
                  Guidance
                </span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
                Master Data Science, AI, and Cyber Security with industry experts. Hum sirf padhate nahi, industry connect banate hain.
              </p>
            </div>

            <div className="space-y-5">
              {/* Feature Points with Logo Colors */}
              {[
                { icon: <CheckCircle size={20} />, text: "100% Practical Hands-on Lab", color: "text-[#10b981]" },
                { icon: <Users size={20} />, text: "Dedicated Mentorship", color: "text-[#f59e0b]" },
                { icon: <Shield size={20} />, text: "Industry Recognized Certification", color: "text-[#6366f1]" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className={`${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                  <span className="text-slate-200 font-bold tracking-tight uppercase text-sm">{item.text}</span>
                </div>
              ))}

              {/* Office Info */}
              <div className="pt-10 space-y-5 border-t border-white/5">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#10b981] mt-1 shrink-0" size={20} />
                  <p className="text-slate-400 font-medium text-sm">5th Floor, Victory Tower, Mohali - 160055</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#f59e0b] shrink-0" size={20} />
                  <p className="text-slate-400 font-medium text-sm">info@skillnexus.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-[#6366f1] shrink-0" size={20} />
                  <p className="text-white text-2xl font-black tracking-tighter">+91-87505 00075</p>
                </div>
              </div>

              {/* Socials - Skill Nexus Style */}
              <div className="flex gap-3 pt-6">
                {[
                  { icon: <FaFacebookF />, bg: "hover:bg-[#3b5998]" },
                  { icon: <FaXTwitter />, bg: "hover:bg-white hover:text-black" },
                  { icon: <FaInstagram />, bg: "hover:bg-[#e4405f]" },
                  { icon: <FaYoutube />, bg: "hover:bg-[#cd201f]" }
                ].map((social, i) => (
                  <a key={i} href="#" className={`w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl text-white transition-all duration-300 ${social.bg}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: The Form (Logo Gradient Style) --- */}
          <div className="relative group">
            {/* Animated Glow behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#6366f1] rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[#111827] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl">
              <h3 className="text-3xl font-black mb-2 tracking-tighter uppercase">Book a <span className="text-[#10b981]">Demo</span></h3>
              <p className="text-slate-400 font-medium mb-8">Join the next generation of tech leaders.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="p-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none w-full focus:border-[#10b981] transition-all" />
                  <input type="email" placeholder="Email ID" className="p-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none w-full focus:border-[#f59e0b] transition-all" />
                </div>
                <input type="text" placeholder="Contact Number" className="p-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none w-full focus:border-[#6366f1] transition-all" />
                
                <select className="p-4 bg-[#1a2236] text-white rounded-xl outline-none w-full border border-white/10 appearance-none focus:border-[#10b981]">
                  <option className="bg-[#111827]">Select Your Course</option>
                  <option className="bg-[#111827]">Data Science & AI</option>
                  <option className="bg-[#111827]">Cyber Security</option>
                  <option className="bg-[#111827]">Full Stack Web Dev</option>
                </select>
                
                <div className="flex gap-4 items-center">
                  <input type="text" placeholder="Captcha" className="p-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none w-1/2" />
                  <div className="bg-white/5 px-4 py-2 rounded-xl flex items-center justify-center w-1/2 select-none border border-dashed border-white/20">
                     <span className="italic text-[#f59e0b] font-black tracking-[0.3em] text-xl">SNX2026</span>
                  </div>
                </div>

                <button className="w-full relative overflow-hidden group/btn bg-white text-black font-black py-5 rounded-xl uppercase tracking-widest transition-all mt-4">
                  <span className="relative z-10">Submit Application</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#6366f1] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;