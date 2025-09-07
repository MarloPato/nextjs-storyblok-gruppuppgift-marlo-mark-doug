import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const dynamic = "force-dynamic";

export default async function ShoplistPage() {
  const { data } = await fetchData();
  return (
    <div className="page shoplist-page w-[1200px] mx-auto max-w-[100%] pb-25">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/shoplist", {
    version: "published",
  });
}
