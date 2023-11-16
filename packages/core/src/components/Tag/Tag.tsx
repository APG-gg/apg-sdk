import React, { FC, ReactNode } from "react";
import renderIcon from "../../utils/renderIcon";
import classNames from 'classnames';
import { TypeMapKey, typeMap } from "../../utils/colorTypeMap";

export interface TagProps {
  type?: TypeMapKey;
  icon?: ReactNode | string | null;
  iconPosition?: "left" | "right";
  link?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  linkComponent?: React.ComponentType<any>
}

const Tag: FC<TagProps> = ({ type = 'blue', icon, iconPosition = "left", link, className, children, size = 'md', linkComponent }) => {
  const typeStyles = typeMap[type] || {};
  const textColor = typeStyles.textColor;
  const borderColor = typeStyles.borderColor;
  const hoverBgColor = typeStyles.hoverBgColor14;
  const activeBgColor = typeStyles.activeBgColor08;

  const LinkComponent = linkComponent || "a";

  return (
    <LinkComponent
      href={link}
      className={classNames(
        "bg-transparent border",
        borderColor,
        hoverBgColor,
        textColor,
        "font-medium px-2 inline-flex rounded-full",
        activeBgColor,
        className,
        size === "sm" && "h-5 max-h-5",
        size === "md" && "h-6 max-h-6",
        size === "lg" && "h-7 max-h-7",
        "items-center justify-center gap-1 cursor-pointer"
      )}
    >
      {iconPosition === "left" && renderIcon(icon, (size === "sm" ? "w-3 h-3 text-xs" : size === "lg" ? " w-4 h-4 text-base" : "w-[14px] h-[14px] text-sm"))}
      <span className={classNames(
        size === "sm" && "text-[11px] leading-[20px]",
        size === "md" && "text-xs leading-[24px]",
        size === "lg" && "text-sm leading-[28px]",
      )}>{children}</span>
      {iconPosition === "right" && renderIcon(icon, (size === "sm" ? "w-3 h-3 text-xs" : size === "lg" ? " w-4 h-4 text-base" : "w-[14px] h-[14px] text-sm"))}
    </LinkComponent>
  );
};

export default Tag;
