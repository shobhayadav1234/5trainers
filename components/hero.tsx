"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail } from "lucide-react"; // icons

export default function Hero() {
  return (
    <>
      {/* 🔥 TOP BLACK STRIP */}
      <div className="bg-black text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={16} /> +91 8750500075
            </span>

            <span className="flex items-center gap-1">
              <Mail size={16} /> info@5trainers.com
            </span>
          </div>

          <div>
            <span className="hidden sm:block">
              Mon - Sat: 9:00 AM - 7:00 PM
            </span>
          </div>

        </div>
      </div>

      {/* 🔵 HERO SECTION */}
      <div className="bg-[oklch(0.45_0.15_250)] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Ready for a Career in Data Science & AI?
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80">
              Learn industry-ready skills with expert trainers.
            </p>

            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg">
              Contact us:  +91 8750500075
            </p>

            <div className="flex justify-center md:justify-start">
              <Button className="mt-6 bg-white text-black hover:bg-gray-200">
                Get Course Details →
              </Button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Card className="w-full max-w-md bg-white text-black shadow-xl">
              <CardContent className="p-4 sm:p-6 space-y-3">
                <h2 className="text-lg sm:text-xl font-semibold text-primary text-center">
                  Book Demo Class
                </h2>

                <Input placeholder="Your Name" />
                <Input placeholder="Email" />
                <Input placeholder="Phone Number" />

                <Button className="w-full">Submit</Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
}