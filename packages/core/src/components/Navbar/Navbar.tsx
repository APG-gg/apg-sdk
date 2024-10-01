import React, { FC, ReactNode } from "react";
import MenuIcon from '@apg.gg/icons/lib/MenuIcon';
import useWindowSize from "@apg.gg/core/lib/useWindowSize";
import Image from "next/image";

export interface NavbarProps {
  logo: string | ReactNode
  search?: ReactNode;
  actions?: ReactNode;
  onMenuToggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ 
  logo,
  search,
  actions,
  onMenuToggle 
}) => {
  const { isXs } = useWindowSize()
  const searchInput = !isXs ? search: null;

  const renderIcon = (icon: string | React.ReactNode) => {
    if (typeof icon === 'string') {
      return <Image src={icon as string} alt="Logo" className="h-8 w-8" width={40} height={40} />
    } else {
      return icon
    }
  }

  return (
    <nav className="bg-black shadow-lg w-full z-50 flex items-center justify-start sm:justify-end gap-2 px-4 py-2 h-14">
      {isXs ? (
        <div className="flex items-center justify-start">
          <div className="flex min-w-[50px] h-8 gap-2">
            {renderIcon(logo)}
            <MenuIcon className="flex items-center text-white text-2xl" onClick={onMenuToggle} />
          </div>
        </div>
      ) : null}
      {searchInput}
      {actions ? (
        <div className="flex gap-2 ml-auto">{actions}</div>
      ) : null}
    </nav>
  );
}

export default Navbar;
