import { CourseContent } from "./types";

const seleniumjavaCourse: CourseContent = {
  slug: "selenium-java",
  
  write: {
    courseName: "SELENIUM (JAVA)",

    aboutTitle: "About Selenium (Java) Course",

    aboutPara1:
      "The Selenium with Java course is designed for learners who want to build strong automation testing skills using Java and Selenium WebDriver. Java is one of the most widely used programming languages, and Selenium is a powerful open-source framework that enables automated web application testing across modern browsers.",

    aboutPara2:
      "This course covers core Java programming, Selenium fundamentals, browser automation, web element interaction, test case development, TestNG integration, framework building, and real-world automation projects. Learners gain both conceptual clarity and hands-on practical expertise required for automation testing careers.",

    aboutPara3:
      "By the end of the program, students will be able to design scalable automation frameworks, automate testing workflows, improve software quality, and prepare for roles such as Automation Tester, QA Engineer, Selenium Test Analyst, and Software Development Engineer in Test (SDET).",

    learningObjectives: [
      "Understand Core Java for Automation",
      "Master Selenium WebDriver",
      "Automate Web Applications",
      "Handle Dynamic Web Elements",
      "Cross-Browser Testing",
      "Develop Test Scripts",
      "Integrate TestNG Framework",
      "Framework Design & Development",
      "Debugging & Troubleshooting",
      "Data-Driven Testing",
      "Real-Time Automation Projects",
      "Career Preparation"
    ],

    requirements: [
      "Basic computer knowledge",
      "Interest in software testing",
      "No prior coding experience required",
      "Helpful for testers, developers, and freshers"
    ],

    modules: [
      "Module 01: Introduction to Java",
      "Module 02: Java Programming Basics",
      "Module 03: Variables and Data Types",
      "Module 04: Conditional & Loop Statements",
      "Module 05: Functions and OOP Concepts",
      "Module 06: Introduction to Selenium",
      "Module 07: Selenium IDE",
      "Module 08: Selenium WebDriver Setup",
      "Module 09: Browser Commands",
      "Module 10: Navigation Commands",
      "Module 11: Web Element Locators",
      "Module 12: Handling Forms",
      "Module 13: Wait Mechanisms",
      "Module 14: Dynamic Elements",
      "Module 15: TestNG Framework",
      "Module 16: Assertions & Reporting",
      "Module 17: Cross-Browser Testing",
      "Module 18: Framework Implementation",
      "Module 19: Data-Driven Testing",
      "Module 20: Real-Time Projects",
      "Module 21: Debugging Techniques",
      "Module 22: Resume Building",
      "Module 23: Interview Preparation"
    ]
  },
   move: {
    titleLine1: "Selenium Java Course",
    titleLine2: "Training",
    description:
      "Master Selenium with Java through hands-on automation testing training. Learn web automation, Selenium WebDriver, Java programming, framework design, test execution, debugging, TestNG integration, and real-world QA projects using industry-standard testing tools and practices.",
  },

  training: {
    heading: "Modes of Training",
    subHeading:
      "Mindweave Academy offers industry-oriented Selenium Java training through classroom, online, and blended learning programs designed for freshers, professionals, and automation enthusiasts.",

    trainingModes: [
      {
        title: "Classroom Training",
        icon: "monitor",
        description:
          "Hands-on classroom sessions with practical automation labs, live projects, and expert mentorship.",
      },
      {
        title: "Online Learning",
        icon: "globe",
        description:
          "Instructor-led online classes with flexible timing, recordings, assignments, and remote project guidance.",
      },
      {
        title: "Blended Learning",
        icon: "book",
        description:
          "Hybrid training approach combining classroom exposure with online flexibility and revision support.",
      },
    ],

    targetAudience: [
      "Software Testers",
      "Manual Testers",
      "Automation Testers",
      "Developers",
      "QA Professionals",
      "Students & Freshers",
      "IT Professionals",
      "Freelancers",
      "SDET Aspirants",
      "Anyone interested in automation testing"
    ],
  },

  book: {
    title: "Selenium (Java) Course Overview",

    paragraphs: [
      "This course provides complete automation testing expertise by combining Java programming with Selenium WebDriver, allowing learners to automate real-world web applications effectively.",

      "Participants gain practical experience in automation frameworks, browser testing, dynamic element handling, and testing workflows used by modern software development teams.",

      "By mastering Java with Selenium, learners significantly improve their employability in software quality assurance, automation engineering, and testing roles."
    ],

    highlights: [
      {
        title: "Java Programming",
        desc: "Learn core Java concepts essential for Selenium automation.",
      },
      {
        title: "Selenium WebDriver",
        desc: "Master browser automation and web application testing.",
      },
      {
        title: "Automation Frameworks",
        desc: "Develop scalable and maintainable test frameworks.",
      },
      {
        title: "Cross-Browser Testing",
        desc: "Execute tests across multiple browsers efficiently.",
      },
      {
        title: "TestNG Integration",
        desc: "Structure tests, assertions, and reporting professionally.",
      },
      {
        title: "Dynamic Element Handling",
        desc: "Automate modern web applications with advanced techniques.",
      },
      {
        title: "Real-Time Projects",
        desc: "Gain practical exposure through industry-oriented projects.",
      },
      {
        title: "Career Readiness",
        desc: "Prepare for automation tester and QA engineering opportunities.",
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
    title: "Frequently Asked Questions for Selenium (Java) Course",

    faqs: [
      {
        question: "Who can enroll in this course?",
        answer:
          "Software testers, QA professionals, developers, freshers, and anyone interested in automation testing can join.",
      },
      {
        question: "Why choose Selenium with Java?",
        answer:
          "Java and Selenium are highly in-demand technologies that provide strong automation testing capabilities.",
      },
      {
        question: "Do I need prior Java knowledge?",
        answer:
          "No, the course starts from Java fundamentals and gradually progresses to advanced automation concepts.",
      },
      {
        question: "What job roles can I pursue?",
        answer:
          "Automation Tester, QA Engineer, Selenium Test Analyst, SDET, and Software Test Engineer.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, the course includes practical projects for real-world implementation.",
      },
      {
        question: "Is placement support available?",
        answer:
          "Yes, students receive resume building, interview preparation, and career guidance support.",
      },
    ],
  },

  testimonials: {
    title: "What People Say About Mindweave Academy Institute",

    items: [
      {
        name: "Rahul Mehta",
        review:
          "Excellent Selenium Java course with strong practical exposure and real-world automation projects.",
      },
      {
        name: "Pooja Verma",
        review:
          "This course helped me transition from manual testing to automation successfully.",
      },
    ],
  },
};

export default seleniumjavaCourse;