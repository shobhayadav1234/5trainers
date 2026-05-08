import { CourseContent } from "./types";

const penetrationtestingCourse: CourseContent = {
  slug: "penetration-testing",
  
  write: {
    courseName: "PENETRATION TESTING",

    aboutTitle: "About Penetration Testing Course",

    aboutPara1:
      "Aaj ke digital world me sirf security tools ka knowledge kaafi nahi hota — companies ko ethical hackers aur penetration testers chahiye jo real attackers ki tarah soch kar systems, networks, applications aur APIs ki vulnerabilities identify kar saken. Penetration Testing ek advanced cybersecurity domain hai jisme professionals legal aur authorized tareeke se systems ko hack karke security gaps detect karte hain.",

    aboutPara2:
      "Mindweave Academy ka Penetration Testing Course pure hands-on offensive security approach par based hai. Is course me aap network, web application, system, API, aur basic cloud penetration testing real tools aur practical attack scenarios ke through seekhte ho.",

    aboutPara3:
      "Training lab-based, practical aur interview-oriented hai, jahan aap real-world ethical hacking, vulnerability assessment, exploitation, reporting aur offensive security techniques master karte ho. Course complete karne ke baad aap penetration tester roles ke liye job-ready ban jaoge.",

    learningObjectives: [
      "Understand Penetration Testing Methodology",
      "Perform Network & System Penetration Testing",
      "Identify and Exploit Vulnerabilities",
      "Conduct Web Application Security Testing",
      "Perform API Penetration Testing",
      "Use Kali Linux, Nmap, Metasploit, Burp Suite",
      "Privilege Escalation Techniques",
      "Prepare Professional Pentest Reports",
      "Follow Legal & Ethical Guidelines",
      "Real-World Offensive Security Skills",
      "Interview Preparation",
      "Career Roadmap Building"
    ],

    requirements: [
      "Basic computer and networking knowledge",
      "Interest in ethical hacking and cyber security",
      "Basic Linux understanding is helpful",
      "No advanced hacking knowledge required"
    ],

    modules: [
      "Module 01: Introduction to Penetration Testing",
      "Module 02: Ethical Hacking vs Pentesting",
      "Module 03: Legal & Compliance Aspects",
      "Module 04: Networking & Linux Fundamentals",
      "Module 05: TCP/IP, Ports & Protocols",
      "Module 06: Linux Commands for Hackers",
      "Module 07: Information Gathering & Reconnaissance",
      "Module 08: DNS & Subdomain Enumeration",
      "Module 09: Network Scanning & Fingerprinting",
      "Module 10: Vulnerability Assessment",
      "Module 11: CVE & CVSS Concepts",
      "Module 12: Network Penetration Testing",
      "Module 13: Password Attacks",
      "Module 14: SMB & Service Exploitation",
      "Module 15: Web Application Penetration Testing",
      "Module 16: OWASP Top 10",
      "Module 17: SQL Injection",
      "Module 18: Cross-Site Scripting (XSS)",
      "Module 19: CSRF",
      "Module 20: Authentication & Session Testing",
      "Module 21: API Penetration Testing",
      "Module 22: REST API Vulnerabilities",
      "Module 23: Authentication Bypass",
      "Module 24: System Exploitation",
      "Module 25: Privilege Escalation",
      "Module 26: Post Exploitation Basics",
      "Module 27: Reporting & Documentation",
      "Module 28: Proof of Concept Creation",
      "Module 29: Real-Time Pentesting Projects",
      "Module 30: Interview Preparation"
    ]
  },


  move: {
    titleLine1: "Penetration Testing Course",
    titleLine2: "Training",
    description:
      "Master Penetration Testing with hands-on cybersecurity training. Learn ethical hacking, vulnerability assessment, network security, web application testing, exploit analysis, and real-world security projects using advanced penetration testing tools and techniques.",
  },

  training: {
    heading: "Modes of Training",
    subHeading:
      "Mindweave Academy offers practical penetration testing training for students, freshers, and IT professionals through classroom, online, and blended learning modes with real-world offensive security labs.",

    trainingModes: [
      {
        title: "Classroom Training",
        icon: "monitor",
        description:
          "Hands-on in-person practical penetration testing sessions with expert mentors, real tools, and live projects.",
      },
      {
        title: "Online Learning",
        icon: "globe",
        description:
          "Live instructor-led online sessions with flexibility, recorded classes, and complete cyber lab access.",
      },
      {
        title: "Blended Learning",
        icon: "book",
        description:
          "A hybrid model combining classroom practicals with digital resources and revision support.",
      },
    ],

    targetAudience: [
      "Cybersecurity Beginners",
      "Ethical Hacking Learners",
      "Network Administrators",
      "System Administrators",
      "IT Professionals",
      "Computer Science Students",
      "SOC Analysts",
      "Security Analysts",
      "Freelancers",
      "Anyone pursuing Cyber Security careers"
    ],
  },

  book: {
    title: "Penetration Testing Course Overview",

    paragraphs: [
      "This course provides comprehensive hands-on penetration testing training focused on real-world offensive security techniques for networks, systems, web applications, and APIs.",

      "Participants will master vulnerability assessment, exploitation, privilege escalation, professional reporting, and security testing using industry-standard tools like Kali Linux, Burp Suite, Nmap, and Metasploit.",

      "By the end of the course, students gain practical cybersecurity expertise, making them ready for roles such as Penetration Tester, Ethical Hacker, and Cyber Security Analyst."
    ],

    highlights: [
      {
        title: "Network Penetration Testing",
        desc: "Learn to assess and exploit network vulnerabilities using professional tools.",
      },
      {
        title: "Web Application Security",
        desc: "Master OWASP Top 10 vulnerabilities including SQLi, XSS, and authentication flaws.",
      },
      {
        title: "API Security Testing",
        desc: "Understand REST API vulnerabilities and advanced API penetration testing.",
      },
      {
        title: "Industry Tools",
        desc: "Hands-on experience with Kali Linux, Burp Suite, Metasploit, and Nmap.",
      },
      {
        title: "Privilege Escalation",
        desc: "Learn system exploitation and privilege escalation techniques.",
      },
      {
        title: "Professional Reporting",
        desc: "Develop client-ready pentest reports and remediation guidance.",
      },
      {
        title: "Real-World Labs",
        desc: "Practice on live projects and simulated attack scenarios.",
      },
      {
        title: "Career Readiness",
        desc: "Prepare for penetration testing interviews and cybersecurity job roles.",
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
    title: "Frequently Asked Questions for Penetration Testing Course",

    faqs: [
      {
        question: "What is penetration testing?",
        answer:
          "Penetration testing is the ethical practice of testing systems to identify and fix security vulnerabilities.",
      },
      {
        question: "Who should take this course?",
        answer:
          "Cyber security aspirants, ethical hackers, IT professionals, and security analysts.",
      },
      {
        question: "Do I need prior hacking knowledge?",
        answer:
          "Basic networking knowledge is helpful, but all fundamentals are covered.",
      },
      {
        question: "What tools will I learn?",
        answer:
          "You will work with Kali Linux, Nmap, Burp Suite, Metasploit, and various penetration testing tools.",
      },
      {
        question: "What job roles can I apply for?",
        answer:
          "Penetration Tester, Ethical Hacker, Cyber Security Analyst, and SOC Analyst.",
      },
      {
        question: "Is penetration testing in demand?",
        answer:
          "Yes, penetration testing is highly demanded due to increasing cyber threats globally.",
      },
    ],
  },

  testimonials: {
    title: "What People Say About Mindweave Academy Institute",

    items: [
      {
        name: "Arjun Malhotra",
        review:
          "Excellent penetration testing course with practical labs and real-world ethical hacking scenarios.",
      },
      {
        name: "Neha Kapoor",
        review:
          "This course helped me gain strong offensive security skills and boosted my cyber security career.",
      },
    ],
  },
};

export default penetrationtestingCourse;