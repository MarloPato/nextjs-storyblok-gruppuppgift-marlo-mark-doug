import { getStoryblokApi } from "../lib/storyblok.js";
const URL = "https://nextjs-storyblok-gruppuppgift-marlo.vercel.app"


async function fetchProducts() {
    const storyblokApi = getStoryblokApi();
    const story = await storyblokApi.get("cdn/stories/shoplist", {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "published",
    });
    const blocks = story?.data?.story?.content?.body;
    const productList = blocks?.find(
    (b) => b.component === "shoplistProductList"
    );

    return productList.products
}

const products = await fetchProducts()

export default function sitemap() {

    console.log(products.length)

    return [
        {
            url: `${URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${URL}/shoplist`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        ...products.map(p => ({
            url: `${URL}/product/${p._uid}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.6
        }))
    ]
}