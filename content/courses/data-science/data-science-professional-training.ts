import { CourseContent } from "./types";

const dataSciencePro: CourseContent = {
    slug: "data-science-pro",

    write: {
        courseName: "DATA SCIENCE PRO",

        aboutTitle: "About Data Science Pro",

        aboutPara1:
            "Data Science Pro is a comprehensive industry-focused program designed to build expertise in statistics, data analysis, machine learning, predictive modeling, and business intelligence. This course prepares learners to work with real-world datasets and solve modern business problems through data-driven solutions.",

        aboutPara2:
            "Join the program and get the opportunity to learn under the guidance of a Data Science Pro specialist. This course covers Python programming, data cleaning, SQL, statistics, machine learning algorithms, data visualization, and deployment fundamentals through practical, project-based learning.",

        aboutPara3:
            "At Ducat – The School of AI, this professional training provides hands-on experience with Python, NumPy, Pandas, Matplotlib, Scikit-learn, Power BI, and real-world case studies to make learners job-ready for high-demand data science and analytics careers.",

        learningObjectives: [
            "Understand end-to-end data science workflows",
            "Learn Python programming for data analysis",
            "Master SQL for data querying and management",
            "Apply statistics and probability for decision-making",
            "Perform data cleaning and exploratory data analysis",
            "Visualize business insights using modern tools",
            "Build machine learning models",
            "Evaluate and optimize predictive algorithms",
            "Work with business intelligence dashboards",
            "Build portfolio-ready real-world projects",
            "Prepare for data science and analytics interviews",
            "Career readiness for data science roles",
        ],

        requirements: [
            "Basic computer knowledge",
            "Interest in data analysis and machine learning",
            "Beginners and professionals can join",
            "Suitable for students, freshers, and working professionals",
        ],

        modules: [
            "Module 01: Python Programming Fundamentals",
            "Module 02: Advanced Python for Data Science",
            "Module 03: SQL for Data Analysis",
            "Module 04: Statistics & Probability",
            "Module 05: Data Cleaning with Pandas",
            "Module 06: Exploratory Data Analysis (EDA)",
            "Module 07: Data Visualization with Matplotlib & Seaborn",
            "Module 08: Machine Learning Fundamentals",
            "Module 09: Supervised Learning Algorithms",
            "Module 10: Unsupervised Learning Algorithms",
            "Module 11: Feature Engineering & Model Optimization",
            "Module 12: Business Intelligence with Power BI",
            "Module 13: Dashboard Development",
            "Module 14: Predictive Modeling Projects",
            "Module 15: Real-World Data Science Case Studies",
            "Module 16: Deployment Basics",
            "Module 17: Git & Version Control",
            "Module 18: Resume & Portfolio Development",
            "Module 19: Mock Interviews",
            "Module 20: Career Support",
        ],
    },

    move: {
        titleLine1: "Data Science",
        titleLine2: "Pro",
        description:
            "Become a job-ready Data Science professional by mastering Python, statistics, machine learning, business intelligence, predictive analytics, and real-world project implementation.",
    },

    training: {
        heading: "Modes of Training",
        subHeading:
            "Flexible learning options for beginners, freshers, and working professionals.",

        trainingModes: [
            {
                title: "Classroom Training",
                icon: "monitor",
                description:
                    "Hands-on classroom sessions with practical labs, data projects, and expert mentorship.",
            },
            {
                title: "Online Learning",
                icon: "globe",
                description:
                    "Interactive online classes with live sessions, project work, recordings, and guided mentorship.",
            },
            {
                title: "Blended Learning",
                icon: "book",
                description:
                    "Hybrid online + offline learning for flexibility and practical skill development.",
            },
        ],

        targetAudience: [
            "Students & Fresh Graduates",
            "Data Science Beginners",
            "Business Analysts",
            "Working Professionals",
            "Engineers",
            "Commerce & Science Learners",
            "Career Switchers",
            "Analytics Aspirants",
        ],
    },

    book: {
        title: "Data Science Pro Overview",

        paragraphs: [
            "This program provides complete training in data science, machine learning, predictive analytics, and business intelligence for modern industry demands.",

            "Students gain practical experience through real-world datasets, business case studies, machine learning projects, and dashboard development.",

            "The program prepares learners for high-demand roles in data science, analytics, machine learning, and business intelligence.",
        ],

        highlights: [
            {
                title: "Python for Data Science",
                desc: "Learn Python programming with NumPy, Pandas, and automation workflows.",
            },
            {
                title: "SQL & Data Management",
                desc: "Master SQL querying and structured data handling.",
            },
            {
                title: "Statistics & Analytics",
                desc: "Apply statistical methods for business and predictive insights.",
            },
            {
                title: "Machine Learning",
                desc: "Build regression, classification, and clustering models.",
            },
            {
                title: "Data Visualization",
                desc: "Create impactful visual reports using Matplotlib, Seaborn, and Power BI.",
            },
            {
                title: "Real-World Projects",
                desc: "Develop portfolio-ready projects with real datasets.",
            },
            {
                title: "Career Readiness",
                desc: "Prepare for Data Scientist, Analyst, and ML interviews.",
            },
            {
                title: "Industry Growth",
                desc: "Target high-paying careers in analytics, AI, and business intelligence.",
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
                question: "What is included in a Data Science Professional course?",
                answer:
                    "It includes Python, SQL, statistics, data analysis, machine learning, visualization, Power BI, and real-world projects.",
            },
            {
                question: "Is this course suitable for freshers?",
                answer:
                    "Yes, the course starts from fundamentals and gradually progresses to advanced Data Science concepts.",
            },
            {
                question: "Do I need programming knowledge to join this course?",
                answer:
                    "No prior coding experience is mandatory, though basic programming concepts can be helpful.",
            },
            {
                question: "What job roles can I apply for after completing this course?",
                answer:
                    "You can pursue roles such as Data Scientist, Data Analyst, Machine Learning Engineer, and Business Intelligence Analyst.",
            },
            {
                question: "Is Data Science a good career option in India?",
                answer:
                    "Yes, Data Science is one of the fastest-growing and highest-paying career domains in India and globally.",
            },
        ],
    },

    testimonials: {
        title: "What Students Say About Data Science Pro",

        items: [
            {
                name: "Vikas Sharma",
                review:
                    "Excellent hands-on data science training with practical projects and strong machine learning concepts.",
            },
            {
                name: "Riya Malhotra",
                review:
                    "This course helped me build real-world analytics, dashboarding, and predictive modeling skills for my career growth.",
            },
        ],
    },
};

export default dataSciencePro;