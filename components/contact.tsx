"use client";
import React from 'react';
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <main className="min-h-screen bg-black text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12">Contact us</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* --- LEFT SIDE: Contact Info --- */}
                    <div className="space-y-12">

                        {/* Head Office */}
                        <div className="space-y-4">
                            <h2 className="text-[#20C9B0] text-xl font-bold uppercase tracking-wide">
                                Head Office, Mohali
                            </h2>
                            <div className="flex items-start gap-4 text-gray-300">
                                <MapPin className="text-[#20C9B0] mt-1 shrink-0" size={20} />
                                <p>
                                    Mindweave Academy Institute,<br />
                                    Delhi<br />
                                </p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <Mail className="text-[#20C9B0] shrink-0" size={20} />
                                <p>info@Mindweaveacademy.com</p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <Phone className="text-[#20C9B0] shrink-0" size={20} />
                                <p>+91 84474 04770</p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 pt-4">
                                <div className="p-2 bg-[#3b5998] rounded-sm cursor-pointer hover:opacity-80"><FaFacebookF size={18} fill="white" /></div>
                                <div className="p-2 bg-[#00acee] rounded-sm cursor-pointer hover:opacity-80">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current text-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                                </div>
                                <div className="p-2 bg-[#e4405f] rounded-sm cursor-pointer hover:opacity-80"><FaXTwitter size={18} /></div>
                                <div className="p-2 bg-[#cd201f] rounded-sm cursor-pointer hover:opacity-80"><FaInstagram size={18} fill="white" /></div>
                                <div className="p-2 bg-[#0077b5] rounded-sm cursor-pointer hover:opacity-80"><FaYoutube size={18} fill="white" /></div>
                            </div>
                        </div>

                        {/* Gurugram Branch */}
                        <div className="space-y-4">



                        </div>
                    </div>

                    {/* --- RIGHT SIDE: Form --- */}
                    <div className="bg-[#20C9B0] p-8 rounded-sm shadow-xl self-start">
                        <h3 className="text-xl font-bold mb-2">Book your Trial Demo Class</h3>
                        <p className="text-sm mb-6 text-gray-100">You can call us at +91 84474 04770</p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Type Your Name"
                                    className="p-3 bg-white text-black rounded-sm outline-none w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email ID"
                                    className="p-3 bg-white text-black rounded-sm outline-none w-full"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="p-3 bg-white text-black rounded-sm outline-none w-full"
                            />
                            <select className="p-3 bg-white text-black rounded-sm outline-none w-full appearance-none">
                                <option>Select Course</option>

                                <option>Software Testing</option>
                                <option>Appium Training</option>

                                <option>Full Stack QA with AI</option>
                                <option>Selenium (Java)</option>

                                <option>Web Development</option>

                                <option>MEAN Full Stack Development</option>

                                <option>Python Full Stack with AI</option>
                                <option>Python + SQL + Django</option>
                                <option>Python Full Stack Data Scientist</option>

                                <option>Cyber Security</option>

                                <option>Diploma in Ethical Hacking & Cyber Security</option>

                                <option>Data Science</option>
                                <option>Data Science Professional Training</option>

                                <option>Artificial Intelligence (AI)</option>
                                <option>Generative AI</option>


                                <option>Data Analytics</option>

                                <option>Business Analytics</option>

                                <option>Digital Marketing</option>

                                <option>Google Ads Professional</option>
                                <option>Meta Ads Professional</option>

                                <option>DevOps</option>
                                <option>DevOps Training</option>
                                <option>DevOps for Professionals</option>

                                <option>Networking</option>


                                <option>Cloud Computing</option>
                                <option>Cloud Infrastructure</option>


                                <option>Social Media Marketing</option>
                                <option>Advanced Excel with AI</option>
                                <option>Influencer Marketing</option>
                            </select>

                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter the Captcha Value"
                                    className="p-3 bg-white text-black rounded-sm outline-none w-full md:flex-grow"
                                />

                                <div className="bg-white flex items-center justify-center px-3 py-3 rounded-sm w-full md:w-auto">
                                    <span className="italic text-red-600 font-serif font-bold tracking-widest text-lg text-center">
                                        nn8wpw
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="text-sm hover:underline w-full md:w-auto text-left md:self-center"
                                >
                                    Reload
                                </button>
                            </div>
                            <button className="w-full bg-black text-white font-bold py-3 uppercase tracking-widest hover:bg-gray-900 transition-colors">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                {/* --- Google Map Section Full Width --- */}
                <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-16 overflow-hidden shadow-2xl border-t border-b border-gray-800">
                    <iframe
                        src="https://www.google.com/maps?q=Victory+Tower+Mohali&output=embed"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mindweave Academy Mohali Location"
                        className="w-full"
                    ></iframe>
                </div>

            </div>
        </main>
    );
};

export default Contact;