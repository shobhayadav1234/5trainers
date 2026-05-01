"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Karan Khanna",
    review:
      "Mindweave Academy is one of the best institutes for professional training. The mentors are highly supportive and provide practical learning that truly builds confidence.",
  },
  {
    name: "Rahul Sharma",
    review:
      "The hands-on projects and expert guidance helped me gain real-world skills. Perfect place for anyone serious about career growth.",
  },
  {
    name: "Sneha Kapoor",
    review:
      "From practical sessions to career support, everything is structured professionally. The learning environment is excellent.",
  },
  {
    name: "Amit Verma",
    review:
      "Highly recommended for building strong technical skills. The trainers focus on real industry standards and practical implementation.",
  },
  {
    name: "Priya Das",
    review:
      "Excellent placement support and professional mentorship. My confidence and technical abilities improved significantly.",
  },
  {
    name: "Vikram Singh",
    review:
      "The curriculum is detailed, modern, and practical. Complex concepts are explained in a simple and effective way.",
  },
  {
    name: "Anjali Mehta",
    review:
      "One of the best learning experiences I’ve had. Continuous support and practical exposure make a huge difference.",
  },
  {
    name: "Deepak Raj",
    review:
      "Great value for money with a strong focus on career success. Mindweave Academy truly prepares students for industry.",
  },
]

export function Test() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  )

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20c9b0]/10 border border-[#20c9b0]/20 mb-5">
          <div className="w-2 h-2 rounded-full bg-[#20c9b0]" />
          <span className="text-[#20c9b0] text-[10px] font-black uppercase tracking-[0.25em]">
            Student Reviews
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">
          What Students Say About{" "}
          <span className="text-[#20c9b0]">Mindweave Academy</span>
        </h2>

        <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
          Real success stories from students who transformed their careers with
          practical learning and expert mentorship.
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-5xl px-6 md:px-10"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center p-2">
                {/* Review Card */}
                <div className="bg-black text-white p-8 md:p-12 rounded-3xl relative mb-8 w-full max-w-4xl border border-slate-800 shadow-lg">
                  <Quote className="absolute top-6 left-6 text-[#20c9b0]/10 w-12 h-12" />

                  <p className="text-center text-lg md:text-xl leading-relaxed font-medium text-slate-200 relative z-10">
                    "{item.review}"
                  </p>

                  {/* Bottom Arrow */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-black rotate-45 border-r border-b border-slate-800"></div>
                </div>

                {/* Student Info */}
                <h3 className="text-[#20c9b0] font-black text-xl md:text-2xl uppercase tracking-tight">
                  {item.name}
                </h3>

                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mt-2">
                  Verified Student
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-0 h-12 w-12 border-slate-200 text-slate-500 hover:bg-[#20c9b0] hover:text-white hover:border-[#20c9b0] transition-all" />
          <CarouselNext className="right-0 h-12 w-12 border-slate-200 text-slate-500 hover:bg-[#20c9b0] hover:text-white hover:border-[#20c9b0] transition-all" />
        </div>
      </Carousel>
    </section>
  )
}