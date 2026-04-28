
"use client";
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Black = () => {
    return (
        <section className="relative w-full py-20 px-4 overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")', // Dark professional office background
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

                {/* Left Side: Content */}
                <div className="text-white flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 uppercase tracking-wider">
                        Ready to empower your <br /> Workforce?
                    </h2>

                    <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg">
                        Fill the details in the form to know all about our IT Training and
                        take your first step towards the success with the world-leading
                        IT training company in India where employees not only acquire
                        the skills but we help them to become future ready.
                    </p>

                    <div className="space-y-8">
                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-500 p-3 rounded-full">
                                <Phone size={20} className="text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-orange-500 text-lg uppercase">Phone Number</p>
                                <p className="text-gray-200 text-lg">+91-87505 00075</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-500 p-3 rounded-full">
                                <Mail size={20} className="text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-orange-500 text-lg uppercase">E-mail</p>
                                <p className="text-gray-200 text-lg">info@5Trainers.com</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="bg-orange-500 p-3 rounded-full">
                                <MapPin size={20} className="text-white" />
                            </div>
                            <div>
                                <p className="font-bold text-orange-500 text-lg uppercase">Corporate Address</p>
                                <p className="text-gray-200 text-sm md:text-base leading-snug">
                                    5th floor ,victory Tower, Sector 55 Phase 8B Mohali
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Enquire Now Form */}
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-[#051C33] uppercase">Enquire Now</h3>
                            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
                        </div>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />

                            <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500">
                                <option>Select a Course</option>
                                <option>Web Development</option>
                                <option>Cyber Security</option>
                                <option>Data Science</option>
                                <option>Digital Marketing</option>
                                <option>Marketing</option>
                                <option>Fullstack development</option>
                                <option>AI(artificial Inteligence)</option>
                                <option>Machine Learning</option>
                                <option>Python Programming</option>
                                <option>Java Development</option>
                                <option>Web Development</option>
                                <option>Frontend Development</option>
                                <option>Backend Development</option>
                                <option>Software Testing</option>
                                <option>Selenium Automation Testing</option>
                                <option>Cyber Security</option>
                                <option>Cloud Computing</option>
                                <option>DevOps</option>
                                <option>Networking</option>
                                <option>Data Analytics</option>
                                <option>Business Analytics</option>
                                <option>UI/UX Design</option>
                                <option>Graphic Designing</option>
                                <option>Google Ads</option>
                                <option>Meta Ads</option>
                                <option>Social Media Marketing</option>
                                <option>Content Marketing</option>
                                <option>SEO (Search Engine Optimization)</option>
                                <option>Power BI</option>
                                <option>Excel Advanced</option>
                                <option>Blockchain</option>
                                <option>Internet of Things (IoT)</option>
                            </select>

                            <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500">
                                <option>Select a Branch</option>
                                <option>Noida</option>
                                <option>Delhi</option>
                                <option>Gurgaon</option>
                                <option>Ghaziabad</option>
                                <option>Faridabad</option>
                                <option>Greater Noida</option>
                                <option>Chandigarh</option>
                                <option>Mohali</option>
                                <option>Panchkula</option>
                                <option>Jaipur</option>
                                <option>Lucknow</option>
                                <option>Kanpur</option>
                                <option>Indore</option>
                                <option>Bhopal</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                                <option>Hyderabad</option>
                                <option>Bangalore</option>
                            </select>

                            <button
                                type="submit"
                                className="w-full bg-[#2A5C9A] hover:bg-[#1e4474] text-white font-bold py-4 rounded-md transition duration-300 uppercase mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Black;