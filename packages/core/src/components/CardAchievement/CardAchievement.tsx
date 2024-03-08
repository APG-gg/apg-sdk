import React, { FC } from 'react';
import CardBase, { CardProps } from '../CardBase/CardBase';
import OpenLinkIcon from '@apg.gg/icons/lib/OpenLinkIcon';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import TextLinker from '../TextLinker';
import Tag from '../Tag';
import EventTypeEnum from '../../domain/eventType.enum';
import { RawDraftContentState } from 'draft-js';
import EventCategoryEnum from '../../domain/eventCategory.enum';
import EventTagEnum from '../../domain/eventTag.enum';

export interface CardAchievementProps extends Omit<CardProps, "description"> {
  className?: string;
  title: string;
  date: string;
  game?: string;
  profileType?: Record<string, any>;
  type?: string;
  category?: string;
  tag?: string;
  link?: string;
}

const CardAchievement: FC<CardAchievementProps> = ({
  id,
  name,
  shortDescription,
  shortRichDescription,
  banner,
  link,
  date,
  game,
  title,
  className,
  profileType,
  type,
  category,
  tag,
  linkComponent,
  locale
}) => {
  const LinkComponent = linkComponent || "a";

  const dateSplited = date.split("-");
  const year = parseInt(dateSplited[0]);
  const month = parseInt(dateSplited[1]) - 1;
  const day = parseInt(dateSplited[2]);

  const hasRichDescription = (shortRichDescription: RawDraftContentState) => {
    if (!shortRichDescription || shortRichDescription === undefined) return false;

    if ('blocks' in shortRichDescription && 'entityMap' in shortRichDescription) {
      // Verificar si blocks es un array con al menos un elemento
      if (Array.isArray(shortRichDescription.blocks) && shortRichDescription.blocks.length > 0) {
        return true;
      }
    }

    return false;
  };

  return (
    <CardBase 
      className={`flex flex-col w-full max-w-[360px] min-h-[350px] h-full ${className}`}
      classNameWrapper="flex flex-col h-[27rem] gap-2 overflow-visible"
    >
      <div className="flex-grow max-h-[200px] relative">
        <img src={banner || "https://statics.apg.gg/default/post.png"} alt={name} className="w-full h-full object-cover object-center" />

        {tag ? (
          <Tag
            type={EventTagEnum[tag as keyof typeof EventTagEnum] as any}
            className="max-w-none absolute right-2 top-2 h-6 !bg-black-900"
          >
          {tag}
        </Tag>
        ) : null}
      </div>
      <div className="flex flex-col gap-1 py-4 px-4 flex-1">
        <div className="flex flex-col">
          <div className="flex justify-start">
            {link ? (
              <LinkComponent href={link} target='_blank' className="flex gap-2 text-white text-base uppercase font-bold items-center leading-none">
                {title}
                <OpenLinkIcon />
              </LinkComponent>
            ) : (
              <span className="text-white text-base uppercase font-bold leading-none">{title}</span>
            )}
          </div>
          <div className="flex justify-start items-center gap-1">
            {game ? (
              <>
                <span className="text-white-400 text-xs">{game}</span>
                <span className="text-white-400">-</span>
              </>
            ) : null}
            <span className="text-white-400 text-xs">{format(new Date(year, month, day), "dd MMM yyyy", { locale: es })}</span>
          </div>
        </div>
      
        <div className="block text-white text-xs line-clamp-3">
          {hasRichDescription(shortRichDescription) ? (
            <TextLinker content={shortRichDescription} linkComponent={linkComponent} locale={locale} />
          ) : (
            <TextLinker text={shortDescription} linkComponent={linkComponent} locale={locale} />
          )} 
        </div>

        <div className="flex justify-start items-center gap-1 mt-auto">
          {type ? (
            <Tag
              type={EventTypeEnum[type as keyof typeof EventTypeEnum] as any}
              className="max-w-none h-6"
            >
            {type}
          </Tag>
          ) : null}
          {category ? (
            <Tag
              type={EventCategoryEnum[category as keyof typeof EventCategoryEnum] as any}
              className="max-w-none h-6"
            >
            {category}
          </Tag>
          ) : null}
          {profileType ? (
            <Tag
                type={profileType.color}
                icon={profileType.icon}
                className="max-w-none h-6"
              >
              {profileType.name}
            </Tag>
          ) : null}
         </div>
      </div>
    </CardBase>
  );
};

export default CardAchievement;
