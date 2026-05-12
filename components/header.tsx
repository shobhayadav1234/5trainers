"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Menu, X } from "lucide-react";

/* ================= TYPES ================= */

type SubLink = {
  name: string;
  href: string;
};

type CourseItem = {
  name: string;
  href?: string;
  subCourses?: SubLink[];
};

type NavItem = {
  name: string;
  href?: string;
  dropdown?: CourseItem[] | SubLink[];
};

/* ================= DATA ================= */

const navbarLinks: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Courses",
    dropdown: [
      {
        name: "Software Testing",
        href: "/courses/software-testing",
        subCourses: [
          { name: "Appium Training", href: "/courses/software-testing/appium-training" },
          { name: "Manual Testing + Selenium", href: "/courses/software-testing/manual-selenium" },
          { name: "Pentration Testing", href: "/courses/software-testing/penetration-testing" },
          { name: "API Testing", href: "/courses/software-testing/api-testing" },
          { name: "Selenium(PYTHON)", href: "/courses/software-testing/selenium-python" },
          { name: "Playright with javascript Course", href: "/courses/software-testing/playwright-javascript" },
          { name: "Full Stack QA with AI", href: "/courses/software-testing/fullstack-qa-with-ai" },
          { name: "Selenium(JAVA)", href: "/courses/software-testing/selenium-java" },

        ]
      },
      {
        name: "Web Development",
        href: "/courses/web-development",
        subCourses: [
          { name: "Java Full Stack (Professional + AI)", href: "/courses/web-development/java-fullstack-professional-ai" },
          { name: "Java Full Stack Developer", href: "/courses/web-development/javafullstackdeveloper" },
          { name: "Diploma in Full Stack Web Development (Java)", href: "/courses/web-development/diploma-in-full-stack-web-development-java" },
          { name: "Node.js Full Stack Development", href: "/courses/web-development/node-js-full-stack" },
          { name: "MEAN Full Stack Development", href: "/courses/web-development/mean-full-stack" }
        ]
      },
      {
        name: "Digital Marketing",
        href: "/courses/digital-marketing",
        subCourses: [
          { name: "Digital Marketing Training", href: "/courses/digital-marketing/digital-marketing-training" },
          { name: "Advance Digital Marketing", href: "/courses/digital-marketing/advance-digital-marketing-course" },
          { name: "Diploma in Digital Marketing with AI", href: "/courses/digital-marketing/diploma-with-ai" },
        ]
      },
      {
        name: "Python",
        href: "/courses/pythons",
        subCourses: [
          { name: "Python Full Stack with AI", href: "/courses/pythons/python-fullstack-with-ai" },
          { name: "Python + SQL + Django", href: "/courses/pythons/python-sql-django" },
          { name: "Python Full Stack Data Scientist", href: "/courses/pythons/python-full-stack-data-scientist" },
        ]
      },
      {
        name: "Cyber Security",
        href: "/courses/cyber-security",
        subCourses: [
          { name: "Cyber Security Training", href: "/courses/cyber-security/cyber-security-training" },
          { name: "Diploma in Cyber Security", href: "/courses/cyber-security/diploma-in-cybersecurity" },
          { name: "Computer Networking & Cyber Security", href: "/courses/cyber-security/computer-networking-cyber-security-course" },
          { name: "Diploma in Ethical Hacking & Cyber Security", href: "/courses/cyber-security/diploma-in-ethical-hacking-cyber-security" },
        ]
      },
      {
        name: "Data Science",
        href: "/courses/data-science",
        subCourses: [
          { name: "Data Science Professional Training", href: "/courses/data-science/data-science-professional-training" },
        ]
      },
      {
        name: "AI(Artificial Intelligence)",
        href: "/courses/ai",
        subCourses: [
          { name: "Transform Graphics with Generative AI", href: "/courses/ai/generative-ai" },
          { name: "Scaling Marketing with AI Agents", href: "/courses/ai/scaling-marketing-with-ai-agents" },
          { name: "DevOps Automation Powered by Generative AI", href: "/courses/ai/devops-automation-powered-by-generative-ai" },
          { name: "Agentic AI Tools for Data Analytics", href: "/courses/ai/agentic-ai-tools-for-data-analytics" },
        ]
      },
      {
        name: "Data Analytics",
        href: "/courses/data-analytics",
        subCourses: [
          { name: "Data Analytics Professional Training", href: "/courses/data-analytics/data-analytics-pro" },
          { name: "Data Analytics Professional Training with AI", href: "/courses/data-analytics/data-analytics-pro-ai" },
          { name: "Business Analytics", href: "/courses/data-analytics/business-analytics" },
        ]
      },
      {
        name: "Google Ads",
        href: "/courses/google-ads",
        subCourses: [
          { name: "Google Search Ads Professional", href: "/courses/google-ads/google-search-ads-professional" },

        ]
      },
      {
        name: "Meta Ads",
        href: "/courses/meta-ads",
        subCourses: [
          { name: "meta-ads-professional", href: "/courses/meta-ads/meta-ads-professional" },
        ]
      },
      {
        name: "DevOps",
        href: "/courses/devops",
        subCourses: [
          { name: "DevOps Training", href: "/courses/devops/devops-training" },
          { name: "DevOps for Professionals", href: "/courses/devops/devops-for-professional" },
        ]
      },
      {
        name: "Networking",
        href: "/courses/networking",
        subCourses: [
          { name: "CCNA (Routing & Switching)", href: "/courses/networking/ccna" },
          { name: "CCNA + CCNP", href: "/courses/networking/ccna-ccnp" },
          { name: "CCNP Core Advanced", href: "/courses/networking/ccnp-core-advance" },
          { name: "Diploma in Networking, Cloud & AI", href: "/courses/networking/diploma-networking-cloud-ai" },
        ]
      },
      {
        name: "Cloud Computing",
        href: "/courses/cloud-computering",
        subCourses: [
          { name: "Cloud Infrastructure", href: "/courses/cloud-computering/cloud-infra" },
          { name: "Diploma in Cloud Computing", href: "/courses/cloud-computering/diploma-cloud-computing" },
          { name: "Cloud Infrastructure with DevOps", href: "/courses/cloud-computering/cloud-infra-with-devops" },
          { name: "Azure Cloud for Beginners", href: "/courses/cloud-computering/azure-cloud-for-basic" },
          { name: "Azure Cloud for Professionals", href: "/courses/cloud-computering/azure-cloud-for-professional" }
        ]
      },
      {
        name: "Social Media",
        href: "/courses/social-media",
        subCourses: [
          { name: "Advanced Excel with AI", href: "/courses/social-media/advanced-excel-gen-ai" },
          { name: "Influencer Marketing", href: "/courses/social-media/influencer-marketing" },
        ]
      },
    ],
  },
  {
    name: "Blog", href: "/blogs"
  },

  {
    name: "Partners",
    dropdown: [
      { name: "Corporate", href: "/partners/corporate" },
      { name: "The Next (TNS)", href: "/partners/tns" },
      { name: "University", href: "/partners/university" },
      { name: "Affiliate", href: "/partners/affiliate" },
    ],
  },
  {
    name: "Company",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Gallery", href: "/gallery" },
      { name: "Services", href: "/services" },

    ],
  },
  { name: "Placement", href: "/placement" },


  { name: "Contact", href: "/contact" },
];

/* ================= COMPONENT ================= */
export default function Header() {
  const [open, setOpen] = useState(false);
  // Default value "Software Testing" set ki hai taaki right side khali na dikhe
  const [activeCourse, setActiveCourse] = useState<string>("Software Testing");
  // Mobile ke liye sub-menu toggle state
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  return (
    <>
      <nav className="w-full border-b bg-background sticky top-0 z-[100]">
        <div className="max-w-8xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <img
              src="/mind.png"
              alt="Logo"
              className="h-16 w-auto object-contain cursor-pointer"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2 lg:gap-4">
                {navbarLinks.map((item, i) =>
                  item.dropdown ? (
                    <NavigationMenuItem key={i}>
                      <NavigationMenuTrigger className="bg-transparent hover:text-primary transition-colors text-[15px] font-medium px-3">
                        {item.name}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        {item.name === "Courses" ? (
                          <div className="flex w-[650px] min-h-[450px] bg-popover rounded-md shadow-xl border overflow-hidden">

                            {/* Left Side: Main Course Categories */}
                            <div className="w-[280px] border-r bg-muted/10 p-2 overflow-y-auto max-h-[500px] custom-scrollbar">
                              {(item.dropdown as CourseItem[]).map((course, idx) => (
                                <Link
                                  key={idx}
                                  href={course.href || "#"}
                                  onMouseEnter={() => setActiveCourse(course.name)}
                                  className={`px-4 py-3 rounded-md transition-all text-[14px] font-medium flex justify-between items-center mb-1 ${activeCourse === course.name
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "hover:bg-accent text-foreground"
                                    }`}
                                >
                                  {course.name}
                                  <span
                                    className={
                                      activeCourse === course.name
                                        ? "opacity-100"
                                        : "opacity-30"
                                    }
                                  >
                                    →
                                  </span>
                                </Link>
                              ))}
                            </div>

                            {/* Right Side: Nested Sub Courses */}
                            <div className="flex-1 p-5 bg-background overflow-y-auto max-h-[500px]">
                              <div className="animate-in fade-in slide-in-from-left-3 duration-300">
                                <p className="text-[11px] font-bold uppercase text-primary mb-4 tracking-widest border-b pb-2">
                                  {activeCourse} Modules
                                </p>

                                <div className="grid gap-2">
                                  {(item.dropdown as CourseItem[])
                                    .find((c) => c.name === activeCourse)
                                    ?.subCourses?.map((sub, subIdx) => (
                                      <NavigationMenuLink asChild key={subIdx}>
                                        <Link
                                          href={sub.href}
                                          className="flex items-center px-3 py-2.5 text-sm rounded-md hover:bg-primary/5 hover:text-primary transition-all border border-transparent hover:border-primary/10 group"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:bg-primary transition-colors" />
                                          {sub.name}
                                        </Link>
                                      </NavigationMenuLink>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Partners & Company Dropdown */
                          <div className="grid gap-1 p-3 w-[220px] bg-popover rounded-md shadow-xl border">
                            {(item.dropdown as SubLink[]).map((sub, idx) => (
                              <NavigationMenuLink asChild key={idx}>
                                <Link
                                  href={sub.href}
                                  className="block px-3 py-2 text-sm font-medium hover:text-primary hover:bg-accent rounded-md transition-all"
                                >
                                  {sub.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={i}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href || "#"}
                          className="px-3 py-2 text-[15px] font-medium hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* MOBILE BUTTON */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden w-full border-t bg-background px-4 pb-8 absolute top-full left-0 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-2 mt-6">
              {navbarLinks.map((item, i) =>
                item.dropdown ? (
                  <div key={i} className="border-b border-muted py-2">
                    <button
                      onClick={() =>
                        setMobileSubOpen(
                          mobileSubOpen === item.name ? null : item.name
                        )
                      }
                      className="flex justify-between items-center w-full font-bold text-lg text-foreground py-2"
                    >
                      {item.name}
                      <span
                        className={`transform transition-transform ${mobileSubOpen === item.name ? "rotate-180" : ""
                          }`}
                      >
                        ▼
                      </span>
                    </button>

                    {mobileSubOpen === item.name && (
                      <div className="ml-4 mt-2 space-y-4 animate-in slide-in-from-top-2">
                        {item.name === "Courses" ? (
                          (item.dropdown as CourseItem[]).map((course, idx) => (
                            <div key={idx} className="mb-4">

                              {/* Main Course Page */}
                              <Link
                                href={course.href || "#"}
                                onClick={() => setOpen(false)}
                                className="block font-semibold text-primary text-sm mb-2 hover:underline"
                              >
                                {course.name}
                              </Link>

                              {/* Nested Subcourses */}
                              <div className="ml-3 space-y-2 border-l-2 border-muted pl-3">
                                {course.subCourses?.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setOpen(false)}
                                    className="block text-[13px] text-muted-foreground hover:text-primary"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          (item.dropdown as SubLink[]).map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className="block text-[15px] py-1 text-muted-foreground"
                            >
                              {sub.name}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={i}
                    href={item.href || "#"}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold border-b border-muted py-4 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );


}