"use client"
import { storyblokEditable } from "@storyblok/react";
import { useShoplistContext } from "./ShoplistContext.jsx";

export default function ShoplistCategoryTabs({ blok }) {

    const categories = ["All", ...blok.Categories.split(',')]
    const { selectedCategory, setSelectedCategory } = useShoplistContext()

  return (
    <div
        id="shoplist-category-tabs"
        className="flex gap-5"
      {...storyblokEditable(blok)}
    >
        {categories.map((category) => {
          let classList = "category-tab border-1 border-white px-7 py-3 hover:bg-gray-700 cursor-pointer"
          if (category === selectedCategory) classList += " bg-white text-black hover:bg-white"
            return (
                <button key={category} className={classList} onClick={() => setSelectedCategory(category)}>
                    {category}
                </button>
            )
        })}
    </div>
  );
}
