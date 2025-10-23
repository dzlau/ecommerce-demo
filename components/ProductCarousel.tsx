"use cache"
import ShoppingBlock from '@/components/ShoppingBlock'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { draftMode } from 'next/headers'
import ShoppingCarouselBlock from './ShoppingCarouselBlock'
import { PRODUCT_QUERY, sanityFetch } from '@/lib/sanity'
import { SanityDocument } from 'next-sanity'
import { Suspense } from 'react'
import { Skeleton } from './ui/skeleton'
export default async function ShoppingGrid() {
  const isDraftMode = (await draftMode()).isEnabled

    const productsQuery = await sanityFetch<SanityDocument[]>({
        query: PRODUCT_QUERY, 
        perspective: isDraftMode ? "previewDrafts" : "published",
      })
      const products = productsQuery.map((product: any) => { return { id: product._id, name: product.productName, imageurl: product.imageUrl, description: product.description, cost: product.price } })
    return (
        <Suspense fallback={<Skeleton className=" w-[400px] h-[20px] my-5   bg-slate-100" />} > 
            <Carousel className='w-2/3 '>
                <CarouselContent>
                    {
                        products.map(product => (
                            <div key={product.id}>
                                <CarouselItem className="basis-1/3" >
                                    <ShoppingCarouselBlock {...product} />
                                </CarouselItem>
                            </div>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Suspense>
    )
}