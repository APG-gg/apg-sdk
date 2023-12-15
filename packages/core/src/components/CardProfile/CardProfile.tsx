import React, { FC } from 'react';
import CardBase, { CardProps } from '../CardBase/CardBase';
import TranslationObject from '../../domain/translationObject.interface';
import CardDescription from '../CardDescription';
import Tooltip from '../Tooltip';
import VerifiedColorIcon from '@apg.gg/icons/lib/VerifiedColorIcon';
import BetaColorIcon from '@apg.gg/icons/lib/BetaColorIcon';

export interface CardProfileProps extends Omit<CardProps, "description" | "tags"> {
  className?: string;
  classNameWrapper?: string;
  profileType?: string;
  type?: string;
  linkComponent?: React.ComponentType<any>
  link?: string;
  actions?: React.ReactNode;
  tags?: React.ReactNode;
}

const CardProfile: FC<CardProfileProps & TranslationObject> = ({
  id,
  name,
  shortDescription,
  banner,
  link,
  username,
  avatar,
  isVerify,
  isBeta,
  className,
  linkComponent,
  tags,
  translationObject,
  actions
}) => {
  const LinkComponent = linkComponent || "a";
  const hasDescription = !!shortDescription;

  return (
    <CardBase
      className={`flex flex-col w-full max-w-[360px] min-h-[350px] ${className}`}
      classNameWrapper="flex flex-col h-[27rem] gap-2 overflow-visible"
    >
      <div className="h-20 relative rounded-t-xl overflow-hidden mx-1.5 mt-2.5">
        <LinkComponent href={link}>
          <img src={banner || "https://statics.apg.gg/default/post.png"} alt={name} className="w-full h-full object-cover" />
        </LinkComponent>
      </div>

      <div className="card-profile-header flex w-full px-3.5 justify-start">
        <LinkComponent href={link} className="flex items-center w-[90px] h-auto min-w-[3rem] -mt-[15%] relative z-40">
          <img className="w-[90px] h-[90px] border-2 border-black-800 rounded-full" alt={name} src={avatar} draggable="false" />
        </LinkComponent>

        {actions ? (
          <div className="flex flex-col gap-2 ml-auto">
            {actions}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col w-full px-3.5">
        <div className="flex items-center gap-2">
          <LinkComponent href={link} className="cursor-pointer">
            <h4 className="text-white text-title-md font-bold !cursor-pointer">{name}</h4>
          </LinkComponent>
          {isVerify ? (
            <Tooltip placement="top" text={translationObject?.thisAccountIsVerified || "Esta cuenta está verificada"}>
              <VerifiedColorIcon className="text-lg flex cursor-pointer" />
            </Tooltip>
          ) : null}
          {isBeta ? (
            <Tooltip placement="top" text={translationObject?.thisAccountIsBetaTester || "Esta cuenta es de un beta tester"}>
              <BetaColorIcon className="text-lg flex cursor-pointer" />
            </Tooltip>
          ) : null}
        </div>
        {username && (
          <div className="flex gap-[10px] items-center text-black-400 text-sm leading-3">
            <LinkComponent href={link} className="cursor-pointer">
              @{username}
            </LinkComponent>
          </div>
        )}
      </div>

      {hasDescription ? (
        <CardDescription
          className="!py-0 px-3.5"
          {...{
            shortDescription,
            translationObject,
            linkComponent,
            columns: 3
          }}
          showAbout={false}
        />
      ) : null}

      {tags && (
        <div className="flex flex-wrap gap-2 px-3.5 pb-4 mt-auto">
          {tags}
        </div>
      )}
    </CardBase>
  );
};

export default CardProfile;
