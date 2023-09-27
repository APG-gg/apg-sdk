import React, { FC, ReactNode, useState } from "react";
import { CardProps, CardSocialProps } from '../Card/CardBase';
import renderIcon from "../../utils/renderIcon";
import getRelativeTime from "../../utils/getRelativeTime";
import VerifiedIcon from "@apg.gg/icons/lib/VerifiedIcon";
import generateSocialMediaLink from "../../utils/generateSocialMediaLink";

export interface CardHeaderProps extends Pick<CardProps, "id" | "name" | "avatar" | "className" | "verify"> {
  socials?: CardSocialProps[];
  createdAt?: string;
  postedOn?: ReactNode | string | null;
  username?: string;
}

const CardHeader: FC<CardHeaderProps> = ({ id, name, avatar, socials, createdAt, postedOn, username, verify, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  
  return (
    <div className={`flex card-header px-4 py-[13px] h-[72px] gap-4 ${className}`}>
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full" alt={name} src={avatar} draggable="false" />
      </div>
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <h4 className="text-white text-title-md uppercase font-bold !cursor-pointer">{name}</h4>
          {verify && (<VerifiedIcon className="text-white text-lg flex" />)}
        </div>
        {username && (
          <div className="flex gap-[10px] items-center text-black-400 text-sm leading-3">
            <a href={`/${username}`} className="!cursor-pointer">
              @{username}
            </a>
            {createdAt && (
              <span>
                • {getRelativeTime(createdAt)}
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
