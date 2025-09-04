import { storyblokEditable } from "@storyblok/react";

export default function Hero3({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative w-full flex flex-col mb-20"
    >
      <div className="relative">
        <div className="md:h-[60vh] flex gap-12 justify-center max-md:flex-col">
          {blok.multi_images?.map((img, idx) => (
            <img
              key={img.id}
              className={
                "w-[20rem h-[80%] " +
                (idx % 2 === 1 ? "md:self-start" : "md:self-end")
              }
              src={img.filename}
              alt={img.alt || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
