export default function SideIcon({ onClick, iconSvg }) {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center h-12 w-12 rounded-full hover:bg-black/10 transition-colors ease-in-out duration-200 max-[650px]:h-10 max-[650px]:w-10`}
    >
      {iconSvg}
    </button>
  );
}
