"use client"

import React from "react"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#20c9b0] to-transparent opacity-40" />

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#20c9b0]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#20c9b0]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <img
              src="/mind.png"
              alt="Mindweave Academy Logo"
              className="h-20 w-auto object-contain"
            />

            <p className="text-slate-400 text-base leading-relaxed font-medium">
              Mindweave Academy is a leading professional training institute
              focused on practical learning, career growth, and industry-ready
              programs in AI, Data Science, Cyber Security, Development, and
              Digital Skills.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {["In", "Fb", "X"].map((social, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#20c9b0] hover:bg-[#20c9b0] transition-all cursor-pointer"
                >
                  <span className="text-xs font-bold">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Courses Section */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#20c9b0] font-black text-sm uppercase tracking-[0.2em] mb-8">
                Trending
              </h4>

              <ul className="space-y-4">
                {[
                  "Data Science",
                  "Artificial Intelligence",
                  "Cyber Security",
                  "Full Stack Development",
                  "Digital Marketing",
                  "UI/UX Design",
                ].map((item) => (
                  <li
                    key={item}
                    className="group flex items-center text-slate-400 hover:text-white transition-all cursor-pointer text-sm font-semibold uppercase tracking-tight"
                  >
                    <ArrowRight
                      size={12}
                      className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#20c9b0]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#20c9b0] font-black text-sm uppercase tracking-[0.2em] mb-8">
                Popular
              </h4>

              <ul className="space-y-4">
                {[
                  "Python Programming",
                  "Cloud Computing",
                  "DevOps",
                  "React & Next.js",
                  "Software Testing",
                  "Business Analytics",
                ].map((item) => (
                  <li
                    key={item}
                    className="group flex items-center text-slate-400 hover:text-white transition-all cursor-pointer text-sm font-semibold uppercase tracking-tight"
                  >
                    <ArrowRight
                      size={12}
                      className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#20c9b0]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <div className="bg-[#0b1120] border border-[#20c9b0]/10 p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#20c9b0]/10 blur-2xl" />

              <h4 className="text-white font-black text-lg uppercase tracking-tight">
                Get In Touch
              </h4>

              <div className="space-y-5 relative z-10">
                <a
                  href="tel:+918750500075"
                  className="flex items-center gap-4 text-slate-300 hover:text-[#20c9b0] transition-colors"
                >
                  <Phone size={18} className="text-[#20c9b0]" />
                  <span className="text-sm font-bold tracking-tight">
                    +91-87505 00075
                  </span>
                </a>

                <a
                  href="mailto:info@mindweaveacademy.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-[#20c9b0] transition-colors"
                >
                  <Mail size={18} className="text-[#20c9b0]" />
                  <span className="text-sm font-bold break-all">
                    info@mindweaveacademy.com
                  </span>
                </a>

                <div className="flex items-start gap-4 text-slate-300">
                  <MapPin size={18} className="text-[#20c9b0] shrink-0" />
                  <span className="text-xs font-medium leading-relaxed">
                    5th Floor, Victory Tower,
                    <br />
                    Sector 55, Phase 8B, Mohali
                  </span>
                </div>
              </div>

              <button className="w-full py-4 bg-[#20c9b0] text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-[#18b39d] transition-all">
                Locate Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              © 2026 Mindweave Academy. All Rights Reserved.
            </p>

            <div className="hidden md:flex gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              <span className="hover:text-white cursor-pointer">Privacy</span>
              <span className="hover:text-white cursor-pointer">Terms</span>
            </div>
          </div>

          {/* Brand Accent */}
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 bg-[#20c9b0] rounded-full" />
            <div className="h-1 w-4 bg-[#20c9b0]/70 rounded-full" />
            <div className="h-1 w-12 bg-[#20c9b0]/40 rounded-full" />
          </div>

          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Designed & Developed by{" "}
            <span className="text-white">Mindweave Team</span>
          </p>
        </div>
      </div>
    </footer>
  )
}