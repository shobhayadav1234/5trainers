import { CourseContent } from "./types";

const devopsProfessional: CourseContent = {
    slug: "devops-for-professional",

    write: {
        courseName: "DEVOPS FOR PROFESSIONAL",

        aboutTitle: "About DevOps For Professional",

        aboutPara1:
            "The DevOps For Professional Course at Ducat India is an advanced, industry-aligned training program designed to build expertise in cloud computing, AWS infrastructure, Linux administration, networking, CI/CD pipelines, automation, containerization, orchestration, and DevSecOps practices. This course prepares learners for real-world cloud and DevOps engineering roles across enterprise environments.",

        aboutPara2:
            "This comprehensive program covers AWS core services, Git, Jenkins, Maven, Docker, Kubernetes, Terraform, Ansible, Prometheus, Grafana, and deployment strategies including Blue-Green and Canary deployments. Learners gain practical experience through hands-on labs, production-level workflows, and end-to-end DevOps project implementation.",

        aboutPara3:
            "Join the program and get the opportunity to learn under the guidance of a DevOps For Professional specialist. This course is ideal for students, developers, IT professionals, cloud aspirants, system administrators, and career switchers targeting advanced roles in DevOps, Cloud Engineering, SRE, and Infrastructure Automation.",

        learningObjectives: [
            "Understand DevOps lifecycle, Agile, and CI/CD workflows",
            "Build expertise in AWS cloud architecture and services",
            "Manage Linux systems and networking fundamentals",
            "Implement version control using Git and enterprise workflows",
            "Build CI/CD pipelines using Jenkins and GitHub Actions",
            "Containerize applications with Docker",
            "Deploy and orchestrate workloads using Kubernetes",
            "Automate infrastructure using Terraform",
            "Manage configurations with Ansible",
            "Implement monitoring using Prometheus and Grafana",
            "Apply DevSecOps security principles",
            "Build production-ready DevOps deployment pipelines",
        ],

        requirements: [
            "Basic understanding of IT or software development",
            "Interest in cloud computing and automation",
            "Basic Linux or networking knowledge is helpful",
            "Suitable for beginners, freshers, and professionals",
        ],

        modules: [
            "Module 01: Foundations of SDLC, Agile & DevOps",
            "Module 02: Version Control with Git, GitHub & GitLab",
            "Module 03: Build & Artifact Management with Maven & JFrog",
            "Module 04: CI/CD with Jenkins, GitHub Actions & GitLab CI",
            "Module 05: Docker Containerization",
            "Module 06: Configuration Management with Ansible",
            "Module 07: Kubernetes Orchestration",
            "Module 08: Cloud + Infrastructure as Code with Terraform",
            "Module 09: Web Servers, NGINX & Deployment Strategies",
            "Module 10: Monitoring & Logging with Prometheus & Grafana",
            "Module 11: Security & DevSecOps",
            "Module 12: Advanced Deployment Strategies",
            "Module 13: Final Professional DevOps Project",
        ],
    },

    move: {
        titleLine1: "DevOps For",
        titleLine2: "Professional",
        description:
            "Master AWS, Linux, Git, Jenkins, Docker, Kubernetes, Terraform, Ansible, monitoring, and advanced DevOps workflows for enterprise cloud careers.",
    },

    training: {
        heading: "Modes of Training",
        subHeading:
            "Flexible learning options designed for students, developers, and working professionals.",

        trainingModes: [
            {
                title: "Classroom Training",
                icon: "monitor",
                description:
                    "Instructor-led practical classroom sessions with enterprise-grade DevOps labs, cloud deployment workflows, and live projects.",
            },
            {
                title: "Online Learning",
                icon: "globe",
                description:
                    "Interactive online training with cloud labs, CI/CD projects, Kubernetes deployments, and guided practical sessions.",
            },
            {
                title: "Blended Learning",
                icon: "book",
                description:
                    "Hybrid learning model combining online flexibility with practical implementation and personalized mentor guidance.",
            },
        ],

        targetAudience: [
            "Students & Fresh Graduates",
            "Software Developers",
            "Cloud Aspirants",
            "System Administrators",
            "Network Engineers",
            "Linux Administrators",
            "Working IT Professionals",
            "Career Switchers",
        ],
    },

    book: {
        title: "DevOps For Professional Overview",

        paragraphs: [
            "This program provides complete practical training in AWS cloud, Linux, networking, DevOps automation, CI/CD, containerization, Kubernetes, Infrastructure as Code, security, and monitoring workflows used in real enterprise environments.",

            "Learners gain extensive hands-on experience in deploying scalable cloud infrastructure, automating software delivery, managing Kubernetes clusters, implementing DevSecOps practices, and building end-to-end deployment pipelines.",

            "The course prepares learners for roles such as DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Cloud Administrator, Infrastructure Engineer, and Automation Engineer.",
        ],

        highlights: [
            {
                title: "AWS Cloud Infrastructure",
                desc: "Build expertise in AWS services like EC2, IAM, VPC, storage, and cloud deployments.",
            },
            {
                title: "CI/CD Automation",
                desc: "Create automated pipelines using Jenkins, GitHub Actions, and GitLab CI.",
            },
            {
                title: "Docker & Kubernetes",
                desc: "Containerize applications and deploy them using Kubernetes orchestration.",
            },
            {
                title: "Terraform",
                desc: "Automate infrastructure provisioning using Infrastructure as Code principles.",
            },
            {
                title: "Ansible",
                desc: "Automate configuration management and system deployments efficiently.",
            },
            {
                title: "Monitoring & Logging",
                desc: "Use Prometheus and Grafana for enterprise-grade observability.",
            },
            {
                title: "DevSecOps",
                desc: "Integrate security into DevOps workflows using SonarQube, Snyk, and secure pipelines.",
            },
            {
                title: "Professional Project",
                desc: "Deploy complete production-grade applications with CI/CD, cloud, and monitoring.",
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
                question: "What is covered in the DevOps For Professional course?",
                answer:
                    "The course covers AWS, Linux, networking, Git, Jenkins, Docker, Kubernetes, Terraform, Ansible, monitoring, DevSecOps, and real-world deployment strategies.",
            },
            {
                question: "Is this course suitable for beginners?",
                answer:
                    "Yes, the course starts with foundational concepts and gradually progresses toward advanced DevOps practices and enterprise workflows.",
            },
            {
                question: "Do I need prior coding or cloud experience?",
                answer:
                    "Basic IT knowledge is helpful but not mandatory. The curriculum is structured to support both beginners and experienced professionals.",
            },
            {
                question: "What job roles can I pursue after completing this course?",
                answer:
                    "You can apply for roles such as DevOps Engineer, AWS Cloud Engineer, SRE, Cloud Administrator, Infrastructure Engineer, and Automation Engineer.",
            },
            {
                question: "Does this course include practical projects?",
                answer:
                    "Yes, learners complete real-world projects involving CI/CD pipelines, cloud deployments, Kubernetes, Terraform automation, and monitoring systems.",
            },
        ],
    },

    testimonials: {
        title: "What Students Say About DevOps For Professional",

        items: [
            {
                name: "Rahul Mehta",
                review:
                    "This course gave me hands-on experience with AWS, Kubernetes, Terraform, and CI/CD workflows that directly helped me secure a DevOps Engineer role.",
            },
            {
                name: "Neha Arora",
                review:
                    "The professional-level projects, cloud labs, and real-world deployment scenarios made this one of the most practical DevOps programs I’ve taken.",
            },
        ],
    },
};

export default devopsProfessional;