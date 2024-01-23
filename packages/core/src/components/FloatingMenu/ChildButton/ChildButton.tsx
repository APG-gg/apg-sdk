import React from 'react';
import { Directions } from '../FloatingMenu';
import classNames from 'classnames';
import Tooltip from '../../Tooltip';

export interface ChildButtonProps {
  icon?: React.ReactNode;
  direction?: string;
  tooltipPositon?: "right" | "left" | "top" | "bottom" | undefined;
  text: string;
  index?: number;
  isOpen?: boolean;
  onClick?: () => void;
  background?: string;
  slideSpeed?: number;
}

const ChildButton = ({
  direction = Directions.Up,
  tooltipPositon = 'right',
  text,
  index = 1,
  isOpen = false,
  onClick = () => {},
  icon,
  slideSpeed = 200,
  ...rest
}: ChildButtonProps) => {
  const offsetXright = `-${2 * index}rem`;
  const offsetXleft = `${2 * index}rem`;
  const offsetYup = `${2 * index}rem`;
  const offsetYdown = `-${2 * index}rem`;

  const childClasses = classNames(
    'transition-all ease-in-out',
    !isOpen && direction === 'right' ? '' : 'translate-x-0',
    !isOpen && direction === 'left' ? '' : 'translate-x-0',
    !isOpen && direction === 'up' ? '' : 'translate-y-0',
    !isOpen && direction === 'down' ? '' : 'translate-y-0',
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
    rest.background,
    'flex border-none rounded-full shadow-md cursor-pointer outline-none p-0 select-none font-bold justify-center items-center w-8 h-8'
  )

  const childStyles = {
    transitionDuration: `${slideSpeed * index}ms`,
    transform: !isOpen && direction === 'right' ? `translateX(${offsetXright})` : 
              !isOpen && direction === 'left' ? `translateX(${offsetXleft})` :
              !isOpen && direction === 'up' ? `translate(0, ${offsetYup})` :
              !isOpen && direction === 'down' ? `translate(0, ${offsetYdown})` : '',
  };

  return (
    <li
      className={childClasses}
      onClick={isOpen ? onClick : undefined}
      style={childStyles}
    >
      <Tooltip placement={tooltipPositon} text={text}>
        {icon}
      </Tooltip>
    </li>
  );
};

export default ChildButton;
