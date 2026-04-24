"use client";
import React, { useState } from 'react';

// --- Data Structures ---
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

// --- DATA: Exact match according to your images ---
const categories = [
  "Combos", "Web Dev", "Data Science", "Networking", 
  "Cyber Security", "Cloud Computing", "DevOps", "Digital Marketing"
];

const allCoursesData: CategoryDataMap = {
  "Combos": [
    { id: "c1", title: "CCNP (ENCOR + ENARSI)", duration: "4/6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/cc.jpg" },

  ],
  "Web Dev": [
    { id: "w1", title: "Front-end Development", duration: "4 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/webs.jpg" },
    { id: "w2", title: "Back-end Development", duration: "4 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/we.jpg" },
    { id: "w3", title: "Full-Stack Python", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "./pythons.jpg" },
    { id: "w4", title: "Full-Stack Java", duration: "6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/java.jpg" },
    { id: "w5", title: "Java + SpringBoot", duration: "4 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/spo.jpg" },
    { id: "w6", title: "Python", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/co.jpg"},
    { id: "w7", title: "Django", duration: "1 Month", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "/dj.jpg" },
    { id: "w8", title: "React JS", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/Pr.jpg" },
  ],
  "Data Science": [
    { id: "ds1", title: "Data Science", duration: "8 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/sci.jpg" },
    { id: "ds2", title: "AI / ML", duration: "3/6 Months", mode: "Online / Offline", rating: 5, price: "₹35,000", imageUrl: "/ai.jpg" },
    { id: "ds3", title: "Data Analytics", duration: "4 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl:"/da.jpg" },
    { id: "ds4", title: "Power BI", duration: "1/2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl:"/po.jpg"  },
    { id: "ds5", title: "Tableau", duration: "1/2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/ta.jpg" },
  ],
  "Networking": [
    { id: "n1", title: "CCNA", duration: "1/2 Months", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "/fr.jpg" },
    { id: "n2", title: "CCNP ENCOR", duration: "2/3 Months", mode: "Online / Offline", rating: 5, price: "₹20,000", imageUrl: "/sr.jpg" },
    { id: "n3", title: "CCNP ENARSI", duration: "2/3 Months", mode: "Online / Offline", rating: 5, price: "₹20,000", imageUrl: "/th.jpg" },
    { id: "n4", title: "FIREWALL (NSE-4 & 7)", duration: "4/6 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/fi.jpg"},
  ],
  "Cyber Security": [
    { id: "cs1", title: "Ethical Hacking", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/ca.jpg" },
  ],
  "Cloud Computing": [
    { id: "cc1", title: "Cloud Practitioner", duration: "2 Weeks", mode: "Online / Offline", rating: 5, price: "₹5,000", imageUrl: "/aw.jpg" },
    { id: "cc2", title: "Solutions Architect", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl:"/aw1.jpg"  },
    { id: "cc3", title: "Azure Fundamentals", duration: "2 Weeks", mode: "Online / Offline", rating: 5, price: "₹5,000", imageUrl: "/aw2.jpg" },
    { id: "cc4", title: "Azure Administrator", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/aw3.jpg" },
    { id: "cc5", title: "GCP", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/aw4.jpg" },
  ],
  "DevOps": [
    { id: "dv1", title: "Azure DevOps", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/dev1.jpg" },
    { id: "dv2", title: "DevOps", duration: "2 Months", mode: "Online / Offline", rating: 5, price: "₹15,000", imageUrl: "/dev2.jpg" },
    { id: "dv3", title: "Terraform", duration: "1 Month", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "dev3.jpg" },
  ],
  "Digital Marketing": [
    { id: "dm1", title: "Digital Marketing", duration: "4/6 Months", mode: "Online / Offline", rating: 5, price: "₹25,000", imageUrl: "/de1.jpg" },
    { id: "dm2", title: "SEO", duration: "1/2 Months", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "/de2.jpg" },
    { id: "dm3", title: "Google Ads", duration: "1/2 Months", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "/de3.jpg" },
    { id: "dm4", title: "Facebook Ads", duration: "1/2 Months", mode: "Online / Offline", rating: 5, price: "₹10,000", imageUrl: "/de4.jpg" },
  ],
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex justify-center gap-1.5 my-3">
    {[...Array(rating)].map((_, index) => (
      <span key={index} className="text-[#f18e1c] text-xl">★</span>
    ))}
  </div>
);

const Trending: React.FC = () => {
  // State to track which category is clicked
  const [activeTab, setActiveTab] = useState("Web Dev");

  // Filter courses based on activeTab
  const selectedCourses = allCoursesData[activeTab] || [];

  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto text-center">
        
        {/* Headings */}
        <h2 className="text-4xl font-extrabold text-[#0073b1] mb-7 tracking-tight">
          Top Trending IT Training Programs
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-lg">
          Stay ahead in the rapidly growing tech world with our top trending IT courses. Whether you're a beginner looking to start your career or a working professional who wants to upskill, we offer practical based IT Training Courses with cutting-edge curriculum.
        </p>

        {/* Tabs - 8 Categories (When clicked, it updates activeTab) */}
        <div className="flex flex-wrap justify-center gap-2 mb-14 border border-gray-200 p-2 rounded-xl bg-white shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)} // CLICK PAR CHANGE HOGA
              className={`px-7 py-2.5 rounded-lg font-bold border-2 transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#0073b1] text-white border-[#0073b1] shadow-lg scale-105"
                  : "bg-white text-[#0073b1] border-transparent hover:bg-[#e6f2f8] hover:border-[#0073b1]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
  {selectedCourses.map((course) => (
    <div key={course.id} className="bg-white rounded-[20px] border border-gray-100 shadow-md hover:shadow-2xl hover:border-gray-200 hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
      
      {/* --- Image Section Updated --- */}
      <div className="bg-[#e6f2f8] flex justify-center items-center h-52 group-hover:bg-gradient-to-br group-hover:from-[#e6f2f8] group-hover:to-white relative overflow-hidden">
        
        {course.imageUrl ? (
          /* Agar data mein image hai toh ye image dikhegi */
          <img 
            src={course.imageUrl} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          /* Agar image nahi hai toh purana wala placeholder icon dikhega */
          <div className="w-36 h-28 border-[3px] border-[#0073b1] rounded-xl bg-white flex flex-col items-center justify-center relative shadow-inner">
            <span className="text-[#0073b1] font-extrabold text-2xl">{"{/}"}</span>
            <div className="absolute -bottom-3 -right-3 bg-gray-800 w-11 h-14 rounded-lg border border-white flex items-center justify-center shadow-lg">
               <span className="text-white font-mono text-xs text-opacity-50">{"[ ]"}</span>
            </div>
          </div>
        )}
        
      </div>

              {/* Content Section */}
              <div className="p-7 text-left">
                <h4 className="text-xl font-inter text-[#0073b1] mb-5 text-center leading-snug">
                  {course.title}
                </h4>
                
                <div className="flex justify-between text-sm text-gray-600 mb-2 border-t border-gray-100 pt-3">
                  <span className="flex items-center gap-1.5 font-medium text-gray-800">📅 {course.duration}</span>
                  <span className="flex items-center gap-1.5 text-[#0073b1]">🌐 {course.mode}</span>
                </div>

                <StarRating rating={course.rating} />

                <div className="text-3xl font-extrabold text-[#0073b1] text-center mb-8 tracking-tighter">
                  {course.price}
                </div>

                <button className="w-full py-3.5 bg-[#0073b1] text-white font-extrabold rounded-xl hover:bg-[#005a8c] transition-colors uppercase tracking-wider text-sm shadow-md hover:shadow-lg">
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