import { storyblokEditable } from "@storyblok/react";

export default function Hero3({ blok }) {
  console.log("the picture is", blok.images);

  return (
    <div
      {...storyblokEditable(blok)}
      className="relative w-[20rem] border border-black/90"
    >
      <h1>{blok.title}</h1>
      <img className="w-full" src={blok.images?.filename} />
      {/* {blok.images.map((img) => (
        <img className="w-full" src={img?.filename} />
      ))} */}
    </div>
  );
}
