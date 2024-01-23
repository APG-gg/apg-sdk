import React, { FC, ReactNode } from "react";
import classNames from 'classnames';
import renderIcon from "../../utils/renderIcon";

export interface LinkProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
  type?: "primary" | "outline";
  icon?: ReactNode | string | null;
  iconSize?: string;
  iconPosition?: "left" | "right";
  fontSize?: string;
  className?: string;
  children?: ReactNode;
}

const Link: FC<LinkProps> = ({ href, target = "_self", type = "primary", icon, iconSize = 'base', iconPosition = "left", fontSize = "base", className, children }) => {
  const iconClass = `text-${iconSize} flex`;
  const hasIconOnly = !children && icon;

  return (
    <a
      href={href}
      target={target}
      className={classNames(
        {
          "bg-transparent border border-blue-400 hover:bg-blue-100/10 text-blue-400 hover:text-aqua-100 hover:border-aqua-100 font-medium active:text-aqua-600 active:border-aqua-600": type === "outline",
          "bg-blue hover:bg-aqua-100 text-white font-medium hover:shadow-sm hover:shadow-black-500 active:bg-aqua-600": type === "primary",
          "px-4 py-2": children,
          "p-2": !children,
        },
        `text-${fontSize} flex items-center justify-start gap-2 rounded-full hover:bg-aqua-100/8 ${className}`,
        hasIconOnly && "flex-row items-center justify-center"
      )}
    >
      {children && iconPosition === "left" && renderIcon(icon, iconClass)}
      {children && children}
      {children && iconPosition === "right" && renderIcon(icon, iconClass)}
      {!children && renderIcon(icon, iconClass)}
    </a>
  );
};

export default Link;
