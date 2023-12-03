

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const precentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "you got everything ready to go"
          : `You have ${numItems} items on your list and yoy already packed 
          ${packedItems} (${precentage}%)`}
      </em>
    </footer>
  );
}
