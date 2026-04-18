"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";

/* ================= DATA ================= */

const courses = [
  { img: "/kali.jpg" },
  { img: "/ethnical.jpg" },
  { img: "/python.jpg" },
  { img: "/mobile.jpg" },
  { img: "/net.jpg" },
  { img: "/web.jpg" },
];

/* ================= COMPONENT ================= */

export default function Features() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Auto scroll
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="py-10 md:py-16 bg-background">
      
      {/* HEADING */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-primary">
        Popular Courses
      </h2>

      {/* CAROUSEL */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}