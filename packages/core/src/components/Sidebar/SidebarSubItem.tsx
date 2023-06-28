import React from "react";
import { SubItemProps } from "./Sidebar";
import useWindowSize from "../../hooks/useWindowSize";
import MenuItem from "../MenuItem";

export interface SidebarSubItemProps {
  item: SubItemProps;
  isActive: boolean;
  onClick?: (key: string) => void;
}

const SidebarSubItem = ({ item, isActive, onClick }: SidebarSubItemProps) => {
  const { isLtLg } = useWindowSize();

  return (
    <div className={`py-2.5 ${isLtLg ? 'px-2' : 'px-4'}`}>
      {item.type === "header" && (
        <div className="text-white text-sm font-bold uppercase">{item.name}</div>
      )}

      {item.type === "link" && (
        <MenuItem item={item} isActive={isActive} isSubitem={true} isCollapsed={false} onClick={() => onClick?.(item.key)} />
      )}

      {item.type === "divider" && (
        <div className="border-b border-black-800 border-opacity-50 my-2" />
      )}
    </div>
  );
};

export default SidebarSubItem;