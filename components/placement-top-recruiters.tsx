"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const PlacementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topRecruiters = [
    "Tata Consultancy Services (TCS)",
    "BirlaSoft",
    "Accenture",
    "Infosys",
    "Sopra Steria",
    "HCL Technologies",
    "Capgemini",
    "Cognizant",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <div className="mb-16">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At <span className="font-bold text-gray-900">Mindweave Academy</span>,
            we take pride in our outstanding 99% placement rate.
            This remarkable achievement reflects our expert faculty,
            hands-on practical training, and robust placement support.
            Our students secure top-tier jobs at renowned companies
            across digital marketing and IT industries within months
            of course completion.
          </p>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block border-b-4 border-[#20C9B0] pb-2 uppercase tracking-wide">
              Placement Rate & Success Stories
            </h2>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            99% Placement Rate – Real Success Stories from Our Students
          </h3>

          <p className="text-gray-600 mb-8">
            Our placement assistance program is designed to give students
            the best tools and opportunities to secure their dream careers.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-[#20C9B0] rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>

              <p className="text-gray-700">
                <span className="font-bold">Placement Process:</span> Career counseling,
                mock interviews, resume-building, and dedicated job support.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 bg-[#20C9B0] rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>

              <p className="text-gray-700">
                <span className="font-bold">Internships & Networking:</span> Real-world
                internships and industry networking events for career growth.
              </p>
            </div>
          </div>
        </div>

        {/* Recruiters Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block border-b-4 border-[#20C9B0] pb-2 uppercase tracking-wide">
              Our Top Recruiters
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Top Companies Hiring Mindweave Academy Graduates
            </h3>

            <p className="text-gray-600">
              Our graduates are recruited by leading IT companies,
              digital marketing firms, and Fortune 500 organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Recruiters List */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#20C9B0] mb-4 flex items-center gap-2">
                <Briefcase size={20} />
                Companies Recruiting Our Graduates:
              </h4>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topRecruiters.map((company, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#20C9B0]" />
                    {company}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="bg-[#20C9B0] text-white p-8 rounded-xl flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to start your career?
              </h3>

              <p className="mb-6 opacity-90">
                Join the 99% who successfully transformed their future with us.
              </p>

              {/* Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#20C9B0] px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Book your Trial Demo Class
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative animate-in fade-in zoom-in duration-300">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-black text-3xl font-bold"
            >
              ×
            </button>

            {/* Heading */}
            <h2 className="text-3xl font-black text-slate-900 mb-3 text-center">
              Book Your Trial Demo Class
            </h2>

            <p className="text-slate-500 text-center mb-8">
              Fill out the form below and our team will contact you.
            </p>

            {/* Form */}
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]"
              />

              <select className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#20c9b0]">
                <option>Select Course</option>
                <option>Digital Marketing</option>
                <option>Full Stack Development</option>
                <option>Cyber Security</option>
                <option>Data Science</option>
                <option>AI & Machine Learning</option>
              </select>

              <button
                type="submit"
                className="w-full bg-[#20c9b0] hover:bg-[#18b39d] text-white font-bold py-4 rounded-xl transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacementPage;