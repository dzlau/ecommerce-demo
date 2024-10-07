import { Star, Truck, Shield, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MattressLanding() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <Image
                                alt="Luxurious mattress in a bedroom setting"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="550"
                                src="/placeholder.svg?height=550&width=1000"
                                width="1000"
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Sleep Like Royalty
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Experience the ultimate comfort with our premium mattresses. Designed for perfect sleep, every night.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Shop Now
                                    </Link>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Why Choose DreamSleep?</h2>
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <Star className="h-12 w-12 mb-4 text-yellow-400" />
                                <h3 className="text-xl font-bold">Premium Quality</h3>
                                <p className="text-gray-500 mt-2">Crafted with the finest materials for unparalleled comfort.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Truck className="h-12 w-12 mb-4 text-blue-500" />
                                <h3 className="text-xl font-bold">Free Delivery</h3>
                                <p className="text-gray-500 mt-2">Enjoy free shipping on all orders, right to your doorstep.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Shield className="h-12 w-12 mb-4 text-green-500" />
                                <h3 className="text-xl font-bold">10-Year Warranty</h3>
                                <p className="text-gray-500 mt-2">Rest easy with our comprehensive 10-year warranty.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Best Sellers</h2>
                        <div className="grid gap-6 lg:grid-cols-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="rounded-lg border bg-white text-gray-950 shadow-sm">
                                    <Image
                                        alt={`Mattress ${i}`}
                                        className="aspect-[4/3] overflow-hidden rounded-t-lg object-cover"
                                        height="300"
                                        src={`/placeholder.svg?height=300&width=400&text=Mattress+${i}`}
                                        width="400"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">Comfort Plus Mattress</h3>
                                        <p className="text-sm text-gray-500 mt-2">The perfect balance of comfort and support.</p>
                                        <div className="mt-4 flex items-center">
                                            <span className="text-2xl font-bold">$999</span>
                                            <Link
                                                className="ml-auto inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                                href="#"
                                            >
                                                Buy Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">What Our Customers Say</h2>
                        <div className="grid gap-6 lg:grid-cols-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="rounded-lg border bg-gray-100 p-6">
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            alt={`Customer ${i}`}
                                            className="rounded-full"
                                            height="40"
                                            src={`/placeholder.svg?height=40&width=40&text=Customer+${i}`}
                                            style={{
                                                aspectRatio: "40/40",
                                                objectFit: "cover",
                                            }}
                                            width="40"
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold">John Doe</h3>
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, index) => (
                                                    <Star key={index} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-gray-500">
                                        &quot;I&apos;ve never slept better! This mattress is a game-changer. Highly recommended!&quot;
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-50">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready for the Best Sleep of Your Life?</h2>
                                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Try our mattresses risk-free for 100 nights. If you&apos;re not completely satisfied, we&apos;ll give you a full refund.
                                </p>
                            </div>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                                href="#"
                            >
                                Shop Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 DreamSleep Inc. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}