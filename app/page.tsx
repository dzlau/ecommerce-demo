import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import heroImg from '@/public/hero.jpg'
import { getHeroContent } from '@/lib/contentful'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { DemoSettings } from '@/lib/demoSettings'
import ProductCarousel from '@/components/ProductCarousel'
import { getProducts } from '@/lib/products'

import { draftMode } from 'next/headers'
import { SanityDocument } from "next-sanity"
import { sanityFetch, HERO_QUERY, PRODUCT_QUERY } from "@/lib/sanity"
import { MainHeaderContent } from '@/components/MainHeaderContent'
import { WelcomeHeader } from '@/components/WelcomeHeader'


export default function Home() {


  const showShippingFlag = false
  return (
    <>

      <Header />

      <main className="flex min-h-screen flex-col items-center bg-stone-100">


        <div className="flex flex-wrap min-w-full bg-[url('/hero.jpg')] bg-cover bg-top bg-no-repeat h-96">
          <div className="flex items-center min-w-full px-10" >
            <div className="mb-8">
              <p className="py-5 text-xl leading-normal text-white text-shadow  ">
                {DemoSettings.short_description}
              </p>
              <h1 className="text-4xl w-max font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
                {DemoSettings.name}
              </h1>
              <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl ">
                <MainHeaderContent />
              </p>
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row justify-start">
                <Link
                  href="/products"
                  className="px-8 py-4 text-md font-medium text-center text-white bg-green-600 rounded-md " >
                  Shop now!
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 w-full text-center items-center justify-center ">
          <Suspense fallback={<Skeleton className=" w-80 h-10 my-5 bg-gray-700" />} >
            <WelcomeHeader />
          </Suspense>
          <h1 className="md:text-2xl w-full font-semibold text-gray-800">Our latest products </h1>
          <div className="w- mt-10 justify-center flex">
            <ProductCarousel />
          </div>
        </div>
      </main >
    </>
  )
}
