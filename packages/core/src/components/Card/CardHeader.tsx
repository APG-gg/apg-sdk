import React, { FC } from "react";
import getComponentByName from '../../utils/mapping';
import { CardProps, CardSocialProps } from './CardBase';

export interface CardHeaderProps extends Pick<CardProps, "id" | "name" | "avatar" | "socials"> {
  createdAt?: string;
  postedOn?: string;
  username?: string;
}

const CardHeader: FC<CardHeaderProps> = ({ id, name, avatar, socials }) => {
  const renderIcon = (icon: string | React.ReactNode) => {
    if (typeof icon === 'string') {
      return getComponentByName(icon);
    } else {
      return icon
    }
  }
  
  return (
    <div className="flex card-header px-4 py-[13px] h-[72px] gap-4">
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full" alt={name} src={avatar} draggable="false" />
      </div>
      <div className="flex flex-col items-start">
        <h4 className="text-white text-base uppercase font-bold !cursor-pointer">{name}</h4>
        <div className="socials flex gap-[10px]">
          {socials?.map((social: CardSocialProps) => (
            <a
              key={`${id}-${social.icon}`}
              className="text-black-400 text-lg leading-3 !cursor-pointer flex"
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {renderIcon(social.icon)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
