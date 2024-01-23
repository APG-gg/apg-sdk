import React from "react";
import { SubItemProps } from "./Sidebar";
import useWindowSize from "../../hooks/useWindowSize";
import SubMenuItem from "../SubMenuItem";
import ArrowDownIcon from "@apg.gg/icons/lib/ArrowDownIcon";
import classNames from "classnames";
import renderIcon from "../../utils/renderIcon";

export interface SidebarSubItemProps {
  item: SubItemProps;
  isActive: boolean;
  onClick?: (key: string) => void;
}

const SidebarSubItem = ({ item, isActive, onClick }: SidebarSubItemProps) => {
  const { isLtLg } = useWindowSize();
  const icon = renderIcon(item.icon)

  return (
    <div className={`py-1 ${isLtLg ? 'px-2' : 'px-4'}`}>
      {item.type === "header" && (
        <div className="flex gap-3 items-center bg-black rounded-2xl px-4 h-11">
          {icon ? (
            <span
              className={classNames(
                "flex items-center justify-center text-center w-6 h-6 overflow-hidden",
                "group-hover:text-white"
              )}
            >
              {icon}
            </span>
          ) : null }
          <span
            className="text-white text-sm font-bold uppercase"
          >
            {item.name}
          </span>
          <ArrowDownIcon className="ml-auto" />
        </div>
      )}

      {item.type === "link" && (
        <SubMenuItem item={item} isActive={isActive} onClick={() => onClick?.(item.key)} />
      )}

      {item.type === "divider" && (
        <div className="border-b border-black-800 border-opacity-50 my-2" />
      )}
    </div>
  );
};

export default SidebarSubItem;