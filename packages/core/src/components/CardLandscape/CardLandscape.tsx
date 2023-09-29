import React, { FC } from 'react';
import CardBase, { CardProps, CardTagProps } from '../Card/CardBase';
import CardDescription from '../CardDescription/CardDescription';
import CardHeader from '../CardHeader/CardHeader';
import Button from '../Button';
import Tag from '../Tag';
import TranslationObject from '../../domain/translationObject.interface';

export interface CardPostProps extends Omit<CardProps, "description"> {
  createdAt?: string;
  postedOn?: string;
  username?: string;
}

const CardLandscape: FC<CardPostProps & TranslationObject> = ({
  id,
  name,
  shortDescription,
  avatar,
  banner,
  socials,
  tags,
  link,
  isVerify,
  isBeta,
  username,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  translationObject
}) => {
  // Determine whether the header, description, and tags sections are visible
  const hasHeader = !!name && !!avatar;
  const hasDescription = !!shortDescription;
  const hasTags = !!tags && tags.length > 0;
  const hasFooter = !!confirmLabel;

  return (
    <CardBase className="flex max-w-[480px] max-h-[276px]">
      <div className="flex h-full">
        {banner && (
          <div className="w-[190px]">
            <img src={banner} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex flex-col flex-grow flex-auto max-w-[290px]">
          {hasHeader && (
            <CardHeader 
              {...{
                id,
                name,
                username,
                avatar,
                socials,
                isVerify,
                isBeta,
                translationObject
              }}
            />
          )}
          {hasDescription && (
            <CardDescription 
              {...{
                shortDescription,
                translationObject
              }}
              showAbout={true}
            />
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
        </div>
      </div>
    </CardBase>
  );
};

export default CardLandscape;