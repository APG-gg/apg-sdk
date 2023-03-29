import React, { FC, ReactNode } from "react";
import Input from "../Input";
import Button from "../Button";
import useWindowSize from "../../hooks/useWindowSize";
import MenuIcon from '@apg.gg/icons/lib/MenuIcon';

export interface NavbarProps {
  logo: string | ReactNode
  isLoggedIn: boolean;
  onLogin: () => void;
  onSignup: () => void;
  onMenuToggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ logo, isLoggedIn, onLogin, onSignup, onMenuToggle }) => {
  const { isXs } = useWindowSize()
  const searchInput = !isXs && (
    <Input
      placeholder="Search"
      isSearchable={true}
    />
  );

  const authButtons = !isLoggedIn && (
    <>
      <Button onClick={onLogin} type="outline" className="text-sm">
        Login
      </Button>
      <Button onClick={onSignup} className="text-sm">
        Sign up
      </Button>
    </>
  );

  const renderIcon = (icon: string | React.ReactNode) => {
    if (typeof icon === 'string') {
      return <img src={icon as string} alt="Logo" className="h-10" />
    } else {
      return icon
    }
  }

  return (
    <nav className="bg-black shadow-lg w-full z-50 flex items-center justify-between px-4 py-2 h-14">
      {isXs && <MenuIcon className="text-white text-2xl" onClick={onMenuToggle} />}
      {isXs && renderIcon(logo)}
      {searchInput}
      <div className="flex gap-2">{authButtons}</div>
    </nav>
  );
}

export default Navbar;
