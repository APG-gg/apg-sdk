import clx from 'classnames';
import React, { useState, useRef, useEffect, ReactElement } from 'react';
import { composeRef, supportRef } from 'rc-util/lib/ref';
import renderIcon from '../../utils/renderIcon';

export interface DropdownItem {
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
  icon?: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
}

export interface DropdownProps {
  items: DropdownItem[];
  children: React.ReactElement;
  prefixCls?: string;
  trigger?: 'click' | 'hover';
  placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'top' | 'bottom';
  delay?: number;
  classNames?: {
    container: string;
    menu: string;
    item: string;
  }
}

const Dropdown: React.FC<DropdownProps> = ({ 
  items, 
  children,
  prefixCls = 'apg-dropdown',
  trigger, 
  placement = 'bottomLeft', 
  delay = 200,
  classNames = {
    container: '',
    menu: '',
    item: '',
  }
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef(null);

  // Cerrar el dropdown cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (onClick?: () => void) => {
    setIsOpen(false);
    onClick && onClick();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current!);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover' && delay) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, delay);
    }
  };

  // Asegúrate de limpiar el timeout si el componente se desmonta
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const triggerEvent = trigger === 'hover';

  const childrenNode = React.cloneElement(children, {
    className: clx(
      children.props?.className
    ),
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      // Llama al controlador de eventos original, si existe
      if (children.props.onClick) {
        children.props.onClick(event);
      }
      
      if (triggerEvent) {
        return;
      }

      handleClick(event);
    },
    ref: supportRef(children)
      ? composeRef(
          childRef,
          (children as ReactElement & { ref: React.Ref<HTMLElement> }).ref,
        )
      : undefined,
  });

  return (
    <div
      ref={dropdownRef}
      className={clx(
        prefixCls,
        "relative h-8 flex items-center justify-center cursor-pointer",
        classNames.container
      )}
      onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined} // Agrega el evento onMouseEnter aquí
      onMouseLeave={trigger === 'hover' ? handleMouseLeave : undefined} // Agrega el evento onMouseLeave aquí
    >
      {isOpen && (
        <div
          className={clx(
            `${prefixCls}-menu`,
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
            'bg-black-900 shadow-md rounded p-2 z-50',
            classNames.menu
          )}
          onMouseEnter={handleMouseEnter}  // Evitar que el menú se cierre cuando el usuario pase el ratón sobre él.
          onMouseLeave={handleMouseLeave}  // Volver a activar el cierre del menú cuando el usuario salga del Dropdown.
        >
          {items.map((item) => (
            <div
              key={item.key}
              onClick={() => handleItemClick(item.onClick)}
              className={clx(
                `${prefixCls}-item`,
                'flex gap-3 items-center p-2',
                {
                  'text-white': !item.disabled,
                  'text-gray-400': item.disabled,
                  'hover:bg-black-800': !item.disabled,
                  'cursor-pointer': !item.disabled,
                  'text-red-600': item.danger,
                },
                classNames.item,
                item.className
              )}
            >
              {item.icon && renderIcon(item.icon, item.className)} {item.label}
            </div>
          ))}
        </div>
      )}
      {childrenNode}
    </div>
  );
};

export default Dropdown;
