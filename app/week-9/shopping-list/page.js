'use client';

import { useState } from 'react';
import { useUserAuth } from "../../contexts/AuthContext";
import itemsData from './items.json';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth(); // Auth check

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(itemName) {
    const cleaned = itemName
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();
    setSelectedItemName(cleaned);
  }

  // Block access if not signed in
  if (!user) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <p className="text-red-600">You must be signed in to view this page.</p>
        <p className="mt-2">
          <a href="/week-9" className="text-blue-600 underline">
            Go to login page
          </a>
        </p>
      </main>
    );
  }

  // Show full app if signed in
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Shopping List + Meal Ideas</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}