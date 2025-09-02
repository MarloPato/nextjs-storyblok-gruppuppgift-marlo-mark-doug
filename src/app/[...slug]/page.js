//Example of a dynamic page ex
// about-us, blog/post-title, contact-us, etc.

import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  try {
    //Array of slug parts ex ['blog', 'post-title']
    const { slug } = await params;
    const data = await fetchData(slug);
    //TODO: Replace with StoryblokStory component and add a fallback component
    if(data?.data?.story?.content?.component === "config"){
      throw new Error("CONFIG_ERROR");
    }
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}

export async function fetchData(slug) {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/${slug.join("/")}`, {
    version: "draft",
  });
}
