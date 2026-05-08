import { CourseContent } from "./types";

const ccnaCcnpCourse: CourseContent = {
    slug: "ccna-ccnp",

    write: {
        courseName: "CCNA + CCNP",

        aboutTitle: "About CCNA + CCNP Course",

        aboutPara1:
            "The CCNA + CCNP Networking Course at Ducat India is designed to help learners build advanced networking skills using Cisco technologies, covering routing, switching, network security, and enterprise network design. This program combines foundational concepts from CCNA (Cisco Certified Network Associate) with advanced configurations from CCNP (Cisco Certified Network Professional) to prepare learners for real-world networking environments.",

        aboutPara2:
            "With a hands-on, lab-based approach, learners gain experience in configuring routers and switches, managing network protocols, troubleshooting network issues, and designing scalable network infrastructures. The course prepares learners for roles such as Network Engineer, Network Administrator, System Engineer, and Network Security Specialist.",

        aboutPara3:
            "Join the program and get the opportunity to learn under the guidance of a CCNA + CCNP specialist. The curriculum is aligned with industry standards and Cisco certification objectives, ensuring learners gain practical exposure to enterprise networking environments and real-world IT infrastructure.",

        learningObjectives: [
            "Build a strong foundation in networking concepts and protocols",
            "Learn routing and switching using Cisco technologies",
            "Understand enterprise network design and infrastructure management",
            "Develop troubleshooting and network optimization skills",
            "Configure and manage routers and switches",
            "Work with routing protocols like OSPF, EIGRP, and BGP",
            "Implement network security and access control techniques",
            "Design scalable enterprise-level networks",
            "Monitor and optimize network performance",
            "Gain practical experience through networking labs",
            "Prepare for CCNA and CCNP certification exams",
            "Build career-ready networking and infrastructure skills",
        ],

        requirements: [
            "Basic computer knowledge",
            "Interest in networking and IT infrastructure",
            "No prior advanced networking experience required",
            "Suitable for students, freshers, and IT professionals",
        ],

        modules: [
            "Module 01: Networking Fundamentals",
            "Module 02: OSI & TCP/IP Models",
            "Module 03: IP Addressing & Subnetting",
            "Module 04: Network Devices & Architecture",
            "Module 05: Routing & Switching Concepts",
            "Module 06: VLANs & Switching Technologies",
            "Module 07: Static & Dynamic Routing",
            "Module 08: Routing Protocols (OSPF & EIGRP)",
            "Module 09: Router & Switch Configuration",
            "Module 10: WAN Technologies",
            "Module 11: Advanced Networking (CCNP)",
            "Module 12: Advanced Routing with BGP",
            "Module 13: Enterprise Network Design",
            "Module 14: Network Scalability Concepts",
            "Module 15: Network Security Fundamentals",
            "Module 16: Access Control Lists (ACLs)",
            "Module 17: Secure Network Design",
            "Module 18: Network Troubleshooting Techniques",
            "Module 19: Monitoring & Performance Tuning",
            "Module 20: Real-World Networking Scenarios",
            "Module 21: Hands-on Lab Configuration",
            "Module 22: Network Setup & Testing",
            "Module 23: Enterprise Networking Project",
            "Module 24: CCNA + CCNP Certification Preparation",
            "Module 25: Resume & Interview Preparation",
        ],
    },

    move: {
        titleLine1: "CCNA + CCNP",
        titleLine2: "Networking Training",
        description:
            "Master routing, switching, enterprise networking, network security, troubleshooting, and Cisco technologies through practical CCNA + CCNP training.",
    },

    training: {
        heading: "Modes of Training",

        subHeading:
            "Flexible networking training modes designed for students, freshers, and IT professionals.",

        trainingModes: [
            {
                title: "Classroom Training",
                icon: "monitor",
                description:
                    "Hands-on classroom sessions with routers, switches, networking labs, and enterprise-level practical scenarios.",
            },
            {
                title: "Online Learning",
                icon: "globe",
                description:
                    "Interactive online networking sessions with live demonstrations, simulations, and troubleshooting labs.",
            },
            {
                title: "Blended Learning",
                icon: "book",
                description:
                    "Hybrid learning model combining online flexibility with practical networking lab experience.",
            },
        ],

        targetAudience: [
            "Students & Fresh Graduates",
            "Network Administrators",
            "IT Professionals",
            "System Engineers",
            "Infrastructure Engineers",
            "Network Security Aspirants",
            "Technical Support Engineers",
            "Networking Enthusiasts",
        ],
    },

    book: {
        title: "CCNA + CCNP Course Overview",

        paragraphs: [
            "This program provides complete practical training in networking fundamentals, enterprise routing, switching, network security, troubleshooting, and Cisco infrastructure management.",

            "Learners gain hands-on experience through networking labs, router and switch configuration, enterprise network simulations, and real-world troubleshooting scenarios aligned with industry standards.",

            "The course prepares students for networking and infrastructure roles such as Network Engineer, Network Administrator, Infrastructure Engineer, and Network Security Specialist.",
        ],

        highlights: [
            {
                title: "Networking Fundamentals",
                desc: "Build strong foundational knowledge of networking protocols and architectures.",
            },
            {
                title: "Routing & Switching",
                desc: "Configure routers, switches, VLANs, and routing protocols effectively.",
            },
            {
                title: "Advanced Networking",
                desc: "Learn enterprise-level routing, scalability, and network infrastructure concepts.",
            },
            {
                title: "Network Security",
                desc: "Implement ACLs, secure network designs, and security best practices.",
            },
            {
                title: "Troubleshooting Skills",
                desc: "Monitor, diagnose, and optimize network performance efficiently.",
            },
            {
                title: "Hands-on Labs",
                desc: "Practice real-world networking configurations and simulations.",
            },
            {
                title: "Certification Preparation",
                desc: "Prepare confidently for CCNA and CCNP certification exams.",
            },
            {
                title: "Career Readiness",
                desc: "Build practical networking skills required for enterprise IT roles.",
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
                question:
                    "Is this CCNA + CCNP course suitable for beginners?",
                answer:
                    "Yes. The course starts with CCNA fundamentals before progressing to advanced CCNP-level concepts.",
            },
            {
                question:
                    "Will this course prepare me for CCNA and CCNP certifications?",
                answer:
                    "Yes. The curriculum is aligned with CCNA and CCNP certification exam objectives.",
            },
            {
                question:
                    "Does this course include practical lab training?",
                answer:
                    "Yes. Extensive hands-on lab configuration, simulations, and troubleshooting exercises are included.",
            },
            {
                question:
                    "Is placement support provided after course completion?",
                answer:
                    "Yes. Ducat India provides placement assistance including resume preparation, interview guidance, and job referrals.",
            },
            {
                question:
                    "Can working professionals join this course?",
                answer:
                    "Yes. Weekend and fast-track batches are available for working professionals.",
            },
            {
                question:
                    "What job roles can I apply for after completing this course?",
                answer:
                    "You can apply for roles such as Network Engineer, Network Administrator, System Engineer, Infrastructure Engineer, and Network Security Specialist.",
            },
            {
                question:
                    "Will I learn advanced routing protocols in this course?",
                answer:
                    "Yes. The course covers advanced routing protocols including OSPF, EIGRP, and BGP.",
            },
            {
                question:
                    "Does the course include real-world networking projects?",
                answer:
                    "Yes. Learners work on networking simulations, enterprise configurations, troubleshooting exercises, and live networking projects.",
            },
        ],
    },

    testimonials: {
        title: "What Students Say About CCNA + CCNP Training",

        items: [
            {
                name: "Rohit Sharma",
                review:
                    "The hands-on networking labs and enterprise-level routing concepts helped me gain real confidence in networking technologies.",
            },
            {
                name: "Anjali Verma",
                review:
                    "This course gave me strong practical exposure to routing, switching, troubleshooting, and enterprise networking environments.",
            },
        ],
    },
};

export default ccnaCcnpCourse;