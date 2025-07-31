import SideIcon from "./SideIcon";

export default function SideIconsContainer({ Icons }) {
  return (
    <div className="bg-white rounded-full flex flex-col gap-2">
      {Icons.map((icon) => (
        <SideIcon iconSvg={icon.svg} onClick={icon.onClick} />
      ))}
    </div>
  );
}
