import { storyblokEditable } from "@storyblok/react";

export default function ImageBanner({ blok }) {
  console.log("file: ", blok.image_banner?.filename);
  return (
    <div
      {...storyblokEditable(blok)}
      className={`w-full relative mb-20`}
      style={{ height: blok.height ? `${blok.height}px` : "300px" }}
    >
      <img className="w-full h-full object-cover" src={blok.banner?.filename} />
    </div>
  );
}
