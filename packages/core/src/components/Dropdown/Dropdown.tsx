import classNames from 'classnames';
import React, { useState, useRef } from 'react';
import renderIcon from '../../utils/renderIcon';

export interface DropdownItem {
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
  icon?: string;
  onClick?: () => void;
}

export interface DropdownProps {
  items: DropdownItem[];
  placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'top' | 'bottom';
  children?: React.ReactNode;
  width?: number;
}

const Dropdown: React.FC<DropdownProps> = ({ items, placement = 'bottomLeft', children, width = 192 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleItemClick = (onClick?: () => void) => {
    setIsOpen(false);
    onClick && onClick();
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current!);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative h-8 flex items-center justify-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isOpen && (
        <div
          className={classNames(
            'absolute',
            {
              'top-10 left-0': placement === 'bottomLeft',
              'bottom-10 left-0': placement === 'topLeft',
              'top-10 right-0': placement === 'bottomRight',
              'bottom-10 right-0': placement === 'topRight',
              'top-10 left-1/2 transform -translate-x-1/2': placement === 'bottomCenter',
              'bottom-10 left-1/2 transform -translate-x-1/2': placement === 'topCenter',
              'top-10': placement === 'bottom' && children,
              'bottom-10': placement === 'top' && children,
            },
            'bg-black-900 shadow-md rounded p-2 z-50'
          )}
          style={{
            width: `${width}px`
          }}
          onMouseEnter={handleMouseEnter}  // Evitar que se cierre el menú flotante cuando el usuario pase sobre él.
          onMouseLeave={handleMouseLeave}  // Volver a activar el cierre del menú cuando el usuario salga del Dropdown.
        >
          {items.map((item) => (
            <div
              key={item.key}
              onClick={() => handleItemClick(item.onClick)}
              className={`flex gap-3 items-center cursor-pointer p-2 hover:bg-black-800 ${
                item.disabled ? 'text-gray-400' : 'text-white'
              } ${item.danger ? 'text-red-600' : ''}`}
            >
              {item.icon && renderIcon(item.icon)} {item.label}
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  );
};

export default Dropdown;
