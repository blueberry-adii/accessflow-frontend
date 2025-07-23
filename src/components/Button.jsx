export default function Button({ child, style, onClick, type }) {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick ? onClick : () => {}}
      className={
        "bg-[#1d293d] shadow-md shadow-black/10  text-[#fff] rounded-3xl transition-all ease-in-out duration-200 hover:bg-[#0f172b] hover:shadow-black/40 cursor-pointer " +
        style
      }
    >
      {child}
    </button>
  );
}
