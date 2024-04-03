import React, { FC, ReactNode, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export interface TooltipProps {
  children: ReactNode;
  text: ReactNode | string;
  placement?: "top" | "bottom" | "left" | "right";
  width?: string;
  hideMobile?: boolean;
}

const Tooltip: FC<TooltipProps> = ({ children, text, placement = "right", width = "max-content", hideMobile = false }) => {
  const { isLtMd } = useWindowSize();
  const [isShown, setIsShown] = useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  const handleTouchStart = () => {
    setIsShown(true);
  };

  const handleTouchEnd = () => {
    setIsShown(false);
  };

  const tooltipClassNames = `absolute py-2 px-4 bg-black-800 text-white text-sm rounded-full shadow-lg z-[90] ${
    placement === "top"
      ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
      : placement === "bottom"
      ? "top-full left-1/2 -translate-x-1/2 mt-2"
      : placement === "left"
      ? "right-full top-1/2 -translate-y-1/2 mr-2"
      : "left-full top-1/2 -translate-y-1/2 ml-2"
  }`;

  if (isLtMd && hideMobile) {
    return <>{children}</>;
  }

  return (
    <div className="relative flex items-center justify-center">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex items-center justify-center"
      >
        {children}
      </div>
      {isShown && (
        <div className={tooltipClassNames} style={{ width }}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
