export default function Input({ placeholder, style, type }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={
        "text-sm bg-white shadow-md shadow-black/10 rounded-3xl px-6 py-3 outline-0 mr-5 max-[650px]:text-[10px] max-[500px]:mr-2 max-[400px]:py-2 max-[400px]:px-4 " +
        style
      }
    />
  );
}
