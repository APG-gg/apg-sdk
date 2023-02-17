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
}

const CardDescription: FC<CardDescriptionProps> = ({ shortDescription, showAbout = false }) => {  
  return (
    <div className="p-4 h-24">
      {showAbout && (<strong className="text-white text-base">About me:</strong>)}
      <div className="overflow-hidden max-h-10 text-black-400 text-sm text-ellipsis line-clamp-2 d-box">
        <TextLinker text={shortDescription} />
      </div>
    </div>
  );
};

export default CardDescription;
