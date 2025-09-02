import { storyblokEditable } from "@storyblok/react";

export default function Image({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="w-[100%] flex justify-center">
      <img
        className="w-full md:w-[90%] mb-12 text-center"
        src={blok.image?.filename}
      />
    </div>
  );
}
