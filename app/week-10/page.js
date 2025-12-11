"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { getItems, addItem } from "./_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("other");

  useEffect(() => {
    if (!user?.uid) return;
    async function loadItems() {
      const data = await getItems(user.uid);
      setItems(data);
    }
    loadItems();
  }, [user?.uid]);

  async function handleAddItem(e) {
    e.preventDefault();
    if (!user?.uid) return;

    const newItem = { name, quantity: Number(quantity), category };
    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { id, ...newItem }]);

    setName("");
    setQuantity(1);
    setCategory("other");
  }

  if (!user) {
    return <p>Please sign in to view your shopping list.</p>;
  }

  return (
    <main>
      <h1>Shopping List</h1>
      <form onSubmit={handleAddItem}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          required
        />
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="produce">produce</option>
          <option value="dairy">dairy</option>
          <option value="bakery">bakery</option>
          <option value="other">other</option>
        </select>
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (x{item.quantity}) - {item.category}
          </li>
        ))}
      </ul>
    </main>
  );
}