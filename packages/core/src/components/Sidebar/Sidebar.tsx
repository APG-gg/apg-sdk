import React, { useState, useEffect, ReactNode, FC } from "react";
import SidebarItem from '../SidebarItem';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize';
import Input from '../Input/Input';
import MenuIcon from "@apg.gg/icons/lib/MenuIcon";
import MenuOpenIcon from '@apg.gg/icons/lib/MenuOpenIcon';
import SidebarSubItem from "./SidebarSubItem";
import classNames from "classnames";
import renderIcon from "../../utils/renderIcon";
import { TypeMapKey } from "../../utils/colorTypeMap";

export interface ItemProps {
  key: string;
  name: string;
  onClick?: (key: string) => void;
  href?: string;
  icon?: ReactNode;
  iconHoverColor?: TypeMapKey;
  bgColor?: TypeMapKey;
  activeBgColor?: TypeMapKey;
  target?: string;
  linkComponent?: React.ComponentType<any>
}

export interface SubItemProps extends ItemProps {
  type: "link" | "divider" | "header";
  showCircle?: boolean;
}

export interface SidebarProps {
  logo: string | ReactNode;
  menuItems: ItemProps[];
  recentPages?: ItemProps[];
  activeItem: string;
  subItems?: SubItemProps[];
  activeSubItem?: string;
  defaultWidth?: string;
  desktopCollapsedWidth?: string;
  tabletCollapsedWidth?: string;
  children: ReactNode;
  searchText?: string;
  actions?: ReactNode;
  actionsMobile?: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  onToggleDrawer?: (key: string) => void;
  linkLogo?: string;
  linkComponent?: React.ComponentType<any>
  showHeadline?: boolean;
}

const Sidebar: FC<SidebarProps> = ({
  logo,
  menuItems,
  recentPages,
  subItems,
  activeItem = "home", 
  activeSubItem = "achievements",
  defaultWidth = "324px",
  desktopCollapsedWidth = "64px",
  tabletCollapsedWidth = "46px",
  children,
  searchText = "Search", 
  actions,
  actionsMobile,  
  isOpen = false,
  onToggle,
  onToggleDrawer,
  linkLogo,
  linkComponent,
  showHeadline = true
}) => {
  const { isXs, isLtLg, isLg, isXl } = useWindowSize();
  const [isCollapsed, setIsCollapsed] = useState(
    () => !isOpen || isLg
  );

  useEffect(() => {
    if (isOpen !== undefined) {
      setIsCollapsed(!isOpen);
    }
  }, [isOpen]);

  const [activeSection, setActiveSection] = useState<string>(activeItem);
  const [activeSubSection, setActiveSubSection] = useState<string>(activeSubItem);

  useEffect(() => {
    setActiveSection(activeItem);
  }, [activeItem]);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => {
      const isSmallerScreen = window.innerWidth < 1024;
      const shouldToggle = isSmallerScreen;
      if (onToggle && shouldToggle) {
        onToggle();
      }
      return !prevState;
    });
  };

  const collapsedWidth = isXs
    ? defaultWidth
    : isLtLg
      ? tabletCollapsedWidth
      : subItems ? defaultWidth : desktopCollapsedWidth;

  const sidebarStyle = isCollapsed
    ? { width: desktopCollapsedWidth }
    : { width: desktopCollapsedWidth };

  const contentStyle = isXs
    ? { marginLeft: "0" } : isLtLg 
    ? { marginLeft: tabletCollapsedWidth } : { marginLeft: desktopCollapsedWidth }

  const LinkComponent = linkComponent || "a";

  return (
    <div id="sidebar" className="relative w-full">
      {/* Desktop/tablet sidebar */}
      <div className={`fixed h-full bg-black text-white z-[80] transition-all duration-150 ease-in-out ${isXs ? "hidden" : "flex"}`} style={sidebarStyle}>
        <nav className="flex flex-col content-start justify-start mt-0 w-16">
          <div className={`flex items-center justify-center h-16 px-2`}>
            <LinkComponent href={linkLogo || '/'}>
              {renderIcon(logo)}
            </LinkComponent>
          </div>
          <div className="mt-4">
            {menuItems.map((item) => (
              <SidebarItem 
                key={`sidebaritem-${item.key}`} 
                item={item}
                isActive={activeSection === item.key} 
                onClick={(key) => {
                  setActiveSection(key)
                  if (!item.href) onToggleDrawer?.(item.key);
                  if (!isCollapsed && isLtLg && !isXs) toggleSidebar()
                }}
              />
            ))}
            {recentPages && recentPages.length > 0 ? (
              <>
                <span className="flex h-[1px] bg-black-800 my-2 mx-2"></span>
                {recentPages.map((item) => (
                  <SidebarItem 
                    key={`sidebaritem-${item.key}`} 
                    item={item}
                    isActive={activeSection === item.key} 
                    onClick={(key) => {
                      setActiveSection(key)
                      if (!item.href) onToggleDrawer?.(item.key);
                      if (!isCollapsed && isLtLg && !isXs) toggleSidebar()
                    }}
                  />
                ))}
              </>
            ) : null}
          </div>
          {actions ? (
            <div className="flex flex-col px-2 justify-center mt-auto mb-4">
              {actions}
            </div>
          ) : null}
        </nav>
        {subItems && (
          <div className={classNames(
            "mt-0 pt-4 bg-black-900 w-full h-full rounded-l-lg",
            { "hidden": isCollapsed && isLtLg && !isXs },
            { "flex flex-col": !isCollapsed && isLtLg && !isXs }
          )}>
            {subItems.map((item) => (
              <SidebarSubItem 
                key={`sidebaritem-${item.key}`} 
                item={item}
                isActive={activeSubSection === item.key} 
                onClick={(key) => {
                  setActiveSubSection(key)
                  if (!isCollapsed && isLtLg && !isXs) toggleSidebar()
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile sidebar */}
      {isXs && (
        <>    
          <div
            className={`${
              !isCollapsed ? "translate-x-0" : "-translate-x-full"
            } md:hidden fixed top-0 left-0 flex flex-col h-screen bg-black text-white transition-transform ease-in-out duration-30 z-[90] shadow-2xl`}
            style={sidebarStyle}
          >
            <div className="flex flex-col content-start justify-start mt-0 w-16">

            </div>
            <div className={`flex items-center justify-center h-16 px-2`}>
              <LinkComponent href={linkLogo || '/'}>
                {renderIcon(logo)}
              </LinkComponent>
            </div>
            <nav className="mt-4">
              {menuItems.map((item) => (
                <SidebarItem 
                  key={`sidebaritem-${item.key}`} 
                  item={item}
                  isActive={activeSection === item.key} 
                  onClick={(key) => {
                    setActiveSection(key);
                    if (!item.href) onToggleDrawer?.(item.key);
                    if (item.href) toggleSidebar();
                  }}
                />
              ))}
            </nav>
            {actionsMobile ? (
              <div className="w-full mt-auto">
                {actionsMobile}
              </div>
            ) : null }
          </div>
          <>
            {!isCollapsed && (
              <div
                className="md:hidden fixed top-0 left-0 w-full h-screen bg-black-900 opacity-50 z-[60]"
                onClick={toggleSidebar}
              ></div>
            )}
          </>
        </>
      )}

      {/* Main content */}
      <div style={contentStyle} className="relative h-full">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

