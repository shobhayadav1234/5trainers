"use client";
import Image from "next/image";
import Link from "next/link";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Briefcase,
    Settings,
    LogOut,
    ChevronDown,
} from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-[260px] bg-black text-white min-h-screen p-5 fixed left-0 top-0 ml-12">

            {/* Logo */}
            <div className="mb-10 flex flex-col items-center">

                <Image
                    src="/mind.png"
                    alt="Mindweave Logo"
                    width={140}
                    height={60}
                    className="object-contain"
                />
            </div>

            {/* Menu */}
            <div className="space-y-3">

                <Link
                    href="/admin"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#20c9b0] text-black font-semibold"
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </Link>

                <Link    
                    href="/admin/courses"
                    className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                    <div className="flex items-center gap-3">
                        <BookOpen size={20} />
                        Courses
                    </div>

                    <ChevronDown size={16} />
                </Link>

                <Link
                    href="/placement"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                    <Briefcase size={20} />
                    Placement
                </Link>

                <Link
                    href="/students"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                    <Users size={20} />
                    Students
                </Link>

                <Link
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                    <Settings size={20} />
                    Settings
                </Link>
            </div>

            {/* Logout */}
            <div className="absolute bottom-10 left-5 right-5">
                <button className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 transition py-3 rounded-lg font-semibold">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </div>
    );
}