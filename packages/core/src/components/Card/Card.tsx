import React, { FC } from 'react';
import CardBase, { CardProps, CardTagProps } from './CardBase';
import CardDescription from '../CardDescription/CardDescription';
import CardHeader from '../CardHeader/CardHeader';
import Tag from '../Tag';
import Button from '../Button';
import classNames from 'classnames';

const Card: FC<Omit<CardProps, "description">> = ({
  id,
  name,
  shortDescription,
  avatar,
  banner,
  link,
  socials,
  tags,
  verify,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel
}) => {
  // Determine whether the header, description, and tags sections are visible
  const hasHeader = !!name && !!avatar;
  const hasDescription = !!shortDescription;
  const hasTags = !!tags && tags.length > 0;
  const hasFooter = !!confirmLabel;

  // Determine the height of the banner section based on the visibility of the other sections
  const bannerHeightClasses = classNames({
    "flex-grow h-[480px]": !hasHeader && !hasDescription && !hasTags && !hasFooter,
    "flex-grow h-[408px]": (hasHeader && !hasDescription && !hasTags && !hasFooter) || (!hasHeader && !hasDescription && !hasTags && hasFooter),
    "flex-grow h-[384px]": !hasHeader && hasDescription && !hasTags && !hasFooter,
    "flex-grow h-[376px]": !hasHeader && !hasDescription && hasTags && !hasFooter,
    "flex-grow h-[336px]": hasHeader && !hasDescription && !hasTags && hasFooter,
    "flex-grow h-[312px]": (hasHeader && hasDescription && !hasTags && !hasFooter) || (!hasHeader && hasDescription && !hasTags && hasFooter),
    "flex-grow h-[304px]": (hasHeader && !hasDescription && hasTags && !hasFooter) || (!hasHeader && !hasDescription && hasTags && hasFooter),
    "flex-grow h-[280px]": !hasHeader && hasDescription && hasTags && !hasFooter,
    "flex-grow h-[240px]": hasHeader && hasDescription && !hasTags && hasFooter,
    "flex-grow h-[208px]": !hasHeader && hasDescription && hasTags && hasFooter,
    "flex-grow h-52": hasHeader && hasDescription && hasTags && !hasFooter,
    "flex-grow h-[136px]": hasHeader && hasDescription && hasTags && hasFooter,
  });

  return (
    <CardBase className="flex flex-col max-w-[360px] max-h-[480px]">
      <div className={bannerHeightClasses}>
        <img src={banner} alt={name} className="w-full h-full object-cover" />
      </div>
      {hasHeader && (
        <CardHeader id={id} name={name} avatar={avatar} socials={socials} verify={verify} />
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
      {hasFooter && (
        <div className="flex items-center justify-end p-4 gap-2 mt-auto">
          {cancelLabel && (
            <Button
              type="outline"
              onClick={() => onCancel}
            >
              {cancelLabel}
            </Button>
          )}
          <Button
            onClick={() => onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      )}
    </CardBase>
  );
};

export default Card;