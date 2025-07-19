import Icon from "./MainIcon";

export default function MainIconsContainer({
  Icons,
  isIconChange,
  activeButton,
  setActiveButton,
}) {
  return (
    <div className="bg-white rounded-full flex flex-col gap-2">
      {Icons.map((icon) => (
        <Icon
          key={icon.icon}
          activeIcon={isIconChange ? icon.activeSvg : icon.inactiveSvg}
          inactiveIcon={icon.inactiveSvg}
          icon={icon.icon}
          onClick={() => setActiveButton(icon.icon)}
          activeButton={activeButton}
        />
      ))}
    </div>
  );
}
