import React from "react";
import { FC, useEffect, useRef } from "react";
import XIcon from "@apg.gg/icons/lib/XIcon";
import { cn } from "../../utils/cn";

export interface DrawerProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  position?: "left" | "right" | "top" | "bottom" | "center";
  width?: string;
  height?: string;
  maxHeight?: string;
  maxWidth?: string;
  edgeToEdge?: boolean;
  closeButton?: React.ReactNode;
  isOpen: boolean;
  disableClickOutsideToClose : boolean;
  onClose: () => void;
  className?: string;
  classNameContent?: string;
  classNames?: {
    wrapper?: string;
    header?: string;
    content?: string;
    footer?: string
  },
  prefixCls?: string;
}

const Drawer: FC<DrawerProps> = ({
  header,
  content,
  footer,
  position = "center",
  width,
  height,
  maxHeight,
  maxWidth,
  edgeToEdge,
  closeButton,
  isOpen,
  disableClickOutsideToClose = false,
  onClose,
  className,
  classNameContent,
  classNames = {},
  prefixCls = "apg-drawer",
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        if (!disableClickOutsideToClose) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleEscape);
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);
  
  let transformClasses = "";
  let sizeClasses = "";
  let styleClassess = {};

  switch (position) {
    case "right":
      transformClasses = `top-0 right-0 bottom-0 ${isOpen ? "translate-x-0 h-screen rounded-l-2xl" : "translate-x-full"}`;
      break;
    case "left":
      transformClasses = `top-0 left-0 bottom-0 w-[320px] ${isOpen ? "translate-x-0 h-screen rounded-r-2xl" : "-translate-x-full"}`;
      break;
    case "top":
      transformClasses = `top-0 left-0 right-0 h-[320px] ${isOpen ? "translate-y-0 w-screen rounded-b-2xl" : "-translate-y-full"}`;
      break;
    case "bottom":
      transformClasses = `left-0 right-0 bottom-0 h-[320px] ${isOpen ? "translate-y-0 w-screen rounded-t-2xl" : "translate-y-full"}`;
      break;
    case "center":
      transformClasses = `top-1/2 left-1/2 ${isOpen ? "flex flex-col -translate-x-1/2 -translate-y-1/2 rounded-2xl" : "hidden"}`;
      sizeClasses = `${width ? '' : "w-[96%] md:w-1/2"} ${height ? '' : "min-h-[320px]"} ${maxHeight ? `max-h-${maxHeight}` : ""} ${maxWidth ? `max-w-${maxWidth}` : ""}`;
      break;
    default:
      break;
  }

  const backdropOpacity = isOpen ? "bg-opacity-5 absolute backdrop-blur-sm" : "bg-opacity-0 hidden";
  const backdropTransition = "duration-300 ease-in-out";
  const backdropClasses = `inset-0 z-[70] bg-sky-600 ${backdropOpacity} ${backdropTransition} ${className}`;

  return (
    <>
      <div 
        onClick={() => {
          if (!disableClickOutsideToClose) {
            onClose();
          }
        }} 
        className={backdropClasses}></div>
      <div
        className={cn(
          `${prefixCls}-wrapper`,
          `absolute text-white z-[70] transition-all duration-300 bg-black-900 shadow-md w-full h-full ${transformClasses} ${sizeClasses} ${className}`,
          {
            "max-w-xl max-h-[auto] h-auto w-[96%]": position === "center",
            "max-w-[320px] max-h-[100%]": position === "left" || position === "right",
            "max-w-[100%] max-h-[320px]": position === "top" || position === "bottom",
            "inset-0 w-screen h-screen max-w-screen max-h-screen": edgeToEdge,
          },
          classNames.wrapper
        )}
        style={{
          ...(edgeToEdge ? { width: "100vw", height: "100vh" } : {})
        }}
        ref={drawerRef}
      >
        {header ? (
          <div className={cn(
            `${prefixCls}-header`,
            "flex justify-between items-center px-4 py-3 border-b border-black-800",
            classNames.header,
          )}>
            {header}
            {closeButton ? (
              closeButton
            ) : (
              <div onClick={onClose} className="cursor-pointer ml-auto">
                <XIcon className="text-xl text-gray-100 hover:text-gray-400" />
              </div>
            )}
          </div>
        ) : null}
        <div className={cn(
          `${prefixCls}-content`,
          "p-4 flex-grow",
          classNames.content,
          classNameContent
        )}>{content}</div>
        {footer && (
          <div className={cn(
            `${prefixCls}-footer`,
            "px-4 py-3 border-t border-black-800",
            classNames.footer,
          )}>{footer}</div>
        )}
      </div>
    </>
  );
};

export default Drawer;
