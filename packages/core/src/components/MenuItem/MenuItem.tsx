import React, { FC } from "react";
import classNames from "classnames";
import useWindowSize from "../../hooks/useWindowSize";
import { ItemProps } from "../Sidebar/Sidebar";
import { renderIcon } from "../../utils";

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

  const LinkComponent = item.linkComponent || "a";
  
  return (
    <LinkComponent
      onClick={() => onClick?.(item.key)}
      href={item.href}
      target={item.target || "_self"}
      className="flex items-center transition-all duration-500 ease-in-out group"
    >
      {showCircle && (
        <span
          className={classNames(
            "flex items-center justify-center text-center bg-black-800 font-bold rounded-[50px] group-hover:rounded-md transition-all duration-500 ease-in-out overflow-hidden",
            {
              "group-hover:text-black group-hover:bg-blue": item.bgColor === 'blue',
              "group-hover:text-black group-hover:bg-aqua": item.bgColor === 'aqua',
              "group-hover:text-black group-hover:bg-green": item.bgColor === 'green',
              "group-hover:text-black group-hover:bg-yellow": item.bgColor === 'yellow',
              "group-hover:text-black group-hover:bg-fucsia": item.bgColor === 'fucsia',
              "group-hover:text-black group-hover:bg-red": item.bgColor === 'red',
              "rounded-md !bg-blue": isActive && item.bgColor === 'blue',
              "rounded-md !bg-aqua": isActive && item.bgColor === 'aqua',
              "rounded-md !bg-green": isActive && item.bgColor === 'green',
              "rounded-md !bg-yellow": isActive && item.bgColor === 'yellow',
              "rounded-md !bg-fucsia": isActive && item.bgColor === 'fucsia',
              "rounded-md !bg-red": isActive && item.bgColor === 'red',
              "w-10 h-10": isLg || isXl,
              "w-[30px] h-[30px]": isSubitem || isLtLg,
              "text-black": isActive
            },
            "group-hover:text-white"
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
              "bg-black-800 rounded-lg shadow-lg": isActive,
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
