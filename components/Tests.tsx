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
    review: "5 Trainers Institute join karna mera best decision tha. Panchon trainers ka apna-apna specialization hai, jiski wajah se humein testing ke har aspect ki deep knowledge mili. Outstanding experience!" 
  },
  { 
    name: "Rahul Sharma", 
    review: "Yahan ka training model bohot unique hai. Jab aap 5 expert trainers se seekhte hain, toh doubts ke liye koi jagah nahi bachti. Unka practical approach aur real-world scenarios mujhe bohot pasand aaye." 
  },
  { 
    name: "Sneha Kapoor", 
    review: "Professionalism aur support yahan top-notch hai. 5 trainers ki team har student par personally dhayan deti hai. Manual testing se lekar advanced automation tak ka safar bohot smooth raha." 
  },
  { 
    name: "Amit Verma", 
    review: "Highly recommended! 5 Trainers Institute mein sirf theory nahi, balki industry mein kaam kaise hota hai wo sikhaya jata hai. Trainers ka collective experience placements mein bohot kaam aata hai." 
  },
  { 
    name: "Priya Das", 
    review: "The mentorship here is incredible. 5 trainers ke saath interact karke mujhe technical skills ke saath-saath professional communication bhi seekhne ko mili. Best institute in Delhi!" 
  },
  { 
    name: "Vikram Singh", 
    review: "Mera career switch karna itna aasaan nahi hota agar 5 Trainers ki team ne mujhe support na kiya hota. Unki patience aur teaching style ekdum simple aur effective hai." 
  },
  { 
    name: "Anjali Mehta", 
    review: "Learning environment bohot positive hai. 5 expert trainers se seekhne ka fayda ye hai ki aapko har topic par multiple perspectives milte hain, jo concepts ko aur bhi mazboot banata hai." 
  },
  { 
    name: "Deepak Raj", 
    review: "Great value for money! Is institute mein 5 trainers ki team ka saath hona hi isse sabse alag banata hai. Career growth ke liye ye ek perfect platform hai." 
  }
]

export default function Tests() {
  // Autoplay setup: delay 3000ms (3 seconds)
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <div className="w-full py-16 bg-white flex flex-col items-center overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10 px-4">
        <span className="bg-slate-100 text-slate-800 text-xs font-bold px-4 py-1 rounded uppercase tracking-widest">
          OUR TESTIMONIALS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-black">
          What People Say About 5 Trainers Institute
        </h2>
        <div className="w-24 h-[1.5px] bg-gray-300 mx-auto mt-6"></div>
      </div>

      <Carousel
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
            <CarouselItem key={index} className="basis-full">
              <div className="flex flex-col items-center p-2">
                {/* Review Bubble */}
                <div className="bg-[#0a0a0a] text-white p-8 md:p-14 rounded-[40px] relative mb-8 w-full max-w-3xl shadow-2xl">
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
                <p className="text-gray-500 text-xs mt-1">Verified Student</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-0 opacity-40 hover:opacity-100 transition-opacity border-none bg-gray-100" />
          <CarouselNext className="right-0 opacity-40 hover:opacity-100 transition-opacity border-none bg-gray-100" />
        </div>
      </Carousel>
    </div>
  )
}