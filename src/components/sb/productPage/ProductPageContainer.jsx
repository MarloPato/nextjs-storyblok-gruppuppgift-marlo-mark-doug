"use client";

import { useProductContext } from "./ProductContext.jsx";
import { useState } from "react";
import Link from "next/link.js";
import AddToCartButton from "./AddToCartButton.jsx";

function ProductPageContainer() {
  const { product } = useProductContext();

  const description =
    product?.description ||
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi libero perspiciatis ratione reprehenderit assumenda itaque qui nam. Magni veniam minus voluptas deserunt laudantium, hic nesciunt et aspernatur consectetur debitis!";
  const colors = product?.colors?.split("|");
  const sizes = product?.sizes?.split(",");

  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <div className="product-page w-[1200px] m-auto max-w-[100%]">
      {!product ? (
        <>
          <div className="error mt-8 text-4xl">There was an error.</div>
          <p className="text-2xl">
            The product your looking for does not exist. Check the URL and try
            again.
          </p>
        </>
      ) : (
        <>
          <div className="product mt-8 grid grid-cols-2 gap-8">
            <div className="left">
              <img
                className="w-full"
                src={product.image.filename}
                alt={product.title}
              />
            </div>
            <div className="right">
              <h2 className="text-4xl font-bold">{product.title}</h2>
              <p className="price text-xl mb-6">{product.price} SEK</p>

              <div className="mb-6">
                <Link href="/shoplist">&larr; Back to all products</Link>
              </div>

              <p className="desc mb-8">{description}</p>
              {/* Colors */}
              {colors && (
                <div>
                  <p className="text-gray-600 mb-2">Color</p>

                  <div className="colors mb-8 flex gap-2">
                    {colors.map((color, i) => {
                      return (
                        <button
                          key={color}
                          className="w-12 h-12 rounded-4xl hover:outline-blue-800 hover:outline-3"
                          style={{
                            backgroundColor: color,
                            border: `1px solid ${color}`,
                            outline: selectedColor == i ? "4px solid gray" : "",
                          }}
                          onClick={() => setSelectedColor(i)}
                        ></button>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* Sizes */}
              <div className="mb-4">
                <p className="text-gray-600 mb-2">Sizes</p>
                <div className="sizes flex gap-4">
                  {sizes.map((size, i) => {
                    return (
                      <button
                        className="py-2 px-6 border-1 border-gray-700 hover:outline-3 hover:outline-blue-800"
                        key={size}
                        style={{
                          outline: selectedSize == i ? "3px solid gray" : "",
                        }}
                        onClick={() => setSelectedSize(i)}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
              {/* Add to cart btn */}
              <AddToCartButton product={product} />
              {/*  */}
              <button className="underline mb-4 text-xs">
                Size & Fit Guide
              </button>
              {/*  */}
              <p className="text-gray-500 text-xs">
                Height of model: 189cm. / 6'2", Size 41
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPageContainer;
