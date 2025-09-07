"use client";

import { useCartContext } from "../CartContext.jsx";

export default function CartIcon() {
  const { items } = useCartContext();

  return (
    <div className="relative">
      <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {items.length}
        </span>
      </button>
    </div>
  );
}
