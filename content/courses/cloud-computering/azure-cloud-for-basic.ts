import { CourseContent } from "./types";

const azureCloudBasic: CourseContent = {
  slug: "azure-cloud-for-basic",

  write: {
    courseName: "AZURE CLOUD FOR BASIC",

    aboutTitle: "About Azure Cloud for Basic",

    aboutPara1:
      "Azure Cloud for Basic course is a beginner-level training program focused on cloud computing fundamentals using Microsoft Azure. The course introduces core Azure services such as Virtual Machines, Azure Storage, Azure Active Directory, Networking, and Azure Monitor, enabling learners to understand how cloud infrastructure is designed, deployed, and managed.",

    aboutPara2:
      "This program emphasizes practical exposure to Azure environments, helping learners gain hands-on experience in managing cloud resources, understanding security basics, and optimizing performance and costs in real-world scenarios.",

    aboutPara3:
      "Join the program and get the opportunity to learn under the guidance of an Azure Cloud For Basic specialist. The course is structured for individuals aiming to start careers in cloud computing, IT infrastructure, or technical support roles.",

    learningObjectives: [
      "Build a strong foundation in cloud computing and Azure services",
      "Understand Azure architecture and cloud service models",
      "Deploy and manage Azure Virtual Machines",
      "Work with Azure Storage services and redundancy concepts",
      "Configure Azure networking and Virtual Networks",
      "Implement identity and access management using Azure Active Directory",
      "Understand monitoring, logging, and cost optimization",
      "Apply Azure security and compliance fundamentals",
      "Manage cloud resources using Azure Portal",
      "Learn scaling and high availability concepts",
      "Understand Azure databases and cloud infrastructure basics",
      "Prepare for entry-level cloud and Azure roles",
    ],

    requirements: [
      "Basic computer knowledge",
      "Interest in cloud computing and IT infrastructure",
      "No programming experience required",
      "Suitable for students, beginners, and IT professionals",
    ],

    modules: [
      "Module 01: Cloud Fundamentals & Azure Basics",
      "Module 02: Cloud Computing Concepts & Models",
      "Module 03: Azure Architecture Overview",
      "Module 04: Azure Portal & Resource Management",
      "Module 05: Azure Compute Services",
      "Module 06: Virtual Machines (VMs) Creation & Management",
      "Module 07: Scaling & Availability Concepts",
      "Module 08: Backup & Recovery Basics",
      "Module 09: Azure Storage Services",
      "Module 10: Blob, File & Disk Storage",
      "Module 11: Storage Accounts & Redundancy",
      "Module 12: Data Lifecycle & Security Basics",
      "Module 13: Azure Networking",
      "Module 14: Virtual Networks (VNet)",
      "Module 15: Subnets, Routing & Gateways",
      "Module 16: Network Security Groups (NSG)",
      "Module 17: Identity & Access Management",
      "Module 18: Azure Active Directory (AAD)",
      "Module 19: Role-Based Access Control (RBAC)",
      "Module 20: Multi-factor Authentication Basics",
      "Module 21: Azure Security Fundamentals",
      "Module 22: Security Best Practices",
      "Module 23: Data Protection & Compliance Basics",
      "Module 24: Threat Awareness",
      "Module 25: Monitoring & Cost Management",
      "Module 26: Azure Monitor & Logs",
      "Module 27: Performance Tracking",
      "Module 28: Cost Optimization Strategies",
      "Module 29: Basic Azure Services & Databases",
      "Module 30: Azure SQL Basics",
      "Module 31: High Availability Concepts",
      "Module 32: Load Balancing Overview",
    ],
  },

  move: {
    titleLine1: "Azure Cloud",
    titleLine2: "For Basic",
    description:
      "Build foundational cloud computing skills using Microsoft Azure including Virtual Machines, Storage, Networking, Azure Active Directory, monitoring, and cloud security concepts.",
  },

  training: {
    heading: "Modes of Training",

    subHeading:
      "Flexible Azure cloud learning modes for beginners, students, and working professionals.",

    trainingModes: [
      {
        title: "Classroom Training",
        icon: "monitor",
        description:
          "Hands-on classroom sessions with Azure Portal practice, cloud deployments, and infrastructure management exercises.",
      },
      {
        title: "Online Learning",
        icon: "globe",
        description:
          "Interactive online classes with guided Azure labs, networking configuration, and cloud resource management.",
      },
      {
        title: "Blended Learning",
        icon: "book",
        description:
          "Hybrid online + offline learning for flexible Azure cloud skill development and practical exposure.",
      },
    ],

    targetAudience: [
      "Beginners in Cloud Computing",
      "IT & Computer Science Students",
      "System Administrators",
      "Network Administrators",
      "Cloud Aspirants",
      "Technical Support Professionals",
      "Working IT Professionals",
      "Career Switchers",
    ],
  },

  book: {
    title: "Azure Cloud for Basic Overview",

    paragraphs: [
      "This program provides practical foundational training in Microsoft Azure cloud computing, infrastructure management, networking, storage, security, and monitoring concepts.",

      "Learners gain hands-on experience with Azure Portal, Virtual Machines, Azure Storage, networking configuration, Azure Active Directory, and monitoring tools through practical implementation exercises.",

      "The course prepares students for entry-level cloud computing roles and foundational Microsoft Azure certifications.",
    ],

    highlights: [
      {
        title: "Azure Fundamentals",
        desc: "Understand Azure architecture, regions, cloud models, and infrastructure basics.",
      },
      {
        title: "Azure Compute Services",
        desc: "Deploy and manage Azure Virtual Machines and compute resources.",
      },
      {
        title: "Azure Storage",
        desc: "Work with Blob, File, and Disk storage with redundancy concepts.",
      },
      {
        title: "Azure Networking",
        desc: "Configure Virtual Networks, subnets, routing, and network security.",
      },
      {
        title: "Identity & Access Management",
        desc: "Implement Azure Active Directory and Role-Based Access Control.",
      },
      {
        title: "Azure Security",
        desc: "Learn cloud security best practices and compliance basics.",
      },
      {
        title: "Monitoring & Cost Optimization",
        desc: "Track performance, logs, and optimize Azure cloud resource costs.",
      },
      {
        title: "Certification Readiness",
        desc: "Prepare for Microsoft Certified: Azure Fundamentals (AZ-900).",
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
        question: "What is Azure Cloud for Basic course?",
        answer:
          "Azure Cloud for Basic is an entry-level training program that introduces cloud computing concepts using Microsoft Azure. It covers core services like Virtual Machines, Storage, Networking, and Identity management.",
      },
      {
        question: "What is the duration of Azure Cloud for Basic course?",
        answer:
          "The duration typically ranges from 4 to 12 weeks, depending on the learning schedule and depth of the program. Beginner-focused courses are usually shorter and more structured.",
      },
      {
        question: "What are the prerequisites for this course?",
        answer:
          "There are no strict prerequisites. Basic computer knowledge and familiarity with the internet are sufficient to get started with Azure fundamentals.",
      },
      {
        question: "What certifications can I pursue after this course?",
        answer:
          "After completing this course, learners can prepare for certifications such as Microsoft Certified: Azure Fundamentals (AZ-900), which validates foundational cloud knowledge.",
      },
      {
        question: "What job roles can I apply for after completing this course?",
        answer:
          "You can explore entry-level roles such as Cloud Support Associate, Azure Administrator (Trainee), IT Support Engineer, or System Administrator with cloud skills.",
      },
      {
        question: "Does this course include practical training?",
        answer:
          "Yes, the course includes hands-on practice using the Azure Portal, allowing learners to work with real cloud services and scenarios.",
      },
      {
        question: "Will I get placement assistance after the course?",
        answer:
          "Learners receive structured support such as resume building, interview preparation, and career guidance to help transition into cloud and IT roles.",
      },
    ],
  },

  testimonials: {
    title: "What Students Say About Azure Cloud for Basic",

    items: [
      {
        name: "Rahul Verma",
        review:
          "The course explained Azure concepts in a beginner-friendly way and helped me gain confidence with Virtual Machines, networking, and cloud deployments.",
      },
      {
        name: "Sneha Kapoor",
        review:
          "The practical Azure labs and hands-on exercises made cloud computing concepts easy to understand and apply in real scenarios.",
      },
    ],
  },
};

export default azureCloudBasic;