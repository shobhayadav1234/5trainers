// UPDATED PlacementReport.tsx

"use client";

import React from "react";
import {
  Download,
  FileText,
  Briefcase,
  MessageSquare,
  Star,
} from "lucide-react";

interface PlacementReportProps {
  badge: string;

  title: {
    line1: string;
    highlight: string;
  };

  description: string;
  extraDescription: string;

  rating: {
    academyName: string;
    value: string;
    reviewText: string;
  };

  actionButtons: {
    title: string;
    icon: string;
    url?: string;
  }[];

  marketStats: {
    title: string;
    value: string;
  }[];

  form: {
    heading: string;
    description: string;
    buttonText: string;
  };
}

export default function PlacementReport({
  badge,
  title,
  description,
  extraDescription,
  rating,
  actionButtons,
  marketStats,
  form,
}: PlacementReportProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "file":
        return <FileText size={18} />;
      case "download":
        return <Download size={18} />;
      case "briefcase":
        return <Briefcase size={18} />;
      case "message":
        return <MessageSquare size={18} />;
      default:
        return <FileText size={18} />;
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

        {/* LEFT */}
        <div className="rounded-3xl border border-white/10  p-8 backdrop-blur-sm">
          <span className="mb-4 inline-flex rounded-full  px-4 py-1 text-sm font-medium text-black bg-[#20c9b0]">
            {badge}
          </span>

          <h2 className="text-4xl font-bold leading-tight text-black md:text-5xl">
            {title.line1}
            <br />
            <span className="text-[#20c9b0]">{title.highlight}</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-black-300">
            {description}
          </p>

          <p className="mt-4 text-base leading-8 text-black-400">
            {extraDescription}
          </p>

          {/* Rating */}
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 bg-[#20c9b0]">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-black">
                {rating.academyName}
              </h4>

              <p className="text-sm text-black">
                {rating.value} • {rating.reviewText}
              </p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 ">
            {actionButtons.map((button, index) => (

              <a
                key={index}
                href={button.url || "#"}
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#20c9b0]/20 bg-[#20c9b0]/10 px-5 py-4 text-sm font-semibold text-black transition-all duration-300 hover:border-[#20c9b0] hover:bg-[#20c9b0] hover:text-black hover:shadow-lg hover:shadow-[#20c9b0]/20"
              >
                {getIcon(button.icon)}
                {button.title}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-8">

          {/* MARKET */}
          <div className="rounded-3xl p-8">
            <span className="text-sm font-medium uppercase tracking-widest text-[#20c9b0]">
              Current Job Market
            </span>

            <h3 className="mt-3 text-3xl font-bold text-black">
              Unlock New Career Opportunities
            </h3>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {marketStats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#20c9b0]/40 hover:bg-[#20c9b0]/10"
                >
                  <h4 className="text-3xl font-bold text-[#20c9b0]">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-sm text-black">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900">
              {form.heading}
            </h3>

            <p className="mt-3 text-gray-600">
              {form.description}
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 hover:border-[#20c9b0] focus:border-[#20c9b0] focus:ring-4 focus:ring-[#20c9b0]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 hover:border-[#20c9b0] focus:border-[#20c9b0] focus:ring-4 focus:ring-[#20c9b0]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 hover:border-[#20c9b0] focus:border-[#20c9b0] focus:ring-4 focus:ring-[#20c9b0]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#20c9b0] px-6 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#18b39d] active:scale-[0.98]"
              >
                {form.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}