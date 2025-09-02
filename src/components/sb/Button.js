import { storyblokEditable } from "@storyblok/react";

export default function Button({ blok }) {
  return (
    <div className="text-center mt-6" {...storyblokEditable(blok)}>
      <a
        href={blok.cta_link}
        className="border border-black px-4 py-3 text-secondary inline-block w-[194px] h-[50px] text-center hover:bg-gray-600 hover:text-white duration-100"
      >
        {blok.cta_text}
      </a>
    </div>
  );
}
