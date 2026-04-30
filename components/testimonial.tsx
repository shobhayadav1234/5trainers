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
    review: "This institute is one of the best for professional training. Huge thanks to all 5 trainers for their amazing teaching and constant support. Everything here is top-notch — highly recommended!" 
  },
  { 
    name: "Rahul Sharma", 
    review: "The hands-on labs and real-world scenarios are amazing. If you want practical knowledge instead of just theory, this is the perfect place to learn from 5 expert trainers." 
  },
  { 
    name: "Sneha Kapoor", 
    review: "The 5 trainers are highly professional and the support team is very helpful. From day one, the focus was on building strong concepts and practical skills." 
  },
  { 
    name: "Amit Verma", 
    review: "Highly recommended for anyone looking to build a strong career. The guidance from 5 experienced trainers helps you understand real industry standards." 
  },
  { 
    name: "Priya Das", 
    review: "The placement support is excellent. With guidance from 5 trainers, I improved my skills and confidence, which helped me get placed quickly." 
  },
  { 
    name: "Vikram Singh", 
    review: "The curriculum is detailed and the teaching approach is very practical. All 5 trainers explain even complex topics in a very simple way." 
  },
  { 
    name: "Anjali Mehta", 
    review: "I had the best learning experience here. The 5 trainers provide continuous support and the learning environment is excellent." 
  },
  { 
    name: "Deepak Raj", 
    review: "Great value for money and a positive learning environment. Learning from 5 expert trainers makes a big difference in understanding concepts deeply." 
  }
]

export function Test() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  )

  return (
    <div className="w-full py-20 bg-white flex flex-col items-center overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          <span className="text-[#10b981] text-[10px] font-black uppercase tracking-[0.2em]">
            Testimonials
          </span>
        </div>
        
        {/* Logo Inspired Gradient Heading */}
        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#6366f1]">
          What Students Say <br /> About <span className="text-[#0a0f1a]">Skill Nexus</span>
        </h2>
        
        <div className="flex gap-1 justify-center mt-6">
          <div className="w-8 h-1 bg-[#10b981] rounded-full" />
          <div className="w-2 h-1 bg-[#f59e0b] rounded-full" />
          <div className="w-5 h-1 bg-[#6366f1] rounded-full" />
        </div>
      </div>

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
            <CarouselItem key={index} className="md:basis-full lg:basis-full">
              <div className="flex flex-col items-center p-2">
                
                {/* Review Bubble with Logo-Matched Background */}
                <div className="bg-[#0a0f1a] text-white p-10 md:p-16 rounded-[3rem] relative mb-10 w-full max-w-4xl shadow-xl shadow-indigo-900/10 border border-white/5">
                  <Quote className="absolute top-8 left-8 text-white/5 w-16 h-16" />
                  
                  <p className="text-center italic text-xl md:text-2xl font-medium leading-relaxed relative z-10 text-slate-200">
                    "{item.review}"
                  </p>
                  
                  {/* Styled Triangle Tip */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[25px] border-t-[#0a0f1a]"></div>
                  
                  {/* Top Gradient Bar */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-[#10b981] via-[#f59e0b] to-[#6366f1] rounded-b-full" />
                </div>
                
                {/* Student Name in Logo Green */}
                <h3 className="text-[#10b981] font-black text-xl md:text-2xl uppercase tracking-tighter">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                  Verified Alumnus
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons with Hover Effects */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-0 h-12 w-12 border-slate-200 text-slate-400 hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-all" />
          <CarouselNext className="right-0 h-12 w-12 border-slate-200 text-slate-400 hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-all" />
        </div>
      </Carousel>
    </div>
  )
}