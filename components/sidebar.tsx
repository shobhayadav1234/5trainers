"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    Briefcase,
    Search,
    MoreHorizontal,
} from "lucide-react";

export function AppSidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Courses", href: "/admin/courses", icon: BookOpen },
        { name: "Blogs", href: "/admin/blogs", icon: FileText },
        { name: "Placements", href: "/admin/placements", icon: Briefcase },
    ];

    return (
        <Sidebar className="w-[240px] border-r border-zinc-800/80 bg-zinc-950 text-zinc-200">
            {/* Header Area */}
            <SidebarHeader className="border-b border-zinc-900 p-4 bg-zinc-950">
                <div className="flex items-center gap-3 px-1">
                    {/* Brand Logo Container */}
                    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden">
                        <img
                            src="/mind.png"
                            alt="Mindweave Academy"
                            className="h-full w-full object-contain p-1"
                            onError={(e) => {
                                // Fallback avatar text if image path isn't loaded correctly
                                (e.target as HTMLElement).style.display = "none";
                            }}
                        />
                    </div>

                    <div className="flex flex-col min-w-0 text-left">
                        <h2 className="text-sm font-bold text-zinc-50 truncate leading-none">
                            Mindweave Academy
                        </h2>
                        <span className="text-[11px] font-medium text-zinc-500 mt-1">
                            Admin Panel
                        </span>
                    </div>
                </div>

                {/* Search Bar Input Control */}
                <div className="relative mt-4 px-0.5">
                    <Search
                        size={15}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-lg border border-zinc-800/80 bg-zinc-900/60 py-1.5 pl-9 pr-3 text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all duration-150"
                    />
                </div>
            </SidebarHeader>

            {/* Menu Items Content Body */}
            <SidebarContent className="px-3 py-3 bg-zinc-950">
                <SidebarMenu className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton asChild>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium transition-all duration-200 group relative ${isActive
                                            ? "bg-white text-zinc-950 font-semibold shadow-md shadow-black/10"
                                            : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                                            }`}
                                    >
                                        <Icon
                                            size={16}
                                            className={`transition-colors shrink-0 ${isActive ? "text-zinc-950" : "text-zinc-400 group-hover:text-zinc-200"
                                                }`}
                                        />
                                        <span className="truncate">{item.name}</span>

                                        {/* Optional Left border indicator for Active link */}
                                        {isActive && (
                                            <span className="absolute left-1 w-1 h-4 bg-zinc-950 rounded-full" />
                                        )}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarContent>

            {/* Footer Workspace Profile Trigger */}
            <SidebarFooter className="border-t border-zinc-900 p-3.5 bg-zinc-950">
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900/50 border border-zinc-900/60 p-2 hover:bg-zinc-900 transition-all duration-200 cursor-pointer group">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 font-bold text-zinc-200 text-xs shadow-inner">
                        S
                    </div>

                    <div className="flex-1 overflow-hidden text-left">
                        <p className="truncate text-xs font-bold text-zinc-100 leading-none">
                            Shobha Yadav
                        </p>
                        <p className="truncate text-[10px] font-medium text-zinc-500 mt-1">
                            Administrator
                        </p>
                    </div>

                    <MoreHorizontal
                        size={15}
                        className="text-zinc-500 group-hover:text-zinc-300 transition-colors shrink-0"
                    />
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}