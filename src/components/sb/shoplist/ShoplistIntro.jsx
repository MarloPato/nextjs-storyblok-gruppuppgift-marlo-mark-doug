import { storyblokEditable } from "@storyblok/react";

export default function ShoplistIntro({ blok }) {
  return (
    <div id="shoplist-intro" {...storyblokEditable(blok)} className="my-25">
      <h2 className="text-7xl mb-4">{blok.title}</h2>
      <p className="text-xl max-w-[700px]">{blok.subtitle}</p>
    </div>
  );
}
