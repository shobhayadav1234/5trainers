"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
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
  // Autoplay setup: delay 3000ms (3 seconds)
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <div className="w-full py-12 bg-white flex flex-col items-center overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10 px-4">
        <span className="bg-slate-100 text-slate-800 text-xs font-bold px-4 py-1 rounded uppercase tracking-widest">
          Our Testimonials
        </span>
        <h2 className="text-3xl font-bold mt-4 text-black">
          What people Say About  5 Trainers Institute 
        </h2>
        <div className="w-24 h-[1px] bg-gray-300 mx-auto mt-6"></div>
      </div>

      <Carousel
        // opts={{ loop: true }} - Isse carousel khatam hone par wapas start ho jayega
        opts={{
            align: "start",
            loop: true,
          }}
        plugins={[plugin.current]}
        className="w-full max-w-5xl px-10"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="md:basis-full lg:basis-full">
              <div className="flex flex-col items-center p-2">
                {/* Review Bubble */}
                <div className="bg-[#0a0a0a] text-white p-8 md:p-14 rounded-[40px] relative mb-8 w-full max-w-3xl">
                  <p className="text-center italic text-lg md:text-xl font-medium leading-relaxed">
                    "{item.review}"
                  </p>
                  {/* Triangle Tip for Bubble */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#0a0a0a]"></div>
                </div>
                
                {/* Student Name */}
                <h3 className="text-gray-800 font-bold text-lg mt-2 uppercase tracking-wide">
                  {item.name}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-0 opacity-50 hover:opacity-100 transition-opacity" />
          <CarouselNext className="right-0 opacity-50 hover:opacity-100 transition-opacity" />
        </div>
      </Carousel>
    </div>
  )
}