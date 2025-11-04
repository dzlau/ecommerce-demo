import Header from "@/components/Header"
import HelpChat from "@/components/HelpChat";
import { Suspense } from "react";

export default function HelpPage() {
    

    return (
        <>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
            <HelpChat />
        </Suspense>
        </>
    )
}