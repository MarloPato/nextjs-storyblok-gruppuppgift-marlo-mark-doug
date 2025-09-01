import { storyblokEditable } from "@storyblok/react";

export default function Teaser({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="teaser shadow-md p-4 rounded-md bg-white border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-center">{blok.headline}</h2>
      <p className="text-gray-600">{blok.description}</p>
    </div>
  );
}
