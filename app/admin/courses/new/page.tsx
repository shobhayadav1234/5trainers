"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCoursePage() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");

    const handleSubmit = async () => {
        const res = await fetch("/api/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                slug,
                hero: {
                    title,
                    description: "",
                    image: "",
                    category: "",
                },
            }),
        });

        const data = await res.json();

        if (data.success) {
            router.push(`/admin/courses/${slug}/edit`);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-10">
            <h1 className="text-3xl font-bold mb-8">
                Create Course
            </h1>

            <input
                placeholder="Course Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-3 w-full mb-4 rounded"
            />

            <input
                placeholder="Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="border p-3 w-full mb-4 rounded"
            />

            <button
                onClick={handleSubmit}
                className="bg-green-600 text-black px-6 py-3 rounded"
            >
                Create Course
            </button>
        </div>
    );
}