import { getStoryblokApi } from "../lib/storyblok.js";
import SETTINGS from "@/settings";

async function fetchProducts() {
  const storyblokApi = getStoryblokApi();
  const story = await storyblokApi.get("cdn/stories/shoplist", {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "published",
  });
  const blocks = story?.data?.story?.content?.body;
  const productList = blocks?.find(
    (b) => b.component === "shoplistProductList"
  );

  return productList.products;
}

const products = await fetchProducts();

export default function sitemap() {
  return [
    {
      url: `${SETTINGS.SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SETTINGS.SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SETTINGS.SITE_URL}/shoplist`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...products.map((p) => ({
      url: `${SETTINGS.SITE_URL}/product/${p._uid}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    })),
  ];
}
