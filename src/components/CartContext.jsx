"use client"

import { createContext, useContext, useState } from "react";

const CartContext = createContext({
    items: []
})

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children}) {

    const [items, setItems] = useState([])

    const addItem = (item) => {
        setItems([...items, item])
    }

    const removeItem = (item) => {
        const next = [...items]
        const i = next.findIndex(it => it._uid == item._uid)
        next.splice(i, 1)
        setItems(next)
    }

    const removeAllOfItem = (item) => {
        setItems(items.filter(it => {
            item._uid !== it._uid
        }))
    }

    const ctx = {
        items,
        addItem,
        removeItem,
        removeAllOfItem
    }

    return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>
}