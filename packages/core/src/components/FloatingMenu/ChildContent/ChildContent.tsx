import React from 'react';
import { Directions } from '../FloatingMenu';
import classNames from 'classnames';

export interface ChildContentProps {
  content?: React.ReactNode;
  direction?: string;
  index?: number;
  isOpen?: boolean;
  onClick?: () => void;
  background?: string;
  slideSpeed?: number;
  className?: string;
}

const ChildContent = ({
  direction = Directions.Up,
  index = 1,
  isOpen = false,
  onClick = () => {},
  content,
  slideSpeed = 200,
  className,
  ...rest
}: ChildContentProps) => {
  const childClasses = classNames(
    'transition-all ease-in-out',
    className ? className : '',
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
    rest.background,
    direction === Directions.UpRight ? 'justify-center items-end' : '',
    'flex p-2 border-none rounded-xl shadow-md outline-none relative'
  )

  return (
    <li
      className={childClasses}
      onClick={isOpen ? onClick : undefined}
      style={{ transitionDuration: `${slideSpeed * index}ms` }}
    >
      {content}
    </li>
  );
};

export default ChildContent;
