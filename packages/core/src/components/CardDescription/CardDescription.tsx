import React, { FC } from "react";
import TextLinker from "../TextLinker";

export interface Social {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface CardDescriptionProps {
  shortDescription: string;
  showAbout?: boolean;
  columns?: number;
  className?: string;
}

const CardDescription: FC<CardDescriptionProps> = ({ shortDescription, showAbout = false, columns = 2, className }) => {  
  return (
    <div className={`p-4 w-full ${className}`}>
      {showAbout && (<strong className="text-white text-base">About me:</strong>)}
      <div className={`overflow-hidden max-h-10 text-black-400 text-sm text-ellipsis ${columns === 2 ? 'line-clamp-2' : 'line-clamp-3'} box`}>
        <TextLinker text={shortDescription} />
      </div>
    </div>
  );
};

export default CardDescription;
