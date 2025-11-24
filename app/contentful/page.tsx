import Header from '@/components/Header'
import { getHeroContent } from '@/lib/contentful'
import { CONNREFUSED } from 'dns'
import { draftMode } from 'next/headers'


export default async function ContentfulPage() {
    const isDraftMode = (await draftMode()).isEnabled
    const heroContent = await getHeroContent(isDraftMode)

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center bg-stone-100">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-center my-10">{heroContent}</h1>

                </div>
                <p>Contentful link for Contentful requires a premium plan, watch full flow here: <a href='https://www.contentful.com/developers/docs/tools/vercel/content-source-maps-with-vercel/' target='_blank' rel='noopener noreferrer'>https://www.contentful.com/developers/docs/tools/vercel/content-source-maps-with-vercel/</a></p>
            </main>

        </>
    )
}


