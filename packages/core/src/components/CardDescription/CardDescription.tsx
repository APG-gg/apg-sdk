import React, { FC } from "react";
import TextLinker from "../TextLinker";
import TranslationObject from "../../domain/translationObject.interface";
import { RawDraftContentState } from "draft-js";

export interface Social {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface CardDescriptionProps {
  shortDescription: string;
  shortRichDescription: RawDraftContentState;
  showAbout?: boolean;
  columns?: number;
  className?: string;
  linkComponent: React.ComponentType<any>;
  locale: string;
}

const CardDescription: FC<CardDescriptionProps & TranslationObject> = ({ 
  shortDescription = '', 
  shortRichDescription = { blocks: [], entityMap: {} },
  showAbout = false, 
  columns = 2, 
  className,
  linkComponent,
  locale,
  translationObject
}) => {  
  const hasRichDescription = (aboutRich: RawDraftContentState) => {
    if ('blocks' in aboutRich && 'entityMap' in aboutRich) {
      // Verificar si blocks es un array con al menos un elemento
      if (Array.isArray(aboutRich.blocks) && aboutRich.blocks.length > 0) {
        return true;
      }
    }

    return false;
  };

  return (
    <div className={`p-4 w-full ${className}`}>
      {showAbout && (<strong className="text-white text-base">{translationObject?.aboutMe}</strong>)}
      <div className={`overflow-hidden text-black-400 text-sm text-ellipsis ${columns === 2 ? 'line-clamp-2 max-h-10' : 'line-clamp-3 max-h-24'} box`}>
        {hasRichDescription(shortRichDescription) ? (
          <TextLinker content={shortRichDescription} linkComponent={linkComponent} locale={locale} />
        ) : (
          <TextLinker text={shortDescription || ''} linkComponent={linkComponent} locale={locale} />
        )} 
      </div>
    </div>
  );
};

export default CardDescription;
