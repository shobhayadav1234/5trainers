import { CourseContent } from "./types";

const apitestingCourse: CourseContent = {
  slug: "api-testing",

  write: {
    courseName: "API TESTING",

    aboutTitle: "About API Testing Course",

    aboutPara1:
      "The API Testing Course in Noida is a structured, industry-oriented program designed to help students and professionals understand how modern applications communicate and how those communications are tested in real-world software projects. Today, most web and mobile applications rely heavily on APIs, making backend testing an essential skill.",

    aboutPara2:
      "This course focuses on conceptual clarity, practical testing workflows, and real project scenarios. You will learn API architecture, REST fundamentals, request-response cycles, status codes, headers, payload validation, authentication, and defect reporting while understanding how APIs function internally.",

    aboutPara3:
      "By the end of this training, learners will confidently perform manual and foundational automated API testing, understand backend validation strategies, and become job-ready for QA, API Testing, and backend software testing roles.",

    learningObjectives: [
      "Understand API Architecture & Communication",
      "REST API Fundamentals",
      "HTTP Methods & Status Codes",
      "Request & Response Validation",
      "Manual API Testing Workflows",
      "API Automation Fundamentals",
      "Authentication & Authorization Testing",
      "Functional & Regression API Testing",
      "Defect Reporting",
      "Real Project API Scenarios",
      "Interview Preparation",
      "Career Readiness"
    ],

    requirements: [
      "Basic understanding of software testing is helpful",
      "No prior API knowledge required",
      "Suitable for freshers and professionals",
      "Interest in backend or QA testing"
    ],

    modules: [
      "Module 01: Introduction to APIs",
      "Module 02: Client-Server Architecture",
      "Module 03: REST API Fundamentals",
      "Module 04: HTTP Methods",
      "Module 05: Status Codes",
      "Module 06: Headers & Payloads",
      "Module 07: Request Validation",
      "Module 08: Response Validation",
      "Module 09: Functional API Testing",
      "Module 10: Integration Testing",
      "Module 11: Regression Testing",
      "Module 12: Negative Testing",
      "Module 13: Authentication Methods",
      "Module 14: Authorization Testing",
      "Module 15: Postman Setup",
      "Module 16: Manual API Testing Workflow",
      "Module 17: API Automation Overview",
      "Module 18: Logging Requests & Responses",
      "Module 19: Defect Reporting",
      "Module 20: Real-Time API Testing Projects"
    ]
  },

  move: {
  titleLine1: "API Testing Course",
  titleLine2: "Training",
  description:
    "Master API Testing with hands-on automation and manual testing training. Learn REST API validation, Postman, Swagger, automation frameworks, performance testing, security testing, and real-world API projects using industry-standard tools and best practices.",
},

  training: {
    heading: "Modes of Training",
    subHeading:
      "Mindweave Academy offers practical API Testing programs for freshers, manual testers, and working professionals through classroom, online, and blended learning options.",

    trainingModes: [
      {
        title: "Classroom Training",
        icon: "monitor",
        description:
          "Hands-on in-person API testing classes with expert mentors, practical projects, and structured backend testing exercises.",
      },
      {
        title: "Online Learning",
        icon: "globe",
        description:
          "Attend live online sessions with flexibility, recorded lectures, and complete API project support.",
      },
      {
        title: "Blended Learning",
        icon: "book",
        description:
          "Hybrid learning model combining classroom sessions with digital resources and revision tools.",
      },
    ],

    targetAudience: [
      "Manual Testers",
      "Freshers",
      "QA Engineers",
      "Automation Testers",
      "Developers",
      "IT Graduates",
      "Working Professionals",
      "Backend Testing Aspirants",
      "Freelancers",
      "Anyone interested in API Testing"
    ],
  },

  book: {
    title: "API Testing Course Overview",

    paragraphs: [
      "This course provides complete knowledge of API testing fundamentals, backend validation workflows, and practical industry-level testing strategies.",

      "Students learn manual API validation, automation basics, request-response verification, authentication handling, and defect reporting aligned with Agile and DevOps practices.",

      "By course completion, learners gain practical API testing skills required for QA Engineer, API Tester, Backend Tester, and Automation roles."
    ],

    highlights: [
      {
        title: "REST API Fundamentals",
        desc: "Understand modern API architecture and REST principles.",
      },
      {
        title: "Manual API Testing",
        desc: "Master request-response validation and defect detection.",
      },
      {
        title: "Postman Practical Training",
        desc: "Perform real API testing using Postman and testing workflows.",
      },
      {
        title: "Authentication Testing",
        desc: "Learn API key, token, and authorization testing methods.",
      },
      {
        title: "Automation Basics",
        desc: "Build foundational API automation understanding.",
      },
      {
        title: "Real-Time Projects",
        desc: "Practice with live API project scenarios.",
      },
      {
        title: "Interview Preparation",
        desc: "Prepare for backend and QA job opportunities.",
      },
      {
        title: "Career Growth",
        desc: "Build a strong career in software testing and API validation.",
      }
    ]
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
    title: "Frequently Asked Questions for API Testing Course",

    faqs: [
      {
        question: "What is API testing?",
        answer:
          "API testing validates application programming interfaces for functionality, reliability, performance, and security.",
      },
      {
        question: "Why is API testing important?",
        answer:
          "APIs are the backbone of modern software applications, and testing ensures backend systems work reliably.",
      },
      {
        question: "What tools are commonly used?",
        answer:
          "Popular tools include Postman, SoapUI, Swagger, JMeter, and Insomnia.",
      },
      {
        question: "Do I need coding skills?",
        answer:
          "Basic technical understanding helps, but beginners can start with manual API testing concepts.",
      },
      {
        question: "What job roles are available after this course?",
        answer:
          "API Tester, QA Engineer, Manual Tester with API Skills, Backend Tester, and Automation Tester.",
      },
      {
        question: "Will I work on projects?",
        answer:
          "Yes, practical projects and real-world API scenarios are included.",
      },
    ],
  },

  testimonials: {
    title: "What People Say About Mindweave Academy Institute",

    items: [
      {
        name: "Rahul Verma",
        review:
          "Excellent API testing training with practical backend projects and strong conceptual clarity.",
      },
      {
        name: "Sneha Kapoor",
        review:
          "This course helped me transition from manual testing into backend API testing successfully.",
      },
    ],
  },
};

export default apitestingCourse;