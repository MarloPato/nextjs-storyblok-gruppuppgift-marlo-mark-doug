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

// Header and Footer components
import Header from "@/components/sb/Header.js";
import Footer from "@/components/sb/footer/Footer.js";

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

  // Header and Footer
  header: Header,
  footer: Footer,
  // footer_column: FooterColumn,

  // Shoplist page
  shoplistIntro: ShoplistIntro,
  shoplistCategoryTabs: ShoplistCategoryTabs,
  shoplistProductList: ShoplistProductList,

  // Product page
  productPageTest: ProductPageTest,
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

/**
 * Fetch the configuration story from Storyblok
 * This should contain menu_links, footer_text, and footer_links
 */
export async function fetchConfig() {
  try {
    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get("cdn/stories/config", {
      version: "draft", // temporarily using draft to test
    });

    return data.story.content;
  } catch (error) {
    console.error("Error fetching config:", error);

    // Return fallback data if config story doesn't exist yet
    if (error.status === 404) {
      console.log("Config story not found - using fallback data");
      return {
        menu_links: [
          { label: "Home", link: { cached_url: "/" } },
          { label: "About", link: { cached_url: "/about" } },
        ],
        footer_text: "© 2024 Your Company. All rights reserved.",
        footer_links: [
          { label: "Privacy Policy", link: { cached_url: "/privacy" } },
          { label: "Terms of Service", link: { cached_url: "/terms" } },
        ],
      };
    }

    return null;
  }
}
});
