import React, { FC, ReactNode } from "react";
import classNames from 'classnames';

export interface ButtonProps {
  type?: "default" | "outline";
  icon?: ReactNode | null;
  iconPosition?: "left" | "right";
  fontSize?: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ type = "default", icon, iconPosition = "left", fontSize = "base", onClick, className, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        {
          "bg-transparent border border-blue-400 hover:bg-blue-100/10 text-blue-400 hover:text-aqua-100 hover:border-aqua-100 font-medium py-2 px-4 active:text-aqua-600 active:border-aqua-600": type === "outline" && !disabled,
          "bg-transparent border border-white-600 text-white-600 opacity-40 hover:border-white-600 hover:text-white-600 font-medium py-2 px-4": type === "outline" && disabled,
          "bg-blue hover:bg-aqua-100 text-white font-medium py-2 px-4 hover:shadow-sm hover:shadow-black-500 active:bg-aqua-600": type === "default" && !disabled,
          "bg-white-600 border-white text-white opacity-40 hover:bg-white-600 hover:border-white hover:text-white hover:shadow-none font-medium py-2 px-4": type === "default" && disabled,
        },
        `text-${fontSize} rounded-full hover:bg-aqua-100/8 ${className}`
      )}
      disabled={disabled}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
