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
  sub?: SubLink[];
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
      { name: "Software Testing", href: "/courses/software-testing" },
      { name: "Web Development", href: "/courses/web-development" },
      { name: "Digital Marketing", href: "/courses/digital-marketing" },
      { name: "Pythons", href: "/courses/pythons" },
      { name: "Cyber Security", href: "/courses/cyber-security" },
      { name: "Data Science", href: "/courses/data-science" },
      { name: "AI(Artificial Intelligence)", href: "/courses/ai" },
      { name: "Data Analytics", href: "/courses/data-analystics" },
      { name: "Google ads", href: "/courses/google-ads" },
      { name: "Meta ads", href: "/courses/meta-ads" },
      { name: "DevOps", href: "/courses/devops" },
      { name: "Networking", href: "/courses/networking" },
      { name: "Cloud Computing", href: "/courses/cloud-computering" },
      { name: "Social Media", href: "/courses/social-media" },
    ],
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
  { name: "Reviews", href: "/reviews" },
  { name: "Blog", href: "/blog" },
  { name: "Placement", href: "/placement" },
  {
    name: "Company",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Webinars", href: "/webinars" },
      { name: "FAQs", href: "/faqs" },
      { name: "Contact", href: "/contact" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

/* ================= COMPONENT ================= */

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-b bg-background sticky top-0 z-[100]">
        {/* Container aligned with Hero Section (max-w-7xl) */}
        <div className="max-w-8xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
          
          {/* LOGO - Scaled for better alignment */}
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="5 Trainers Logo" 
              className="h-10 md:h-12 w-auto object-contain cursor-pointer" 
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
                        <div className="grid gap-2 p-4 w-[280px] md:w-[350px] max-h-[450px] overflow-y-auto bg-popover rounded-md shadow-xl border">
                          {item.name === "Courses"
                            ? (item.dropdown as CourseItem[]).map((course, idx) =>
                                course.sub ? (
                                  <div key={idx} className="mb-2">
                                    <p className="text-sm font-bold text-foreground px-2 py-1">
                                      {course.name}
                                    </p>
                                    <div className="ml-2 mt-1 space-y-1 border-l-2 border-muted pl-2">
                                      {course.sub.map((sub, subIdx) => (
                                        <NavigationMenuLink asChild key={subIdx}>
                                          <Link
                                            href={sub.href}
                                            className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-sm transition-all"
                                          >
                                            {sub.name}
                                          </Link>
                                        </NavigationMenuLink>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <NavigationMenuLink asChild key={idx}>
                                    <Link
                                      href={course.href || "#"}
                                      className="block px-2 py-2 text-sm font-medium hover:text-primary hover:bg-accent rounded-md transition-all"
                                    >
                                      {course.name}
                                    </Link>
                                  </NavigationMenuLink>
                                )
                              )
                            : (item.dropdown as SubLink[]).map((sub, idx) => (
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
          <button
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden w-full border-t bg-background px-4 pb-6 absolute top-full left-0 shadow-2xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 mt-6">
              {navbarLinks.map((item, i) =>
                item.dropdown ? (
                  <div key={i} className="border-b border-muted pb-2">
                    <p className="font-bold text-lg mb-2 text-foreground">{item.name}</p>
                    <div className="ml-4 space-y-2">
                      {item.name === "Courses"
                        ? (item.dropdown as CourseItem[]).map((course, idx) => (
                            <Link
                              key={idx}
                              href={course.href || "#"}
                              onClick={() => setOpen(false)}
                              className="block text-sm text-muted-foreground hover:text-primary py-1"
                            >
                              {course.name}
                            </Link>
                          ))
                        : (item.dropdown as SubLink[]).map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className="block text-sm text-muted-foreground hover:text-primary py-1"
                            >
                              {sub.name}
                            </Link>
                          ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    key={i} 
                    href={item.href || "#"}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold border-b border-muted pb-2 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Fixed Icon */}
      <a
        href="https://wa.me/918750500075"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] bg-[#25D366] p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8 md:w-6 md:h-6"
        />
        {/* Tooltip on Hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md whitespace-nowrap pointer-events-none border border-gray-100">
          Chat with us!
        </span>
      </a>
            {/* Call Fixed Icon */}
     <a
  href="tel:+918750500075"
  className="fixed bottom-24 right-6 z-[999] bg-[#007BFF] p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center justify-center"
>
  <Phone className="w-8 h-8 md:w-6 md:h-6 text-white" />

  {/* Tooltip on Hover */}
  <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md whitespace-nowrap pointer-events-none border border-gray-100">
    Call us!
  </span>
</a>
    </>
  );
}