import { useState } from "react";
import SideIcon from "./SideIcon";

export default function SideIconsContainer({ Icons }) {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className="bg-white rounded-full flex flex-col gap-2">
      {Icons.map((icon) => (
        <SideIcon
          key={icon.icon}
          icon={icon.icon}
          iconSvg={icon.svg}
          onClick={() => setActiveButton(icon.icon)}
          activeButton={activeButton}
        />
      ))}
    </div>
  );
}
