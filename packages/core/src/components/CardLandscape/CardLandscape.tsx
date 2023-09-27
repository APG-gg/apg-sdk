import React, { FC } from 'react';
import CardBase, { CardProps } from '../Card/CardBase';
import CardDescription from '../CardDescription/CardDescription';
import CardHeader from '../CardHeader/CardHeader';
import Button from '../Button';

export interface CardPostProps extends Omit<CardProps, "description"> {
  createdAt?: string;
  postedOn?: string;
  username?: string;
}

const CardLandscape: FC<CardPostProps> = ({
  id,
  name,
  shortDescription,
  avatar,
  banner,
  socials,
  link,
  verify,
  username,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm
}) => {
  // Determine whether the header, description, and tags sections are visible
  const hasHeader = !!name && !!avatar;
  const hasDescription = !!shortDescription;
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
            <CardHeader id={id} name={name} avatar={avatar} socials={socials} verify={verify}  />
          )}
          {hasDescription && (
            <CardDescription shortDescription={shortDescription} columns={3} className="pt-0" />
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