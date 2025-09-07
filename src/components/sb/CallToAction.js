//color blue, black, red

import { storyblokEditable } from "@storyblok/react";

const colors = {
  blue: "bg-blue-500 text-white hover:bg-blue-600",
  black: "bg-black text-white hover:bg-gray-800",
  red: "bg-red-500 text-white hover:bg-red-600",
};

export default function CallToAction({ blok }) {
  const colorClass = colors[blok.color];
  return (
    <button
      {...storyblokEditable(blok)}
      className={`${colorClass} px-4 py-2 rounded-md`}
    >
      {blok.label}
    </button>
  );
}
