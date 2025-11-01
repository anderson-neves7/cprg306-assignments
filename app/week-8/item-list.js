import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div>
      <div className="mb-4 space-x-2">
        <button onClick={() => setSortBy("name")} className="btn">Sort by Name</button>
        <button onClick={() => setSortBy("category")} className="btn">Sort by Caregort</button>
      </div>
      <ul className="grid gap-3">
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}