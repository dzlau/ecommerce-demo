import Image from 'next/image'
import Link from 'next/link'
import { Search, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex items-center justify-between p-4 border-b">
                <Image src="/placeholder.svg" alt="Turo logo" width={80} height={40} />
                <Button>Become a host</Button>
            </header>

            <main className="flex-grow">
                <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=500&width=1200')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                        <h1 className="text-5xl font-bold mb-4">Skip the rental car counter</h1>
                        <p className="text-xl mb-8">Rent just about any car, just about anywhere</p>
                        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg">
                            <Input type="text" placeholder="City, airport, address or hotel" className="w-64 text-black" />
                            <div className="flex items-center border rounded-md">
                                <Input type="date" className="border-none text-black" />
                                <Input type="time" className="border-none text-black" />
                            </div>
                            <div className="flex items-center border rounded-md">
                                <Input type="date" className="border-none text-black" />
                                <Input type="time" className="border-none text-black" />
                            </div>
                            <Button variant="default">
                                <Search className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto my-12">
                    <h2 className="text-2xl font-semibold mb-6">Car rental for any occasion</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                                <Image src="/placeholder.svg" alt={`Car ${i + 1}`} width={200} height={200} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <Button className="mt-6">Explore cars</Button>
                </section>

                <section className="container mx-auto my-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold">Browse by make</h2>
                        <div className="flex space-x-2">
                            <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
                            <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {['Jeep', 'Tesla', 'Subaru', 'Porsche', 'BMW'].map((make) => (
                            <div key={make} className="flex flex-col items-center justify-center p-4 border rounded-lg">
                                <Image src="/placeholder.svg" alt={make} width={60} height={60} className="mb-2" />
                                <span>{make}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="container mx-auto my-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold">Browse by local car rental destination</h2>
                        <div className="flex space-x-2">
                            <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
                            <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Halifax', 'Quebec City'].map((city) => (
                            <div key={city} className="p-4 border rounded-lg">
                                <h3 className="font-semibold">Car rental {city}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="container mx-auto my-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold">Browse by international car rental destination</h2>
                        <div className="flex space-x-2">
                            <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
                            <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {['Honolulu', 'San Francisco', 'Orlando', 'London', 'Los Angeles', 'Miami'].map((city) => (
                            <div key={city} className="p-4 border rounded-lg">
                                <h3 className="font-semibold">Car rental {city}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="container mx-auto my-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Fuel your daydreams</h2>
                    <p className="mb-6">Travel stories, news, and inspiration to stoke your wanderlust</p>
                    <Button>Explore the Turo blog</Button>
                </section>

                <section className="container mx-auto my-12">
                    <div className="bg-gray-900 text-white p-8 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">FEATURED ARTICLE</h3>
                        <h2 className="text-3xl font-bold mb-4">Pitch a Trip: Turo x CABINSCAPE</h2>
                        <Button variant="outline">Read more</Button>
                    </div>
                </section>

                <section className="container mx-auto my-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Meet the hosts</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                        <div className="flex flex-col items-center text-center max-w-sm">
                            <div className="w-48 h-48 bg-purple-100 rounded-full mb-4 flex items-center justify-center">
                                <Image src="/placeholder.svg" alt="Rent a car" width={100} height={100} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Rent a car</h3>
                            <p>Book the perfect car for your next adventure from our trusted community of local hosts.</p>
                        </div>
                        <div className="flex flex-col items-center text-center max-w-sm">
                            <div className="w-48 h-48 bg-purple-100 rounded-full mb-4 flex items-center justify-center">
                                <Image src="/placeholder.svg" alt="Become a host" width={100} height={100} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Become a host</h3>
                            <p>Accelerate your entrepreneurship and start building a small car sharing business on Turo.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-12">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-semibold mb-4">Vehicle types</h3>
                        <ul className="space-y-2">
                            <li><Link href="#">Car rental</Link></li>
                            <li><Link href="#">Truck rental</Link></li>
                            <li><Link href="#">SUV rental</Link></li>
                            <li><Link href="#">Van rental</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Makes</h3>
                        <ul className="space-y-2">
                            <li><Link href="#">Tesla rental</Link></li>
                            <li><Link href="#">Mercedes-Benz rental</Link></li>
                            <li><Link href="#">BMW rental</Link></li>
                            <li><Link href="#">Toyota rental</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}