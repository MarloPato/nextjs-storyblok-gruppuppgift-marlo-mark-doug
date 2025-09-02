"use client"
import { createContext, useContext, useState } from "react";

const productContext = createContext({
    product: null
})

export const useProductContext = () => useContext(productContext);

export const ProductProvider = ({ product, children }) => {

    const ctx = {
        product
    }

    return <productContext.Provider value={ctx}>{children}</productContext.Provider>
}