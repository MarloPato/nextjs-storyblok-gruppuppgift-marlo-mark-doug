import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const dynamic = "force-dynamic";

export default async function Mark() {
  const { data } = await fetchData();
  return (
    <div className="page flex-flex-col items-center">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/mark", {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "published",
  });
}
