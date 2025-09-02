"use client"

import { useProductContext } from "./ProductContext.jsx";

function ProductPageTest() {

    const { product } = useProductContext()

    return (
        <>
            {product ? (
                <>
                    <h1 className="text-5xl">{product.title}</h1>
                    <img src={product.image.filename} alt={product.title} />
                </>
            ) : (
                <h1 className="text-8xl">Product not found</h1>
            )}
        </>
    )
}

export default ProductPageTest;