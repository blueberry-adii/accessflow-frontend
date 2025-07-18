export default function MainIcon({
  activeIcon,
  inactiveIcon,
  onClick,
  activeButton,
  icon,
}) {
  const isActive = activeButton == icon ? true : false;
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center h-12 w-12 rounded-full transition-colors ease-in-out duration-200 max-[650px]:h-10 max-[650px]:w-10 ${
        isActive ? `bg-[#22262b]` : `hover:bg-black/10`
      }`}
    >
      {isActive ? activeIcon : inactiveIcon}
    </button>
  );
}
