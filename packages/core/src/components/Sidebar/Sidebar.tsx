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
    ? { width: collapsedWidth }
    : { width: defaultWidth };

  const contentStyle = isXs
    ? { marginLeft: "0" } : isLtLg 
    ? { marginLeft: tabletCollapsedWidth } : { marginLeft: desktopCollapsedWidth }

  const LinkComponent = linkComponent || "a";

  return (
    <div id="sidebar" className="relative w-full">
      {/* Desktop/tablet sidebar */}
      <div className={`fixed h-full bg-black text-white z-[80] transition-all duration-150 ease-in-out ${isXs ? "hidden" : "flex"}`} style={sidebarStyle}>
        <nav className="flex flex-col content-between justify-between mt-0 w-16">
          <div className={`flex items-center justify-center h-16 px-2`}>
            {isCollapsed && isLtLg && !isXs && <MenuIcon className="flex text-3xl" onClick={toggleSidebar} />}
            {!isCollapsed && isLtLg && !isXs && <MenuOpenIcon className="flex text-3xl" onClick={toggleSidebar} />}
            {(isLg || isXl) && (
              <LinkComponent href={linkLogo || '/'}>
                {renderIcon(logo)}
              </LinkComponent>
            )}
          </div>
          <div className="mt-16">
            {showHeadline && (
              <span className="flex justify-center text-black-800 uppercase text-xs font-source-sans-pro font-semibold mb-4">MENU</span>
            )}
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
            <div className="flex flex-col gap-2 px-2 justify-center mt-auto mb-6 ">
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
            } md:hidden fixed top-0 left-0 flex flex-col h-screen bg-black text-white transition-transform ease-in-out duration-30 z-[70] shadow-2xl rounded-br-2xl`}
            style={sidebarStyle}
          >
            <div className="flex items-center justify-between h-16 px-1">
              <button className="text-white p-2" onClick={toggleSidebar}>
                <MenuOpenIcon className="h-6 w-6 text-2xl" />
              </button>
            </div>
            <div className="px-4 pt-2 w-full pb-4">
              <Input placeholder={searchText} isSearchable={true}  />
            </div>
            <div className="flex">
              <nav className="mt-5">
                {menuItems.map((item) => (
                  <SidebarItem 
                    key={`sidebaritem-${item.key}`} 
                    item={item}
                    isActive={activeSection === item.key} 
                    onClick={(key) => {
                      setActiveSection(key);
                      toggleSidebar();
                    }}
                  />
                ))}
              </nav>
              {subItems && (
                <div className={classNames(
                  "mt-0 py-2 bg-black-900 w-full h-full rounded-2xl mr-1",
                  { "hidden": isCollapsed },
                  { "flex flex-col": !isCollapsed }
                )}>
                  {subItems.map((item) => (
                    <SidebarSubItem 
                      key={`sidebaritem-${item.key}`} 
                      item={item}
                      isActive={activeSubSection === item.key} 
                      onClick={(key) => {
                        setActiveSubSection(key);
                        toggleSidebar();
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
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

