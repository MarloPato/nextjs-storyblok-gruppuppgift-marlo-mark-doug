import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
  console.log("HERO", blok);

  let heroClasses = `h-[100vh] bg-gray-100/90 flex flex-col justify-center items-center gap-12`;

  console.log(blok.background_image?.filename);

  return (
    <div
      {...storyblokEditable(blok)}
      className={heroClasses}
      style={{
        backgroundImage: `url(${blok?.background_image?.filename})`,
      }}
    >
      <h1 className="text-5xl text-center font-bold text-black">
        {blok.title}
      </h1>
      <h4 className="w-[80%] text-center">{blok.description}</h4>
    </div>
  );
}
