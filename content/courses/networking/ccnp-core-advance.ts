import { CourseContent } from "./types";

const ccnpCoreAdvance: CourseContent = {
  slug: "ccnp-core-advance",

  write: {
    courseName: "CCNP (CORE + ADVANCE)",

    aboutTitle: "About CCNP (Core + Advance) Course",

    aboutPara1:
      "The CCNP Training in Noida program is designed to provide IT professionals with in-depth knowledge and skills in network design, implementation, and troubleshooting. The course covers advanced routing protocols, switching techniques, enterprise networking concepts, and network security technologies used in modern IT infrastructures.",

    aboutPara2:
      "One of the key highlights of this course is the emphasis on hands-on practical experience through simulations and real-world networking scenarios. Learners gain expertise in configuring routers, switches, advanced routing protocols, wireless technologies, and network security solutions while developing strong troubleshooting and problem-solving skills.",

    aboutPara3:
      "Join the program and get the opportunity to learn under the guidance of a CCNP (Core + Advance) specialist. The curriculum is regularly updated to align with evolving networking technologies, helping learners stay ahead in enterprise networking, automation, and infrastructure management careers.",

    learningObjectives: [
      "Understand advanced routing and switching concepts",
      "Master enterprise networking and infrastructure management",
      "Work with advanced routing protocols like EIGRP, OSPF, and BGP",
      "Configure and troubleshoot multi-layer switching technologies",
      "Implement VLANs, QoS, and enterprise security features",
      "Design and manage wireless networking solutions",
      "Automate networking tasks and workflows",
      "Develop advanced troubleshooting skills",
      "Secure enterprise network infrastructures",
      "Optimize network performance and scalability",
      "Prepare for CCNP certification exams",
      "Build enterprise-level networking expertise",
    ],

    requirements: [
      "Basic networking knowledge recommended",
      "CCNA-level understanding is helpful",
      "Interest in enterprise networking and infrastructure",
      "Suitable for IT professionals and networking aspirants",
    ],

    modules: [
      "Module 01: Enterprise Networking Fundamentals",
      "Module 02: Advanced Routing Concepts",
      "Module 03: EIGRP Deep Dive",
      "Module 04: OSPF Advanced Configuration",
      "Module 05: BGP Routing Concepts",
      "Module 06: Multi-Layer Switching",
      "Module 07: VLANs & Inter-VLAN Routing",
      "Module 08: QoS Implementation",
      "Module 09: Enterprise Network Security",
      "Module 10: Access Control & Security Policies",
      "Module 11: Wireless Networking Technologies",
      "Module 12: Wireless Deployment & Management",
      "Module 13: Network Automation Fundamentals",
      "Module 14: Scripting & Automation Tools",
      "Module 15: Infrastructure Troubleshooting",
      "Module 16: Network Monitoring & Optimization",
      "Module 17: Enterprise Infrastructure Design",
      "Module 18: High Availability & Redundancy",
      "Module 19: Real-World Networking Scenarios",
      "Module 20: Advanced Troubleshooting Labs",
      "Module 21: Hands-on Router Configuration",
      "Module 22: Hands-on Switch Configuration",
      "Module 23: Enterprise Security Implementation",
      "Module 24: Final Networking Project",
      "Module 25: CCNP Certification Preparation",
      "Module 26: Resume & Interview Preparation",
    ],
  },

  move: {
    titleLine1: "CCNP",
    titleLine2: "(Core + Advance)",
    description:
      "Master advanced routing, enterprise switching, wireless networking, automation, troubleshooting, and network security using Cisco enterprise technologies.",
  },

  training: {
    heading: "Modes of Training",

    subHeading:
      "Flexible enterprise networking training modes designed for IT professionals and networking aspirants.",

    trainingModes: [
      {
        title: "Classroom Training",
        icon: "monitor",
        description:
          "Hands-on classroom sessions with enterprise networking labs, routing configurations, and troubleshooting scenarios.",
      },
      {
        title: "Online Learning",
        icon: "globe",
        description:
          "Interactive online networking sessions with live demonstrations, simulations, and practical enterprise labs.",
      },
      {
        title: "Blended Learning",
        icon: "book",
        description:
          "Hybrid online + offline learning for flexible and practical enterprise networking skill development.",
      },
    ],

    targetAudience: [
      "Network Engineers",
      "Network Administrators",
      "System Engineers",
      "IT Infrastructure Professionals",
      "Security Engineers",
      "Wireless Networking Professionals",
      "CCNA Certified Learners",
      "Enterprise Networking Aspirants",
    ],
  },

  book: {
    title: "CCNP (Core + Advance) Course Overview",

    paragraphs: [
      "This program provides complete practical training in advanced routing, enterprise switching, network security, wireless networking, automation, and enterprise infrastructure management.",

      "Learners gain real-world experience through hands-on router and switch configurations, enterprise networking labs, troubleshooting exercises, automation tasks, and infrastructure optimization scenarios.",

      "The course prepares learners for high-demand networking roles such as Network Engineer, Network Administrator, Network Security Engineer, and Infrastructure Consultant.",
    ],

    highlights: [
      {
        title: "Advanced Routing",
        desc: "Master EIGRP, OSPF, and BGP for enterprise-level network design.",
      },
      {
        title: "Enterprise Switching",
        desc: "Implement VLANs, QoS, and secure switching technologies.",
      },
      {
        title: "Wireless Networking",
        desc: "Design, deploy, and manage wireless enterprise networks.",
      },
      {
        title: "Network Automation",
        desc: "Automate network tasks and improve operational efficiency.",
      },
      {
        title: "Enterprise Security",
        desc: "Secure enterprise infrastructures using advanced security practices.",
      },
      {
        title: "Hands-on Labs",
        desc: "Practice real-world configurations and troubleshooting exercises.",
      },
      {
        title: "Certification Preparation",
        desc: "Prepare confidently for CCNP certification exams.",
      },
      {
        title: "Career Readiness",
        desc: "Build enterprise networking expertise for high-level IT roles.",
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
          "Is the CCNP certification still relevant in today's IT landscape?",
        answer:
          "Yes. CCNP certification validates advanced networking expertise in routing, switching, troubleshooting, and enterprise infrastructure management, which are highly valued by employers.",
      },
      {
        question:
          "Can I join the CCNP course without prior certifications?",
        answer:
          "While CCNA-level knowledge is recommended, motivated learners can strengthen their networking foundation through preparation and guided learning.",
      },
      {
        question:
          "What can I expect from the CCNP course workload and difficulty?",
        answer:
          "The course involves intensive learning, hands-on labs, practical configurations, and troubleshooting exercises that require consistent dedication and practice.",
      },
      {
        question:
          "What career opportunities are available after CCNP certification?",
        answer:
          "CCNP-certified professionals can apply for roles such as Network Engineer, Network Administrator, Network Security Engineer, and Network Consultant.",
      },
      {
        question:
          "Are online or virtual CCNP training options available?",
        answer:
          "Yes. Online and blended learning options are available with live sessions, recorded lectures, and interactive practical labs.",
      },
      {
        question:
          "Does the course include practical enterprise networking labs?",
        answer:
          "Yes. Extensive hands-on labs, enterprise simulations, and troubleshooting scenarios are included throughout the program.",
      },
      {
        question:
          "Will I learn network automation in this course?",
        answer:
          "Yes. The course introduces automation concepts, scripting basics, and tools used to streamline enterprise network management.",
      },
      {
        question:
          "Is placement assistance provided after course completion?",
        answer:
          "Yes. Placement support includes resume guidance, interview preparation, and access to networking job opportunities.",
      },
    ],
  },

  testimonials: {
    title: "What Students Say About CCNP (Core + Advance) Training",

    items: [
      {
        name: "Aman Verma",
        review:
          "The advanced routing labs and enterprise networking scenarios helped me build real confidence in managing complex networks.",
      },
      {
        name: "Priya Sharma",
        review:
          "This course gave me strong practical exposure to enterprise security, automation, and troubleshooting used in real-world IT environments.",
      },
    ],
  },
};

export default ccnpCoreAdvance;