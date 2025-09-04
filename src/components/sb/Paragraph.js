import { storyblokEditable } from "@storyblok/react";

export default function Paragraph({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="flex flex-col items-center">
      <p className="text-start mb-5 w-[65%] font-normal paragraph">
        {blok.content}
      </p>
    </div>
  );
}
