"use client";
import React from 'react';
import { Monitor, Globe, BookOpen } from "lucide-react";
import Test from "@/components/Tests"
import HeroSection from '@/components/hero section';
import Write from '@/components/write';
import Move from '@/components/move';
import Courses from '@/components/courses';
import Book from '@/components/Book';
import Drop from '@/components/drop';

export default function Home() {
  return (
    <main className="min-h-screen">

      <HeroSection
        title=" AI(Artifical Inteligence) Course in Mohali"
        description="Learn our Best Basic Networking Course in Mohali at 5Trainers Institute in Mohali with Certified  Network Trainers."
        image="/cyber.jpg"
        category="AI(Artificial Inteligence)"
      />
     <Write
  courseName="Web Application Penetration Testing"

  aboutTitle="About Web Application Penetration Testing Course"

  aboutPara1="Cyberyaan Training Institute in Delhi provides a thorough Web Application Penetration Testing Course that teaches you how to discover and mitigate security vulnerabilities in web applications. This hands-on training curriculum covers several areas of penetration testing, such as reconnaissance, scanning, exploitation, and post-exploitation techniques."

  aboutPara2="You will learn about typical web application vulnerabilities, including SQL injection, cross-site scripting (XSS), and insecure direct object references (IDOR). You will also work with tools like Burp Suite, OWASP ZAP, and Metasploit through practical exercises and real-world examples."

  aboutPara3="This course is taught by experienced cybersecurity professionals who provide personalized guidance. After completion, you will receive a Cyberyaan Training Institute certification to validate your skills in web application penetration testing."

  learningObjectives={[
    "Web Application Security Fundamentals",
    "Web Application Architecture and Technologies",
    "Web Application Attack Vectors",
    "Security Testing Techniques",
    "Secure Coding Practices",
    "Authentication and Authorization",
    "Session Management and Security",
    "Secure Communication",
    "Web Application Firewall (WAF)",
    "Security Headers and CSP",
    "Security Misconfigurations",
    "Incident Response and Security Monitoring"
  ]}

  requirements={[
    "Familiarity with web development concepts such as HTML, CSS, JavaScript and backend languages like PHP, Python or Ruby.",
    "Knowledge of frameworks like React, Angular, or Vue.js is helpful.",
    "Understanding of basic computer science concepts such as data structures, algorithms and networking.",
    "Basic knowledge of networking concepts like TCP/IP, DNS, HTTP/HTTPS.",
    "Understanding of cybersecurity fundamentals like CIA triad (Confidentiality, Integrity, Availability).",
    "Familiarity with operating systems such as Windows, Linux or macOS.",
    "Basic understanding of file systems and permissions."
  ]}

  modules={[
    "Introduction to HTTP/HTTPS (Request Methods, Headers)",
    "Understanding the Web Application Attack Surface",
    "Introduction to OWASP Top 10 Vulnerabilities",
    "Lab Setup: Installing and Configuring Burp Suite",
    "Exploring Burp Suite Basics (Proxy, Repeater)",
    "Understanding and Exploiting Cross-Site Scripting (XSS)",
    "Preventing and Mitigating Cross-Site Scripting (XSS)",
    "Cross-Site Request Forgery (CSRF) Attacks and Prevention",
    "Identifying and Exploiting Input Validation Vulnerabilities",
    "Introduction to SQL Injection Attacks (Manual)",
    "SQL Injection Attacks (Automated)",
    "Using SQLmap for Database Exploitation",
    "Preventing SQL Injection (Prepared Statements, ORM)",
    "File Upload Vulnerabilities",
    "Preventing Arbitrary File Execution",
    "Directory Traversal Attacks",
    "Mitigating Directory Traversal",
    "Session Management Vulnerabilities",
    "Preventing Session Hijacking",
    "Authentication and Authorization Flaws",
    "Broken Access Control Exploitation",
    "Insecure Direct Object References (IDOR)",
    "Automated Scanning using Burp Suite",
    "Final Case Study: Full Web App Penetration Testing"
  ]}
/>
      <Move
  titleLine1="AI(Artificial Inteligence)"
  titleLine2="Training"
  description="Learn how to find and fix security vulnerabilities in AI(artificial inteligence) using real-world tools."
/>
   <Courses
        heading="Modes of Training"
        subHeading="Cyberyaan offers flexibility in terms of training modes to accommodate various learning preferences:"

        trainingModes={[
          {
            title: "Classroom Training",
            icon: <Monitor size={48} />,
            description:
              "In-person communication with teachers and students in the classroom setting ensures immediate doubt resolution and fosters a collaborative learning environment through direct interaction."
          },
          {
            title: "Online Learning",
            icon: <Globe size={48} />,
            description:
              "Flexible remote learning that can be accessed via e-learning platforms enables students to master skills at their own pace while providing 24/7 access to high-quality study materials and interactive virtual sessions."
          },
          {
            title: "Blended Learning",
            icon: <BookOpen size={48} />,
            description:
              "Balanced approach of classroom and online sessions for effective training strategies that combine the benefits of face-to-face interaction with the convenience of self-paced digital learning."
          }
        ]}

        targetAudience={[
          "Cybersecurity Professionals",
          "IT Professionals",
          "Ethical Hackers and Penetration Testers",
          "Students and Aspiring Cybersecurity Specialists",
          "Information Security Enthusiasts",
          "Security Researchers",
          "Corporate Security Teams",
          "Entrepreneurs and Business Owners",
          "Law Enforcement and Government Personnel",
          "Compliance and Risk Management Professionals"
        ]}
      />
      
      <Book
  title="Artificial Intelligence Training in Mohali Overview"

  paragraphs={[
    "Are you searching for the best institute for Artificial Intelligence Training in Pitampura? Look no further than DUCAT, where our experts provide top-notch Artificial Intelligence training designed to equip students with the skills needed to succeed in the fast-evolving AI industry.",

    "Our Artificial Intelligence Course in Pitampura prepares students for high-demand careers by offering hands-on training using the latest tools, technologies, and real-world projects. The course covers both foundational and advanced AI concepts to ensure complete industry readiness.",

    "Artificial Intelligence (AI) refers to machines that mimic human intelligence. AI systems can process large volumes of data, identify patterns, and make decisions with minimal human intervention, making them essential across industries like healthcare, finance, automation, and customer service."
  ]}

  highlights={[
    {
      title: "Data Analysis",
      desc: "AI excels at handling large and complex datasets, making it highly valuable in industries like banking, healthcare, and analytics where massive data processing is required."
    },
    {
      title: "Automation of Manual Tasks",
      desc: "AI helps automate repetitive and manual tasks, reducing human effort and increasing efficiency in business operations and industrial processes."
    },
    {
      title: "Customer Satisfaction",
      desc: "AI enhances customer experience by enabling smart chatbots, personalized recommendations, and real-time support through intelligent systems."
    },
    {
      title: "Machine Learning & Deep Learning",
      desc: "Learn core AI concepts including machine learning algorithms, neural networks, and deep learning techniques used in real-world applications."
    },
    {
      title: "Real-World Applications",
      desc: "Work on real-time AI projects such as recommendation systems, chatbots, and predictive models to gain practical experience."
    },
    {
      title: "Career Opportunities",
      desc: "Prepare for roles like AI Engineer, Data Scientist, Machine Learning Engineer, and AI Analyst with industry-relevant skills."
    }
  ]}
/>
      <Drop
  title="Artificial Intelligence Course FAQs"
  faqs={[
    {
      question: "What is Artificial Intelligence?",
      answer: "Artificial Intelligence (AI) refers to machines that mimic human intelligence and decision-making abilities."
    },
    {
      question: "Who can learn AI?",
      answer: "Students, IT professionals, developers, and beginners with basic programming knowledge can learn AI."
    },
    {
      question: "Is coding required for AI?",
      answer: "Yes, basic knowledge of Python or programming is helpful for learning AI concepts."
    },
    {
      question: "What are the career opportunities in AI?",
      answer: "You can become AI Engineer, Data Scientist, Machine Learning Engineer, or AI Developer."
    },
    {
      question: "Which language is best for AI?",
      answer: "Python is the most popular and widely used language for Artificial Intelligence."
    },
    {
      question: "Do I need math for AI?",
      answer: "Yes, basic understanding of statistics, linear algebra, and probability helps in AI."
    },
    {
      question: "What tools are used in AI?",
      answer: "Popular tools include TensorFlow, PyTorch, Scikit-learn, and Keras."
    },
    {
      question: "Is AI difficult to learn?",
      answer: "It depends on your background, but with proper guidance and practice, it becomes manageable."
    },
    {
      question: "How long does it take to learn AI?",
      answer: "Basic AI can take 3–6 months, while advanced mastery may take 1 year or more."
    },
    {
      question: "What is Machine Learning?",
      answer: "Machine Learning is a subset of AI that allows systems to learn from data."
    },
    {
      question: "What is Deep Learning?",
      answer: "Deep Learning uses neural networks to solve complex problems like image and speech recognition."
    },
    {
      question: "Can AI be learned online?",
      answer: "Yes, AI can be learned through online courses, tutorials, and live training sessions."
    },
    {
      question: "Why should I learn AI?",
      answer: "AI is a high-demand field with excellent career growth, salary, and future opportunities."
    }
  ]}
/>
      <Test
  title="What People Say About 5 Trainers Institute "
  testimonials={[
    {
      name: "Aarav Mehta",
      review:
        "Cyber Security training ne mujhe real hacking techniques aur defense strategies samajhne me help ki. Practical labs bahut strong the.",
    },
    {
      name: "Sneha Verma",
      review:
        "Burp Suite aur penetration testing tools use karke mujhe real-world vulnerabilities samajh aayi. Learning experience excellent tha.",
    },
    {
      name: "Rohit Singh",
      review:
        "Ethical hacking concepts pehle tough lagte the, but trainers ne step-by-step sab clear kar diya. Now I can analyze systems properly.",
    },
    {
      name: "Priya Nair",
      review:
        "Hands-on labs aur real attack simulations ne mujhe industry-ready bana diya. Best part was practical learning approach.",
    },
    {
      name: "Aditya Jain",
      review:
        "Network security aur web application testing ka deep knowledge mila. Ab mujhe vulnerabilities detect karna aata hai confidently.",
    },
  ]}
/>
    </main>
  );
}