import React, { FC } from 'react';
import CardBase, { CardProps } from '../Card/CardBase';
import OpenLinkIcon from '@apg.gg/icons/lib/OpenLinkIcon';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import TextLinker from '../TextLinker';
import Tag from '../Tag';
import ProfileTypeColor from '../../domain/profileTypeColor.enum';
import EventTypeEnum from '../../domain/eventType.enum';

export interface CardTypeProps extends Omit<CardProps, "description"> {
  className?: string;
  title: string;
  date: string;
  game: string;
  profileType?: Record<string, any>;
  type?: string;
  linkComponent?: React.ComponentType<any>
  link?: string;
}

const CardType: FC<CardTypeProps> = ({
  id,
  name,
  shortDescription,
  banner,
  link,
  date,
  game,
  title,
  className,
  profileType,
  type,
  linkComponent
}) => {
  const LinkComponent = linkComponent || "a";

  const dateSplited = date.split("-");
  const year = parseInt(dateSplited[0]);
  const month = parseInt(dateSplited[1]) - 1;
  const day = parseInt(dateSplited[2]);

  return (
    <CardBase className={`flex flex-col max-w-[320px] min-h-[325px] ${className}`}>
      <div className="flex-grow h-[154px] relative">
        <img src={banner || "https://statics.apg.gg/default/post.png"} alt={name} className="w-full h-full object-cover object-center" />

        {type ? (
          <Tag
            type={EventTypeEnum[type as keyof typeof EventTypeEnum] as any}
            className="max-w-none absolute right-2 top-2 h-6 !bg-black-900"
          >
          {type}
        </Tag>
        ) : null}
      </div>
      <div className="flex flex-col gap-1 py-4 px-4">
        <div className="flex justify-start">
          {link ? (
            <LinkComponent href={link} target='_blank' className="flex gap-2 text-white text-base uppercase font-bold items-center">
              {title}
              <OpenLinkIcon />
            </LinkComponent>
          ) : (
            <span className="text-white text-base uppercase font-bold">{title}</span>
          )}
        </div>
        <div className="flex justify-start items-center gap-1">
          <span className="text-white-400 text-xs">{game}</span>
          <span className="text-white-400">-</span>
          <span className="text-white-400 text-xs">{format(new Date(year, month, day), "dd MMM yyyy", { locale: es })}</span>
        </div>
        {shortDescription ? (
          <div className="block text-white text-xs line-clamp-3 mt-1">
            <TextLinker text={shortDescription} />
          </div>
        ) : null}
        {profileType ? (
          <div className="flex justify-start items-center gap-1 mt-1">
            <Tag
                type={profileType.color}
                icon={profileType.icon}
                className="max-w-none h-6"
              >
              {profileType.name}
            </Tag>
         </div>
        ) : null}
        
      </div>
    </CardBase>
  );
};

export default CardType;
