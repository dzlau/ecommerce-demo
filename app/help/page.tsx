import HelpChat from "@/components/HelpChat";
import { Suspense } from "react";

export default function HelpPage() {
    

    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <HelpChat />
        </Suspense>
        </>
    )
}