import { CourseContent } from "./types";

const devopsCourse: CourseContent = {
    slug: "devops-training",

    write: {
        courseName: "DEVOPS",

        aboutTitle: "About DevOps",

        aboutPara1:
            "The DevOps Course at Ducat India is a comprehensive, industry-focused training program designed to build expertise in modern software delivery, infrastructure automation, cloud deployment, and CI/CD workflows. This program equips learners with practical DevOps skills used by organizations to automate development, testing, deployment, and infrastructure management.",

        aboutPara2:
            "The course covers core DevOps practices including Continuous Integration and Continuous Deployment (CI/CD), Infrastructure as Code (IaC), containerization, orchestration, cloud platforms, monitoring, logging, and collaborative automation. Learners gain hands-on experience with tools like Git, Jenkins, Docker, Kubernetes, Terraform, Ansible, and cloud services such as AWS, Azure, or GCP.",

        aboutPara3:
            "Join the program and get the opportunity to learn under the guidance of a DevOps specialist. This course is designed for students, developers, system administrators, IT professionals, and cloud aspirants seeking careers in DevOps, Cloud Engineering, Site Reliability Engineering (SRE), and Infrastructure Automation.",

        learningObjectives: [
            "Understand DevOps principles and collaborative culture",
            "Implement CI/CD pipelines for automated software delivery",
            "Manage infrastructure using Infrastructure as Code (IaC)",
            "Work with version control systems like Git",
            "Containerize applications using Docker",
            "Deploy and orchestrate applications with Kubernetes",
            "Automate configuration management using Ansible",
            "Monitor systems and applications effectively",
            "Deploy DevOps workflows on cloud platforms",
            "Improve software quality through automation",
            "Build scalable, reliable deployment pipelines",
            "Prepare for DevOps and cloud engineering job roles",
        ],

        requirements: [
            "Basic understanding of computers and IT systems",
            "Interest in cloud, automation, or software deployment",
            "Basic Linux knowledge is helpful but not mandatory",
            "Suitable for beginners and working professionals",
        ],

        modules: [
            "Module 01: Introduction to DevOps Principles",
            "Module 02: Linux Fundamentals for DevOps",
            "Module 03: Version Control with Git & GitHub",
            "Module 04: Continuous Integration with Jenkins",
            "Module 05: Continuous Deployment Workflows",
            "Module 06: Docker Containerization",
            "Module 07: Kubernetes Orchestration",
            "Module 08: Infrastructure as Code with Terraform",
            "Module 09: Configuration Management with Ansible",
            "Module 10: Cloud Deployment (AWS/Azure/GCP Basics)",
            "Module 11: Monitoring, Logging & Performance Optimization",
            "Module 12: Live DevOps Project Implementation",
        ],
    },

    move: {
        titleLine1: "DevOps",
        titleLine2: "Professional Training",
        description:
            "Master CI/CD pipelines, automation, cloud infrastructure, Docker, Kubernetes, Terraform, and real-world DevOps workflows for modern software delivery.",
    },

    training: {
        heading: "Modes of Training",
        subHeading:
            "Flexible training options for students, developers, and IT professionals.",

        trainingModes: [
            {
                title: "Classroom Training",
                icon: "monitor",
                description:
                    "Practical instructor-led classroom sessions with live projects, CI/CD pipelines, cloud deployments, and DevOps tools.",
            },
            {
                title: "Online Learning",
                icon: "globe",
                description:
                    "Interactive online sessions with guided labs, cloud access, assignments, and real-world automation workflows.",
            },
            {
                title: "Blended Learning",
                icon: "book",
                description:
                    "Hybrid model combining online flexibility with hands-on implementation and mentor guidance.",
            },
        ],

        targetAudience: [
            "Students & Graduates",
            "Software Developers",
            "System Administrators",
            "Cloud Aspirants",
            "IT Professionals",
            "Network Engineers",
            "Automation Engineers",
            "Career Switchers",
        ],
    },

    book: {
        title: "DevOps Course Overview",

        paragraphs: [
            "This program provides complete practical training in DevOps methodologies, cloud infrastructure, automation, containerization, orchestration, and deployment strategies used in modern software development environments.",

            "Learners gain hands-on experience in Git workflows, Jenkins automation, Docker containers, Kubernetes orchestration, Terraform provisioning, Ansible automation, and cloud deployment projects.",

            "The course prepares learners for DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Build & Release Engineer, and Infrastructure Automation roles.",
        ],

        highlights: [
            {
                title: "CI/CD Pipelines",
                desc: "Learn continuous integration and deployment using Jenkins and automation workflows.",
            },
            {
                title: "Infrastructure as Code",
                desc: "Automate infrastructure provisioning using Terraform and modern IaC principles.",
            },
            {
                title: "Docker",
                desc: "Containerize applications for scalable and portable deployments.",
            },
            {
                title: "Kubernetes",
                desc: "Deploy, manage, and orchestrate containers in enterprise environments.",
            },
            {
                title: "Configuration Management",
                desc: "Automate server configuration using Ansible.",
            },
            {
                title: "Cloud Integration",
                desc: "Deploy DevOps practices across AWS, Azure, and GCP platforms.",
            },
            {
                title: "Monitoring & Logging",
                desc: "Track performance, logs, and infrastructure health effectively.",
            },
            {
                title: "Career Readiness",
                desc: "Develop job-ready DevOps and automation skills aligned with industry demand.",
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
                question: "What topics are covered in a DevOps training course?",
                answer:
                    "The course covers DevOps principles, Git, CI/CD pipelines, Docker, Kubernetes, Terraform, Ansible, cloud services, monitoring, logging, and automation practices.",
            },
            {
                question: "Do I need prior experience to enroll?",
                answer:
                    "Basic IT knowledge is helpful, but the course starts with foundational concepts, making it suitable for beginners as well as experienced professionals.",
            },
            {
                question: "What practical skills will I gain?",
                answer:
                    "You will learn version control, automation, cloud deployment, containerization, orchestration, infrastructure provisioning, and monitoring skills used in real DevOps environments.",
            },
            {
                question: "How can DevOps training improve my career?",
                answer:
                    "DevOps skills are highly in demand and can help you qualify for roles such as DevOps Engineer, SRE, Cloud Engineer, and Automation Engineer.",
            },
            {
                question: "Will I work on real-world projects?",
                answer:
                    "Yes, the course includes hands-on labs, live projects, and deployment scenarios to build practical experience.",
            },
        ],
    },

    testimonials: {
        title: "What Students Say About DevOps Training",

        items: [
            {
                name: "Amit Verma",
                review:
                    "This course helped me understand CI/CD, Docker, Kubernetes, and cloud automation practically. The live projects were highly valuable.",
            },
            {
                name: "Sneha Kapoor",
                review:
                    "Ducat’s DevOps training gave me real-world deployment skills and helped me transition into a Cloud DevOps role successfully.",
            },
        ],
    },
};

export default devopsCourse;