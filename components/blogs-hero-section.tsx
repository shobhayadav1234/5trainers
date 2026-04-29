"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// BLOG TYPES
export type BlogPost = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    slug: string;
};

// BLOG DATA EXPORT
export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "How to Become a Data Analyst in Mohali",
        description:
            "Data analytics is one of the fastest-growing career options in Mohali, with increasing demand across IT companies, startups, and multinational organizations.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        category: "Career Guide",
        slug: "how-to-become-a-data-analyst-in-mohali",
    },
    {
        id: 2,
        title: "SEO and Digital Marketing Strategies",
        description:
            "SEO and digital marketing strategies are essential for businesses to improve online visibility, generate leads, and increase sales.",
        image: "/digital-marketing-strategy.jpg",
        category: "Marketing Strategies",
        slug: "seo-digital-marketing-strategies",
    },
    {
        id: 3,
        title: "Cyber Security Trends in 2026",
        description:
            "Cyber security is evolving rapidly as businesses face increasing threats from ransomware, phishing attacks, cloud vulnerabilities, and AI-driven cyber risks.",
        image: "/cybersecurity-trends.jpg",
        category: "Analysis",
        slug: "cyber-security-trends",
    },
    {
        id: 4,
        title: "Python Career Guide",
        description:
            "Python continues to be one of the most powerful and in-demand programming languages for careers in development, AI, and automation.",
        image: "/Python-Career-Opportunities.jpg",
        category: "Programming",
        slug: "python-career-guide",
    },
    {
        id: 5,
        title: "Data Science Career Opportunities",
        description:
            "Data science offers opportunities in machine learning, analytics, artificial intelligence, and business intelligence.",
        image: "/data-science.jpg",
        category: "Career Growth",
        slug: "data-science-career-opportunities",
    },
    {
        id: 6,
        title: "Full Stack Development Roadmap",
        description:
            "Full stack development covers frontend, backend, databases, and deployment technologies.",
        image: "/Full-Stack-Developer-Roadmap.jpg",
        category: "Development",
        slug: "full-stack-development-roadmap",
    },
    {
        id: 7,
        title: "Artificial Intelligence Future Trends",
        description:
            "Artificial Intelligence is transforming industries through automation, robotics, and machine learning.",
        image: "/image.jpg",
        category: "Future Trends",
        slug: "artificial-intelligence-future-trends",
    },
    {
        id: 8,
        title: "Cloud Computing Career Guide",
        description:
            "Cloud computing offers strong career opportunities in AWS, Azure, Google Cloud, and DevOps.",
        image: "/1-image.jpg",
        category: "Career Guide",
        slug: "cloud-computing-career-guide",
    },
    {
        id: 9,
        title: "Graphic Designing Success Tips",
        description:
            "Graphic designing is a creative field with strong demand in UI/UX, branding, and digital media.",
        image: "/7-Reasons.jpg",
        category: "Creative Career",
        slug: "graphic-designing-success-tips",
    },
    {
        id: 10,
        title: "Machine Learning Career Path",
        description:
            "Machine learning drives innovation in predictive analytics, AI systems, and automation.",
        image: "/machine.jpg",
        category: "AI Career",
        slug: "machine-learning-career-path",
    },
    {
        id: 11,
        title: "Web Development Industry Insights",
        description:
            "Web development continues to grow with increasing demand for frontend and backend technologies.",
        image: "/website-development-banner.jpg",
        category: "Industry Insights",
        slug: "web-development-industry-insights",
    },
    {
        id: 12,
        title: "Google Ads Expert Tips",
        description:
            "Google Ads helps businesses grow through targeted campaigns, conversions, and optimized ROI.",
        image: "/How-to-Become-a-Google-Ads.jpg",
        category: "Marketing Strategies",
        slug: "google-ads-expert-tips",
    },
    {
        id: 13,
        title: "Social Media Marketing Growth",
        description:
            "Social media marketing drives audience growth, conversions, and brand reach.",
        image: "/social-media-marketing-trends-2026.jpg",
        category: "Marketing Growth",
        slug: "social-media-marketing-growth",
    },
];

// BLOG CARD COMPONENT
const BlogCard = ({ post }: { post: BlogPost }) => (
    <Link
        href={`/blogs/${post.slug}`}
        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
    >
        <div className="relative h-52 w-full overflow-hidden">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute top-4 left-4">
                <span className="bg-[#00a3c8] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {post.category}
                </span>
            </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00a3c8] transition-colors line-clamp-2">
                {post.title}
            </h3>

            <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {post.description}
            </p>

            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-[#00a3c8] font-semibold text-sm">
                Read Full Article
                <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                />
            </div>
        </div>
    </Link>
);

// MAIN BLOG PAGE
const Blogs = () => {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <section className="relative h-[250px] md:h-[350px] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center" />

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        5 Trainers <span className="text-[#00a3c8]">Expert Blog</span>
                    </h1>

                    <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
                        Deep dive into Web Technologies and Industry Trends.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-4 mt-12">
                <div className="flex justify-between items-center mb-10 border-b pb-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Recent Articles
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Blogs;