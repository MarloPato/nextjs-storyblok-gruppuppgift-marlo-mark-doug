import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

//Example of a static page
export default async function Home() {
  const { data } = await fetchData();
  return (
    <div className="page flex-flex-col items-center">
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
}
