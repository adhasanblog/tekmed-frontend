import { ReactNode } from "react";
import Image from "next/image";
import {Footer} from "@/ui/footer";
import {Header} from "@/ui/header";
import {Breadcrumb} from "@/ui/breadcrumb";

// Layout untuk single product
export default function ProductLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
                    {children}
            </main>
            <Footer/>
        </div>
);
}