import { storyblokEditable } from "@storyblok/react";

export default function ImageBanner({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full relative my-20"
      style={{ height: blok.height ? `${blok.height}px` : "300px" }}
    >
      <img className="w-full h-full object-cover" src={blok.banner?.filename} />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
}
