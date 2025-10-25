'use client';
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  // Create a sorted copy of the items array
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/* Sort Buttons */}
      <div className="mb-4 space-x-2">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Sort by Category
        </button>
      </div>

      {/* Render Items using Item component*/}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}