"use client";

import React, { useEffect, useState } from "react";

const stats = [
  { number: 1675, label: "LEARNERS & COUNTING" },
  { number: 800, label: "COURSES & VIDEO" },
  { number: 1200, label: "CERTIFIED STUDENTS" },
  { number: 15000, label: "HAPPY STUDENTS" },
];

export default function BackImage() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval: any;

    if (running) {
      interval = setInterval(() => {
        setCounts((prev) =>
          prev.map((count, i) => {
            const max = stats[i].number;

            if (count >= max) return max;
            return count + Math.ceil(max / 100);
          })
        );
      }, 50);
    }

    return () => clearInterval(interval);
  }, [running]);

  // 🔁 Check if all reached max
  useEffect(() => {
    const done = counts.every((count, i) => count >= stats[i].number);

    if (done && running) {
      setRunning(false);

      // ⏱ wait 20 sec then restart
      setTimeout(() => {
        setCounts(stats.map(() => 0));
        setRunning(true);
      }, 20000);
    }
  }, [counts, running]);

  return (
    <section className="relative w-full overflow-hidden mb-30 mt-20">

      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/test.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Counters */}
      <div className="relative z-10 w-full py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 text-center">

          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-white">

              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter">
                {counts[index].toLocaleString()}
              </h2>

              <div className="w-8 h-1 bg-blue-500 my-2 rounded-full"></div>

              <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-200">
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}