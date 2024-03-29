import classNames from 'classnames';
import { RawDraftContentState } from 'draft-js';
import React, { ReactNode } from 'react';

export type CardBaseProps = {
  children: ReactNode;
  className?: string;
  classNameWrapper?: string;
};

export type CardProps = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  shortRichDescription: RawDraftContentState; 
  avatar: string;
  banner: string;
  link?: string;
  socials: CardSocialProps[];
  tags: CardTagProps[];
  isVerify: boolean;
  isBeta: boolean;
  isWorker: boolean;
  isPartner: boolean;
  isSponsored: boolean;
  username?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  className?: string;
  classNameWrapper?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export type CardSocialProps = {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export type CardTagProps = {
  id: string;
  title: string;
  link: string;
  icon?: string;
  type?: "blue" | "aqua" | "green" | "yellow" | "fucsia" | "red" | "purple" | "orange" | "limegreen" | "white" | "black";
}

const CardBase = ({ children, className = '', classNameWrapper = '' }: CardBaseProps) => {
  return (
    <div className={`base-card ${className}`}>
      <div className={classNames(
        "z-20 w-full",
        classNameWrapper
      )}>
        {children}
      </div>
    </div>
  );
};

export default CardBase;