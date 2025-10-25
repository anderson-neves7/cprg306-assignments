export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-blue-50 p-3 rounded-md">
      <p className="text-lg font-bold text-blue-900">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">Category: {category}</p>
    </li>
  );
}