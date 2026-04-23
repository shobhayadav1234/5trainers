"use client";

import { useState } from "react";
import Link from "next/link";
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
      { name: "Software Testing",href: "/courses/software-testing"},
      { name: "Web Development",href: "/courses/web-development" },
      { name: "Digital Marketing" ,href: "/courses/digital-marketing" },
      { name: "Pythons", href: "/courses/pythons" },
      { name: "Cyber Security", href: "/courses/cyber-security" },
      { name: "UI/UX Design", href: "/courses/ui-ux" },
      { name: "Graphic Design", href: "/courses/graphic-design" },
      { name: "DevOps", href: "/courses/devops" },
      { name: "Cloud Computing", href: "/courses/cloud-computing" },
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
  <nav className="flex justify-center border-b bg-background">
    <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-6 py-4">

      {/* LOGO */}
      <img src="/logo.png" alt="logo" className="h-12 md:h-14 w-auto" />

      {/* DESKTOP MENU */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">

            {navbarLinks.map((item, i) =>
              item.dropdown ? (
                <NavigationMenuItem key={i}>

                  {/* ✅ FIX: Software Testing clickable */}
                  {item.name === "Software Testing" ? (
                    <Link href={item.href || "#"}>
                      <NavigationMenuTrigger>
                        {item.name}
                      </NavigationMenuTrigger>
                    </Link>
                  ) : (
                    <NavigationMenuTrigger>
                      {item.name}
                    </NavigationMenuTrigger>
                  )}

                  {/* DROPDOWN */}
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[350px] max-h-[400px] overflow-y-auto">

                      {item.name === "Courses"
                        ? (item.dropdown as CourseItem[]).map((course, idx) =>
                            course.sub ? (
                              <div key={idx}>
                                <p className="text-sm font-semibold">
                                  {course.name}
                                </p>

                                <div className="ml-3 mt-1 space-y-1 max-h-[200px] overflow-y-auto">
                                  {course.sub.map((sub, subIdx) => (
                                    <NavigationMenuLink asChild key={subIdx}>
                                      <Link
                                        href={sub.href}
                                        className="block text-sm text-muted-foreground hover:text-primary"
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
                                  className="text-sm hover:text-primary"
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
                                className="text-sm hover:text-primary"
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
                    <Link href={item.href || "#"}>
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
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </div>

    {/* MOBILE MENU */}
    {open && (
      <div className="md:hidden w-full border-t bg-background px-4 pb-4">
        <div className="flex flex-col gap-3 mt-4">

          {navbarLinks.map((item, i) =>
            item.dropdown ? (
              <div key={i}>
                <p className="font-semibold">{item.name}</p>

                <div className="ml-3 mt-1 space-y-1">

                  {item.name === "Courses"
                    ? (item.dropdown as CourseItem[]).map((course, idx) =>
                        course.sub ? (
                          <div key={idx}>
                            <p className="text-sm font-medium">
                              {course.name}
                            </p>

                            <div className="ml-3 space-y-1">
                              {course.sub.map((sub, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={sub.href}
                                  className="block text-sm text-muted-foreground"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={idx}
                            href={course.href || "#"}
                            className="block text-sm"
                          >
                            {course.name}
                          </Link>
                        )
                      )
                    : (item.dropdown as SubLink[]).map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          className="block text-sm"
                        >
                          {sub.name}
                        </Link>
                      ))}

                </div>
              </div>
            ) : (
              <Link key={i} href={item.href || "#"}>
                {item.name}
              </Link>
            )
          )}

        </div>
      </div>
    )}

  </nav>
)
}