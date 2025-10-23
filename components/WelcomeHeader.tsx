import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

export async function WelcomeHeader() { 
const name : string = await new Promise((resolve) => 
    setTimeout(() => 
    {
        const names= ['Johnny Cash', 'Taylor Swift', 'John Doe', 'John Smith', 'John Johnson', 'John Doe', 'John Smith', 'John Johnson'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        resolve(randomName);
    }
        , 4000));
return (
        <h1 className="md:text-2xl w-full font-semi text-gray-800">
            Welcome back {name}
        </h1>
)
}