export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="bg-blue-50 p-3 rounded-md cursor-pointer hover:bg-blue-100"
    >
      <p className="text-lg font-bold text-blue-900">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">Category: {category}</p>
    </li>
  );
}