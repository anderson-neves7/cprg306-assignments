'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="bg-green-200 p-4 rounded max-w-sm">
      <p className="text-base mb-3">
        Quantity: <span className="font-bold">{quantity}</span>
      </p>

      <div className="flex gap-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-3 py-1 rounded ${quantity === 1
              ? 'bg-red-300 text-red-600 cursor-not-allowed'
              : 'bg-gray-400 text-white'
            }`}
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-3 py-1 rounded ${quantity === 20
              ? 'bg-green-300 text-green-600 cursor-not-allowed'
              : 'bg-gray-400 text-white'
            }`}
        >
          +
        </button>
      </div>

      <p className="text-sm text-blue-700 mt-2">Allowed range: 1-20</p>
    </div>
  )
}