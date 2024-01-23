import React, { useState } from 'react';

interface ScrollbarProps {
  children: React.ReactNode;
}

const Scrollbar: React.FC<ScrollbarProps> = ({ children }) => {
  const [scrollbarPosition, setScrollbarPosition] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const scrollableDistance = scrollHeight - clientHeight;
    const currentPosition = scrollTop / scrollableDistance;
    setScrollbarPosition(currentPosition);
  };

  return (
    <div className="relative">
      <div
        className="absolute top-0 bottom-0 right-0 bg-gray-200 rounded-full w-4"
        style={{
          transform: `translateY(${scrollbarPosition * 100}%)`,
        }}
      />
      <div className="overflow-y-scroll" onScroll={handleScroll}>
        {children}
      </div>
    </div>
  );
};

export default Scrollbar;
