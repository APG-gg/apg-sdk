import React from "react";
import { Tooltip } from "../Tooltip";
import { ItemProps } from "./Sidebar";
import classNames from 'classnames';
import useWindowSize from "../../hooks/useWindowSize";
import { MenuItem } from "../MenuItem";

export interface SidebarItemProps {
  item: ItemProps;
  isCollapsed: boolean;
  isActive: boolean;
  onClick?: (key: string) => void;
}

const SidebarItem = ({ item, isCollapsed, isActive, onClick }: SidebarItemProps) => {
  const { isXs, isLtLg, isLg, isXl } = useWindowSize();
  
  const anchorElement = <MenuItem item={item} isActive={isActive} isCollapsed={isCollapsed} onClick={() => onClick?.(item.key)} />

  return (
    <div className={`py-2.5 ${isLtLg ? 'px-2' : 'px-4'}`}>
      {isCollapsed ? (
        <Tooltip text={item.name}>{anchorElement}</Tooltip>
      ) : (
        <>{anchorElement}</>
      )}
    </div>
  );
};

export default SidebarItem;