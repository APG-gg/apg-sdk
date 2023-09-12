import React, { ReactNode } from 'react';

export interface MainButtonProps {
  iconResting: ReactNode;
  iconActive: ReactNode;
  isOpen?: boolean;
  background: string;
  onClick: any;
}

const MainButton = ({
  iconResting,
  iconActive,
  isOpen,
  background,
  onClick
}: MainButtonProps) => {
  return (
    <button
      className={`flex border-none rounded-full shadow-md cursor-pointer outline-none p-0 select-none font-bold justify-center items-center w-8 h-8 ${background}`}
      onClick={onClick}
    >
      <div
        className={`flex transition-transform transform ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? iconActive : iconResting}
      </div>
    </button>
  );
};

export default MainButton;
