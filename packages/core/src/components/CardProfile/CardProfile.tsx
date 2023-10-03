import React, { FC } from 'react';
import CardBase, { CardProps, CardTagProps } from '../Card/CardBase';
import Tag from '../Tag';
import TranslationObject from '../../domain/translationObject.interface';
import CardHeader from '../CardHeader';
import CardDescription from '../CardDescription';

export interface CardProfileProps extends Omit<CardProps, "description"> {
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
  translationObject
}) => {
  const LinkComponent = linkComponent || "a";
  const hasDescription = !!shortDescription;
  const hasTags = !!tags && tags.length > 0;

  return (
    <CardBase 
      className={`flex flex-col w-full max-w-[360px] min-h-[350px] ${className}`} 
      classNameWrapper="flex flex-col h-[350px]"
    >
      <div className="h-[7rem] relative">
        <LinkComponent href={link}>
          <img src={banner || "https://statics.apg.gg/default/post.png"} alt={name} className="w-full h-full object-cover" />
        </LinkComponent>
      </div>
        <CardHeader
          {...{
            id,
            name,
            username,
            link,
            avatar,
            socials,
            isVerify,
            isBeta,
            translationObject,
            linkComponent
          }}
        />
        {hasDescription ? (
          <CardDescription 
            className="!py-0"
            {...{
              shortDescription,
              translationObject,
              linkComponent,
              columns: 3
            }}
            showAbout={false}
          />
        ) : null }
      
      {hasTags && (
        <div className="grid grid-cols-3 gap-2 px-4 pb-4 mt-auto">
          {tags?.map((tag: CardTagProps) => (
            <Tag
              key={`${id}-${tag.title}`}
              link={tag.link}
              icon={tag.icon}
              className="flex-1"
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
