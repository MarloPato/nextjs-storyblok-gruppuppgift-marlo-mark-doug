import { storyblokEditable } from "@storyblok/react";

export default function Mark({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      <h1 className="text-5xl text-center">{blok.text}</h1>
    </div>
  );
}
