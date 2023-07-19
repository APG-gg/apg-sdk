import React, { FC, ReactNode } from "react";
import classNames from 'classnames';
import renderIcon from "../../utils/renderIcon";

export interface ButtonProps {
  type?: "primary" | "outline";
  icon?: ReactNode | string | null;
  rounded?: boolean;
  iconSize?: string;
  iconPosition?: "left" | "right";
  fontSize?: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ type = "primary", icon, rounded = true, iconSize = 'base', iconPosition = "left", fontSize = "base", onClick, className, children, disabled }) => {
  const iconClass = `text-${iconSize} flex`;
  const hasIconOnly = !children && icon;

  return (
    <button
      onClick={onClick}
      className={classNames(
        {
          "bg-transparent border border-blue-400 hover:bg-blue-100/10 text-blue-400 hover:text-aqua-100 hover:border-aqua-100 font-medium active:text-aqua-600 active:border-aqua-600": type === "outline" && !disabled,
          "bg-transparent border border-white-600 text-white-600 opacity-40 hover:border-white-600 hover:text-white-600 font-medium": type === "outline" && disabled,
          "bg-blue hover:bg-aqua-100 text-white font-medium hover:shadow-sm hover:shadow-black-500 active:bg-aqua-600": type === "primary" && !disabled,
          "bg-white-600 border-white text-white opacity-40 hover:bg-white-600 hover:border-white hover:text-white hover:shadow-none font-medium": type === "primary" && disabled,
          "px-4 py-2": children,
          "p-2": !children,
        },
        `text-${fontSize} flex items-center justify-center gap-2 hover:bg-aqua-100/8 ${className}`,
        hasIconOnly && "flex-row items-center justify-center",
        rounded ? "rounded-full" : "rounded-sm",
      )}
      disabled={disabled}
    >
      {children && iconPosition === "left" && renderIcon(icon, iconClass)}
      {children && children}
      {children && iconPosition === "right" && renderIcon(icon, iconClass)}
      {!children && renderIcon(icon, iconClass)}
    </button>
  );
};

export default Button;
