import React, { FC, ReactNode } from "react";
import { CardProps, CardSocialProps } from './CardBase';
import { getRelativeTime, renderIcon } from "../../utils";
import VerifiedIcon from "@apg.gg/icons/lib/VerifiedIcon";

export interface CardHeaderProps extends Pick<CardProps, "id" | "name" | "avatar" | "className" | "verify"> {
  socials?: CardSocialProps[];
  createdAt?: string;
  postedOn?: ReactNode | string | null;
  username?: string;
}

const CardHeader: FC<CardHeaderProps> = ({ id, name, avatar, socials, createdAt, postedOn, username, verify, className = '' }) => {
  
  return (
    <div className={`flex card-header px-4 py-[13px] h-[72px] gap-4 ${className}`}>
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full" alt={name} src={avatar} draggable="false" />
      </div>
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <h4 className="text-white text-base uppercase font-bold !cursor-pointer">{name}</h4>
          {verify && (<VerifiedIcon className="text-white text-lg flex" />)}
        </div>
        {socials && socials.length > 0 && (
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
        )}
        {username && (
          <div className="flex gap-[10px] items-center text-black-400 text-sm leading-3">
            <a href={`/${username}`} className="!cursor-pointer">
              @{username}
            </a>
            •
            {createdAt && (
              <span>
                {getRelativeTime(createdAt)}
              </span>
            )}
          </div>
        )}
      </div>
      {postedOn && (
        <div className="flex items-center ml-auto text-2xl text-black-400">
          {renderIcon(postedOn)}
        </div>
      )}
    </div>
  );
};

export default CardHeader;
