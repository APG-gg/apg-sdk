import React, { FC, ReactNode } from "react";
import Input from "../Input";
import useWindowSize from "../../hooks/useWindowSize";
import MenuIcon from '@apg.gg/icons/lib/MenuIcon';

export interface NavbarProps {
  logo: string | ReactNode
  searchText?: string;
  actions?: ReactNode;
  onMenuToggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ 
  logo,
  searchText = 'Search',
  actions,
  onMenuToggle 
}) => {
  const { isXs } = useWindowSize()
  const searchInput = !isXs ? (
    <Input
      placeholder={searchText}
      isSearchable={true}
    />
  ) : null;

  const renderIcon = (icon: string | React.ReactNode) => {
    if (typeof icon === 'string') {
      return <img src={icon as string} alt="Logo" className="h-10 w-10" />
    } else {
      return icon
    }
  }

  return (
    <nav className="bg-black shadow-lg w-full z-50 flex items-center justify-start gap-2 px-4 py-2 h-14">
      {isXs ? (
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-[1_1_40%] min-w-[50px] h-8">
            <MenuIcon className="flex items-center text-white text-2xl" onClick={onMenuToggle} />
          </div>
          <div className="flex h-full w-10">
            {renderIcon(logo)}
          </div>
          <div className="flex flex-[1_1_40%] min-w-[50px] h-8"></div>
        </div>
      ) : null}
      {searchInput}
      {!isXs && actions ? (
        <div className="flex gap-2 ml-auto">{actions}</div>
      ) : null}
    </nav>
  );
}

export default Navbar;
