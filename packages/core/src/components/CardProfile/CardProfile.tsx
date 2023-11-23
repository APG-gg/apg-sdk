import React, { FC } from 'react';
import CardBase, { CardProps, CardTagProps } from '../CardBase/CardBase';
import Tag from '../Tag';
import TranslationObject from '../../domain/translationObject.interface';
import CardDescription from '../CardDescription';
import Tooltip from '../Tooltip';
import VerifiedColorIcon from '@apg.gg/icons/lib/VerifiedColorIcon';
import BetaColorIcon from '@apg.gg/icons/lib/BetaColorIcon';
import Button from '../Button';

export interface CardProfileProps extends Omit<CardProps, "description"> {
  onAction: () => void;
  className?: string;
  classNameWrapper?: string;
  profileType?: string;
  type?: string;
  linkComponent?: React.ComponentType<any>
  link?: string;
}

const CardProfile: FC<CardProfileProps & TranslationObject> = ({
  id,
  name,
  shortDescription,
  banner,
  link,
  username,
  avatar,
  socials,
  isVerify,
  isBeta,
  className,
  linkComponent,
  tags,
  translationObject,
  onAction
}) => {
  const LinkComponent = linkComponent || "a";
  const hasDescription = !!shortDescription;
  const hasTags = !!tags && tags.length > 0;

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

      <div className="card-profile-header flex w-full px-3.5 justify-center">
        <LinkComponent href={link} className="flex items-center w-[90px] h-auto min-w-[3rem] -mt-[15%] relative z-40">
          <img className="w-[90px] h-[90px] border-2 border-black-800 rounded-full" alt={name} src={avatar} draggable="false" />
        </LinkComponent>

        <Button 
          className="ml-auto max-h-10 min-w-[80px]"
          fontSize="sm"
          onClick={() => onAction()}
        >
          {translationObject?.buttonFollow || "Seguir"}
        </Button>
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

      {hasTags && (
        <div className="flex flex-wrap gap-2 px-3.5 pb-4 mt-auto">
          {tags?.map((tag: CardTagProps) => (
            <Tag
              key={`${id}-${tag.title}`}
              link={tag.link}
              icon={tag.icon}
              className="max-w-none"
              type={tag.type}
            >
              {tag.title}
            </Tag>
          ))}
        </div>
      )}
    </CardBase>
  );
};

export default CardProfile;
