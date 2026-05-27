"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // /admin ya /dashboard dono ke liye admin view activate hoga
    const isadmin = pathname.startsWith("/admin") || pathname.startsWith("/dashboard");

    return (
        <>
            {/* Jab admin page NA HO tabhi normal header dikhega */}
            {!isadmin && <Header />}

            {/* isadmin true hone par 'flex w-full min-h-screen bg-gray-50' apply hoga.
              Ye class Shadcn sidebar ko aur aapke dashboard page ko aamne-saamne perfect stretch karegi.
            */}
            <main className={`flex-1 ${isadmin ? "flex w-full min-h-screen bg-gray-50" : ""}`}>
                {children}
            </main>

            {/* Jab admin page NA HO tabhi normal footer dikhega */}    
            {!isadmin && <Footer />}
        </>
    );
}