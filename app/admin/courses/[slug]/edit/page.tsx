"use client";

import { useEffect, useState } from "react";

export default function EditCoursePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const [course, setCourse] = useState<any>(null);
    const [slug, setSlug] = useState("");

    useEffect(() => {
        async function loadCourse() {
            const resolvedParams = await params;
            const slugValue = resolvedParams.slug;

            setSlug(slugValue);

            const res = await fetch(`/api/courses/${slugValue}`);
            const data = await res.json();

            setCourse(data.data);
        }

        loadCourse();
    }, [params]);

    const handleSave = async () => {
        const res = await fetch(`/api/courses/${slug}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course),
        });

        const data = await res.json();

        if (data.success) {
            alert("Course Updated Successfully");
        } else {
            alert("Update Failed");
        }
    };

    if (!course) return <p className="p-10">Loading...</p>;

    return (
        <div className="max-w-5xl mx-auto p-8">

            <h1 className="text-3xl font-bold mb-8">
                Edit {course.slug}
            </h1>

            <div className="mb-6 border p-4 rounded">

                <h2 className="font-bold mb-3">Hero Section Edit</h2>

                {/* TITLE */}
                <input
                    value={course.hero?.title || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            hero: {
                                ...course.hero,
                                title: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-2"
                    placeholder="Hero Title"
                />

                {/* DESCRIPTION */}
                <textarea
                    value={course.hero?.description || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            hero: {
                                ...course.hero,
                                description: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full"
                    placeholder="Hero Description"
                />
            </div>

            <div className="mb-6 border p-4 rounded">

                <h2 className="font-bold mb-3">Write Section Edit</h2>

                {/* ABOUT TITLE */}
                <input
                    value={course.write?.aboutTitle || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            write: {
                                ...course.write,
                                aboutTitle: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-2"
                    placeholder="About Title"
                />

                {/* PARA 1 */}
                <textarea
                    value={course.write?.aboutPara1 || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            write: {
                                ...course.write,
                                aboutPara1: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-2"
                    placeholder="Paragraph 1"
                />

                {/* PARA 2 */}
                <textarea
                    value={course.write?.aboutPara2 || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            write: {
                                ...course.write,
                                aboutPara2: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-2"
                    placeholder="Paragraph 2"
                />

                {/* PARA 3 */}
                <textarea
                    value={course.write?.aboutPara3 || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            write: {
                                ...course.write,
                                aboutPara3: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full"
                    placeholder="Paragraph 3"
                />
            </div>

            <div className="mb-6 border p-4 rounded">

                <h2 className="font-bold mb-3">Banner Edit</h2>

                <input
                    value={course.move?.titleLine1 || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            move: {
                                ...course.move,
                                titleLine1: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-2"
                    placeholder="Title Line 1"
                />

                <input
                    value={course.move?.titleLine2 || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            move: {
                                ...course.move,
                                titleLine2: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-2"
                    placeholder="Title Line 2"
                />

                <textarea
                    value={course.move?.description || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            move: {
                                ...course.move,
                                description: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full"
                    placeholder="Description"
                />
            </div>

            <div className="mb-6 border p-4 rounded">
                <h2 className="font-bold mb-3">Courses (Training Modes)</h2>

                {/* Heading */}
                <input
                    value={course.training?.heading || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            training: {
                                ...course.training,
                                heading: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-2"
                    placeholder="Heading"
                />

                {/* Sub Heading */}
                <input
                    value={course.training?.subHeading || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            training: {
                                ...course.training,
                                subHeading: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-4"
                    placeholder="Sub Heading"
                />

                <p className="font-semibold mb-2">Training Modes (JSON Edit)</p>

                <textarea
                    value={JSON.stringify(course.training?.trainingModes || [], null, 2)}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            training: {
                                ...course.training,
                                trainingModes: JSON.parse(e.target.value || "[]"),
                            },
                        })
                    }
                    className="border p-2 w-full h-40"
                />
            </div>

            <div className="mb-6 border p-4 rounded">
                <h2 className="font-bold mb-3">Book Section</h2>

                <input
                    value={course.book?.title || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            book: {
                                ...course.book,
                                title: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-2"
                    placeholder="Title"
                />

                <p className="font-semibold mb-2">Paragraphs</p>
                <textarea
                    value={JSON.stringify(course.book?.paragraphs || [], null, 2)}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            book: {
                                ...course.book,
                                paragraphs: JSON.parse(e.target.value || "[]"),
                            },
                        })
                    }
                    className="border p-2 w-full h-32 mb-4"
                />

                <p className="font-semibold mb-2">Highlights</p>
                <textarea
                    value={JSON.stringify(course.book?.highlights || [], null, 2)}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            book: {
                                ...course.book,
                                highlights: JSON.parse(e.target.value || "[]"),
                            },
                        })
                    }
                    className="border p-2 w-full h-32"
                />
            </div>

            <div className="mb-6 border p-4 rounded">
                <h2 className="font-bold mb-3">FAQ Section</h2>

                <input
                    value={course.faq?.title || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            faq: {
                                ...course.faq,
                                title: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-3"
                    placeholder="FAQ Title"
                />

                <p className="font-semibold mb-2">FAQs (JSON Edit)</p>

                <textarea
                    value={JSON.stringify(course.faq?.faqs || [], null, 2)}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            faq: {
                                ...course.faq,
                                faqs: JSON.parse(e.target.value || "[]"),
                            },
                        })
                    }
                    className="border p-2 w-full h-40"
                />
            </div>
            <div className="mb-6 border p-4 rounded">
                <h2 className="font-bold mb-3">Testimonials</h2>

                <input
                    value={course.testimonials?.title || ""}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            testimonials: {
                                ...course.testimonials,
                                title: e.target.value,
                            },
                        })
                    }
                    className="border p-2 w-full mb-3"
                    placeholder="Title"
                />

                <p className="font-semibold mb-2">Testimonials List</p>

                <textarea
                    value={JSON.stringify(course.testimonials?.items || [], null, 2)}
                    onChange={(e) =>
                        setCourse({
                            ...course,
                            testimonials: {
                                ...course.testimonials,
                                items: JSON.parse(e.target.value || "[]"),
                            },
                        })
                    }
                    className="border p-2 w-full h-40"
                />
            </div>

            {/* ================= SAVE BUTTON ================= */}
            <button
                onClick={handleSave}
                className="bg-green-600 text-black px-6 py-3 rounded mt-10"
            >
                Save Changes
            </button>
        </div>
    );
}