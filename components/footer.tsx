"use client"

import React from "react"
import { Phone, Mail, MapPin, Sparkles, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050810] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Brand Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            <img 
              src="/logo3_neural_dark (1).svg" 
              alt="Skill Nexus Logo" 
              className="h-16 w-auto object-contain brightness-110" 
            />
            <p className="text-slate-400 text-base leading-relaxed font-medium">
              Skill Nexus is a leading training institute focused on practical learning and industry connectivity. 
              Master the future with Data Science, AI, and Cybersecurity guided by expert mentors.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#10b981] transition-all cursor-pointer">
                <span className="text-xs font-bold">In</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#f59e0b] transition-all cursor-pointer">
                <span className="text-xs font-bold">Fb</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#6366f1] transition-all cursor-pointer">
                <span className="text-xs font-bold">X</span>
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Courses (5 Cols Shared) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#10b981] font-black text-sm uppercase tracking-[0.2em] mb-8">Trending</h4>
              <ul className="space-y-4">
                {["Web Development", "Python Programming", "Digital Marketing", "Software Testing", "Graphic Design", "UI/UX Design"].map((item) => (
                  <li key={item} className="group flex items-center text-slate-400 hover:text-white transition-all cursor-pointer text-sm font-semibold uppercase tracking-tight">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#10b981]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#f59e0b] font-black text-sm uppercase tracking-[0.2em] mb-8">Popular</h4>
              <ul className="space-y-4">
                {["React & Next.js", "Node.js Dev", "Cloud Computing", "DevOps", "Data Science", "Automation"].map((item) => (
                  <li key={item} className="group flex items-center text-slate-400 hover:text-white transition-all cursor-pointer text-sm font-semibold uppercase tracking-tight">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#f59e0b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Card (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6366f1]/10 blur-2xl group-hover:bg-[#6366f1]/20 transition-all" />
              
              <h4 className="text-white font-black text-lg uppercase tracking-tighter">Get In Touch</h4>
              
              <div className="space-y-5 relative z-10">
                <a href="tel:+918750500075" className="flex items-center gap-4 text-slate-300 hover:text-[#10b981] transition-colors">
                  <Phone size={18} className="text-[#10b981]" />
                  <span className="text-sm font-bold tracking-tight">+91-87505 00075</span>
                </a>
                <a href="mailto:info@skillnexus.com" className="flex items-center gap-4 text-slate-300 hover:text-[#f59e0b] transition-colors">
                  <Mail size={18} className="text-[#f59e0b]" />
                  <span className="text-sm font-bold break-all">info@skillnexus.com</span>
                </a>
                <div className="flex items-start gap-4 text-slate-300">
                  <MapPin size={18} className="text-[#6366f1] shrink-0" />
                  <span className="text-xs font-medium leading-relaxed">
                    5th Floor, Victory Tower,<br /> Sector 55, Phase 8B, Mohali
                  </span>
                </div>
              </div>

              <button className="w-full py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-[#10b981] hover:text-white transition-all">
                Locate Us
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">© 2026 Skill Nexus. All Rights Reserved.</p>
            <div className="hidden md:flex gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                <span className="hover:text-white cursor-pointer">Privacy</span>
                <span className="hover:text-white cursor-pointer">Terms</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="h-1 w-8 bg-[#10b981] rounded-full" />
             <div className="h-1 w-4 bg-[#f59e0b] rounded-full" />
             <div className="h-1 w-12 bg-[#6366f1] rounded-full" />
          </div>

          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Designed & Developed by <span className="text-white">Skill Nexus Team</span>
          </p>
        </div>
      </div>
    </footer>
  )
}