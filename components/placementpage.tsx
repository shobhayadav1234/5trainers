import React from 'react';
import { CheckCircle, Briefcase, Users, ArrowRight } from 'lucide-react';

const placementPage = () => {
  const topRecruiters = [
    "Tata Consultancy Services (TCS)",
    "BirlaSoft",
    "Accenture",
    "Infosys",
    "Sopra Steria",
    "HCL Technologies",
    "Capgemini",
    "Cognizant"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container - Width matched to your Navbar/Hero (max-w-7xl is standard) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At <span className="font-bold text-gray-900">5Trainers</span>, we take pride in our outstanding 99% placement rate. 
            This remarkable achievement is a testament to the dedication of our faculty, the hands-on training we offer, 
            and the robust placement support we provide. Our students land top-tier jobs at renowned companies across 
            the digital marketing and IT industry within months of course completion. Let's dive into how 5Trainers 
            stands apart as the go-to institute for career success.
          </p>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block border-b-4 border-[#00A9A5] pb-2 uppercase tracking-wide">
              Placement Rate & Success Stories
            </h2>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            99% Placement Rate – Real Success Stories from Our Students
          </h3>
          <p className="text-gray-600 mb-8">
            Our 99% placement rate speaks volumes about the quality of training and placement support we offer at 5Trainers. 
            Our placement assistance program is designed to give you the resources and tools to secure the job of your dreams. 
            Here's how we ensure the highest rate of success in placing students in top companies:
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-[#00A9A5] rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">
                <span className="font-bold">Placement Process:</span> From career counseling to mock interviews and 
                resume-building sessions, our team provides end-to-end placement assistance.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-[#00A9A5] rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700">
                <span className="font-bold">Internships & Networking:</span> We offer internships with leading companies 
                to give students a competitive edge. Networking events also allow students to connect with industry leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Top Recruiters Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block border-b-4 border-[#00A9A5] pb-2 uppercase tracking-wide">
              Our Top Recruiters
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Top Companies Hiring 5Trainers Graduates
            </h3>
            <p className="text-gray-600">
              Our students are highly sought after by top digital marketing agencies and Fortune 500 companies. 
              5Trainers graduates work at some of the best-known brands, thanks to our comprehensive training 
              programs and hands-on experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-[#00A9A5] mb-4 flex items-center gap-2">
                <Briefcase size={20} />
                Companies Recruiting 5Trainers Graduates:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topRecruiters.map((company, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A9A5]" />
                    {company}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trial Class CTA (Matching your Hero section style) */}
            <div className="bg-[#00A9A5] text-white p-8 rounded-xl flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to start your career?</h3>
              <p className="mb-6 opacity-90">Join the 99% who successfully transformed their future with us.</p>
              <button className="bg-white text-[#00A9A5] px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Book your Trial Demo Class <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default placementPage;