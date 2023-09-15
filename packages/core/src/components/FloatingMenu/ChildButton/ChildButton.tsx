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
  const offsetXright = index === 1 ? '-translate-x-8' : index === 2 ? '-translate-x-16' : '-translate-x-24';
  const offsetXleft = index === 1 ? 'translate-x-8' : index === 2 ? 'translate-x-16' : 'translate-x-24';
  const offsetYup = index === 1 ? 'translate-y-8' : index === 2 ? 'translate-y-16' : 'translate-y-24';
  const offsetYdown = index === 1 ? '-translate-y-8' : index === 2 ? '-translate-y-16' : '-translate-y-24';

  const childClasses = classNames(
    'transition-all ease-in-out',
    !isOpen && direction === 'right' ? offsetXright : 'translate-x-0',
    !isOpen && direction === 'left' ? offsetXleft : 'translate-x-0',
    !isOpen && direction === 'up' ? offsetYup : 'translate-y-0',
    !isOpen && direction === 'down' ? offsetYdown : 'translate-y-0',
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
    rest.background,
    'flex border-none rounded-full shadow-md cursor-pointer outline-none p-0 select-none font-bold justify-center items-center w-8 h-8'
  )

  return (
    <li
      className={childClasses}
      onClick={isOpen ? onClick : undefined}
      style={{ transitionDuration: `${slideSpeed * index}ms` }}
    >
      <Tooltip placement={tooltipPositon} text={text}>
        {icon}
      </Tooltip>
    </li>
  );
};

export default ChildButton;
