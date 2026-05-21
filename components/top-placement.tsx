// UPDATED TopPlacement.tsx

"use client";

import Image from "next/image";
import React from "react";

interface PlacementItem {
    id: number;
    name: string;
    role: string;
    company: string;
    package: string;
    experience: string;
    year: string;
    image: string;
}

interface TopPlacementProps {
    badge: string;

    title: {
        normal: string;
        highlight: string;
    };

    description: string;

    items: PlacementItem[];
}

export default function TopPlacement({
    badge,
    title,
    description,
    items,
}: TopPlacementProps) {
    return (
        <section className="w-full bg-black py-20 px-4 md:px-10">
            <div className="mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mx-auto max-w-3xl text-center">

                    {/* BADGE */}
                    <span className="inline-flex items-center rounded-full border border-[#20c9b0]/30 bg-[#20c9b0]/10 px-5 py-2 text-sm font-semibold text-[#20c9b0]">
                        {badge}
                    </span>

                    {/* TITLE */}
                    <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                        {title.normal}{" "}
                        <span className="text-[#20c9b0]">
                            {title.highlight}
                        </span>
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-base leading-8 text-gray-300">
                        {description}
                    </p>
                </div>

              // UPDATED SMALL CARD UI

                <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#20c9b0]/40 hover:bg-[#20c9b0]/5 hover:shadow-xl hover:shadow-[#20c9b0]/10"
                        >

                            {/* IMAGE */}
                            <div className="flex justify-center">
                                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-[#20c9b0]/30 transition-all duration-300 group-hover:border-[#20c9b0]">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="mt-4 text-center">

                                {/* NAME */}
                                <h3 className="text-lg font-bold text-white">
                                    {item.name}
                                </h3>

                                {/* ROLE */}
                                <p className="mt-1 text-sm font-medium text-[#20c9b0]">
                                    {item.role}
                                </p>

                                {/* COMPANY */}
                                <div className="mt-3">
                                    <p className="text-[11px] uppercase tracking-widest text-gray-500">
                                        Placed At
                                    </p>

                                    <h4 className="mt-1 text-base font-semibold text-yellow-400">
                                        {item.company}
                                    </h4>
                                </div>

                                {/* PACKAGE */}
                                <div className="mt-4 rounded-xl border border-[#20c9b0]/20 bg-[#20c9b0] px-4 py-3">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-black">
                                        Annual Package
                                    </p>

                                    <h5 className="mt-1 text-2xl font-bold text-white">
                                        {item.package}
                                    </h5>
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                                <div>
                                    <p className="text-[10px] uppercase tracking-wide text-gray-500">
                                        Experience
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-white">
                                        {item.experience}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-[10px] uppercase tracking-wide text-gray-500">
                                        Year
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-white">
                                        {item.year}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}