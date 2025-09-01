import { storyblokEditable } from "@storyblok/react";

export default function ShoplistIntro({ blok }) {


  return (
    <div
        id="shoplist-intro"
      {...storyblokEditable(blok)}
    >
      <h2 className="text-4xl">{blok.title}</h2>
      <p>{blok.subtitle}</p>
    </div>
  );
}
