import { Sun, ShoppingBag } from "lucide-react"

export default function SummerSaleBanner() {
    return (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Sun className="h-6 w-6 text-yellow-200" />
                    <h2 className="text-2xl font-bold">Summer Sale!</h2>
                </div>
                <p className="text-lg">Up to 50% off on selected items</p>
                <button className="bg-white text-orange-500 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-orange-100 transition duration-300">
                    <ShoppingBag className="h-5 w-5" />
                    <span>Shop Now</span>
                </button>
            </div>
        </div>
    )
}