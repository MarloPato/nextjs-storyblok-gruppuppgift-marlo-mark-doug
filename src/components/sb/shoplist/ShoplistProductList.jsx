"use client"
import { useShoplistContext } from "./ShoplistContext.jsx";
import { storyblokEditable } from "@storyblok/react";
import ShoplistProduct from "./ShoplistProduct.jsx"

function ShoplistProductList({ blok }) {

    const { selectedCategory } = useShoplistContext()

    const products = [...blok.products].filter(product => {
        if (selectedCategory !== 'All') {
            return selectedCategory === product.category
        }

        return true
    })

    return (
        <div {...storyblokEditable(blok)} className="grid grid-cols-4 gap-5 mt-8">
            {products.map((product) => {
                return (
                    <ShoplistProduct key={product._uid} product={product} />
                )
            })}
        </div>
    )
}

export default ShoplistProductList;