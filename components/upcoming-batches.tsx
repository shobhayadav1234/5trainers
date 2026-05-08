"use client";
import React, { useState } from "react";
import { Calendar, Clock, Hourglass, ArrowRight, X } from "lucide-react";

interface BatchProps {
    heading: string;
    subHeading: string;
    items: any[];
}

const UpcomingBatches = ({ heading, subHeading, items }: BatchProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");

    if (!items || items.length === 0) return null;

    const colors = ["#2DD4BF", "#FACC15", "#4F46E5"];

    const openForm = (courseName: string) => {
        setSelectedCourse(courseName);
        setIsOpen(true);
    };

    return (
        <section className="py-12 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-12 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{heading}</h2>
                    <p className="text-gray-400 text-sm md:text-base">{subHeading}</p>
                </div>

                {/* 3-Card Static Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.slice(0, 3).map((batch, idx) => {
                        const themeColor = colors[idx % colors.length];
                        return (
                            <div
                                key={batch.id || idx}
                                style={{ borderColor: `${themeColor}44` }}
                                className="bg-[#161b22] border rounded-3xl p-5 relative group hover:border-[#2DD4BF] transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="bg-[#4F46E5] text-white rounded-2xl p-2.5 text-center min-w-[65px]">
                                            <p className="text-[10px] font-bold uppercase opacity-80">{batch.month}</p>
                                            <p className="text-2xl font-extrabold">{batch.date}</p>
                                        </div>
                                        <span className="bg-[#2DD4BF]/10 text-[#2DD4BF] text-[10px] font-bold px-3 py-1 rounded-full border border-[#2DD4BF]/20 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse"></span>
                                            {batch.type}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACC15] transition-colors line-clamp-1">
                                        {batch.courseName}
                                    </h3>
                                    <p className="text-gray-400 text-xs mb-5 leading-relaxed line-clamp-2">
                                        {batch.description}
                                    </p>

                                    <div className="space-y-3 mb-6 border-t border-gray-800 pt-5">
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <Calendar size={16} className="text-[#4F46E5]" />
                                            <span className="text-xs">{batch.schedule}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <Clock size={16} className="text-[#4F46E5]" />
                                            <span className="text-xs">{batch.timing}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <Hourglass size={16} className="text-[#4F46E5]" />
                                            <span className="text-xs">{batch.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-3 p-3 bg-[#1c2128] rounded-xl mb-5">
                                        <div className="w-9 h-9 rounded-full bg-[#FACC15] text-black text-xs font-bold flex items-center justify-center flex-shrink-0">
                                            {batch.instructor.initials}
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-xs font-bold text-white truncate">{batch.instructor.name}</p>
                                            <p className="text-[9px] text-gray-500 truncate">{batch.instructor.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-red-500 text-[10px] font-bold italic">Hurry! Filling Fast</span>
                                        <span className="text-gray-500 text-[10px]">{batch.seatsLeft} Seats Left</span>
                                    </div>

                                    <div className="w-full h-1 bg-gray-800 rounded-full mb-6 overflow-hidden">
                                        <div
                                            className="h-full bg-[#FACC15] rounded-full shadow-[0_0_8px_#FACC15]"
                                            style={{ width: '85%' }}
                                        ></div>
                                    </div>

                                    <button
                                        onClick={() => openForm(batch.courseName)}
                                        className="w-full py-3.5 bg-white text-black text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#FACC15] transition-all transform active:scale-[0.98]"
                                    >
                                        Book Free Demo <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* POPUP FORM OVERLAY */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="relative w-full max-w-md bg-[#161b22] border border-gray-800 rounded-3xl p-8 shadow-2xl">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-1">Book Your Seat</h3>
                            <p className="text-gray-400 text-sm">Demo for: <span className="text-[#FACC15] font-semibold">{selectedCourse}</span></p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2DD4BF] transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2DD4BF] transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">Phone Number</label>
                                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2DD4BF] transition-all" />
                            </div>

                            <button className="w-full py-4 bg-[#4F46E5] text-white font-bold rounded-xl hover:bg-[#4338ca] transition-all mt-4">
                                Confirm Booking
                            </button>
                            <p className="text-[10px] text-gray-500 text-center mt-2">By clicking, you agree to our privacy policy.</p>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UpcomingBatches;