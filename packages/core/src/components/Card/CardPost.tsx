import React from 'react';
import CardBase, { CardProps, CardTagProps } from './CardBase';
import classNames from 'classnames';
import CardDescription from './CardDescription';
import CardHeader from './CardHeader';
import Tag from '../Tag';
import Button from '../Button';

export interface CardPostProps extends Omit<CardProps, "description"> {
  createdAt?: string;
  postedOn?: string;
  username?: string;
}

const CardPost = ({
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
  username
}: CardPostProps) => {
  // Determine whether the header, description, and tags sections are visible
  const hasHeader = !!name && !!avatar;
  const hasDescription = !!shortDescription;
  const hasTags = !!tags && tags.length > 0;

  return (
    <CardBase className="flex flex-col max-w-[360px] min-h-[180px]">
      {hasHeader && (
        <CardHeader id={id} name={name} avatar={avatar} createdAt={createdAt} postedOn={postedOn} username={username}  />
      )}
      {banner && (
        <div className="flex-grow h-[212px]">
        <img src={banner} alt={name} className="w-full h-full object-cover" />
      </div>
      )}
      {hasDescription && (
        <CardDescription shortDescription={shortDescription} showAbout={true} />
      )}
      {hasTags && (
        <div className="grid grid-cols-3 gap-2 p-4">
          {tags?.map((tag: CardTagProps) => (
            <Tag
              key={`${id}-${tag.title}`}
              link={tag.link}
              icon={tag.icon}
              className="flex-1"
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