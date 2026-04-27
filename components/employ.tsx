import React from 'react';

const Employ = () => {
  const alumni = [
  { name: "Vipin Chauhan", role: "Associate Software Engineer", package: "7 LPA/-", company: "TCS", image: "/employ.jpg" },
    { name: "Ashutosh Kumar Jha", role: "Program Analyst", package: "8.5 LPA/-", company: "Cognizant", image: "/employ1.jpg" },
    { name: "Piyush Chawla", role: "Python Developer", package: "6 LPA/-", company: "HCL", image: "/employ2.jpg" },
    { name: "Pranav Mittal", role: "Frontend Developer", package: "5.5 LPA/-", company: "Wipro", image: "/employ3.jpg" },
    { name: "Sahil Verma", role: "MERN Stack Developer", package: "9 LPA/-", company: "Accenture", image: "/employ4.jpg" },
    { name: "Anjali Sharma", role: "Cybersecurity Analyst", package: "7.2 LPA/-", company: "Sopra Steria", image: "/employ5.jpg" },
    { name: "Rohan Gupta", role: "UI/UX Designer", package: "6.5 LPA/-", company: "Infosys", image: "/employ6.jpg" },
    { name: "Ishaan Malik", role: "Backend Developer", package: "8 LPA/-", company: "Capgemini", image: "/employ7.jpg" },
    { name: "Kunal Mehra", role: "Cloud Engineer", package: "10 LPA/-", company: "Tech Mahindra", image: "/employ8.jpg" },
    { name: "Simran Kaur", role: "React Developer", package: "5.8 LPA/-", company: "Birlasoft", image: "/employ9.jpg" },
    { name: "Aditya Roy", role: "Full Stack Developer", package: "11 LPA/-", company: "IBM", image: "/employ10.jpg" },
    { name: "Nitin Kumar", role: "Java Developer", package: "7.5 LPA/-", company: "LTI Mindtree", image: "/employ5.jpg" },
    { name: "Tanmay Singh", role: "DevOps Engineer", package: "9.5 LPA/-", company: "Genpact", image: "/employ4.jpg" },
    { name: "Mehak Preet", role: "Data Analyst", package: "6.2 LPA/-", company: "EXL Service", image: "/employ3.jpg" },
    { name: "Rahul Sharma", role: "Network Engineer", package: "5 LPA/-", company: "Cisco", image: "/employ2.jpg" },
    { name: "Divya Negi", role: "QA Engineer", package: "5.5 LPA/-", company: "Amazon", image: "/employ1.jpg" },
    { name: "Siddharth Jha", role: "Software Developer", package: "8.2 LPA/-", company: "Google", image: "/employ5.jpg" },
    { name: "Aman Deep", role: "Security Researcher", package: "12 LPA/-", company: "Microsoft", image: "/employ.jpg" },
    { name: "Vikas Yadav", role: "Web Developer", package: "6.8 LPA/-", company: "Deloitte", image: "/employ5.jpg" }
  
  ];

  return (
    <div className="bg-white py-16">
      {/* Container matched to Navbar width (max-w-7xl + mx-auto) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section: Placement Packages */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 inline-block border-b-4 border-[#00A9A5] pb-2 uppercase tracking-wide">
            Placement Packages
          </h2>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Placement Packages – Average Salary & Growth Opportunities
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At 5Trainers, our students don't just get placed—they secure competitive salary packages and significant career growth opportunities. 
            Here's a breakdown of the average salary packages our students receive based on their industry experience and expertise:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="font-bold text-gray-900">• Entry-level Salaries:</span> ₹6-8 LPA (Fresh Graduates)
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="font-bold text-gray-900">• Mid-level Salaries:</span> ₹10-12 LPA (with 2-4 years of experience)
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="font-bold text-gray-900">• Top Salary Offers:</span> ₹15 LPA+ (for senior roles and experienced candidates)
            </li>
          </ul>
        </div>

        {/* Section: Placement Strategy */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 inline-block border-b-4 border-[#00A9A5] pb-2 uppercase tracking-wide">
            Placement
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            How We Ensure 100% Placement for Our Students
          </h3>
          <p className="text-gray-600 mb-8">
            Our placement assistance is designed to <span className="font-bold">prepare you for success.</span> We don't just place you in any job—we ensure that you are <span className="font-bold text-gray-900">matched with the right career opportunity</span> based on your skills and aspirations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              { title: "Career Counseling", desc: "Personalized career counseling sessions to identify the best job roles for your skills." },
              { title: "Mock Interviews & Resume Building", desc: "We conduct mock interviews and assist with building resumes tailored to specific roles." },
              { title: "Internships & Industry Exposure", desc: "Gain hands-on experience through internships that are directly tied to our industry connections." },
              { title: "Alumni Network", desc: "Our strong alumni network actively supports students with job opportunities and career advice." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-[#00A9A5] mt-1">•</span>
                <p className="text-gray-700">
                  <span className="font-bold">{item.title}:</span> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Cards Grid - Added mt-24 for top margin to allow space for first row images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-20 mt-24 pb-12">
          {alumni.map((person, index) => (
            <div key={index} className="relative bg-[#2A5C9A] rounded-xl pt-14 pb-6 px-4 text-center text-white shadow-lg transition-transform hover:scale-105">
              {/* Circular Image - Increased absolute top offset to -12 */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-md">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-bold border-b border-blue-400 pb-2 mb-3">
                  {person.name}
                </h4>
                <div className="space-y-1 text-sm opacity-90">
                  <p><span className="font-semibold text-yellow-400">Job Profile :</span> {person.role}</p>
                  <p><span className="font-semibold text-yellow-400">Package :</span> {person.package}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Employ;