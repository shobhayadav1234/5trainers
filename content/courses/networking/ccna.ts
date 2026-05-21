import { CourseContent } from "./types";

const ccnaCourse: CourseContent = {
  slug: "ccna",

  write: {
    courseName: "CCNA",

    aboutTitle: "About CCNA Course",

    aboutPara1:
      "Are you ready to kickstart your journey into the world of computer networking? The Cisco Certified Network Associate (CCNA) training in Noida is your passport to unlocking endless possibilities in the field of IT. Whether you're a working professional looking to upskill or an aspiring network technician seeking a solid foundation, this comprehensive course has something for everyone.",

    aboutPara2:
      "The Cisco Certified Network Associate (CCNA) training is designed to equip individuals with the essential knowledge and skills necessary to configure, operate, and troubleshoot small to medium-sized networks. The course covers topics such as IP addressing, routing protocols, LAN switching, network security, WAN technologies, and troubleshooting techniques.",

    aboutPara3:
      "Join the program and get the opportunity to learn under the guidance of a CCNA specialist. This certification serves as a strong foundation for networking careers and acts as a stepping stone toward advanced certifications like CCNP and CCIE.",

    learningObjectives: [
      "Understand networking fundamentals and protocols",
      "Learn TCP/IP protocols and subnetting concepts",
      "Configure routers and switches",
      "Understand routing and switching technologies",
      "Implement VLANs and inter-VLAN routing",
      "Work with network security concepts",
      "Configure access control lists and VPN basics",
      "Understand WAN technologies and configurations",
      "Monitor and troubleshoot network issues",
      "Learn network management concepts",
      "Prepare for CCNA certification exams",
      "Build career-ready networking skills",
    ],

    requirements: [
      "Basic computer knowledge",
      "Interest in networking and IT infrastructure",
      "No prior networking experience required",
      "Suitable for students and working professionals",
    ],

    modules: [
      "Module 01: Networking Fundamentals",
      "Module 02: TCP/IP Protocols",
      "Module 03: OSI Model & Networking Concepts",
      "Module 04: IP Addressing & Subnetting",
      "Module 05: Routing Fundamentals",
      "Module 06: Switching Technologies",
      "Module 07: VLANs & Inter-VLAN Routing",
      "Module 08: Routing Protocols (OSPF & EIGRP)",
      "Module 09: WAN Technologies",
      "Module 10: PPP, HDLC & Frame Relay",
      "Module 11: Network Security Fundamentals",
      "Module 12: Access Control Lists (ACLs)",
      "Module 13: VPN & Firewall Basics",
      "Module 14: Network Troubleshooting",
      "Module 15: SNMP & Syslog",
      "Module 16: Device Monitoring & Management",
      "Module 17: Network Performance Optimization",
      "Module 18: Real-World Networking Scenarios",
      "Module 19: CCNA Certification Preparation",
      "Module 20: Resume & Interview Preparation",
    ],
  },

  move: {
    titleLine1: "Cisco Certified",
    titleLine2: "Network Associate (CCNA)",
    description:
      "Master networking fundamentals, routing, switching, network security, WAN technologies, and troubleshooting skills to build a successful networking career.",
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
          "Hands-on classroom training with networking labs, routers, switches, and real-world practical scenarios.",
      },
      {
        title: "Online Learning",
        icon: "globe",
        description:
          "Interactive online sessions with live networking demonstrations and remote lab access.",
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
      "Technical Support Engineers",
      "System Administrators",
      "Networking Enthusiasts",
      "Career Switchers",
      "Aspiring Network Engineers",
    ],
  },

  book: {
    title: "CCNA Course Overview",

    paragraphs: [
      "This program provides complete practical training in networking fundamentals, routing, switching, WAN technologies, security, and network troubleshooting using Cisco technologies.",

      "Learners gain real-world experience through practical networking labs, router and switch configurations, network simulations, and troubleshooting exercises aligned with industry requirements.",

      "The course prepares students for networking careers such as Network Administrator, Network Engineer, Technical Support Engineer, and System Administrator.",
    ],

    highlights: [
      {
        title: "Networking Fundamentals",
        desc: "Learn the core concepts of networking, protocols, and communication systems.",
      },
      {
        title: "Routing & Switching",
        desc: "Configure routers, switches, VLANs, and routing protocols effectively.",
      },
      {
        title: "Network Security",
        desc: "Understand ACLs, VPNs, firewalls, and secure networking practices.",
      },
      {
        title: "WAN Technologies",
        desc: "Explore WAN protocols and remote connectivity concepts.",
      },
      {
        title: "Network Management",
        desc: "Monitor, troubleshoot, and optimize network performance.",
      },
      {
        title: "Hands-on Labs",
        desc: "Practice real networking scenarios using routers and switches.",
      },
      {
        title: "Certification Preparation",
        desc: "Prepare confidently for the CCNA certification examination.",
      },
      {
        title: "Career Readiness",
        desc: "Build skills required for networking and infrastructure job roles.",
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
        question:
          "What is the CCNA certification all about?",
        answer:
          "CCNA is a Cisco certification that validates core networking knowledge including network fundamentals, design, implementation, and troubleshooting.",
      },
      {
        question:
          "Do I need prior experience before joining CCNA?",
        answer:
          "No prior networking experience is required, although basic computer and troubleshooting skills are helpful.",
      },
      {
        question:
          "What topics are covered in the CCNA course?",
        answer:
          "The course covers IP addressing, routing, switching, VLANs, WAN technologies, network security, troubleshooting, and network management.",
      },
      {
        question:
          "What are the benefits of CCNA certification?",
        answer:
          "CCNA certification enhances networking skills, strengthens your resume, and opens opportunities for networking and IT infrastructure roles.",
      },
      {
        question:
          "How long does the CCNA course usually take?",
        answer:
          "Structured CCNA training programs generally take around 3–6 months depending on the learning schedule.",
      },
      {
        question:
          "What career opportunities are available after CCNA?",
        answer:
          "After completing CCNA, learners can apply for roles such as Network Administrator, Network Engineer, Technical Support Engineer, and System Administrator.",
      },
      {
        question:
          "Will I get placement assistance after completing the course?",
        answer:
          "Yes. Placement assistance includes resume preparation, interview guidance, and job referrals through hiring partners.",
      },
      {
        question:
          "Can I pursue advanced certifications after CCNA?",
        answer:
          "Yes. CCNA serves as a strong foundation for advanced certifications like CCNP and CCIE.",
      },
    ],
  },

  testimonials: {
    title: "What Students Say About CCNA Training",

    items: [
      {
        name: "Amit Sharma",
        review:
          "The practical networking labs and expert guidance helped me understand routing, switching, and troubleshooting concepts clearly.",
      },
      {
        name: "Neha Verma",
        review:
          "This course gave me strong networking fundamentals and helped me prepare confidently for networking job interviews.",
      },
    ],
  },
};

export default ccnaCourse;