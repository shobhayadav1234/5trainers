import { CourseContent } from "./types";

const javaFullStackAI: CourseContent = {
    slug: "java-fullstack-professional-ai",

    write: {
        courseName: "JAVA FULL STACK (PROFESSIONAL + AI)",

        aboutTitle: "About Java Full Stack (Professional + AI) Course",

        aboutPara1:
            "The Java Full Stack Developer course at Ducat India is designed to train learners in both front-end and back-end web development using modern Java technologies along with AI-powered development practices.",

        aboutPara2:
            "Join the program and get the opportunity to learn under the guidance of a Java Full Stack (Professional + AI) specialist. This course covers Java, Spring Boot, front-end technologies, databases, and AI-assisted development workflows.",

        aboutPara3:
            "The training focuses on building real-world applications, integrating APIs, managing databases, and deploying scalable web systems used in industries like finance, e-commerce, healthcare, and tech startups.",

        learningObjectives: [
            "Java Programming & OOP Concepts",
            "Advanced Spring Boot Development",
            "Front-End Development (HTML, CSS, JavaScript)",
            "Modern UI Integration",
            "Database Management & SQL",
            "REST API Development",
            "Full Stack Application Architecture",
            "AI-Assisted Coding Practices",
            "Debugging & Optimization Techniques",
            "Application Deployment",
            "Problem Solving Skills",
            "Real-World Project Development",
        ],

        requirements: [
            "Basic understanding of computers",
            "Interest in programming",
            "Beginners can start from basics",
            "Helpful for students and professionals",
        ],

        modules: [
            "Module 01: Core Java Programming",
            "Module 02: OOP Concepts in Java",
            "Module 03: Advanced Java & Collections",
            "Module 04: JDBC & Database Connectivity",
            "Module 05: Servlets & JSP Basics",
            "Module 06: HTML5 & CSS3",
            "Module 07: JavaScript Fundamentals",
            "Module 08: Front-End Development",
            "Module 09: Modern UI Integration",
            "Module 10: Spring Boot Introduction",
            "Module 11: REST API Development",
            "Module 12: Backend Architecture",
            "Module 13: Database Design & SQL",
            "Module 14: Full Stack Integration",
            "Module 15: AI Tools in Development",
            "Module 16: Debugging & Testing",
            "Module 17: Real-Time Project Development",
            "Module 18: Git & Version Control",
            "Module 19: Deployment & Hosting",
            "Module 20: Interview Preparation & Career Support",
        ],
    },

    move: {
        titleLine1: "Java Full Stack",
        titleLine2: "(Professional + AI)",
        description:
            "Master Java Full Stack development with AI-powered coding assistance. Learn frontend, backend, databases, APIs, Spring Boot, and real-world deployment to become a professional software developer.",
    },

    training: {
        heading: "Modes of Training",
        subHeading:
            "Flexible training options designed for students, working professionals, and career switchers.",

        trainingModes: [
            {
                title: "Classroom Training",
                icon: "monitor",
                description:
                    "In-person training with hands-on coding, live projects, and expert mentorship.",
            },
            {
                title: "Online Learning",
                icon: "globe",
                description:
                    "Live interactive classes with recordings, assignments, and project-based learning.",
            },
            {
                title: "Blended Learning",
                icon: "book",
                description:
                    "Combination of classroom + online learning for maximum flexibility.",
            },
        ],

        targetAudience: [
            "Students",
            "Computer Science Graduates",
            "Backend Developers",
            "Web Developers",
            "IT Professionals",
            "Career Switchers",
            "Programming Beginners",
            "Software Enthusiasts",
        ],
    },

    book: {
        title: "Java Full Stack Course Overview (AI Integrated)",

        paragraphs: [
            "This course trains learners in Java Full Stack development with modern AI-assisted coding techniques and tools.",

            "Students build real-world applications using Java, Spring Boot, frontend technologies, and database systems.",

            "The program prepares learners for high-demand software development roles across multiple industries.",
        ],

        highlights: [
            {
                title: "Java Mastery",
                desc: "Learn core Java, OOP, and advanced programming concepts.",
            },
            {
                title: "Spring Boot",
                desc: "Build powerful backend applications and REST APIs.",
            },
            {
                title: "Frontend Development",
                desc: "Create responsive UI using HTML, CSS, and JavaScript.",
            },
            {
                title: "Database Integration",
                desc: "Work with SQL and connect databases with applications.",
            },
            {
                title: "AI Development Tools",
                desc: "Use AI tools to speed up coding and debugging.",
            },
            {
                title: "Full Stack Projects",
                desc: "Build complete end-to-end web applications.",
            },
            {
                title: "Deployment Skills",
                desc: "Deploy applications on servers and cloud platforms.",
            },
            {
                title: "Career Readiness",
                desc: "Prepare for interviews and software developer roles.",
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
                question: "What is the duration of this course?",
                answer:
                    "The Java Full Stack course typically takes 5–6 months depending on the batch.",
            },
            {
                question: "Do I need programming knowledge before joining?",
                answer:
                    "Basic knowledge is helpful, but beginners can also start from fundamentals.",
            },
            {
                question: "What technologies are included?",
                answer:
                    "Java, Spring Boot, HTML, CSS, JavaScript, SQL, APIs, and AI-assisted tools.",
            },
            {
                question: "Is placement assistance provided?",
                answer:
                    "Yes, we provide resume support, interview preparation, and job referrals.",
            },
            {
                question: "Are real projects included?",
                answer:
                    "Yes, students build complete full-stack applications during training.",
            },
        ],
    },

    testimonials: {
        title: "What Students Say About Java Full Stack AI Course",

        items: [
            {
                name: "Aman Singh",
                review:
                    "Very practical course. I learned full stack development with real projects and AI tools.",
            },
            {
                name: "Neha Sharma",
                review:
                    "Excellent training with strong backend and frontend integration. Highly recommended.",
            },
        ],
    },
};

export default javaFullStackAI;