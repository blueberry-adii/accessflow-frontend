export default function GridCard({ bg, col, row, child, customStyle }) {
  return (
    <div
      className={`${bg} rounded-4xl shadow-md shadow-black/10 col-span-${col} row-span-${row} ${customStyle}`}
    >
      {child}
    </div>
  );
}
