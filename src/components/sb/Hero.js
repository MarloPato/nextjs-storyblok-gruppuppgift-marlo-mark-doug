import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
  console.log(blok.background_image);
  console.log("HERO", blok);

  let heroClasses = `h-[100vh] bg-gray-100/90 flex flex-col justify-center items-center gap-12`;

  console.log(blok.background_image?.filename);

  return (
    <div {...storyblokEditable(blok)} className={heroClasses}>
      <h1 className="text-5xl text-center font-extrabold text-black">
        {blok.title}
      </h1>
      <h3 className="text-gray-500/80 text-[28px] text-center w-[70%]">
        {blok.subtitle}
      </h3>
      {blok.content && (
        <h4 className="w-[80%] text-center text-foreground">{blok.content}</h4>
      )}
      <a
        href={blok.cta_link}
        className="border border-black px-4 py-3 text-secondary inline-block w-[194px] h-[50px] text-center"
      >
        {blok.cta_text}
      </a>
    </div>
  );
}
