"use client"
import { useState, createContext, useContext } from "react";

const shoplistContext = createContext({
    selectedCategory: "All",
    setSelectedCategory() {}
})

export const useShoplistContext = () => useContext(shoplistContext);

export const ShoplistContextProvider = ({ children }) => {

    const [selectedCategory, setSelectedCategory] = useState("All")

    const ctx = {
        selectedCategory,
        setSelectedCategory
    }

    return <shoplistContext.Provider value={ctx}>{children}</shoplistContext.Provider>
}