import ItemList from './item-list';

// This page will display the Week 3 Shopping List
export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}