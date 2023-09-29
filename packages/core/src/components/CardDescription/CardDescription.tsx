import React, { FC } from "react";
import TextLinker from "../TextLinker";
import TranslationObject from "../../domain/translationObject.interface";

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

const CardDescription: FC<CardDescriptionProps & TranslationObject> = ({ 
  shortDescription, 
  showAbout = false, 
  columns = 2, 
  className,
  translationObject
}) => {  
  return (
    <div className={`p-4 w-full ${className}`}>
      {showAbout && (<strong className="text-white text-base">{translationObject?.aboutMe}</strong>)}
      <div className={`overflow-hidden max-h-10 text-black-400 text-sm text-ellipsis ${columns === 2 ? 'line-clamp-2' : 'line-clamp-3'} box`}>
        <TextLinker text={shortDescription} />
      </div>
    </div>
  );
};

export default CardDescription;
