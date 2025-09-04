"use client"

import { useCartContext } from "../../CartContext.jsx";

function AddToCartButton({ product }) {
    const { addItem, items, removeItem, removeAllOfItem } = useCartContext()
    const count = items.reduce((count, item) => {
        if (item._uid == product._uid) count++;
        return count
    }, 0)

    return (
        <div className="flex items-center gap-4">
            <button 
                className="mb-4 mt-4 bg-purple-600 text-white px-6 py-3 hover:bg-purple-300"
                onClick={() => addItem(product)}
            >
                Add to cart
            </button>
            {count > 0 && (
                <>
                    <div className="count-badge">
                        {count}
                    </div>
                    <button 
                        onClick={() => removeItem(product)}
                        className="border-1 border-gray-700 text-gray-700 flex justify-center items-center w-6 h-6 rounded-4xl">-</button>
                    <button
                        onClick={() => removeAllOfItem(product)} 
                        className="border-1 border-gray-700 text-gray-700 flex justify-center items-center w-6 h-6 rounded-4xl">&times;</button>
                </>
            )}
        </div>
    )
}

export default AddToCartButton;