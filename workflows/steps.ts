import { generateObject, generateText } from "ai";
import z from "zod";

export async function findTrendingProducts(description: string) {
    'use step'
    const { object } = await generateObject({
        model: "openai/gpt-4.1",
        prompt: `Search the web for the top trending fashion trends with the following description: ${description} and return return them as a list of products`,
        system: `Only find the coolest products. Genereate a short description to be used as a headline for the blog post`,
        schema: z.object({
            products: z.array(z.object({
                name: z.string(),
                description: z.string(),
            })),
        }),

    });
    return object;
}

export async function findBestProduct(products: any) {
    'use step'
    const { object } = await generateObject({
        model: "openai/gpt-4.1",
        prompt: `Find the best product from the following list: ${JSON.stringify(products)}`,
        system: `You are helpful assistant that will take a look at a list of products and evaluate 
        which product we will use for a blog post. You will need to evaluate the product based on the following criteria:
        - The product should be trending
        - The product should be in the top 100 products on the market
        - The product should be a new product
        - The product should have viral potential
        - The product should be a product that is not already in the blog post
        `,
        schema: z.object({
            product: z.string(),
        }),
    });
    console.log(object);
    return object;
}

export async function generateBlogPost(product: any) {
    'use step'
    console.log(product.product);
    const {text} = await generateText({
        model: "openai/gpt-4.1",
        prompt: `Generate a blog post for the following product: ${product.product}`,
        system: `You are a helpful assistant that will generate a blog post for a new product to sell
        The blog post should be around 1000 words long and start with a cool headline
        The text must be in markdown format`,
    });
    console.log('generating blog')
    console.log(text);
    return text;
}

export async function publishBlogPost(blogPost: any) {
    'use step'
    return "Blog post posted to CMS";
    
}

export async function rejectBlogPost(blogPost: any) {
    'use step'

    return "Blog post rejected";
}