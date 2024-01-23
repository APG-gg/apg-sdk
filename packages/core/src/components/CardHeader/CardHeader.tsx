import React, { FC, ReactNode } from "react";
import { CardProps, CardSocialProps } from '../CardBase/CardBase';
import renderIcon from "../../utils/renderIcon";
import getRelativeTime from "../../utils/getRelativeTime";
import VerifiedColorIcon from '@apg.gg/icons/lib/VerifiedColorIcon';
import BetaColorIcon from '@apg.gg/icons/lib/BetaColorIcon';
import Tooltip from "../Tooltip";
import TranslationObject from "../../domain/translationObject.interface";

export interface CardHeaderProps extends Pick<CardProps, "id" | "name" | "avatar" | "link" | "className" | "isVerify" | "isBeta"> {
  socials?: CardSocialProps[];
  createdAt?: string;
  postedOn?: ReactNode | string | null;
  username?: string;
  isWorker?: boolean;
  isPartner?: boolean;
  isSponsored?: boolean;
  linkComponent?: React.ComponentType<any>
}

const CardHeader: FC<CardHeaderProps & TranslationObject> = ({ 
  id, 
  name, 
  avatar,
  link,
  socials, 
  createdAt, 
  postedOn, 
  username, 
  isVerify, 
  isBeta, 
  isWorker, 
  isPartner, 
  isSponsored, 
  className = '',
  linkComponent,
  translationObject
}) => {
  const LinkComponent = linkComponent || "a";

  return (
    <div className={`flex card-header px-4 py-[13px] h-[72px] gap-4 ${className}`}>
      <LinkComponent href={link} className="flex items-center">
        <img className="w-10 h-10 rounded-full" alt={name} src={avatar} draggable="false" />
      </LinkComponent>
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <LinkComponent href={link} className="cursor-pointer">
            <h4 className="text-white text-title-md uppercase font-bold !cursor-pointer">{name}</h4>
          </LinkComponent>
          {isVerify ? (
            <Tooltip placement="top" text={translationObject?.thisAccountIsVerified || "Esta cuenta está verificada"}>
              <VerifiedColorIcon className="text-lg flex cursor-pointer" />
            </Tooltip>
          ): null}
          {isBeta ? (
            <Tooltip placement="top" text={translationObject?.thisAccountIsBetaTester || "Esta cuenta es de un beta tester"}>
              <BetaColorIcon className="text-lg flex cursor-pointer" />
            </Tooltip>
          ): null}
        </div>
        {username && (
          <div className="flex gap-[10px] items-center text-black-400 text-sm leading-3">
            <LinkComponent href={link} className="cursor-pointer">
              @{username}
            </LinkComponent>
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
