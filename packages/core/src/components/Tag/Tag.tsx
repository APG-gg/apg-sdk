import React, { FC, ReactNode } from "react";
import classNames from 'classnames';
import { renderIcon } from "../../utils";

export interface TagProps {
  type?: "default" | "outline";
  icon?: ReactNode | string | null;
  iconPosition?: "left" | "right";
  link?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const Tag: FC<TagProps> = ({ type = "outline", icon, iconPosition = "left", link, className, children }) => {
  return (
    <a
      href={link}
      className={classNames(
        {
          "bg-transparent border border-blue-400 hover:bg-blue-100/10 text-blue-400 hover:text-aqua-100 hover:border-aqua-100 font-medium py-2 px-4 active:text-aqua-600 active:border-aqua-600": type === "outline",
          "bg-blue hover:bg-aqua-100 text-white font-medium py-2 px-4 hover:shadow-sm hover:shadow-black-500 active:bg-aqua-600": type === "default",
        },
        `flex !leading-none text-sm rounded-full hover:bg-aqua-100/8 ${className} max-h-8 items-center justify-center gap-2 max-w-[100px] !cursor-pointer`
      )}
    >
      {iconPosition === "left" && renderIcon(icon)}
      {children}
      {iconPosition === "right" && renderIcon(icon)}
    </a>
  );
};

export default Tag;
