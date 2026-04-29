"use client";
import React from 'react';
import { MapPin, Mail, Phone, Users, CheckCircle, Shield } from "lucide-react"; 
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: 5 Trainers Dedicated Content --- */}
          <div className="space-y-10">
            <div>
              <h2 className="text-[#00a3c8] text-5xl font-black mb-4 tracking-tight uppercase">
                5 Trainers <br /> <span className="text-white">Institute</span>
              </h2>
              <div className="h-1.5 w-24 bg-[#00a3c8] mb-6"></div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Master the world of Cybersecurity and Web Technologies with our elite team of 5 industry experts. Hum sirf padhate nahi, career banate hain.
              </p>
            </div>

            <div className="space-y-6">
              {/* Feature Points */}
              <div className="flex items-center gap-4">
                <CheckCircle className="text-[#00a3c8]" size={22} />
                <span className="text-gray-200 font-medium">100% Practical Hands-on Lab</span>
              </div>
              <div className="flex items-center gap-4">
                <Users className="text-[#00a3c8]" size={22} />
                <span className="text-gray-200 font-medium">Dedicated Mentorship from 5 Trainers</span>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="text-[#00a3c8]" size={22} />
                <span className="text-gray-200 font-medium">Cyber Security & Dev Specialist</span>
              </div>

              {/* Office Info */}
              <div className="pt-8 space-y-4 border-t border-gray-800">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#00a3c8] mt-1 shrink-0" size={20} />
                  <p className="text-gray-300">5th Floor, Victory Tower,  Sahibzada Ajit Singh Nagar, Mohali - 160055</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#00a3c8] shrink-0" size={20} />
                  <p className="text-gray-300">info@5trainers.com</p>
                </div>
                <div className="flex items-center gap-4 text-xl font-bold text-white">
                  <Phone className="text-[#00a3c8] shrink-0" size={20} />
                  <p>+91-87505 00075</p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 bg-[#3b5998] flex items-center justify-center rounded hover:opacity-80 transition-all"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 bg-black border border-gray-700 flex items-center justify-center rounded hover:opacity-80 transition-all"><FaXTwitter /></a>
                <a href="#" className="w-10 h-10 bg-[#e4405f] flex items-center justify-center rounded hover:opacity-80 transition-all"><FaInstagram /></a>
                <a href="#" className="w-10 h-10 bg-[#cd201f] flex items-center justify-center rounded hover:opacity-80 transition-all"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: The Form (Navbar Width Consistent) --- */}
          <div className="bg-[#1286a1] p-8 md:p-12 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Book your Trial Demo Class</h3>
            <p className="text-sm mb-8 text-cyan-50">Expert guidance is just a message away.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="p-3.5 bg-white text-black rounded outline-none w-full shadow-inner" />
                <input type="email" placeholder="Email ID" className="p-3.5 bg-white text-black rounded outline-none w-full shadow-inner" />
              </div>
              <input type="text" placeholder="Contact Number" className="p-3.5 bg-white text-black rounded outline-none w-full shadow-inner" />
              <select className="p-3.5 bg-white text-black rounded outline-none w-full appearance-none">
                <option>Select Your Course</option>
                <option>Ethical Hacking</option>
                <option>Full Stack Development</option>
                <option>Software Testing</option>
              </select>
              
              <div className="flex gap-4 items-center">
                <input type="text" placeholder="Captcha" className="p-3.5 bg-white text-black rounded outline-none w-1/2" />
                <div className="bg-white px-4 py-2 rounded flex items-center justify-center w-1/2 select-none border-2 border-dashed border-gray-200">
                   <span className="italic text-red-600 font-bold tracking-[0.3em] text-xl">5TRN26</span>
                </div>
              </div>

              <button className="w-full bg-black text-white font-black py-4 rounded uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-lg mt-4">
                Submit Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;