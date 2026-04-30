import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

type BlogFrontmatter = {
    title: string;
    description: string;
    category: string;
    image: string;
    formTitle?: string;
    formDescription?: string;
};

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const filePath = path.join(
        process.cwd(),
        "content/blogs",
        `${slug}.mdx`
    );

    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const blog = data as BlogFrontmatter;

    // Yahan hum manual components define kar rahe hain taaki symbols hide ho jayein aur styling bani rahe
    const MarkdownComponents = {
        h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-8 mb-6 text-gray-900">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl font-semibold mt-10 mb-4 text-[#00a3c8]">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">{children}</h3>,
        p: ({ children }: any) => <p className="mb-4 leading-relaxed text-lg text-gray-700">{children}</p>,
        ul: ({ children }: any) => <ul className="ml-6 list-disc mb-4 space-y-2 text-gray-700">{children}</ul>,
        li: ({ children }: any) => <li className="text-lg">{children}</li>,
        hr: () => <hr className="my-10 border-gray-300" />,
        strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
    };

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="relative h-[320px] md:h-[450px] flex items-center justify-center bg-black overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <span className="inline-block bg-[#00a3c8] text-white text-sm font-bold px-4 py-2 rounded-full uppercase mb-4">
                        {blog.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        {blog.title}
                    </h1>
                    <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
                        {blog.description}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Side Blog Content */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <article>
                        {/* ReactMarkdown with custom components to handle styling and hide symbols */}
                        <ReactMarkdown components={MarkdownComponents}>
                            {content}
                        </ReactMarkdown>
                    </article>
                </div>

                {/* Right Side Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8 h-fit sticky top-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {blog.formTitle || "Get Free Career Counseling"}
                    </h3>
                    <p className="text-gray-600 mb-6">
                        {blog.formDescription || "Fill out the form below to connect with our experts."}
                    </p>
                    <form className="space-y-4">
                        <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a3c8]" />
                        <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a3c8]" />
                        <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a3c8]" />
                        <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a3c8]">
                            <option>Select Course Interest</option>
                            <option>Cyber Security</option>
                            <option>Data Analytics</option>
                        </select>
                        <textarea placeholder="Your Message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00a3c8]" />
                        <button type="submit" className="w-full bg-[#00a3c8] hover:bg-[#0089a8] text-white font-bold py-3 rounded-lg transition-colors">
                            Submit Now
                        </button>
                    </form>
                </div>
            </section>  
        </main>
    );
}