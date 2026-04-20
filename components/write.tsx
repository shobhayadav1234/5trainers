"use client";

import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const Write = () => {
    const learningObjectives = [
        "Understand Software Testing Fundamentals", "Learn Automation Tools",
        "Write and Execute Automated Test Scripts", "Work with Dynamic Web Elements",
        "Implement Continuous Integration (CI)", "Version Control with Git",
        "Test Design and Strategy", "Use Best Practices in Automation",
        "Debugging and Troubleshooting", "Apply OOP Principles",
        "Perform Regression Testing", "Work on Real-World Projects",
    ];

    const modules = [
        "Introduction to Software Application and Fundamental of Testing",
        "Models of Software Engineering", "Quality Management System",
        "Software Testing methodology", "Levels of Software Testing",
        "Testing Types / Approaches", "Introduction of different Test Estimation techniques",
        "Practical session on Live/Inbuilt and real time Projects",
        "Real Time Process Testing Terminologies", "Agile Test Management and Bug tracking with JIRA",
        "Database Testing Introduction", "SQL", "SQL Functions", "Introduction to Java",
        "Java Programming for Selenium", "Java Program Structure and Syntax",
        "Java Conditional and Loop Statements", "Java Array", "Java Strings",
        "Collections Framework", "Introduction of Selenium", "Selenium IDE",
        "Set up Eclipse", "Web Driver", "Browser & Navigation Commands", "Locators",
        "Element Identification", "Tables, Check boxes & Radio buttons",
        "Selenium Waits, Alert & Switch Windows", "Action Class", "Test NG Framework",
        "Log4j Logging", "Database Connections", "Automation Framework", "Maven",
        "Jenkins", "GitHub", "Basics of API Testing", "POSTMAN Tool", "Rest Assured advance",
        "REST ASSURED", "REST ASSURED - Basics", "SOAP",
        "Automation Test Script Development (Project Based)", "Proposed Projects"
    ];

    return (
        <section className="bg-white py-8 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

                    {/* LEFT SIDE: SCROLLABLE CONTENT */}
                    <div className="lg:col-span-2 space-y-10 md:space-y-12">

                        {/* 1. About Section */}
                        <div className="space-y-4 md:space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                                About Selenium Automation Software Testing Course
                            </h2>
                            <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
                                <p>The <span className="font-semibold text-gray-800">Automation Software Testing Course at Cyberyaan</span> offers a comprehensive curriculum focused on both manual and automated testing techniques. This course is designed to equip students with the knowledge and practical skills required to become proficient in software testing, with a strong emphasis on <span className="font-semibold text-gray-800">Selenium WebDriver</span>, a leading tool for automating web applications.</p>
                                <p>The course begins with an introduction to software testing fundamentals, covering various testing types, the testing lifecycle, and best practices. As students progress, they dive into automation concepts, learning to write automated test scripts using <span className="font-semibold text-gray-800">Java or Python</span>. Key topics include <span className="font-semibold text-gray-800">TestNG</span>, handling dynamic elements, and integrating automated tests with <span className="font-semibold text-gray-800">Jenkins for Continuous Integration (CI)</span>.</p>
                                <p>Hands-on exercises, real-world examples, and project-based learning ensure that students gain practical experience in writing and executing test scripts. By the end of the course, participants will be able to implement effective automation strategies, improve software quality, and enhance their career prospects in software testing and QA.</p>
                            </div>
                        </div>

                        {/* 2. Learning Objectives Box */}
                        <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-8 text-white shadow-lg">
                            <h3 className="text-lg md:text-xl font-semibold mb-6">Learning Objectives</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                {learningObjectives.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" size={16} />
                                        <span className="text-xs md:text-sm text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Requirements Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                                Requirements of Software Testing Training Course
                            </h2>
                            <ul className="space-y-6 text-gray-600 text-sm md:text-base">
                                <li className="flex gap-3 items-start">
                                    <span className="text-cyan-600 font-bold mt-1 shrink-0">→</span>
                                    <p><strong className="text-gray-800">Basic Knowledge of Software Testing:</strong> While prior experience in software testing is not mandatory, a basic understanding of manual testing concepts (such as types of testing and the software development lifecycle) is helpful.</p>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-cyan-600 font-bold mt-1 shrink-0">→</span>
                                    <p><strong className="text-gray-800">Basic Programming Knowledge:</strong> Familiarity with at least one programming language, ideally Java or Python, is recommended, as the course covers automation scripting using these languages. No advanced programming skills are required, but a basic understanding of variables, loops, and functions will help.</p>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-cyan-600 font-bold mt-1 shrink-0">→</span>
                                    <p><strong className="text-gray-800">Understanding of Web Technologies:</strong> A basic knowledge of web technologies such as HTML, CSS, and JavaScript will be beneficial, as the course involves automating web applications and interacting with web elements.</p>
                                </li>
                            </ul>
                        </div>

                        {/* 4. Curriculum Modules Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-b pb-2">
                                Selenium Automation Software Testing Course Curriculum
                            </h2>
                            <div className="grid grid-cols-1 gap-1">
                                {modules.map((title, index) => (
                                    <div key={index} className="flex items-center gap-3 py-2.5 px-1 border-b border-gray-100 hover:bg-gray-50 transition-colors group cursor-pointer">
                                        <ChevronRight size={14} className="text-cyan-500 shrink-0 group-hover:translate-x-1 transition-transform" />
                                        <span className="text-xs md:text-sm text-gray-700">
                                            <span className="font-semibold text-gray-900 text-[11px] md:text-sm">Module {index + 1 < 10 ? `0${index + 1}` : index + 1}:</span> {title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 5. Desktop/Mobile Call Button */}
                        <div className="pt-4">
                            <button className="w-full sm:w-auto bg-[#00a8b4] hover:bg-[#008c96] text-white px-8 py-3.5 rounded-md flex items-center justify-center gap-2 transition-all font-bold shadow-md active:scale-95">
                                Call Now +91 7428748576 <span className="text-xl">→</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE: STICKY FORM (Responsive & Styled) */}
                    <div className="lg:col-span-1 lg:sticky lg:top-6 mt-10 lg:mt-0">
                        <div className="bg-[#00a8b4] rounded-xl p-6 md:p-8 shadow-2xl text-white">
                            <h3 className="text-xl md:text-2xl font-bold mb-2">Book your Trial Demo Class</h3>
                            <p className="text-white/90 text-xs md:text-sm mb-6">You can call us at +91 7428748576</p>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Type Your Name"
                                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm outline-none border-none focus:ring-2 focus:ring-black/10"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email ID"
                                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm outline-none border-none focus:ring-2 focus:ring-black/10"
                                />
                                <input
                                    type="tel"
                                    placeholder="Contact Number"
                                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm outline-none border-none focus:ring-2 focus:ring-black/10"
                                />

                                <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-500 text-sm outline-none border-none appearance-none cursor-pointer">
                                    <option>Select Course</option>
                                    <option>Selenium Automation</option>
                                    <option>Manual Testing</option>
                                </select>

                                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                                    <input
                                        type="text"
                                        placeholder="Captcha"
                                        className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white text-gray-800 text-sm outline-none border-none"
                                    />
                                    <div className="bg-white px-4 py-2 rounded-lg font-mono font-bold text-red-500 text-sm select-none shadow-inner text-center">
                                        w3gdWc
                                    </div>
                                </div>
                                <p className="text-right text-[10px] text-white underline cursor-pointer opacity-80 hover:opacity-100">Reload</p>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-all mt-4 uppercase tracking-widest shadow-lg active:scale-95"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Write;