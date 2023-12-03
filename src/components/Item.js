
export default function Item({ item, onHandleDeleteItems, onToggleItems }) {
  // function handleCheck(ite) {
  //   setItems(() => (ite.packed = true));
  // }
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onToggleItems(item.id)}
        value={item.packed}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onHandleDeleteItems(item.id)}>❌</button>
    </li>
  );
}
