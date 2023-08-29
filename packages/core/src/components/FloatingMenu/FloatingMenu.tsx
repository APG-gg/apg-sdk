import React from 'react';

export const DIRECTIONS = {
  up: 'flex-col-reverse',
  down: 'flex-col',
  left: 'flex-row-reverse',
  right: 'flex-row',
};

export enum Directions {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

export interface FloatingMenuItemProps {
  isOpen: boolean;
  slideSpeed: number;
  direction: string;
  index: number;
  children: React.ReactNode;
}

const FloatingMenuItem = ({
  isOpen,
  slideSpeed = 500,
  direction = Directions.Down,
  index,
  children,
  ...rest
}: FloatingMenuItemProps) => {
  const childrenWithProps = React.Children.map(
    children,
    (child, index) => {
      if (!child) {
        return null;
      }
      return React.cloneElement(child as React.ReactElement<any>, {
        isOpen,
        slideSpeed,
        direction,
        index
      });
    }
  );

  return (
    <ul
      className={`flex ${DIRECTIONS[direction as keyof typeof DIRECTIONS]} justify-center items-center list-none m-0 p-0 gap-2`}
      {...rest}
    >
      {childrenWithProps}
    </ul>
  );
};

export default FloatingMenuItem;
