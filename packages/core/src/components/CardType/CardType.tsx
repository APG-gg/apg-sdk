import React, { FC } from 'react';
import CardBase, { CardProps } from '../Card/CardBase';
import OpenLinkIcon from '@apg.gg/icons/lib/OpenLinkIcon';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import TextLinker from '../TextLinker';

export interface CardTypeProps extends Omit<CardProps, "description"> {
  className?: string;
  title: string;
  date: string;
  game: string;
  linkComponent?: React.ComponentType<any>
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
  linkComponent
}) => {
  const LinkComponent = linkComponent || "a";

  return (
    <CardBase className={`flex flex-col max-w-[230px] min-h-[325px] ${className}`}>
      <div className="flex-grow h-[154px]">
        <img src={banner || "https://statics.apg.gg/default/post.png"} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-1 py-4 px-4">
        <div className="flex justify-start">
          <LinkComponent href={link} className="flex gap-2 text-white text-base uppercase font-bold items-center">
            {title}
            <OpenLinkIcon />
          </LinkComponent>
        </div>
        <div className="flex justify-start items-center gap-1">
          <span className="text-white-400 text-xs">{game}</span>
          <span className="text-white-400">-</span>
          <span className="text-white-400 text-xs">{format(new Date(date), "do MMM yyyy", { locale: es })}</span>
        </div>
        <div className="block text-white text-xs line-clamp-3 mt-1">
          <TextLinker text={shortDescription} />
        </div>
      </div>
    </CardBase>
  );
};

export default CardType;