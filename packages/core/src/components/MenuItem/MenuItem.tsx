import React, { FC } from "react";
import classNames from "classnames";
import useWindowSize from "../../hooks/useWindowSize";
import { ItemProps } from "../Sidebar/Sidebar";
import { renderIcon } from "../../utils";
import { TypeMapKey, typeMap } from "../../utils/colorTypeMap";

export interface MenuItemProps {
  item: ItemProps;
  onClick?: (key: string) => void;
  showCircle?: boolean;
  isSubitem?: boolean;
  isActive?: boolean;
  isCollapsed?: boolean;
}

const MenuItem: FC<MenuItemProps> = ({
  item,
  onClick,
  showCircle = true,
  isSubitem = false,
  isActive = false,
  isCollapsed = false,
}) => {
  const { isLtLg, isLg, isXl } = useWindowSize();
  const icon = renderIcon(item.icon) || item.key.charAt(0).toUpperCase()

  const activeBgColor = typeMap[item.activeBgColor as TypeMapKey] || {};
  const iconHoverColor = typeMap[item.iconHoverColor as TypeMapKey] || {};
  const LinkComponent = item.linkComponent || "a";
  
  return (
    <LinkComponent
      onClick={() => {
        onClick?.(item.key);
        item.onClick?.(item.key);
      }}
      href={item.href}
      target={item.target || "_self"}
      className="flex items-center transition-all duration-500 ease-in-out group cursor-pointer"
    >
      {showCircle && (
        <span
          className={classNames(
            "flex text-white text-2xl items-center justify-center text-center font-bold rounded-full transition-all duration-500 ease-in-out",
            {
              "w-10 h-10": isLg || isXl,
              "w-[30px] h-[30px]": isSubitem || isLtLg,
              "!text-black": isActive
            },
            isActive ? activeBgColor.bgColor : 'bg-black-600',
            iconHoverColor.hoverTextColor
          )}
        >
          {icon}
        </span>
      )}
      {!isCollapsed && (
        <span
          className={classNames(
            "text-white text-sm py-1 px-3 group-hover:bg-black-800 group-hover:rounded-lg group-hover:shadow-lg",
            {
              "bg-black-800 shadow-lg": isActive,
              "ml-2": showCircle,
            }
          )}
        >
          {item.name}
        </span>
      )}
    </LinkComponent>
  );
};

export default MenuItem;
