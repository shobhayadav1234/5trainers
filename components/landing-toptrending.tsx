"use client";
import React, { useState } from 'react';
import { Calendar, Globe, X, LayoutGrid, ArrowRight } from "lucide-react";

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

// --- Full Content Data ---
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
    <section className="py-24 px-4 font-sans bg-[#f8fafc] w-full">
  <div className="max-w-7xl mx-auto">
    
    {/* Badge */}
    <div className="text-center mb-6">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 text-[#14b8a6] text-xs font-bold tracking-[0.25em] uppercase">
        <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse"></span>
        Top Professional Programs
      </div>
    </div>

    {/* Heading Section */}
    <div className="text-center mb-14 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900">
        Learn with{" "}
      <span className="text-[#20c9b0]">
  Mindweave Academy
</span>
      </h2>

      <h3 className="text-xl md:text-2xl font-bold text-slate-700 mt-3">
        Industry-Focused Courses for Tomorrow’s Tech Leaders
      </h3>

      <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
        Explore career-ready certification programs in Artificial Intelligence,
        Data Science, Web Development, Cloud Computing, and Digital Marketing.
        Gain practical expertise, expert mentorship, and real-world skills to
        accelerate your professional journey.
      </p>
    </div>

    {/* Categories Tabs */}
    <div className="flex flex-wrap justify-center gap-3 mb-14">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveTab(cat)}
          className={`px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border ${
            activeTab === cat
              ? "bg-[#0f172a] text-white border-[#0f172a] shadow-lg"
              : "bg-white text-slate-600 border-slate-200 hover:border-[#14b8a6]/40"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Course Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {selectedCourses.map((course) => (
        <div
          key={course.id}
          className="group bg-white border border-slate-200 hover:border-[#14b8a6]/30 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-slate-100">
            {course.imageUrl ? (
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <LayoutGrid size={32} className="text-slate-300" />
              </div>
            )}

            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#14b8a6] text-[10px] px-3 py-1 rounded-full font-bold uppercase shadow-sm">
              Professional
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h4 className="text-lg font-black text-slate-900 mb-4 line-clamp-2 leading-snug">
              {course.title}
            </h4>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Calendar size={14} className="text-[#14b8a6]" />
                {course.duration}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Globe size={14} className="text-[#5b7cfd]" />
                {course.mode}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="text-2xl font-black text-slate-900">
                {course.price}
              </div>

              {/* Updated Arrow Button */}
              <button
                onClick={() => handleOpenModal(course.title)}
                className="h-11 w-11 rounded-xl bg-[#0f172a] hover:bg-[#14b8a6] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Trending;