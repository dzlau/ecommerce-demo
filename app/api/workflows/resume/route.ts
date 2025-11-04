// Resume the workflow when an approval is received
import { approvalHook } from "@/workflows/generate-product-blog";

export async function POST(req: Request) {
    'use server'
    const data = await req.json();
   
    await approvalHook.resume('draft-223', {
      decision: data.decision,
    });
   
    return new Response('OK');
  }