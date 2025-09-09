import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { ProductProvider } from "../../../components/sb/productPage/ProductContext.jsx";

export const dynamic = "force-dynamic";

export default async function ShoplistPage({ params }) {
  const { _uid } = await params;
  const { data } = await fetchData();
  const product = await fetchProduct(_uid);

  return (
    <ProductProvider product={product}>
      <div className="page shoplist-page w-[1200px] mx-auto max-w-[100%]">
        <StoryblokStory story={data.story} context={{ _uid }} />
      </div>
    </ProductProvider>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/product", {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "published",
  });
}

export async function fetchProduct(_uid) {
  const storyblokApi = getStoryblokApi();
  const story = await storyblokApi.get("cdn/stories/shoplist", {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "published",
  });

  const blocks = story?.data?.story?.content?.body;
  const productList = blocks?.find(
    (b) => b.component === "shoplistProductList"
  );

  return productList?.products?.find((p) => p._uid === _uid);
}
