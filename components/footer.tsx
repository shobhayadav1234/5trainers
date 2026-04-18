"use client"

import React from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo and Description */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="5 Trainers Logo" 
              className="h-14 w-auto object-contain" 
            />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            5 Trainers is a leading training institute focused on practical learning and skill development. 
            Learn from expert trainers and build a strong foundation for your career with hands-on experience and real-world projects.
          </p>
        </div>

        {/* Trending Courses */}
        <div>
          <h3 className="text-lg font-bold mb-6 relative inline-block">
            Trending Courses
            <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-cyan-500"></span>
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> Web Development
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> Python Programming
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> Digital Marketing
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> Software Testing
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> Graphic Design
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> UI/UX Design
            </li>
          </ul>
        </div>

        {/* Popular Courses */}
        <div>
          <h3 className="text-lg font-bold mb-6 relative inline-block">
            Popular Courses
            <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-cyan-500"></span>
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> React & Next.js
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> Node.js Development
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> Cloud Computing
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> DevOps
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> Data Science Basics
            </li>
            <li className="hover:text-cyan-400 cursor-pointer flex items-center gap-2">
              <span className="text-cyan-500">•</span> Automation Tools
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-6 relative inline-block">
            Contact Us
            <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-cyan-500"></span>
          </h3>

          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
              <span>+91-87505 00075</span>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
              <span className="break-all">info@5trainers.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
              <span>
                 5th  Floor, Victory Tower , Sector 55<br />
                 Phase 8B, Mohali
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>© 2026 5 Trainers. All Rights Reserved.</p>
        <p>Designed & Developed by 5 Trainers</p>
      </div>
    </footer>
  )
}