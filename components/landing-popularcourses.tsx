"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";

/* ================= DATA ================= */

const courses = [
  { img: "/ai.png" },
  { img: "/digital-marketing-business.jpg" },
  { img: "/Software-Testing.jpg" },
  { img: "/graphic-design-service-500x500.jpg" },
  { img: "/What-Is-Social-Media-2.0-Simple-Explanation-And-Examples.jpg" },
  { img: "/Difference-Between-Cyber-Security-and-Information-Security.jpg " },
];

/* ================= COMPONENT ================= */

export default function Features() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  // ✅ Auto scroll
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="py-10 md:py-16 bg-background">

      {/* ✅ SAME WIDTH AS NAVBAR */}
      <div className="max-w-8xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-6 md:mb-10 tracking-tighter">
          <span className="text-[#20c9b0]">
            Our Popular Courses
          </span>
        </h2>

        {/* CAROUSEL */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {courses.map((course, i) => (
              <CarouselItem
                key={i}
                className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={course.img}
                      alt="course"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>

      </div>
    </div>
  );
}