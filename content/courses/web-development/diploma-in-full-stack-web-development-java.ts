import { CourseContent } from "./types";

const diplomaFullStackJava: CourseContent = {
  slug: "diploma-fullstack-web-development-java",

  write: {
    courseName: "DIPLOMA IN FULLSTACK WEB DEVELOPMENT (JAVA)",

    aboutTitle: "About Diploma in Full Stack Web Development (Java)",

    aboutPara1:
      "The Diploma in Full Stack Web Development (Java) course is designed to train learners in frontend, backend, databases, and Spring Boot using Java technologies with hands-on industry-level training.",

    aboutPara2:
      "Join the program and get the opportunity to learn under the guidance of a Diploma in Full Stack Web Development (Java) specialist. This program focuses on building complete enterprise-level web applications from UI to backend and deployment.",

    aboutPara3:
      "This course prepares learners to become job-ready Java Full Stack Developers by working on real-world projects, APIs, database systems, authentication, and deployment workflows.",

    learningObjectives: [
      "Core Java & Advanced Java Programming",
      "Frontend Development (HTML, CSS, JavaScript)",
      "Spring Boot & REST API Development",
      "Database Management & SQL",
      "JDBC & ORM Concepts",
      "Authentication & Security Implementation",
      "Full Stack Application Development",
      "Frontend & Backend Integration",
      "CRUD-Based Real Applications",
      "Application Deployment",
      "Interview Preparation",
      "Career Readiness for IT Industry",
    ],

    requirements: [
      "Basic computer knowledge",
      "Interest in programming",
      "Beginners can join from scratch",
      "Suitable for students and working professionals",
    ],

    modules: [
      "Module 01: Core Java Fundamentals",
      "Module 02: OOP Concepts in Java",
      "Module 03: Advanced Java (Collections, Multithreading)",
      "Module 04: Web Fundamentals (HTML, CSS, JS)",
      "Module 05: Client-Server Architecture",
      "Module 06: Frontend Development Basics",
      "Module 07: Database & SQL Concepts",
      "Module 08: JDBC & Database Connectivity",
      "Module 09: Spring Framework Basics",
      "Module 10: Spring MVC Architecture",
      "Module 11: Spring Boot Development",
      "Module 12: REST API Creation",
      "Module 13: Authentication & Security",
      "Module 14: Full Stack Integration",
      "Module 15: Real-Time Project Development",
      "Module 16: Deployment & Server Setup",
      "Module 17: Git & Version Control",
      "Module 18: Portfolio Development",
      "Module 19: Interview Preparation",
      "Module 20: Career Guidance & Placement Support",
    ],
  },

  move: {
    titleLine1: "Diploma in Full Stack",
    titleLine2: "Web Development (Java)",
    description:
      "Become a job-ready Java Full Stack Developer by mastering frontend, backend, databases, Spring Boot, REST APIs, and real-world deployment with hands-on project training.",
  },

  training: {
    heading: "Modes of Training",
    subHeading:
      "Flexible learning options designed for students and working professionals.",

    trainingModes: [
      {
        title: "Classroom Training",
        icon: "monitor",
        description:
          "Practical classroom sessions with live coding, projects, and expert mentorship.",
      },
      {
        title: "Online Learning",
        icon: "globe",
        description:
          "Live interactive classes with recordings, assignments, and practical exercises.",
      },
      {
        title: "Blended Learning",
        icon: "book",
        description:
          "Combination of online + offline training for better flexibility and learning.",
      },
    ],

    targetAudience: [
      "Students & Fresh Graduates",
      "BCA / MCA / B.Tech Students",
      "Java Beginners",
      "Backend Developers",
      "Working Professionals",
      "Career Switchers",
      "Web Development Learners",
      "IT Aspirants",
    ],
  },

  book: {
    title: "Diploma in Full Stack Web Development (Java) Overview",

    paragraphs: [
      "This diploma provides complete training in Java Full Stack Development including frontend, backend, databases, and deployment.",

      "Students gain hands-on experience by building real-world web applications using Java, Spring Boot, and modern web technologies.",

      "The course prepares learners for industry-ready software development roles in top IT companies.",
    ],

    highlights: [
      {
        title: "Core Java Mastery",
        desc: "Learn Java programming from basics to advanced level.",
      },
      {
        title: "Frontend Skills",
        desc: "Build interactive UI using HTML, CSS, and JavaScript.",
      },
      {
        title: "Spring Boot Development",
        desc: "Develop backend services and REST APIs.",
      },
      {
        title: "Database Management",
        desc: "Work with SQL and relational databases.",
      },
      {
        title: "Full Stack Integration",
        desc: "Connect frontend with backend systems.",
      },
      {
        title: "Security & Authentication",
        desc: "Implement secure login and authorization systems.",
      },
      {
        title: "Real Projects",
        desc: "Build complete real-world applications.",
      },
      {
        title: "Career Readiness",
        desc: "Prepare for Java Full Stack developer roles.",
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
        question: "What is covered in this diploma?",
        answer:
          "It covers frontend development, Core & Advanced Java, Spring Boot, databases, and full stack projects.",
      },
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes, it starts from basics and gradually moves to advanced full stack development.",
      },
      {
        question: "What job roles can I get after this course?",
        answer:
          "You can apply for Java Full Stack Developer, Backend Developer, and Software Engineer roles.",
      },
      {
        question: "Do I need programming experience?",
        answer:
          "No, beginners are welcome. All concepts are taught from scratch.",
      },
      {
        question: "Does this include live projects?",
        answer:
          "Yes, students work on real-world full stack projects and deployment tasks.",
      },
    ],
  },

  testimonials: {
    title: "What Students Say About Java Full Stack Diploma",

    items: [
      {
        name: "Ankit Verma",
        review:
          "Very structured course. I learned full stack Java development with real projects.",
      },
      {
        name: "Simran Kaur",
        review:
          "Excellent training with strong practical exposure and job-oriented teaching.",
      },
    ],
  },
};

export default diplomaFullStackJava;