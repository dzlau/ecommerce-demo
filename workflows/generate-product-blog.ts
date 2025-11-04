import { findBestProduct, findTrendingProducts, generateBlogPost, publishBlogPost, rejectBlogPost } from "./steps";
import { defineHook } from 'workflow'


export const approvalHook = defineHook<{
    decision: 'approve' | 'reject'
    changes?: string
}>()


export async function generateProductBlog(description: string) {
    'use workflow'
    const products = await findTrendingProducts(description)
    const productForBlog = await findBestProduct(products)
    const blogPost = await generateBlogPost(productForBlog)
    //genrate a random uuid
    const events = approvalHook.create({
        token: `draft-223`
    })

    for await (const event of events) {
        if (event.decision === 'approve') {
            await publishBlogPost(blogPost)
            break
        } else if (event.decision === 'reject') {
            await rejectBlogPost(blogPost)
            break
        }
    }

}