import React from "react";
import Tooltip from "../Tooltip";
import { ItemProps } from "../Sidebar/Sidebar";
import useWindowSize from "../../hooks/useWindowSize";
import MenuItem from "../MenuItem";

export interface SidebarItemProps {
  item: ItemProps;
  isActive: boolean;
  onClick?: (key: string) => void;
}

const SidebarItem = ({ item, isActive, onClick }: SidebarItemProps) => {
  const { isLtLg } = useWindowSize();
  
  const anchorElement = <MenuItem item={item} isActive={isActive} isCollapsed onClick={() => onClick?.(item.key)} />

  return (
    <div className={`py-2.5 ${isLtLg ? 'px-2' : 'px-4'}`}>
      <Tooltip text={item.name}>{anchorElement}</Tooltip>
    </div>
  );
};

export default SidebarItem;