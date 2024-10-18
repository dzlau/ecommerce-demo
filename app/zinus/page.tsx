import Image from 'next/image'
import { Star, Truck, Clock, Shield, DollarSign } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-red-600 text-white p-2 text-center">
                <p>Fall Savings Up to 40% off</p>
            </header>
            <nav className="bg-white border-b p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Image src="/placeholder.svg" alt="Zinus Logo" width={100} height={40} />
                    <div className="space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Mattresses</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Bedroom</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Living</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Sale</a>
                    </div>
                </div>
            </nav>
            <main className="flex-grow">
                <section className="bg-green-700 text-white py-12">
                    <div className="container mx-auto flex items-center justify-between">
                        <div className="max-w-lg">
                            <h1 className="text-4xl font-bold mb-4">Bring home the best in cool and cozy</h1>
                            <p className="mb-6">ULTRA COOL MATTRESSES STARTING AT $399</p>
                            <Button>SHOP NOW</Button>
                        </div>
                        <Image src="/placeholder.svg" alt="Mattress" width={500} height={300} className="rounded-lg" />
                    </div>
                </section>
                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Find your perfect mattress</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {['Ultra Cooling Green Tea', 'Cooling Green Tea', 'Original Green Tea'].map((name, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <Image src="/placeholder.svg" alt={name} width={300} height={200} className="mb-4 rounded" />
                                        <h3 className="text-xl font-semibold mb-2">{name}</h3>
                                        <div className="flex items-center mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            <span className="ml-2 text-sm text-gray-600">4.8 (1,234 reviews)</span>
                                        </div>
                                        <ul className="text-sm text-gray-600 mb-4">
                                            <li>Cooling gel infused memory foam</li>
                                            <li>Pressure relieving support</li>
                                            <li>10-year warranty</li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="bg-gray-50 p-6">
                                        <div className="w-full flex justify-between items-center">
                                            <span className="text-2xl font-bold">$399.00</span>
                                            <Button variant="outline">Shop Now</Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-12">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Why choose Zinus?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { icon: Truck, text: 'Free shipping with every order' },
                                { icon: Star, text: '2.5 Million 5-star reviews globally' },
                                { icon: Clock, text: '100-night trial on all mattresses' },
                                { icon: DollarSign, text: 'Financing available' },
                            ].map(({ icon: Icon, text }, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <Icon className="w-12 h-12 text-green-600 mb-4" />
                                    <p className="text-sm">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="bg-green-700 text-white py-12">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Which mattress is right for you?</h2>
                        <p className="mb-6">Take our quick quiz to find your perfect match</p>
                        <Button variant="secondary">Take our quiz</Button>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-100 py-8">
                <div className="container mx-auto text-center text-gray-600">
                    <p>&copy; 2023 Zinus. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}