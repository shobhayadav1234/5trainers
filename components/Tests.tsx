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

export type Testimonial = {
  name: string
  review: string
  role?: string
}

interface Props {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  autoplayDelay?: number
}

export default function TestimonialCarousel({
  title = "What Our Students Say",
  subtitle = "AI & Automation Learning Experience",
  testimonials,
  autoplayDelay = 3000,
}: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false })
  )

  return (
    <div className="w-full py-16 bg-white flex flex-col items-center overflow-hidden">

      {/* Header */}
      <div className="text-center mb-10 px-4">
        <span className="bg-slate-100 text-slate-800 text-xs font-bold px-4 py-1 rounded uppercase tracking-widest">
          TESTIMONIALS
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-black">
          {title}
        </h2>

        <p className="text-gray-500 mt-2">{subtitle}</p>

        <div className="w-24 h-[1.5px] bg-gray-300 mx-auto mt-6" />
      </div>

      {/* Carousel */}
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
        className="w-full max-w-5xl px-10"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="flex flex-col items-center p-2">

                {/* Review Box */}
                <div className="bg-[#0a0a0a] text-white p-8 md:p-14 rounded-[40px] relative mb-8 w-full max-w-3xl shadow-2xl">
                  <p className="text-center italic text-lg md:text-xl font-medium leading-relaxed">
                    “{item.review}”
                  </p>

                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[#0a0a0a]" />
                </div>

                {/* Name */}
                <h3 className="text-gray-800 font-bold text-lg uppercase tracking-wide">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  {item.role || "AI/ML Student"}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-0 opacity-40 hover:opacity-100 transition-opacity border-none bg-gray-100" />
          <CarouselNext className="right-0 opacity-40 hover:opacity-100 transition-opacity border-none bg-gray-100" />
        </div>
      </Carousel>
    </div>
  )
}