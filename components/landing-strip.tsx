"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Clock } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* 🔥 TOP STRIP - Using Logo's Dark Theme */}
      <div className="bg-[#0b0e14] text-gray-300 text-[13px] py-2.5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-[#1db954] transition-colors cursor-pointer">
              <Phone size={14} className="text-[#1db954]" /> +91 8750500075
            </span>
            <span className="flex items-center gap-2 hover:text-[#1db954] transition-colors cursor-pointer">
              <Mail size={14} className="text-[#1db954]" /> info@5trainers.com
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Clock size={14} className="text-[#f59e0b]" />
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* 🔵 HERO SECTION - Skill Nexus Theme */}
      <div className="relative bg-[#0d1117] overflow-hidden py-16 md:py-24">
        {/* Subtle Background Gradient to match Logo logic */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1db954]/5 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-[120px] -z-0" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* LEFT CONTENT */}
          <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1db954]/10 border border-[#1db954]/20 text-[#1db954] text-xs font-bold tracking-wider uppercase">
              Where Industry Connects
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.1] text-white">
              Ready for a Career in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1db954] to-[#06b6d4]">
                Data Science & AI?
              </span>
            </h1>

            <p className="max-w-xl text-gray-400 text-base md:text-xl leading-relaxed">
              Master the future with Skill Nexus. Learn industry-ready skills 
              from expert trainers and bridge the gap between students and industry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Button size="lg" className="bg-[#1db954] text-black hover:bg-[#1aa34a] font-bold px-8 h-12 shadow-lg shadow-[#1db954]/20">
                Get Course Details →
              </Button>
              <div className="flex items-center gap-3 text-white font-medium px-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone size={18} className="text-[#f59e0b]" />
                </div>
                <span>+91 8750500075</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM - Professional Glassmorphism */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <Card className="w-full max-w-md bg-white/[0.03] backdrop-blur-md border-white/10 shadow-2xl">
              <CardContent className="p-6 sm:p-8 space-y-5">
                <div className="text-center space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Book Demo Class
                  </h2>
                  <p className="text-sm text-gray-400">Finalize your learning path today</p>
                  <div className="h-1 w-20 bg-[#f59e0b] mx-auto rounded-full" />
                </div>

                <div className="space-y-4 pt-2">
                  <Input 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#1db954] focus:ring-0" 
                    placeholder="Your Name" 
                  />
                  <Input 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#1db954] focus:ring-0" 
                    placeholder="Email Address" 
                  />
                  <Input 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 focus:border-[#1db954] focus:ring-0" 
                    placeholder="Phone Number" 
                  />

                  <Button className="w-full h-12 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-base transition-all duration-300">
                    Submit Request
                  </Button>
                </div>
                
                <p className="text-[10px] text-center text-gray-500">
                  By submitting, you agree to our terms and privacy policy.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
}