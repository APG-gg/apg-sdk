import React, { FC } from 'react';
import CardBase, { CardProps, CardTagProps } from '../Card/CardBase';
import CardDescription from '../CardDescription/CardDescription';
import CardHeader from '../CardHeader/CardHeader';
import Tag from '../Tag';

export interface CardPostProps extends Omit<CardProps, "description"> {
  className?: string;
  createdAt?: string;
  postedOn?: string;
  username?: string;
  showAbout?: boolean;
}

const CardPost: FC<CardPostProps> = ({
  id,
  name,
  shortDescription,
  avatar,
  banner,
  link,
  tags,
  verify,
  createdAt,
  postedOn,
  username,
  className,
  showAbout = true,
}) => {
  // Determine whether the header, description, and tags sections are visible
  const hasHeader = !!name && !!avatar;
  const hasDescription = !!shortDescription;
  const hasTags = !!tags && tags.length > 0;

  return (
    <CardBase className={`flex flex-col max-w-[360px] min-h-[180px] ${className}`}>
      {hasHeader && (
        <CardHeader id={id} name={name} avatar={avatar} createdAt={createdAt} postedOn={postedOn} username={username} verify={verify} />
      )}
      {banner && (
        <div className="flex-grow h-[212px]">
        <img src={banner} alt={name} className="w-full h-full object-cover" />
      </div>
      )}
      {hasDescription && (
        <CardDescription shortDescription={shortDescription} showAbout={showAbout} />
      )}
      {hasTags && (
        <div className="grid grid-cols-3 gap-2 p-4">
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

export default CardPost;