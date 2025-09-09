import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export const dynamic = "force-dynamic";

/**
 * Home page - renders the Storyblok story through which all components are rendered
 * @returns {Promise<{story: StoryblokStory}>}
 */
export default async function Home() {
  const { data } = await fetchData();
  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}

/**
 * Fetch the data from Storyblok through a server action
 * @returns {Promise<{story: StoryblokStory}>}
 */
export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/home", {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "published",
  });
}
