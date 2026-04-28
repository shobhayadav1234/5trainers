"use client";
import React from 'react';
import { Calendar, User, Clock, CheckCircle, Share2 } from 'lucide-react';

const Blogs = () => {
    return (
        <main className="min-h-screen bg-white pb-20">
            {/* --- Page Header (About Us Style) --- */}
            <section className="relative h-[250px] md:h-[350px] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        5 Trainers <span className="text-[#00a3c8]">Expert Blog</span>
                    </h1>
                    <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
                        Deep dive into 5trainers, Web Technologies, and Industry Trends with our 5 Master Trainers.
                    </p>
                </div>
            </section>

            {/* --- Main Content Section (Screenshot Style) --- */}
            <div className="max-w-7xl mx-auto px-6 mt-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* --- LEFT SIDE: Content Area --- */}
                    <div className="w-full lg:w-2/3 space-y-10">
                        <div className="flex items-center gap-6 text-sm text-gray-500 font-bold uppercase tracking-widest border-b pb-6">
                            <span className="flex items-center gap-2"><User size={16} className="text-[#00a3c8]" /> By 5 Trainers Team</span>
                            <span className="flex items-center gap-2"><Calendar size={16} className="text-[#00a3c8]" /> April 28, 2026</span>
                            <span className="flex items-center gap-2"><Clock size={16} className="text-[#00a3c8]" /> 12 Min Read</span>
                        </div>

                        {/* Introduction */}
                        <section className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                            <h2 className="text-3xl font-black text-gray-900 mb-6 border-l-8 border-[#00a3c8] pl-4">
                                Mastering the Digital Frontier: Why 5 Trainers Institute is Leading the Change
                            </h2>
                            <p className="text-xl text-gray-600 italic mb-8">
                                "In an era where cyber threats evolve every second, traditional education is no longer enough. You need the combined expertise of specialists who breathe and live technology."
                            </p>
                            <p>
                                5Trainers and Full-stack development are not just subjects anymore; they are the backbone of the global economy. At 5 Trainers Institute, we recognized early on that a single mentor cannot master every domain. That’s why we hand-picked **5 dedicated experts** to lead our curriculum.
                            </p>
                        </section>

                        {/* Core Values Section (Matches the Vision Screenshot style) */}
                        <section className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#00a3c8] space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                <CheckCircle className="text-[#00a3c8]" /> Our Practical Philosophy
                            </h3>
                            <p className="text-gray-700">
                                Unlike other institutes that focus on slides and theory, 5 Trainers focuses on the **'Command Line'**. Our students spend 90% of their time on live servers, real-world bug hunting, and building scalable architectures. We believe that if you can't build it or break it, you haven't learned it.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="flex items-center gap-2 font-bold text-sm text-gray-800 bg-white p-3 rounded-lg shadow-sm">
                                    <span className="text-[#00a3c8]">01.</span> Advanced Penetration Testing
                                </div>
                                <div className="flex items-center gap-2 font-bold text-sm text-gray-800 bg-white p-3 rounded-lg shadow-sm">
                                    <span className="text-[#00a3c8]">02.</span> Secure Next.js Architectures
                                </div>
                                <div className="flex items-center gap-2 font-bold text-sm text-gray-800 bg-white p-3 rounded-lg shadow-sm">
                                    <span className="text-[#00a3c8]">03.</span> Cloud Infrastructure Defense
                                </div>
                                <div className="flex items-center gap-2 font-bold text-sm text-gray-800 bg-white p-3 rounded-lg shadow-sm">
                                    <span className="text-[#00a3c8]">04.</span> Zero-Trust Security Models
                                </div>
                            </div>
                        </section>

                        {/* Detailed Content Paragraphs */}
                        <section className="space-y-6 text-gray-700 leading-relaxed">
                            <h3 className="text-2xl font-bold text-gray-900">Bridging the Industry Gap</h3>
                            <p>
                                The gap between what is taught in colleges and what is required in the industry is massive. Companies like Google, Microsoft, and Amazon are looking for problem solvers. Our 5 Trainers bring their personal industry experience to the classroom, teaching you how to navigate complex project requirements and bypass security protocols effectively.
                            </p>
                            <p>
                                We cover everything from the basics of Linux to the complexities of AI-driven security systems. Each trainer at our institute is responsible for one specific vertical, ensuring that you get the deepest knowledge possible in every segment of your training journey.
                            </p>
                        </section>

                        {/* Footer of Content */}
                        <div className="flex items-center justify-between border-t border-b py-6 mt-12">
                            <div className="flex gap-4">
                                <span className="font-bold text-gray-900">Tags:</span>
                                <span className="text-[#00a3c8] hover:underline cursor-pointer">#EthicalHacking</span>
                                
                            </div>
                          
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: Sticky Image/Illustration (Screenshot Style) --- */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-24 space-y-8">

                            {/* Illustration Container */}
                            <div className="bg-[#f8f9fa] rounded-[30px] p-6 border border-gray-100 shadow-xl overflow-hidden group">
                                <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                                    {/* Illustration Image - Like your Vision Screenshot */}
                                    <img
                                        src="https://img.freepik.com/free-vector/hacker-activity-concept-illustration_114360-2342.jpg"
                                        alt="Cyber Security Illustration"
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#00a3c8]/20 to-transparent pointer-events-none"></div>
                                </div>
                                <div className="mt-6 text-center">
                                    <h4 className="text-xl font-black text-gray-900 uppercase">Expert Mentorship</h4>
                                    <p className="text-sm text-gray-500 mt-2">Get trained by the top 1% of the industry professionals.</p>
                                </div>
                            </div>

                            {/* Quick Contact Card */}
                            <div className="bg-black text-white p-8 rounded-[30px] shadow-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                                    <p className="text-gray-400 text-sm mb-6">Connect with 5 Trainers Institute today and transform your future.</p>
                                    <button className="w-full bg-[#00a3c8] text-white font-black py-4 rounded-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                        Enquire Now
                                    </button>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00a3c8]/20 rounded-full blur-3xl"></div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* Industry Demand Section */}
                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-900">The Rising Demand for Skilled Tech Professionals</h3>
                    <p>
                        The digital transformation of businesses worldwide has created an unprecedented demand for professionals skilled in cyber security, cloud computing, and full-stack development. From startups to Fortune 500 companies, organizations require experts who can secure infrastructures, build scalable applications, and defend against sophisticated cyber attacks.
                    </p>
                    <p>
                        At 5 Trainers Institute, our curriculum is strategically aligned with global market needs. Students are trained not only in technical concepts but also in practical implementation, ensuring they are prepared to solve real business challenges from day one.
                    </p>
                    <p>
                        Our programs are constantly updated to reflect the latest advancements in technology, including AI security integration, DevSecOps, blockchain security, and modern web frameworks like Next.js, React, and cloud-native architectures.
                    </p>
                </section>

                {/* Why Choose Us */}
                <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Why Students Choose 5 Trainers Institute</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-xl bg-gray-50">
                            <h4 className="font-bold text-lg text-[#00a3c8] mb-2">Live Project Training</h4>
                            <p>
                                Students work on real applications, penetration testing labs, deployment systems, and production-level projects.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-gray-50">
                            <h4 className="font-bold text-lg text-[#00a3c8] mb-2">Dedicated Domain Experts</h4>
                            <p>
                                Each trainer specializes in a focused technical area, ensuring deeper expertise and advanced mentorship.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-gray-50">
                            <h4 className="font-bold text-lg text-[#00a3c8] mb-2">Placement Support</h4>
                            <p>
                                Resume building, interview preparation, portfolio development, and direct hiring opportunities.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-gray-50">
                            <h4 className="font-bold text-lg text-[#00a3c8] mb-2">Modern Infrastructure</h4>
                            <p>
                                Access enterprise tools, premium software, cloud labs, and advanced testing environments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Student Success Section */}
                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-900">Transforming Beginners into Industry Experts</h3>
                    <p>
                        Many of our students begin with little or no technical background. Through our structured mentorship programs, they evolve into highly capable professionals equipped to handle complex development environments, cyber defense systems, and enterprise software projects.
                    </p>
                    <p>
                        The transformation is driven by consistency, mentorship, and hands-on execution. From building secure APIs to performing vulnerability assessments, our students gain confidence through practical mastery.
                    </p>
                    <p>
                        Our alumni now work across leading organizations, freelance globally, and even launch their own agencies — a testament to the effectiveness of our model.
                    </p>
                </section>

                {/* Future Trends */}
                <section className="bg-[#00a3c8] text-white p-10 rounded-3xl space-y-6 shadow-xl">
                    <h3 className="text-3xl font-black">Preparing for the Future of Technology</h3>
                    <p className="text-lg">
                        Technology is evolving rapidly with Artificial Intelligence, machine learning security systems, cloud-native applications, and zero-trust infrastructures redefining the digital world.
                    </p>
                    <p>
                        5 Trainers Institute prepares you for these future trends by integrating advanced tools, real-world simulations, and cutting-edge practices directly into the learning process.
                    </p>
                    <p className="font-bold text-xl">
                        We don't just teach technology — we prepare future leaders.
                    </p>
                </section>

                {/* Closing Section */}
                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <h3 className="text-2xl font-bold text-gray-900">Conclusion</h3>
                    <p>
                        Success in today’s competitive digital landscape requires more than certifications — it demands real capability, strategic thinking, and practical execution.
                    </p>
                    <p>
                        5 Trainers Institute has built its reputation by delivering world-class technical education through domain-specific mentorship, practical training, and industry alignment.
                    </p>
                    <p className="font-semibold text-gray-900">
                        Whether your goal is to become a cyber security specialist, full-stack developer, cloud engineer, or digital innovator, 5 Trainers provides the roadmap to transform your ambitions into reality.
                    </p>
                </section>

                {/* Industry Demand Section */}
                <section className="space-y-8 text-gray-700 leading-relaxed">
                    <h3 className="text-3xl font-black text-gray-900 border-l-8 border-[#00a3c8] pl-4">
                        The Rising Demand for Skilled Tech Professionals
                    </h3>
                    <p>
                        The digital revolution has created massive global demand for experts in <strong>Cyber Security</strong>, <strong>Cloud Computing</strong>, and <strong>Full-Stack Development</strong>. Modern businesses require professionals who can build, secure, and scale infrastructures efficiently.
                    </p>
                    <p>
                        At <strong>5 Trainers Institute</strong>, our mission is to bridge this gap by providing students with <strong>job-ready practical skills</strong> that align directly with current industry demands.
                    </p>
                    <p>
                        From <strong>ethical hacking</strong> to <strong>secure application development</strong>, our students are equipped with future-proof knowledge that empowers them to excel in competitive markets.
                    </p>
                </section>

                {/* Ratings Section */}
                <section className="bg-gray-50 rounded-3xl p-10 border border-gray-200 shadow-md space-y-8">
                    <h3 className="text-3xl font-black text-gray-900 text-center">
                        Trusted by Thousands of Students
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h4 className="text-4xl font-black text-[#00a3c8]">4.9★</h4>
                            <p className="font-bold mt-2">Student Satisfaction</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h4 className="text-4xl font-black text-[#00a3c8]">95%</h4>
                            <p className="font-bold mt-2">Placement Success</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h4 className="text-4xl font-black text-[#00a3c8]">5000+</h4>
                            <p className="font-bold mt-2">Students Trained</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h4 className="text-4xl font-black text-[#00a3c8]">5+</h4>
                            <p className="font-bold mt-2">Expert Trainers</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="space-y-8">
                    <h3 className="text-3xl font-black text-gray-900 border-l-8 border-[#00a3c8] pl-4">
                        Why Choose 5 Trainers Institute?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                            <h4 className="text-xl font-black text-[#00a3c8] mb-3">Live Practical Training</h4>
                            <p>
                                Gain real-world exposure through <strong>live projects</strong>, <strong>security labs</strong>, and <strong>production-level development environments</strong>.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                            <h4 className="text-xl font-black text-[#00a3c8] mb-3">Expert-Led Specialization</h4>
                            <p>
                                Learn directly from professionals specializing in <strong>AI</strong>, <strong>Cyber Security</strong>, <strong>Development</strong>, and <strong>Cloud</strong>.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                            <h4 className="text-xl font-black text-[#00a3c8] mb-3">Career Support</h4>
                            <p>
                                Receive complete assistance with <strong>resume building</strong>, <strong>mock interviews</strong>, and <strong>job placements</strong>.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                            <h4 className="text-xl font-black text-[#00a3c8] mb-3">Updated Curriculum</h4>
                            <p>
                                Stay ahead with training on <strong>modern frameworks</strong>, <strong>AI tools</strong>, and <strong>enterprise technologies</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Student Transformation Journey */}
                <section className="bg-black text-white rounded-3xl p-10 space-y-8 shadow-2xl">
                    <h3 className="text-3xl font-black text-white">
                        Student Transformation Journey
                    </h3>

                    <p className="text-gray-300 text-lg">
                        At <strong>5 Trainers Institute</strong>, we transform beginners into highly skilled professionals by focusing on:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/10 p-4 rounded-xl font-bold">✔ Hands-On Project Building</div>
                        <div className="bg-white/10 p-4 rounded-xl font-bold">✔ Real-World Security Labs</div>
                        <div className="bg-white/10 p-4 rounded-xl font-bold">✔ Full Portfolio Development</div>
                        <div className="bg-white/10 p-4 rounded-xl font-bold">✔ Advanced Career Guidance</div>
                    </div>

                    <p className="text-gray-300">
                        Our students consistently secure roles in <strong>top IT companies</strong>, <strong>freelance internationally</strong>, and launch successful digital careers.
                    </p>
                </section>

                {/* Future Section */}
                <section className="bg-[#00a3c8] text-white rounded-3xl p-12 space-y-8 shadow-xl">
                    <h3 className="text-4xl font-black">
                        Future-Proof Your Career
                    </h3>

                    <p className="text-lg leading-relaxed">
                        The future belongs to those who master <strong>Artificial Intelligence</strong>, <strong>Cyber Defense</strong>, <strong>Cloud Security</strong>, and <strong>Scalable Development</strong>.
                    </p>

                    <p className="text-lg leading-relaxed">
                        5 Trainers Institute prepares students not just for today’s jobs, but for tomorrow’s opportunities by integrating emerging technologies into every course.
                    </p>

                    <p className="font-black text-2xl">
                        We Build Experts. We Build Leaders.
                    </p>
                </section>

                {/* Conclusion */}
                <section className="space-y-8 text-gray-700 leading-relaxed">
                    <h3 className="text-3xl font-black text-gray-900 border-l-8 border-[#00a3c8] pl-4">
                        Conclusion
                    </h3>

                    <p>
                        In a world driven by innovation, practical expertise matters more than ever. <strong>5 Trainers Institute</strong> stands as a leader in technical education by combining specialized mentorship, hands-on execution, and industry-focused learning.
                    </p>

                    <p>
                        Whether your goal is to become an <strong>Ethical Hacker</strong>, <strong>Full-Stack Developer</strong>, <strong>Cloud Engineer</strong>, or <strong>AI Specialist</strong>, our platform provides the foundation for lasting success.
                    </p>

                    <p className="font-black text-xl text-gray-900">
                        Join 5 Trainers Institute — where ambition meets expertise.
                    </p>
                </section>
            </div>

        </main>
    );
};

export default Blogs;