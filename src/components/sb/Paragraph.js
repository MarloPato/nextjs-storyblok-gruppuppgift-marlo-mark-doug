import { storyblokEditable } from "@storyblok/react";

export default function Paragraph({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="flex flex-col items-center">
      <p className="text-center mb-5 w-[70%] font-sans">{blok.content}</p>
    </div>
  );
}
