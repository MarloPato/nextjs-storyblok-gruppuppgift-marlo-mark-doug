"use client"
import { createContext, useContext, useState } from "react";

const ProductContext = createContext({
    product: null
})

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ product, children }) => {

    const ctx = {
        product
    }

    return <ProductContext.Provider value={ctx}>{children}</ProductContext.Provider>
}