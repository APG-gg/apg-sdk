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
  link?: string;
  socials: CardSocialProps[];
  tags: CardTagProps[];
  verify: boolean;
  username?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  className?: string;
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
  type?: "blue" | "aqua" | "green" | "yellow" | "fucsia" | "red";
}

const CardBase = ({ children, className = '' }: CardBaseProps) => {
  return (
    <div className={`base-card z-20 ${className}`}>
      {children}
    </div>
  );
};

export default CardBase;