import Header from '@/components/Header'
import Image from 'next/image'
import { Product } from '@/lib/types'
import { getProduct } from '@/lib/products'
import { Button } from "@/components/ui/button"
import AddToCartButton from '@/components/AddToCartButton'
import { addToCartAction } from '@/lib/actions'
import { SanityDocument } from "next-sanity"
import { sanityFetch, HERO_QUERY, PRODUCT_QUERY } from "@/lib/sanity"
export default async function ProductPage(id: any) {
  const productsQuery = await sanityFetch<SanityDocument[]>({
    query: PRODUCT_QUERY,
  })
  const products = productsQuery.map((product: any) => { return { id: product._id, name: product.productName, imageurl: product.imageUrl, description: product.description, cost: product.price } })
  const product = products.find((product: Product) => product.id === id.params.id)

  return (
    <>
      <Header />

      <main className="justify-center flex bg-slate-100 min-h-screen">
        <div className="max-w-screen-lg mt-5 flex flex-row ">
          <div className="w-1/2 h-full p-6 justify-center">
            <Image src={product?.imageurl} alt={product?.name} width={400} height={600} />
          </div>
          <div className="w-1/2 h-full p-6">
            <p className="text-2xl">{product?.name}</p>
            <p className="text-1xl mt-3 mb-3">{product?.description}</p>
            <p className="text-4xl mt-6 mb-3 text-left text-slate-600">${product?.cost}</p>
            <AddToCartButton product={product} />
          </div>
        </div>

      </main>
    </>
  )
}
