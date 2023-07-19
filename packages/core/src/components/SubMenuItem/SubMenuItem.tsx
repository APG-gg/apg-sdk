import React, { FC } from "react";
import classNames from "classnames";
import { ItemProps } from "../Sidebar/Sidebar";
import { renderIcon } from "../../utils";

export interface SubMenuItemProps {
  item: ItemProps;
  onClick?: (key: string) => void;
  isActive?: boolean;
}

const SubMenuItem: FC<SubMenuItemProps> = ({
  item,
  onClick,
  isActive = false,
}) => {
  const icon = renderIcon(item.icon) || item.key.charAt(0).toUpperCase()

  const LinkComponent = item.linkComponent || "a";
  
  return (
    <LinkComponent
      onClick={() => onClick?.(item.key)}
      href={item.href}
      target={item.target || "_self"}
      className={classNames(
        "flex items-center transition-all duration-500 ease-in-out group hover:bg-black-800 rounded-2xl px-4 h-11",
        isActive && "!bg-blue/10",
      )}
    >
      <span
        className={classNames(
          "flex items-center justify-center text-center w-6 h-6 overflow-hidden",
          "group-hover:text-white"
        )}
      >
        {icon}
      </span>
      <span
        className="text-white text-sm py-1 px-3"
      >
        {item.name}
      </span>
    </LinkComponent>
  );
};

export default SubMenuItem;
