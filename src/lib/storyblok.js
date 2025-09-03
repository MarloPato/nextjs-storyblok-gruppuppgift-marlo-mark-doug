import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/sb/Page";
import Teaser from "@/components/sb/Teaser";
import Feature from "@/components/sb/Feature";
import Grid from "@/components/sb/Grid";
import DoesNotExist from "@/components/sb/DoesNotExist";
import Hero from "@/components/sb/Hero";
import Button from "@/components/sb/Button.js";
import Image from "@/components/sb/Image.js";
import ImageBanner from "@/components/sb/ImageBanner.js";
import Hero3 from "@/components/sb/Hero3.js";

// Shoplist page
import ShoplistIntro from "../components/sb/shoplist/ShoplistIntro.jsx";
import ShoplistCategoryTabs from "../components/sb/shoplist/ShoplistCategoryTabs.jsx";
import ShoplistProductList from "../components/sb/shoplist/ShoplistProductList.jsx";

// Product page
import ProductPageTest from "../components/sb/productPage/ProductPageTest.jsx";
import Paragraph from "@/components/sb/Paragraph.js";

export const components = {
  // Add your components here
  page: Page,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  hero: Hero,
  doesNotExist: DoesNotExist,
  paragraph: Paragraph,
  button: Button,
  image: Image,
  image_banner: ImageBanner,
  hero3: Hero3,

  // Shoplist page
  shoplistIntro: ShoplistIntro,
  shoplistCategoryTabs: ShoplistCategoryTabs,
  shoplistProductList: ShoplistProductList,

  // Product page
  productPageTest: ProductPageTest,
};

/**
 * Get the Storyblok API exports a StoryblokApi object to be used in the application
 * @returns {StoryblokApi}
 */
export const getStoryblokApi = storyblokInit({
  accessToken:
    process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});
