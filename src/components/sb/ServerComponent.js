import { components } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import DoesNotExist from "./DoesNotExist";

export default function ServerComponent({ blok }) {
  const Component = components[blok.component];
  if (!Component) {
    return <DoesNotExist blok={blok} />;
  }
  return <StoryblokServerComponent blok={blok} />;
}
