import React, { useState, useEffect, ReactNode, FC } from "react";
import SidebarItem from './SidebarItem';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize';
import Input from '../Input/Input';
import MenuIcon from "@apg.gg/icons/lib/MenuIcon";
import MenuOpenIcon from '@apg.gg/icons/lib/MenuOpenIcon';
import SidebarSubItem from "./SidebarSubItem";

export interface ItemProps {
  key: string;
  name: string;
  href: string;
  icon?: ReactNode;
  bgColor?: "blue" | "aqua" | "green" | "yellow" | "fucsia" | "red";
  target?: string;
}

export interface SubItemProps extends ItemProps {
  type: "link" | "divider" | "header";
  showCircle?: boolean;
}

export interface SidebarProps {
  logo: string | ReactNode;
  menuItems: ItemProps[];
  activeItem: string;
  subItems?: SubItemProps[];
  activeSubItem?: string;
  defaultWidth?: string;
  desktopCollapsedWidth?: string;
  tabletCollapsedWidth?: string;
  children: ReactNode;
  searchText?: string;
  actions?: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  logo,
  menuItems,
  subItems,
  activeItem = "home", 
  activeSubItem = "achievements",
  defaultWidth = "324px",
  desktopCollapsedWidth = "72px",
  tabletCollapsedWidth = "46px",
  children,
  searchText = "Search", 
  actions,  
  isOpen = false,
  onToggle,
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

  const renderIcon = (icon: string | React.ReactNode) => {
    if (typeof icon === 'string') {
      return <img src={icon as string} alt="Logo" className="h-10" />
    } else {
      return icon
    }
  }

  return (
    <div className="relative h-screen w-full">
      {/* Desktop/tablet sidebar */}
      <div className={`fixed h-full bg-black text-white z-[70] transition-all duration-150 ease-in-out ${isXs ? "hidden" : "flex"}`} style={sidebarStyle}>
        <nav className="mt-0">
          <div className={`flex items-center justify-start h-16 ${isLtLg ? 'px-2' : 'px-4'}`}>
            {isCollapsed && isLtLg && !isXs && <MenuIcon className="flex text-3xl" onClick={toggleSidebar} />}
            {!isCollapsed && isLtLg && !isXs && <MenuOpenIcon className="flex text-3xl" onClick={toggleSidebar} />}
            {(isLg || isXl) && renderIcon(logo)}
          </div>
          {menuItems.map((item) => (
            <SidebarItem 
              key={`sidebaritem-${item.key}`} 
              item={item}
              isActive={activeSection === item.key} 
              onClick={(key) => setActiveSection(key)}
            />
          ))}
        </nav>
        {subItems && (
          <div className="mt-0 pt-4 bg-black-900 w-full h-full rounded-l-lg">
            {subItems.map((item) => (
              <SidebarSubItem 
                key={`sidebaritem-${item.key}`} 
                item={item}
                isActive={activeSubSection === item.key} 
                onClick={(key) => setActiveSubSection(key)}
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
            } md:hidden fixed top-0 left-0 flex flex-col h-screen bg-black text-white transition-transform ease-in-out duration-30 z-[70] shadow-2xl`}
            style={sidebarStyle}
          >
            <div className="flex items-center justify-between h-16 px-1">
              <button className="text-white p-2" onClick={toggleSidebar}>
                <MenuOpenIcon className="h-6 w-6 text-2xl" />
              </button>
            </div>
            <div className="px-4 pt-2 w-full">
              <Input placeholder={searchText} isSearchable={true}  />
            </div>
            <nav className="mt-5">
              {menuItems.map((item) => (
                <SidebarItem 
                  key={`sidebaritem-${item.key}`} 
                  item={item}
                  isActive={activeSection === item.key} 
                  onClick={(key) => {
                    setActiveSection(key)
                    toggleSidebar()
                  }}
                />
              ))}
            </nav>
            {actions ? (
              <div className="w-full mt-auto">
                {actions}
              </div>
            ) : null }
          </div>
          <>
            {!isCollapsed && (
              <div
                className="md:hidden fixed top-0 left-0 w-full h-screen bg-black opacity-50 z-[60]"
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

