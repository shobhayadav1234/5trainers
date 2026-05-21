import { CourseContent } from "./types";

const businessAnalytics: CourseContent = {
    slug: "business-analytics",

    write: {
        courseName: "BUSINESS ANALYTICS",

        aboutTitle: "About Business Analytics",

        aboutPara1:
            "Business Analytics Course is a data-driven training program focused on analyzing business data to generate insights, optimize decision-making, and improve organizational performance. The course covers key tools and technologies such as Microsoft Excel, SQL, Power BI, Python (Pandas, NumPy), and data visualization techniques, along with concepts like data cleaning, statistical analysis, forecasting, and dashboard creation.",

        aboutPara2:
            "This program is designed to help learners understand how to convert raw data into actionable business insights across domains like marketing, finance, operations, and product strategy. Through real-world case studies and projects, learners build practical skills required for roles such as Business Analyst, Data Analyst, MIS Analyst, and Reporting Specialist.",

        aboutPara3:
            "Join the program and get the opportunity to learn under the guidance of a Business Analytics specialist. The course combines business understanding with analytics tools, preparing learners for modern business intelligence and strategic decision-making roles.",

        learningObjectives: [
            "Understand the role of a Business Analyst",
            "Analyze business problems using data",
            "Work with Excel and analytical tools",
            "Create dashboards and business reports",
            "Perform data cleaning and interpretation",
            "Translate business requirements into actionable insights",
            "Use analytics for decision making",
            "Work on real business case studies",
            "Develop stakeholder communication skills",
            "Build reporting and dashboard expertise",
            "Prepare for Business Analyst interviews",
            "Develop career-ready business analytics skills",
        ],

        requirements: [
            "Basic computer knowledge",
            "Interest in business analysis and decision-making",
            "No prior coding experience required",
            "Suitable for technical and non-technical learners",
        ],

        modules: [
            "Module 01: Introduction to Business Analytics",
            "Module 02: Business Analysis Fundamentals",
            "Module 03: Excel for Business Analytics",
            "Module 04: Data Analysis & Visualization",
            "Module 05: SQL for Business Analysts",
            "Module 06: Tools for Business Analytics",
            "Module 07: Business Case Studies",
            "Module 08: Project & Portfolio Development",
            "Module 09: Forecasting & KPI Analysis",
            "Module 10: Dashboard Design & Reporting",
            "Module 11: Stakeholder Communication",
            "Module 12: Interview Preparation",
        ],
    },

    move: {
        titleLine1: "Business",
        titleLine2: "Analytics",
        description:
            "Master business analytics, Excel, SQL, Power BI, reporting, dashboards, forecasting, and strategic decision-making through practical projects and real-world case studies.",
    },

    training: {
        heading: "Modes of Training",
        subHeading:
            "Flexible training options designed for students, graduates, and working professionals.",

        trainingModes: [
            {
                title: "Classroom Training",
                icon: "monitor",
                description:
                    "Instructor-led classroom sessions with practical projects, dashboards, reporting tools, and real business case studies.",
            },
            {
                title: "Online Learning",
                icon: "globe",
                description:
                    "Interactive online classes with assignments, projects, and guided business analytics implementation.",
            },
            {
                title: "Blended Learning",
                icon: "book",
                description:
                    "Hybrid learning model combining flexibility with practical implementation and expert mentorship.",
            },
        ],

        targetAudience: [
            "Fresh Graduates",
            "Working Professionals",
            "Commerce Students",
            "Management Students",
            "IT Professionals",
            "Business Analysts",
            "Career Switchers",
            "Analytics Aspirants",
        ],
    },

    book: {
        title: "Business Analytics Overview",

        paragraphs: [
            "This program provides practical business analytics training focused on data analysis, reporting, dashboard creation, stakeholder communication, and strategic business decision-making.",

            "Learners work on real-world business case studies involving finance, operations, marketing, and performance analysis to develop professional analytical capabilities.",

            "The course prepares learners for roles such as Business Analyst, Data Analyst, MIS Executive, Reporting Analyst, and Operations Analyst.",
        ],

        highlights: [
            {
                title: "Excel for Business Analytics",
                desc: "Master Excel dashboards, advanced functions, reporting, and business data management.",
            },
            {
                title: "SQL for Reporting",
                desc: "Build strong SQL skills for data extraction, business reporting, and database analysis.",
            },
            {
                title: "Power BI / Tableau",
                desc: "Create interactive dashboards and business intelligence reports.",
            },
            {
                title: "Data Visualization",
                desc: "Design professional dashboards and executive-level reports.",
            },
            {
                title: "Business Process Analysis",
                desc: "Understand business requirements, workflows, and stakeholder expectations.",
            },
            {
                title: "Forecasting & KPI Tracking",
                desc: "Apply forecasting techniques and performance metrics for business growth.",
            },
            {
                title: "Real-World Projects",
                desc: "Work on practical business case studies and portfolio-ready projects.",
            },
            {
                title: "Career Readiness",
                desc: "Prepare for interviews and professional business analytics roles.",
            },
        ],
    },
    batches: {
        heading: "Upcoming Live Batches",
        subHeading: "Reserve your spot in our next instructor-led interactive session.",
        items: [
            {
                id: 1, // Unique
                date: "30",
                month: "MAR",
                courseName: "AWS & DevOps",
                description: "Learn AWS services, DevOps tools and real-world cloud deployment workflows.",
                type: "Online Live",
                schedule: "Weekends",
                timing: "Morning Batch (IST)",
                duration: "8 Weeks",
                instructor: { name: "Aslam Khan", role: "AWS & DevOps Engineer", initials: "AK" },
                seatsLeft: 2,
            },
            {
                id: 2, // Unique
                date: "30",
                month: "MAR",
                courseName: "Data Science with Python",
                description: "Master Python, data analysis, visualization and machine learning basics.",
                type: "Online Live",
                schedule: "Weekdays",
                timing: "Evening Batch (IST)",
                duration: "8 Weeks",
                instructor: { name: "Manab Das", role: "Data Science Expert", initials: "MD" },
                seatsLeft: 3,
            },
            {
                id: 3, // Unique
                date: "30",
                month: "MAR",
                courseName: "Full Stack Development (Java + UI/UX)",
                description: "Build end-to-end web apps using Java, frontend frameworks and UI/UX.",
                type: "Online Live",
                schedule: "Weekdays",
                timing: "Noon Batch (IST)",
                duration: "8 Weeks",
                instructor: { name: "Ganesh Dutt", role: "Java Full Stack Developer", initials: "GD" },
                seatsLeft: 4,
            },
        ],
    },
    placementSection: {
        badge: "Industry-Ready Ecosystem",

        title: {
            line1: "Master Industry Skills",
            highlight: "With Confidence",
        },

        description:
            "Accelerate your career with practical, industry-aligned training programs. Learn from experienced mentors, work on real-world projects, build a professional portfolio, and gain the skills employers are actively looking for.",


        extraDescription:
            "Whether you're a student, fresher, or working professional, our training programs are designed to help you master new skills, earn industry-recognized certifications, prepare for interviews, and unlock exciting career opportunities across multiple domains.",

        rating: {
            academyName: "Mindweave Academy Rating",
            value: "4.9/5",
            reviewText: "Rated by 5,000+ learners",
        },

        actionButtons: [
            {
                title: "Placement Report",
                icon: "file",
                url: "/placement-report.pdf",
            },
            {
                title: "Download Syllabus",
                icon: "download",
                url: "/appium-training-syllabus.pdf",
            },
            {
                title: "Attempt Mock Test",
                icon: "briefcase",
                url: "/mock-test",
            },
            {
                title: "Interview Questions",
                icon: "message",
                url: "/interview-questions",
            },
        ],

        marketStats: [
            {
                title: "Get Jobs",
                value: "1500+",
            },
            {
                title: "Average Package",
                value: "₹7.2 LPA",
            },
            {
                title: "Placements",
                value: "98%",
            },
        ],

        form: {
            heading: "Start Your Learning Journey",
            description:
                "Connect with our career experts and get a personalized learning roadmap tailored to your goals, experience level, and career aspirations.",
            buttonText: "Claim Free Career Roadmap",
        },
    },


    topPlacements: {
        badge: "Success Stories",

        title: {
            normal: "Our Latest",
            highlight: "Placements",
        },

        description:
            "Our learners are successfully placed in leading IT companies with high salary packages and excellent career growth opportunities. Through hands-on API testing projects, real-time industry exposure, and interview preparation, students become confident and industry-ready professionals.",

        items: [
            {
                id: 1,
                name: "Rahul Sharma",
                role: "API Testing Engineer",
                company: "TCS",
                package: "₹7.2 LPA",
                experience: "Experienced Professional",
                year: "2026",
                image: "/men1.jfif",
            },
            {
                id: 2,
                name: "Sneha Kapoor",
                role: "Automation Tester",
                company: "Infosys",
                package: "₹6.8 LPA",
                experience: "Experienced Professional",
                year: "2026",
                image: "/women1.jpg",
            },
            {
                id: 3,
                name: "Aman Verma",
                role: "QA Analyst",
                company: "Wipro",
                package: "₹5.9 LPA",
                experience: "Experienced Professional",
                year: "2026",
                image: "/men2.jpg",
            },
            {
                id: 4,
                name: "Priya Singh",
                role: "Software Tester",
                company: "Accenture",
                package: "₹8.1 LPA",
                experience: "Experienced Professional",
                year: "2026",
                image: "/women2.jpg",
            },
            {
                id: 5,
                name: "Karan Malhotra",
                role: "Automation Engineer",
                company: "Capgemini",
                package: "₹6.4 LPA",
                experience: "Experienced Professional",
                year: "2026",
                image: "/men3.jfif",
            },
            {
                id: 6,
                name: "Neha Yadav",
                role: "Backend QA Engineer",
                company: "Cognizant",
                package: "₹7.5 LPA",
                experience: "Experienced Professional",
                year: "2026",
                image: "/women3.jpg",
            },
        ],
    },

    // Inside agenticAIToolsAnalytics object:
    relatedCourses: [
        {
            title: "Automation Testing Training in Delhi",
            image: "/images.jpg", // Replace with your paths
            duration: "4-6 Months",
            rating: "4.8",
            reviews: "(52.8k)",
            description: "4Achievers Automation Testing Training in Delhi Course Covers: Introduction | Basic...",
            tag: "SOFTWARE TESTING"
        },
        {
            title: "Full Stack Development Training in Delhi",
            image: "/full-stack-development-2.jpg",
            duration: "4-6 Months",
            rating: "4.8",
            reviews: "(42.1k)",
            description: "4Achievers Full Stack Development Training in Delhi Course Covers: Introduction | Basic | Proje...",
            tag: "FULL STACK DEVELOPMENT"
        },
        {
            title: "Cloud Computing Training in Delhi",
            image: "/cloud-computing-diagram.jpg",
            duration: "4-6 Months",
            rating: "4.8",
            reviews: "(40.8k)",
            description: "4Achievers Cloud Computing Training in Delhi Course Covers: Introduction | Basic...",
            tag: "CLOUD COMPUTING"
        },
        {
            title: "Social Media Marketing Training in Delhi",
            image: "/businessman-standing-near-sketch-social-media-icons-holding-smartphone-concept-inspiration-imagination-235618855.jpg",
            duration: "4-6 Months",
            rating: "4.8",
            reviews: "(50.3k)",
            description: "4Achievers Social Media Marketing Training in Delhi Course Covers: Introduction | Basic...",
            tag: "DIGITAL MARKETING"
        }
    ],


    faq: {
        title: "Frequently Asked Questions",

        faqs: [
            {
                question: "What is Business Analytics used for?",
                answer:
                    "Business Analytics helps organizations analyze data to improve decisions, operational efficiency, performance, and strategic planning.",
            },
            {
                question: "Is Business Analytics suitable for freshers?",
                answer:
                    "Yes, the course is beginner-friendly and covers fundamentals step by step before moving to advanced tools and projects.",
            },
            {
                question: "What tools are covered in Business Analytics training?",
                answer:
                    "The course covers Excel, SQL, Power BI, Tableau, data visualization, and foundational Python concepts.",
            },
            {
                question: "What job roles can I get after Business Analytics training?",
                answer:
                    "You can pursue roles such as Business Analyst, Data Analyst, MIS Executive, Reporting Analyst, and Operations Analyst.",
            },
            {
                question: "Does Business Analytics require coding knowledge?",
                answer:
                    "No, coding is not mandatory. Basic SQL and analytical thinking are sufficient to begin.",
            },
        ],
    },

    testimonials: {
        title: "What Students Say About Business Analytics",

        items: [
            {
                name: "Aman Gupta",
                review:
                    "This course helped me understand real business analysis workflows, dashboards, and reporting tools that are directly useful in professional roles.",
            },
            {
                name: "Pooja Verma",
                review:
                    "The practical case studies and Excel, SQL, and Power BI training gave me the confidence to transition into a business analytics career.",
            },
        ],
    },
};

export default businessAnalytics;