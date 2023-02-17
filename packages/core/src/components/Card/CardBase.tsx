import React, { ReactNode } from 'react';

export type CardBaseProps = {
  children: ReactNode;
  className?: string;
};

export type CardProps = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  avatar: string;
  banner: string;
  link: string;
  socials: CardSocialProps[];
  tags: CardTagProps[];
  verify: boolean;
  username?: string;
  confirmLabel?: string;
  cancelLabel?: string;
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
  icon: string;
}

const CardBase = ({ children, className = '' }: CardBaseProps) => {
  return (
    <div className={`flex w-full h-full rounded-2xl overflow-hidden bg-black-900 ${className}`}>
      {children}
    </div>
  );
};

export default CardBase;