import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function Hero3({ blok }) {
  // Try multiple possible image fields, prioritize multi_images since it was working
  const productImages = blok.product_images || [];
  const multiImages = blok.multi_images || [];
  const imagesField = blok.images || [];

  // Use multi_images if it has content, otherwise try product_images, then images
  const images =
    multiImages.length > 0
      ? multiImages
      : productImages.length > 0
      ? productImages
      : imagesField;

  return (
    <div
      {...storyblokEditable(blok)}
      className="relative w-full flex flex-col my-10"
    >
      <div className="relative">
        <div className="md:h-[70vh] flex gap-12 justify-center max-md:flex-col max-md:gap-6">
          {images.map((item, idx) => {
            // Handle different data structures
            const imageSrc = item.image?.filename || item.filename;
            const imageAlt = item.image?.alt || item.alt || "";
            const productUid = item.product_uid || item.id || `product-${idx}`;

            // Styling for different positions
            let positionClass = "";
            if (images.length === 3) {
              if (idx === 0) positionClass = "md:self-end";
              else if (idx === 1) positionClass = "md:self-start md:mt-[-4rem]";
              else if (idx === 2) positionClass = "md:self-end";
            } else {
              positionClass = idx % 2 === 1 ? "md:self-start" : "md:self-end";
            }

            return (
              <Link
                key={item._uid || item.id || idx}
                href={`/product/${productUid}`}
                className="block transition-transform hover:scale-105"
              >
                <img
                  className={`w-[20rem] h-[80%] object-cover cursor-pointer max-md:w-full max-md:h-auto max-md:max-w-sm max-md:mx-auto ${positionClass}`}
                  src={imageSrc}
                  alt={imageAlt}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
