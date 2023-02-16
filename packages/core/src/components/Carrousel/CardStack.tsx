import React, { FC, useRef, useState } from "react";
import { motion } from "framer-motion";
import move from "../../utils/move.util";
import classNames from 'classnames';
import IconTwitter from '@apg.gg/icons/lib/IconTwitter';
import IconDiscord from '@apg.gg/icons/lib/IconDiscord';
import Tag from "../Tag/Tag";

export interface Social {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface Tag {
  id: string;
  title: string;
  link: string;
  icon: string;
}

export interface Card {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  avatar: string;
  banner: string;
  link: string;
  socials: Social[];
  tags: Tag[];
  verify: boolean;
}

export interface CardStackProps {
  cards: Card[];
}

const CardStack: FC<CardStackProps> = ({ cards }) => {
  const [stack, setCards] = useState(cards);

  const constraintsRef = useRef(null);

  const CARD_OFFSET = 80;
  const SCALE_FACTOR = 0.05;

  const moveToEnd = (from: number) => {
    setCards(move({ array: stack, moveIndex: from, toIndex: stack.length - 1 }));
  };

  return (
    <div
      ref={constraintsRef}
      className='relative w-[650px] h-[480px] mx-auto mt-8'
    >
      {stack.map((card: Card, index) => {
        const canDrag = index === 0;

        // Determine whether the header, description, and tags sections are visible
        const hasHeader = !!card.name && !!card.avatar;
        const hasDescription = !!card.shortDescription;
        const hasTags = !!card.tags && card.tags.length > 0;

        // Determine the height of the banner section based on the visibility of the other sections
        const bannerHeightClasses = classNames({
          "flex-grow h-[480px]": !hasHeader && !hasDescription && !hasTags,
          "flex-grow h-[408px]": hasHeader && !hasDescription && !hasTags,
          "flex-grow h-[384px]": !hasHeader && hasDescription && !hasTags,
          "flex-grow h-[376px]": !hasHeader && !hasDescription && hasTags,
          "flex-grow h-[312px]": hasHeader && hasDescription && !hasTags,
          "flex-grow h-[304px]": hasHeader && !hasDescription && hasTags,
          "flex-grow h-[280px]": !hasHeader && hasDescription && hasTags,
          "flex-grow h-52": hasHeader && hasDescription && hasTags,
        });

        return (
          <motion.div
            key={card.id}
            initial={false}
            className="flex flex-col absolute w-[360px] h-[480px] rounded-2xl overflow-hidden bg-black-900 cursor-grab"
            style={{
              transformOrigin: "top center",
              filter: index !== 0 ? "blur(2px)" : "none",
              y: 0
            }}
            animate={{
              y: index * 10,
              left: (index * -CARD_OFFSET) + 290,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: stack.length - index
            }}
            drag={canDrag ? "y" : false}
            dragConstraints={constraintsRef}
            onDragEnd={() => moveToEnd(index)}
          >
            <div className={bannerHeightClasses}>
              <img src={card.banner} alt={card.name} className="w-full h-full object-cover" />
            </div>
            {hasHeader && (
              <div className="flex card-header px-4 py-[13px] h-[72px] gap-4">
                <div className="flex items-center">
                  <img className="w-10 h-10 rounded-full" alt={card.name} src={card.avatar} draggable="false" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-white text-base uppercase font-bold !cursor-pointer">{card.name}</h4>
                  <div className="socials flex gap-[10px]">
                    {card.socials?.map((social: Social) => (
                      <a
                        key={`${card.id}-${social.icon}`}
                        className="!cursor-pointer flex"
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {social.icon === 'twitter' && (<IconTwitter className="text-black-400 text-lg leading-3" />)}
                        {social.icon === 'discord' && (<IconDiscord className="text-black-400 text-lg leading-3" />)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {hasDescription && (
              <div className="p-4 h-24">
                <strong className="text-white text-base">About me:</strong>
                <div className="overflow-hidden max-h-10 text-black-400 text-sm text-ellipsis line-clamp-2 d-box">{card.shortDescription}</div>
              </div>
            )}
            {hasTags && (
              <div className="grid grid-cols-3 gap-2 p-4">
                {card.tags?.map((tag: Tag) => (
                  <Tag
                    key={`${card.id}-${tag.title}`}
                    link={tag.link}
                    icon={tag.icon}
                    className="flex-1"
                  >
                    {tag.title}
                  </Tag>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardStack;
