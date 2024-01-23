import classNames from 'classnames';
import React from 'react';

export const DIRECTIONS = {
  up: 'flex-col-reverse',
  down: 'flex-col',
  left: 'flex-row-reverse',
  right: 'flex-row',
  'up-right': 'flex-col-reverse',
  'up-left': 'flex-col-reverse',
  'down-right': 'flex-col',
  'down-left': 'flex-col',
  'left-up': 'flex-row-reverse',
  'left-down': 'flex-row-reverse',
  'right-up': 'flex-row',
  'right-down': 'flex-row'
};

export enum Directions {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
  UpRight = 'up-right',
  UpLeft = 'up-left',
  DownRight = 'down-right',
  DownLeft = 'down-left',
  LeftUp = 'left-up',
  LeftDown = 'left-down',
  RightUp = 'right-up',
  RightDown = 'right-down'
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

  const childClasses = classNames(
    direction === Directions.UpRight ? 'justify-center items-end' : '',
    direction === Directions.UpLeft ? 'justify-center items-start' : '',
    direction === Directions.DownRight ? 'justify-center items-end' : '',
    direction === Directions.DownLeft ? 'justify-center items-start' : '',
    direction === Directions.LeftUp ? 'justify-start items-center' : '',
    direction === Directions.LeftDown ? 'justify-start items-center' : '',
    direction === Directions.RightUp ? 'justify-end items-center' : '',
    direction === Directions.RightDown ? 'justify-end items-center' : '',
    direction === Directions.Up || direction === Directions.Down || direction === Directions.Right || direction === Directions.Left ? 'justify-start items-start' : '',
  )

  return (
    <ul
      className={`flex ${DIRECTIONS[direction as keyof typeof DIRECTIONS]} ${childClasses} list-none m-0 p-0 gap-2`}
      {...rest}
    >
      {childrenWithProps}
    </ul>
  );
};

export default FloatingMenuItem;
