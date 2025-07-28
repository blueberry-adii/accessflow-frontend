import { NavLink } from "react-router-dom";
import Icon from "./MainIcon";

export default function MainIconsContainer({ Icons, isActive }) {
  return (
    <div className="bg-white rounded-full flex flex-col gap-2">
      {Icons.map((icon) => (
        <NavLink to={icon.route}>
          <Icon
            key={icon.icon}
            activeIcon={icon.activeSvg}
            inactiveIcon={icon.inactiveSvg}
            route={icon.route}
            isActive={isActive}
          />
        </NavLink>
      ))}
    </div>
  );
}
