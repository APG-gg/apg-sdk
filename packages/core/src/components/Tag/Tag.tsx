import React, { FC, ReactNode } from "react";
import classNames from 'classnames';
import { renderIcon } from "../../utils";

export const typeMap = {
  blue: {
    borderColor: "border-blue-400",
    textColor: "text-blue-400",
    hoverBgColor: "hover:bg-blue-100/10",
    hoverBgOpacity: "hover:bg-aqua-100/8"
  },
  aqua: {
    borderColor: "border-aqua-400",
    textColor: "text-aqua-400",
    hoverBgColor: "hover:bg-aqua-100/10",
    hoverBgOpacity: "hover:bg-aqua-100/8"
  },
  green: {
    borderColor: "border-green-400",
    textColor: "text-green-400",
    hoverBgColor: "hover:bg-green-100/10",
    hoverBgOpacity: "hover:bg-green-100/8"
  },
  yellow: {
    borderColor: "border-yellow-400",
    textColor: "text-yellow-400",
    hoverBgColor: "hover:bg-yellow-100/10",
    hoverBgOpacity: "hover:bg-yellow-100/8"
  },
  fucsia: {
    borderColor: "border-fucsia-400",
    textColor: "text-fucsia-400",
    hoverBgColor: "hover:bg-fucsia-100/10",
    hoverBgOpacity: "hover:bg-fucsia-100/8"
  },
  red: {
    borderColor: "border-red-400",
    textColor: "text-red-400",
    hoverBgColor: "hover:bg-red-100/10",
    hoverBgOpacity: "hover:bg-red-100/8"
  }
};

export interface TagProps {
  type?: "blue" | "aqua" | "green" | "yellow" | "fucsia" | "red";
  icon?: ReactNode | string | null;
  iconPosition?: "left" | "right";
  link?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const Tag: FC<TagProps> = ({ type = "blue", icon, iconPosition = "left", link, className, children }) => {
  return (
    <a
      href={link}
      className={classNames(
        "bg-transparent border",
        typeMap[type]?.borderColor,
        typeMap[type]?.hoverBgColor,
        typeMap[type]?.textColor,
        "font-medium py-2 px-4 flex !leading-none text-sm rounded-full",
        typeMap[type]?.hoverBgOpacity,
        className,
        "max-h-8 items-center justify-center gap-2 max-w-[100px] !cursor-pointer"
      )}
    >
      {iconPosition === "left" && renderIcon(icon)}
      {children}
      {iconPosition === "right" && renderIcon(icon)}
    </a>
  );
};

export default Tag;
