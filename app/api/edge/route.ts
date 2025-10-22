import { fetchCartEdge } from "@/lib/cart";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const data = await fetchCartEdge()
    return NextResponse.json({ message: data }, { status: 200 });
}