"use client";

import React from "react";

const galleryImages = [
  { src: "/aan.jpg", alt: "Gallery 1" },
  { src: "/award.jpg", alt: "Gallery 2" },
  { src: "/sit.jpg", alt: "Gallery 3" },
  { src: "/cy.jpg", alt: "Gallery 4" },
  { src: "/cyber.jpg", alt: "Gallery 5" },
  { src: "/gallery.jpg", alt: "Gallery 6" },
  { src: "/group.jpg", alt: "Gallery 7" },
  { src: "/rate.jpg", alt: "Gallery 8" },
  { src: "/sir.jpg", alt: "Gallery 9" },
  { src: "/sit.jpg", alt: "Gallery 10" },
];

export default function Photo() {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-white">
      {/* Top Header Section */}
      <div className="text-center mb-12">
        <span className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
          5 Trainers Gallery
        </span>
        <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-[#333] leading-tight max-w-3xl mx-auto">
        Training Institute Guided 
         <br/> by 5 Professional  <br/>Trainers
        </h2>
      </div>

      {/* Image Grid - Desktop: 5 per row, Mobile: 2 per row */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {galleryImages.map((img, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-lg shadow-sm aspect-[4/3]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Light overlay on hover */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}