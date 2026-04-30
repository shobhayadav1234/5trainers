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
    <section className="py-20 px-4 font-sans">
      
      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0b1120] border border-slate-800 w-full max-w-md rounded-2xl p-8 shadow-2xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"><X size={20} /></button>
            <h3 className="text-2xl font-bold text-white mb-1">Join Program</h3>
            <p className="text-slate-400 text-sm mb-6">{selectedCourse}</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl outline-none focus:border-[#1db954] text-white" />
              <input required type="tel" placeholder="Contact No" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl outline-none focus:border-[#1db954] text-white" />
              <button type="submit" className="w-full py-4 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold rounded-xl transition-all shadow-lg active:scale-95">SEND ENQUIRY</button>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tight">
            Trending <span className="text-[#1db954]">Skill Nexus</span> Courses
          </h2>
          <div className="h-1 w-20 bg-[#f59e0b] mx-auto rounded-full"></div>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all border ${activeTab === cat
                ? "bg-[#1db954] text-white border-[#1db954] shadow-lg"
                : "bg-transparent text-slate-400 border-slate-800 hover:border-[#1db954]/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {selectedCourses.map((course) => (
            <div 
              key={course.id} 
              className="group bg-[#0f172a] border border-slate-800 hover:border-indigo-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-slate-900">
                {course.imageUrl ? (
                  <img 
                    src={course.imageUrl} 
                    alt={course.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"><LayoutGrid size={32} className="text-slate-800" /></div>
                )}
                <div className="absolute top-3 right-3 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-300 text-[10px] px-2 py-0.5 rounded font-bold uppercase">Tech</div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-white mb-4 line-clamp-2 leading-snug">
                  {course.title}
                </h4>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                    <Calendar size={14} className="text-[#1db954]" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                    <Globe size={14} className="text-indigo-400" /> {course.mode}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-800/50 flex items-center justify-between">
                  <div className="text-xl font-black text-white">{course.price}</div>
                  <button
                    onClick={() => handleOpenModal(course.title)}
                    className="h-10 w-10 bg-[#f59e0b] hover:bg-white text-black rounded-lg flex items-center justify-center transition-all shadow-md active:scale-90"
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