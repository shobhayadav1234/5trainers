"use client";
import React, { useState } from 'react';
import { Calendar, Globe, X } from "lucide-react";

// --- Types ---
type CourseDetails = {
  id: string;
  title: string;
  duration: string;
  mode: string;
  rating: number;
  price: string;
  imageUrl: string | null;
};

type CategoryDataMap = {
  [key: string]: CourseDetails[];
};

// --- Data ---
const categories = [
  "python", "Web Dev", "Data Science", "Networking",
  "Cyber Security", "Cloud Computing", "DevOps", "Digital Marketing",
  "Software Testing", "Data Analytics",
];

const allCoursesData: CategoryDataMap = {
  "python": [
    { id: "py1", title: "Core Python", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/co.jpg" },
    { id: "py2", title: "Django Framework", duration: "1 Month", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "/dj.jpg" },
    { id: "py3", title: "Python for Data Science", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹18,000", imageUrl: "/ca.jpg" },
  ],
  "Web Dev": [
    { id: "w1", title: "Front-end Development", duration: "4 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/webs.jpg" },
    { id: "w2", title: "Back-end Development", duration: "4 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/we.jpg" },
    { id: "w3", title: "Full-Stack Python", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "./pythons.jpg" },
    { id: "w4", title: "Full-Stack Java", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/java.jpg" },
    { id: "w5", title: "Java + SpringBoot", duration: "4 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/spo.jpg" },
    { id: "w6", title: "React JS", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/react.jpg" },
    { id: "w7", title: "FullStack Development", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/co.jpg" },
    { id: "w8", title: "Best Web Designing Course", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/we.jpg" },
    { id: "w9", title: "Best Anugular Course", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹20,000", imageUrl: "/co.jpg" },
    { id: "w10", title: "Best Django course", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹22,000", imageUrl: "/dj.jpg" },
    { id: "w11", title: "Node JS", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹30,000", imageUrl: "/ca.jpg" },
  ],
  "Data Science": [
    { id: "ds1", title: "Machine Learning Course", duration: "8 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/sci.jpg" },
    { id: "ds2", title: "Artifical Intelligence(AI)Course", duration: "3/6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/ai.jpg" },
    { id: "ds3", title: "Best Python Course", duration: "3/6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/dj.jpg" },
    { id: "ds4", title: "Best Chat Gpt Course", duration: "3/6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/co.jpg" },
    { id: "ds5", title: "Machine Learning with R Programing", duration: "3/6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/webs.jpg" },
  ],
  "Networking": [
    { id: "n1", title: "CCNA", duration: "1/2 Months", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "/fr.jpg" },
    { id: "n2", title: "CCNP ENCOR", duration: "2/3 Months", mode: "Online / Offline", rating: 5, price: "₹20,000", imageUrl: "/sr.jpg" },
  ],
  "Cyber Security": [
    { id: "cs1", title: "Ethical Hacking", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/ca.jpg" },
  ],
  "Cloud Computing": [
    { id: "cc1", title: "Cloud Practitioner", duration: "2 Weeks", mode: "Online / Offline", rating: 5, price: "₹5,000", imageUrl: "/aw.jpg" },
    { id: "cc2", title: "AWS Solutions Architect", duration: "1 Month", mode: "Online / Offline", rating: 5, price: "₹12,000", imageUrl: "/aw2.jpg" },
    { id: "cc3", title: "Microsoft Azure Fundamentals", duration: "3 Weeks", mode: "Online / Offline", rating: 5, price: "₹8,000", imageUrl: "/webs.jpg" },
  ],
  "DevOps": [
    { id: "dv1", title: "Azure DevOps", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/dev1.jpg" },
    { id: "dv2", title: "Google Cloud Associate Engineer", duration: "1 Month", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "/webs.jpg" },
    { id: "dv3", title: "DevOps with Cloud", duration: "45 Days", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/ai.jpg" },
  ],
  "Digital Marketing": [
    { id: "dm1", title: "Digital Marketing", duration: "4/6 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/de1.jpg" },
    { id: "dm2", title: "SEO", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "./pythons.jpg" },
    { id: "dm3", title: "Advance MicrosoftExcel", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "./sci.jpg" },
    { id: "dm4", title: "Full-Stack Python", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "./spo.jpg" },
  ],
  "Software Testing": [
    { id: "st1", title: "Manual Testing", duration: "1 Month", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "/sci.jpg" },
    { id: "st2", title: "Automation Testing", duration: "3 Months", mode: "Online / Offline", rating: 5, price: "₹20,000", imageUrl: "/ca.jpg" },
    { id: "st3", title: "Selenium with Java", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/aw4.jpg" },
    { id: "st4", title: "Micro Service Training", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/spo.jpg" },
  ],
  "Data Analytics": [
    { id: "da1", title: "Power BI", duration: "1/2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/po.jpg" },
    { id: "da2", title: "Agentics AI course", duration: "1/2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/ta.jpg" },
    { id: "da3", title: "Data Analytics Master", duration: "4 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/da.jpg" },
    { id: "da4", title: "Business Analyst Course", duration: "4 Months", mode: "Online / Offline", rating: 5, price: "₹22,000", imageUrl: "/webs.jpg" },
    { id: "da5", title: "Microsoft Power Apps Training", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹28,000", imageUrl: "/spo.jpg" },
    { id: "da6", title: "Power Automate Training", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹28,000", imageUrl: "/po.jpg" },
    { id: "da7", title: "Best Python Course", duration: "3 Months", mode: "Online / Offline", rating: 5, price: "₹18,000", imageUrl: "/python.jpg" },
    { id: "da8", title: "Power BI Course Online", duration: "3 Months", mode: "Online / Offline", rating: 5, price: "₹18,000", imageUrl: "/dev1.jpg" },
    { id: "da9", title: "Advanced Microsoft Excel Training", duration: "3 Months", mode: "Online / Offline", rating: 5, price: "₹16,000", imageUrl: "/sci.jpg" },
    { id: "da10", title: "PL/SQL Course", duration: "3 Months", mode: "Online / Offline", rating: 5, price: "₹20,000", imageUrl: "/spo.jpg" },
    { id: "da11", title: "Best Excel VBA Course Online", duration: "3 Months", mode: "Online / Offline", rating: 5, price: "₹18,000", imageUrl: "/ta.jpg" },
    { id: "da12", title: "Tableau Course", duration: "3 Months", mode: "Online / Offline", rating: 5, price: "₹20,000", imageUrl: "/ca.jpg" }
  ],
};

// --- Star Rating Component ---
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex justify-center gap-1.5 my-3">
    {[...Array(rating)].map((_, index) => (
      <span key={index} className="text-[#f18e1c] text-xl">★</span>
    ))}
  </div>
);

// --- Modal Component ---
const InquiryModal = ({ isOpen, onClose, courseTitle }: { isOpen: boolean, onClose: () => void, courseTitle: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
          <X size={24} />
        </button>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-[#0073b1] mb-2 text-center">Enroll Now</h3>
          <p className="text-gray-500 text-center text-sm mb-6">Course: <span className="font-semibold text-gray-800">{courseTitle}</span></p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form Submitted!'); onClose(); }}>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-gray-500 ml-1">Full Name</label>
              <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073b1] outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-gray-500 ml-1">Phone Number</label>
              <input required type="tel" placeholder="+91 00000-00000" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073b1] outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-gray-500 ml-1">Email Address</label>
              <input required type="email" placeholder="email@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073b1] outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-gray-500 ml-1">Qualification</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073b1] outline-none">
                <option>Graduate</option>
                <option>Undergraduate</option>
                <option>Post Graduate</option>
                <option>Working Professional</option>
              </select>
            </div>
            <button type="submit" className="w-full py-4 bg-[#0073b1] text-white font-bold rounded-xl hover:bg-[#005a8c] shadow-lg transition-all uppercase tracking-widest mt-4">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const Trending: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Web Dev");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleOpenModal = (title: string) => {
    setSelectedCourse(title);
    setIsModalOpen(true);
  };

  const selectedCourses = allCoursesData[activeTab] || [];

  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen">
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} courseTitle={selectedCourse} />

      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#0073b1] mb-7 tracking-tight">
          Top Trending IT Training Programs
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed text-lg">
          Stay ahead in the tech world with practical-based training. Beginner to Professional, we cover it all.
        </p>

        {/* Tabs */}
        <div className="flex flex-nowrap overflow-x-auto justify-start lg:justify-center gap-2 mb-14 border border-gray-200 p-2 rounded-xl bg-white shadow-sm no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-lg font-bold border-2 transition-all duration-300 whitespace-nowrap text-sm ${activeTab === cat
                ? "bg-[#0073b1] text-white border-[#0073b1] shadow-md scale-105"
                : "bg-white text-[#0073b1] border-transparent hover:bg-[#e6f2f8]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {selectedCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-[20px] border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden flex flex-col">

              <div className="bg-[#e6f2f8] flex justify-center items-center h-52 group-hover:bg-gradient-to-br relative overflow-hidden">
                {course.imageUrl ? (
                  <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <div className="w-20 h-20 border-[3px] border-[#0073b1] rounded-xl flex items-center justify-center font-bold text-[#0073b1]">
                    CODE
                  </div>
                )}
              </div>

              <div className="p-7 text-left flex-grow">
                <h4 className="text-xl font-bold text-[#0073b1] mb-5 text-center h-14 flex items-center justify-center">
                  {course.title}
                </h4>

                <div className="flex justify-between text-sm text-gray-600 mb-2 border-t pt-3">
                  <span className="flex items-center gap-2 font-medium">
                    <Calendar size={16} className="text-[#0073b1]" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Globe size={16} className="text-[#0073b1]" />
                    {course.mode}
                  </span>
                </div>

                <StarRating rating={course.rating} />

                <div className="text-3xl font-extrabold text-[#0073b1] text-center mb-8">
                  {course.price}
                </div>

                <button
                  onClick={() => handleOpenModal(course.title)}
                  className="w-full py-3.5 bg-[#0073b1] text-white font-extrabold rounded-xl hover:bg-[#005a8c] transition-colors uppercase tracking-wider text-sm shadow-md"
                >
                  View Program
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;