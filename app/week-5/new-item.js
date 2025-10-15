'use client';

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  function handleSubmit(event) {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log('New item:', item);
    alert(`Item added: \nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  }

  return (
    <form onSubmit={handleSubmit} className="bg-red-200 p-6 rounded shadow max-w-md space-y-4">
      {/* Name input */}
      <div>
        <label className="block text-sm font-medium mb-2">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-black-300 rounded px-3 py-2"
        />
      </div>

      {/* Quantity input */}
      <div>
        <label className="block text-sm font-medium mb-1">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max="20"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Category dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
}
