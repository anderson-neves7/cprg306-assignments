'use client';

import { useState } from 'react';
import itemsData from './items.json';
import NewItem from './new-item';
import ItemList from './item-list';

export default function Page() {
  // Set up state to hold the list of items, starting with the data from items.json
  const [items, setItems] = useState(itemsData);

  // Function to add a new item to the list using functional update
  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      {/* Form to add new items */}
      <NewItem onAddItem={handleAddItem} />

      {/* Display and sort the items */}
      <ItemList items={items} />
    </main>
  );
}