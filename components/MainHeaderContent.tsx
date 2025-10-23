import { HERO_QUERY, sanityFetch } from "@/lib/sanity"
import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"
import { Suspense } from "react"
import { Skeleton } from "./ui/skeleton"

export async function MainHeaderContent() {
    const isDraftMode = (await draftMode()).isEnabled
    const hero = await sanityFetch<SanityDocument[]>({
      query: HERO_QUERY,
      perspective: isDraftMode ? "previewDrafts" : "published",
    })
    return (
        <Suspense fallback={<Skeleton className=" w-[400px] h-[20px] my-5   bg-slate-100" />} >
            {hero[0].value}
        </Suspense>
    )
}