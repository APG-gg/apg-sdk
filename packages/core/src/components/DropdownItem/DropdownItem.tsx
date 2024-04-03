import React, { FC } from "react";
import renderIcon from "../../utils/renderIcon";
import { cn } from "../../utils/cn";

export interface DropdownItemChild {
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
  icon?: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
}

export type DropdownItemProps = {
  item: DropdownItemChild;
  handleItemClick: (onClick?: () => void) => void;
  classNames?: {
    item?: string;
  };
  prefixCls?: string;
};

const DropdownItem: FC<DropdownItemProps> = ({
  item,
  handleItemClick,
  classNames,
  prefixCls,
}) => {
  return (
    <div
      key={item.key}
      onClick={() => handleItemClick(item.onClick)}
      className={cn(
        `${prefixCls}-item`,
        'flex gap-3 items-center p-2',
        {
          'text-white': !item.disabled,
          'text-gray-400': item.disabled,
          'hover:bg-black-800': !item.disabled,
          'cursor-pointer': !item.disabled,
          'text-red-600': item.danger,
        },
        classNames?.item,
        item.className
      )}
    >
      {item.icon && renderIcon(item.icon, item.className)} {item.label}
    </div>
  );
}

export default DropdownItem;