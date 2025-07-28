export default function MainIcon({
  activeIcon,
  inactiveIcon,
  isActive,
  route,
}) {
  return (
    <button
      className={`flex cursor-pointer items-center justify-center h-12 w-12 rounded-full transition-colors ease-in-out duration-200 max-[650px]:h-10 max-[650px]:w-10 ${
        isActive(route) ? `bg-[#22262b]` : `hover:bg-black/10`
      }`}
    >
      {isActive(route) ? activeIcon : inactiveIcon}
    </button>
  );
}
