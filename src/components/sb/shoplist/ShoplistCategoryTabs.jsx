import { storyblokEditable } from "@storyblok/react";

export default function ShoplistCategoryTabs({ blok }) {

    const categories = ["All", ...blok.Categories.split(',')]

  return (
    <div
        id="shoplist-category-tabs"
        className="flex gap-8"
      {...storyblokEditable(blok)}
    >
        {categories.map((category) => {
            return (
                <button key={category} className="category-tab border-1 border-white p-4">
                    {category}
                </button>
            )
        })}
    </div>
  );
}
