import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { ProductProvider } from "../../../components/sb/productPage/ProductContext.jsx";

export default async function ShoplistPage({ params }) {
  const { _uid } = await params;
  const { data } = await fetchData();
  const product = await fetchProduct(_uid);

  return (
    <ProductProvider product={product}>
      <div className="page shoplist-page w-[1200px] mx-auto max-w-[100%] pb-25">
        <StoryblokStory story={data.story} context={{ _uid }} />
      </div>
    </ProductProvider>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/product", {
    version: "draft",
  });
}

export async function fetchProduct(_uid) {
  const storyblokApi = getStoryblokApi();
  const story = await storyblokApi.get("cdn/stories/shoplist", {
    version: "draft",
  });

  const blocks = story?.data?.story?.content?.body;
  const productList = blocks?.find(
    (b) => b.component === "shoplistProductList"
  );

  return productList?.products?.find((p) => p._uid === _uid);
}
