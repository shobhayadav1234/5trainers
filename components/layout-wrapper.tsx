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

    const isadmin = pathname.startsWith("/admin");

    return (
        <>
            {!isadmin && <Header />}

            <main className="flex-1">
                {children}
            </main>

            {!isadmin && <Footer />}
        </>
    );
}