"use client";
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* --- Hero Section --- */}
            <section className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-black">
                {/* Replace with your actual background image path */}
                <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: "url('/about-us.jpg')" }}
                />
                <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-white">
                    About Us
                </h1>
            </section>

            {/* --- CEO Section --- */}
            <section className="max-w-7xl mx-auto py-16 px-6 md:py-24">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* CEO Image */}
                    <div className="w-full md:w-1/3">
                        <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-100">
                            <img
                                src="/founder.jpg" // Add your image path here
                                alt="Amandeep Singh - CEO"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* CEO Content */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative pb-2">
                            OUR Founder
                            <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#0073b1]"></span>
                        </h2>

                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <p>
                                <strong>Amandeep Singh</strong>, the visionary founder of <strong>5 Trainers</strong>, set out with a clear mission to transform the landscape of education. Originating from Punjab, he drew inspiration from the essence of the state, symbolizing the balance of essential elements that shape life.
                            </p>

                            <p>
                                The name <strong>“5 Trainers”</strong> reflects this philosophy, representing the harmony of five fundamental pillars inspired by both nature’s elements and human senses. At the core of the institute are the <strong>5 T’s: Training, Technology, Thinking, Time, and Teamwork</strong>, which serve as the foundation for a truly comprehensive learning experience.
                            </p>

                            <p>
                                Recognizing that true education extends beyond academics, <strong>Amandeep Singh</strong> emphasizes the importance of personal development alongside technical expertise. His innovative approach focuses on nurturing individuals into well-rounded professionals who are fully prepared to succeed in both their careers and personal lives.
                            </p>

                            <p>
                                <strong>5 Trainers</strong> offers a wide range of <strong>Digital Marketing</strong> and <strong>Core IT courses</strong>, enriched with specialized modules on personality development, motivation, creative thinking, leadership, and networking skills.
                            </p>

                            <p>
                                Driven by a deep passion for empowering students, Amandeep Singh’s mission is to cultivate future leaders capable of making meaningful contributions to society. Through this initiative, he continues to redefine modern education and inspire a progressive future.
                            </p>

                            <p>
                                Under his leadership, <strong>5 Trainers</strong> remains firmly committed to holistic education. His vision has shaped an institution that not only enhances academic excellence but also fosters personal growth, strong human values, and innovative thinking.
                            </p>

                            <p>
                                By encouraging unconventional ideas and forward-thinking mindsets, Amandeep Singh ensures that students are equipped to create impactful, positive outcomes in an ever-evolving world.
                            </p>
                            <p>
                                If you have any questions, please don't hesitate to contact me directly at
                                <a href="mailto:pankaj@cyberyuan.com" className="text-[#0073b1] font-semibold hover:underline ml-1">
                                    info@5Trainers.com
                                </a>
                            </p>

                            <div className="pt-4">
                                <h3 className="text-2xl font-bold text-[#0073b1]">Amandeep Singh</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- Bottom Wave Shape (Optional) --- */}
            <div className="w-full overflow-hidden leading-[0] transform rotate-180">
                <svg fill="#f3f4f6" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </main>
    );
};

export default AboutPage;