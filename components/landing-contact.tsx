"use client";
import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Users,
  CheckCircle,
  Shield,
  Sparkles,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20c9b0]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#20c9b0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20c9b0]/10 border border-[#20c9b0]/20 mb-6">
                <Sparkles size={14} className="text-[#20c9b0]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#20c9b0]">
                  Mindweave Academy Connect
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
                Expert <br />
                <span className="text-[#20c9b0]">Guidance</span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
                Master AI, Data Science, Cyber Security, and modern technologies
                with industry experts. We build real careers through practical
                training.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-5">
              {[
                {
                  icon: <CheckCircle size={20} />,
                  text: "100% Practical Hands-on Training",
                },
                {
                  icon: <Users size={20} />,
                  text: "Dedicated Expert Mentorship",
                },
                {
                  icon: <Shield size={20} />,
                  text: "Industry Recognized Certification",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-[#20c9b0]">{item.icon}</span>
                  <span className="text-slate-200 font-bold uppercase text-sm tracking-tight">
                    {item.text}
                  </span>
                </div>
              ))}

              {/* Contact Info */}
              <div className="pt-10 space-y-5 border-t border-white/5">
                <div className="flex items-start gap-4">
                  <MapPin
                    className="text-[#20c9b0] mt-1 shrink-0"
                    size={20}
                  />
                  <p className="text-slate-400 font-medium text-sm">
                    Delhi - 160055
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-[#20c9b0]" size={20} />
                  <p className="text-slate-400 font-medium text-sm">
                    info@mindweaveacademy.com
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-[#20c9b0]" size={20} />
                  <p className="text-white text-2xl font-black tracking-tight">
                    +91 84474 04770
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-6">
                {[
                  <FaFacebookF />,
                  <FaXTwitter />,
                  <FaInstagram />,
                  <FaYoutube />,
                  <FaLinkedinIn />,
                ].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl text-white hover:bg-[#20c9b0] hover:border-[#20c9b0] transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative">
            <div className="relative bg-[#0b1120] p-8 md:p-12 rounded-[2rem] border border-[#20c9b0]/10 shadow-2xl">
              <h3 className="text-3xl font-black mb-2 tracking-tight">
                Book a <span className="text-[#20c9b0]">Demo</span>
              </h3>

              <p className="text-slate-400 font-medium mb-8">
                Start your career transformation with Mindweave Academy.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none w-full focus:border-[#20c9b0] transition-all"
                  />

                  <input
                    type="email"
                    placeholder="Email ID"
                    className="p-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none w-full focus:border-[#20c9b0] transition-all"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Contact Number"
                  className="p-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none w-full focus:border-[#20c9b0] transition-all"
                />

                <select className="p-4 bg-[#111827] text-white rounded-xl outline-none w-full border border-white/10 focus:border-[#20c9b0]">
                  <option>Select Your Course</option>
                  <option>Data Science & AI</option>
                  <option>Cyber Security</option>
                  <option>Full Stack Development</option>
                  <option>Digital Marketing</option>
                </select>

                <div className="flex gap-4 items-center">
                  <input
                    type="text"
                    placeholder="Captcha"
                    className="p-4 bg-white/5 border border-white/10 text-white rounded-xl outline-none w-1/2"
                  />

                  <div className="bg-white/5 px-4 py-3 rounded-xl flex items-center justify-center w-1/2 border border-dashed border-[#20c9b0]/30">
                    <span className="text-[#20c9b0] font-black tracking-[0.3em] text-lg">
                      MWA2026
                    </span>
                  </div>
                </div>

                <button className="w-full bg-[#20c9b0] hover:bg-[#18b39d] text-white font-black py-5 rounded-xl uppercase tracking-widest transition-all mt-4">
                  Submit Application
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