"use client";

import { useState } from "react"; // Hook import kiya
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Clock } from "lucide-react";
import Link from "next/link"; // Top par ye import karein
import { ArrowRight } from "lucide-react";
export default function Hero() {
  // 1. Form State Management
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // 2. Submit Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Demo class booked successfully! ✅");
        setFormData({ name: "", email: "", phone: "" }); // Clear form
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Database connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* TOP STRIP */}
      <div className="bg-[#020817] text-white text-[13px] py-2.5 border-b border-[#20c9b0]/10">
        <div className="max-w-8xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="tel:+918447404770"
              className="flex items-center gap-2 hover:text-[#20c9b0] transition-colors"
            >
              <Phone size={14} className="text-[#20c9b0]" />
              +91 84474 04770
            </a>

            <a
              href="mailto:info@mindweaveacademy.com"
              className="flex items-center gap-2 hover:text-[#20c9b0] transition-colors"
            >
              <Mail size={14} className="text-[#20c9b0]" />
              mindweaveacademy.com
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Clock size={14} className="text-[#f4c430]" />
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden  py-16 md:py-24 bg-[#020817]">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#20c9b0]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5b7cfd]/10 rounded-full blur-[160px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#20c9b0_1px,transparent_1px),linear-gradient(to_bottom,#20c9b0_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-8xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-14">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-3/5 text-center md:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20c9b0]/10 border border-[#20c9b0]/20 text-[#20c9b0] text-xs font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#20c9b0]" />
              Where Data Science + AI + Students + Industry Connect
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
              <span className="text-white">Learn with</span>
              <br />
              <span className="text-[#20c9b0]">Mindweave</span>{" "}
              <span className="text-[#f4c430]">Academy</span>
            </h1>

            <p className="max-w-xl text-slate-400 text-lg md:text-xl leading-relaxed">
              Experience industry-driven education in Artificial Intelligence and
              Data Science—meticulously woven to shape tomorrow’s tech leaders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-4">
              <Link href="/programs">
                <Button
                  size="lg"
                  className="h-14 px-10 text-base font-bold text-white bg-[#20c9b0] hover:bg-[#18b39d] transition-all rounded-full border-none shadow-lg group"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
               
                <div className="bg-[#f4c430] px-5 py-3 rounded-xl shadow-md">
                  <span className="text-lg font-bold text-black">+91 84474 04770</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end ">
            <Card className="w-full max-w-md rounded-[2.5rem] border-none bg-white shadow-2xl shadow-[#20c9b0]/15 overflow-hidden ">
              <CardContent className="p-8 sm:p-10 space-y-7 ">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Book Demo Class
                  </h2>
                  <p className="text-sm text-slate-500 font-medium">
                    Your career transformation starts here
                  </p>
                  <div className="flex justify-center gap-2 pt-2">
                    <div className="h-1.5 w-10 rounded-full bg-[#20c9b0]" />
                    <div className="h-1.5 w-10 rounded-full bg-[#f4c430]" />
                    <div className="h-1.5 w-10 rounded-full bg-[#5b7cfd]" />
                  </div>
                </div>

                {/* FORM START */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#20c9b0]/20 focus:border-[#20c9b0] rounded-xl"
                  />

                  <Input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#f4c430]/20 focus:border-[#f4c430] rounded-xl"
                  />

                  <Input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-14 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#5b7cfd]/20 focus:border-[#5b7cfd] rounded-xl"
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 font-bold text-white bg-[#0f172a] hover:bg-[#020617] transition-all rounded-xl shadow-lg"
                  >
                    {loading ? "Saving Data..." : "Submit Request"}
                  </Button>
                </form>
                {/* FORM END */}

                <p className="text-[11px] text-center text-slate-400 font-medium">
                  By submitting, you agree to our{" "}
                  <span className="text-slate-900 underline cursor-pointer">Terms</span> and{" "}
                  <span className="text-slate-900 underline cursor-pointer">Privacy Policy</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}