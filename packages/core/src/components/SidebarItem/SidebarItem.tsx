import React from "react";
import Tooltip from "../Tooltip";
import { ItemProps } from "../Sidebar/Sidebar";
import MenuItem from "../MenuItem";

export interface SidebarItemProps {
  item: ItemProps;
  isActive: boolean;
  onClick?: (key: string) => void;
}

const SidebarItem = ({ item, isActive, onClick }: SidebarItemProps) => {
  const anchorElement = <MenuItem item={item} isActive={isActive} isCollapsed onClick={() => onClick?.(item.key)} />

  return (
    <div className="py-2 px-2">
      <Tooltip text={item.name}>{anchorElement}</Tooltip>
    </div>
  );
};

export default SidebarItem;