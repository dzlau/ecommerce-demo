// import { openai } from '@ai-sdk/openai';
// import { StreamingTextResponse, streamText, StreamData, convertToCoreMessages, tool } from 'ai';
// import { z } from 'zod';
// import { createResource } from '@/lib/actions';
// import { findRelevantContent } from '@/lib/ai/embedding';
// import { vectordb } from "@/lib/db";
// // Allow streaming responses up to 30 seconds
// import { resources } from '@/lib/db/schema/resources';
// import { streamUI } from 'ai/rsc';
// import ChatShoppingBlock from '@/components/ChatShoppingBlock'
// import { eq, ne, gt, gte, ConsoleLogWriter } from "drizzle-orm";

import { convertToModelMessages, generateObject, generateText, streamText, UIMessage } from 'ai';
import { z } from 'zod';
import { tool } from 'ai';
import { generateProductBlog } from '@/workflows/generate-product-blog';
import { start } from 'workflow/api'






// Allow streaming responses up to 30 seconds
export const maxDuration = 30;


export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();
    const result = streamText({
        tools: {
            generateNewProduct: {
                description: 'Generate a new product blog post of a new item to sell',
                inputSchema: z.object({ description: z.string().describe('the description of the product idea') }),
                execute: async ({ description }: { description: any }) => {
                    const productBlog = await start(generateProductBlog, [description]);
                },
            },

        },
        model: 'openai/gpt-4.1',
        system: `You are a helpful assistant. You will either be helping the user think of new product ideas based on trending fashion trends and generating a blog post, 
        or you will be recommending a user a product from the catalog. 
        If the user is asking to generate a blog post, use tool generateNewProduct and reply to user that you are generating blog post
        If the user is asking to recommend a product, use tool recommendProduct`,
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}
// export async function POST(req: Request) {
//     const { messages } = await req.json();


// const result = await streamText({
//     model: openai('gpt-3.5-turbo'),
//     system: `You are a helpful assistant. Check your knowledge base before answering any questions.
//     Only respond to questions using information from tool calls.
//     if no relevant information is found in the tool calls, respond, just continue the conversation.
//     You will be mainly recommending products to our users based on the color of the product.`,
//     messages: convertToCoreMessages(messages),
//     tools: {
//         getInformation: tool({
//             description: `get information from your knowledge base to answer questions.`,
//             parameters: z.object({
//                 question: z.string().describe('the users question'),
//             }),
//             execute: async ({ question }: { question: any }) => {
//                 const data = await findRelevantContent(question)
//                 const resourceId = data[0].resourceId ? data[0].resourceId : ''
//                 const [resource] = await vectordb
//                     .select({ productName: resources.productName, price: resources.price, imageUrl: resources.imageUrl, productId: resources.productId })
//                     .from(resources)
//                     .where(eq(resources.id, resourceId))
//                 return `${resource.productName} is available for ${resource.price} and can be found at <a href="/products/${resource.productId}">here</a>`
//             }
//             ,
//         }),
//     },
// });


// return new Response('Hello, world!', { status: 200 });
//     // return result.toAIStreamResponse();
// }