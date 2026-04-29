"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

/* ================= DATA ================= */

const reviewsData = [
  {
    name: "Sujeet Kumar Yadav",
    image: "/employ3.jpg",
    rating: 5,
    text: "The practical applications taught in the AutoCAD course were top-notch. I now feel more confident in my design capabilities.",
  },
  {
    name: "Rahul Sain",
    image: "/employ5.jpg",
    rating: 5,
    text: "This AutoCAD course was incredibly beneficial. It offered a blend of theoretical knowledge and practical exercises.",
  },
  {
    name: "Sudhanshu Singh",
    image: "/employ6.jpg",
    rating: 5,
    text: "Thanks to Ducat, I gained the skills and confidence to excel in the tech industry.",
  },
  {
    name: "Ankit Prajapati",
    image: "/employ8.jpg",
    rating: 5,
    text: "The training environment at 5Trainers is excellent. Mentors are supportive and placement assistance is great.",
  },
   {
    name: "Rahul Sain",
    image: "/employ5.jpg",
    rating: 5,
    text: "This AutoCAD course was incredibly beneficial. It offered a blend of theoretical knowledge and practical exercises.",
  },
   {
    name: "Rahul Sain",
    image: "/employ5.jpg",
    rating: 5,
    text: "This AutoCAD course was incredibly beneficial. It offered a blend of theoretical knowledge and practical exercises.",
  },
];

/* ================= COMPONENT ================= */

const Review = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#051C33] inline-block border-b-4 border-[#00A9A5] pb-2 uppercase tracking-wide">
            REAL-TIME REVIEWS & TESTIMONIALS
          </h2>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">
              Student Reviews – What Our Graduates Have to Say
            </h3>
            <p className="text-gray-600 mt-2">
              Don't just take our word for it! Here’s what our students say about their experience.
            </p>
          </div>
        </div>

        {/* Gradient Fade Effect (Left + Right) */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
            >
              {[...reviewsData, ...reviewsData].map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[320px] md:w-[420px] bg-[#E1F1FF] rounded-3xl p-8 shadow-sm border border-blue-50"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-green-500 text-green-500"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 italic leading-relaxed mb-6">
                    "{review.text}"
                  </p>

                  {/* User */}
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#051C33] text-lg">
                      {review.name}
                    </h4>

                    <div className="w-14 h-14 rounded-full border-4 border-orange-400 overflow-hidden shadow-md">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-4 text-right">
                    <button className="text-orange-500 font-bold text-sm hover:underline">
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Review;