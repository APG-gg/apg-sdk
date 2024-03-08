import React, { FC } from 'react';
import CardBase, { CardProps } from '../CardBase/CardBase';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import TextLinker from '../TextLinker';
import Tag from '../Tag';
import EventTypeEnum from '../../domain/eventType.enum';
import { RawDraftContentState } from 'draft-js';
import EventCategoryEnum from '../../domain/eventCategory.enum';
import EventTagEnum from '../../domain/eventTag.enum';
import Tooltip from '../Tooltip';

export interface CardEventProps extends Omit<CardProps, "description"> {
  className?: string;
  title: string;
  slug: string;
  date: string;
  game?: string;
  profileType?: Record<string, any>;
  type?: string;
  category?: string;
  tag?: string;
  link?: string;
  owner?: {
    name: string;
    username: string;
    profileImage: string;
  };
}

const CardEvent: FC<CardEventProps> = ({
  id,
  name,
  shortDescription,
  shortRichDescription,
  banner,
  link,
  date,
  game,
  title,
  slug,
  className,
  profileType,
  type,
  category,
  tag,
  linkComponent,
  locale,
  owner
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
    <LinkComponent
      href={`/${locale}/events/${slug || id}`}
    >
      <CardBase 
        className={`flex flex-col w-full max-w-[360px] min-h-[350px] h-full group ${className}`}
        classNameWrapper="flex flex-col h-[27rem] gap-2 overflow-visible relative"
      >
        <div className="w-full h-full relative">
          <img 
            src={banner || "https://statics.apg.gg/default/post.png"} 
            alt={name} 
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-all delay-100 ease-in-out group-hover:rotate-2"
          />

          <LinkComponent
            href={`/${locale}/${owner?.username}`}
            className="w-10 h-10 absolute left-2 top-2 z-50 cursor-pointer"
          >
            <Tooltip 
              text={
                <div className="text-xs">
                  @{owner?.username}
                </div>
              } 
              placement='right'
            >
              <img className="w-10 h-10 rounded-full border-2 border-black-900 group-hover:border-blue" alt={owner?.username} src={owner?.profileImage} />
            </Tooltip>
          </LinkComponent>

          {tag ? (
            <Tag
              type={EventTagEnum[tag as keyof typeof EventTagEnum] as any}
              className="max-w-none absolute right-2 top-2 h-6 !bg-black-900"
            >
            {tag}
          </Tag>
          ) : null}
        </div>
        <div 
          className="grid absolute gap-3 py-4 px-4 flex-1 z-10 inset-0 grid-flow-row content-end" 
          style={{ 
            gridAutoRows: "min-content",
            background: "linear-gradient(180deg, transparent 35%, rgba(0, 0, 0, 0.8) 75.88%)"
          }}
        >
          <div className="flex flex-col">
            <div className="flex justify-start">
              <span className="text-white text-base uppercase font-bold leading-none">{title}</span>
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
    </LinkComponent>
  );
};

export default CardEvent;
