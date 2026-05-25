"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CoursesAdminPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/api/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data.data));
    }, []);

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-8">
                Manage Courses
            </h1>

            <Link
                href="/admin/courses/new"
                className="bg-blue-600 text-black px-4 py-2 rounded"
            >
                Add New Course
            </Link>

            <div className="space-y-4">
                {courses.map((course: any) => (
                    <div
                        key={course._id}
                        className="border p-4 rounded flex justify-between"
                    >
                        <div>
                            <h2 className="font-bold">
                                {course.hero?.title}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {course.slug}
                            </p>
                        </div>

                        <Link
                            href={`/admin/courses/${course.slug}/edit`}
                            className="bg-green-600 text-black px-4 py-2 rounded"
                        >
                            Edit
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}