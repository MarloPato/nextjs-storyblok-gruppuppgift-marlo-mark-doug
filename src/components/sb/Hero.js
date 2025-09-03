import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
  let heroClasses = `min-h-screen bg-gray-100/90 flex flex-col justify-center items-center gap-10 `;
  console.log("LINK?", blok.cta_link.cached_url);

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-col justify-center items-center gap-10 mt-20"
    >
      <div className="flex flex-col items-center gap-8 mt-12 mb-12 w-[75%]">
        <h1 className="text-6xl text-center font-normal text-black">
          {blok.title}
        </h1>
        {blok.subtitle ?? (
          <h3 className="text-gray-500/80 text-[28px] text-center w-[70%]">
            {blok.subtitle}
          </h3>
        )}
        {/* {blok.content ? (
          <h4 className="w-[80%] text-center text-foreground">
            {blok.content}
          </h4>
        ) : (
          ""
        )} */}
        {blok.cta_text && blok.cta_link && (
          <div className="text-center mt-6">
            <a
              href={blok.cta_link?.cached_url}
              className="border border-black px-4 py-3 text-secondary inline-block w-[194px] h-[50px] text-center hover:bg-gray-600 hover:text-white duration-100"
            >
              {blok.cta_text}
            </a>
          </div>
        )}
        {blok.background_image?.filename && (
          <img
            src={blok.background_image.filename}
            className="w-full md:w-[90%] mb-12"
          />
        )}
      </div>
    </div>
  );
}
