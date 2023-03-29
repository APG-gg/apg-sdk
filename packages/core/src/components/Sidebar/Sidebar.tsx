import React, { useState, useEffect, ReactNode, FC, useRef } from "react";
import SidebarItem from './SidebarItem';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize';
import Input from '../Input/Input';
import MenuIcon from "@apg.gg/icons/lib/MenuIcon";
import MenuOpenIcon from '@apg.gg/icons/lib/MenuOpenIcon';

export interface ItemProps {
  key: string;
  name: string;
  href: string;
  icon?: ReactNode;
  bgColor?: "blue" | "aqua" | "green" | "yellow" | "fucsia" | "red";
  target?: string;
}

export interface SidebarProps {
  logo: string | ReactNode;
  menuItems: ItemProps[];
  activeItem: string;
  defaultWidth?: string;
  desktopCollapsedWidth?: string;
  tabletCollapsedWidth?: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  logo,
  menuItems,
  activeItem = "home",
  defaultWidth = "275px",
  desktopCollapsedWidth = "72px",
  tabletCollapsedWidth = "46px",
  children,
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
  const sidebarRef = useRef<HTMLDivElement>(null); // create a ref to the sidebar container element
  
  const handleScroll = () => {
    const sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const isSectionVisible =
        window.scrollY >= sectionTop && window.scrollY < sectionBottom;
      if (isSectionVisible) {
        setActiveSection(section.id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => {
      const isSmallerScreen = window.innerWidth < 1024;
      const shouldToggle = !isOpen && isSmallerScreen;
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
      : desktopCollapsedWidth;

  const sidebarStyle = isCollapsed
    ? { width: collapsedWidth }
    : { width: defaultWidth };

  const contentStyle = isCollapsed
    ? isXs
      ? { marginLeft: "0" }
      : isLtLg ? { marginLeft: tabletCollapsedWidth } 
      : { marginLeft: desktopCollapsedWidth }
    : { marginLeft: defaultWidth };

  const renderIcon = (icon: string | React.ReactNode) => {
    if (typeof icon === 'string') {
      return <img src={icon as string} alt="Logo" className="h-10" />
    } else {
      return icon
    }
  }

  return (
    <div className="relative h-screen w-full" ref={sidebarRef}>
      {/* Desktop/tablet sidebar */}
      <div className={`fixed h-full bg-black text-white z-50 ${isXs ? "hidden" : "flex flex-col"}`} style={sidebarStyle}>
        <div className={`flex items-center justify-start h-16 ${isLtLg ? 'px-2' : 'px-4'}`}>
          {isCollapsed && isLtLg && !isXs && <MenuIcon className="flex text-3xl" onClick={toggleSidebar} />}
          {!isCollapsed && isLtLg && !isXs && <MenuOpenIcon className="flex text-3xl" onClick={toggleSidebar} />}
          {(isLg || isXl) && renderIcon(logo)}
        </div>
        <nav className="mt-5">
          {menuItems.map((item) => (
            <SidebarItem key={`sidebaritem-${item.key}`} item={item} isCollapsed={isCollapsed} isActive={activeSection === item.key} onClick={(key) => setActiveSection(key)} />
          ))}
        </nav>
      </div>

      {/* Mobile sidebar */}
      {isXs && (
        <>    
          <div
            className={`${
              !isCollapsed ? "translate-x-0" : "-translate-x-full"
            } md:hidden fixed top-0 left-0 flex flex-col h-screen bg-black text-white transition-transform ease-in-out duration-30 z-50 shadow-2xl`}
            style={sidebarStyle}
          >
            <div className="flex items-center justify-between h-16 px-1">
              <button className="text-white p-2" onClick={toggleSidebar}>
                <MenuOpenIcon className="h-6 w-6 text-2xl" />
              </button>
            </div>
            <div className="px-4 pt-2 w-full">
              <Input placeholder={""} isSearchable={true}  />
            </div>
            <nav className="mt-5">
              {menuItems.map((item) => (
                <SidebarItem key={`sidebaritem-${item.key}`} item={item} isCollapsed={isCollapsed} isActive={activeSection === item.key} onClick={(key) => setActiveSection(key)} />
              ))}
            </nav>
          </div>
          <>
            {!isCollapsed && (
              <div
                className="md:hidden fixed top-0 left-0 w-full h-screen bg-black opacity-50 z-40"
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

