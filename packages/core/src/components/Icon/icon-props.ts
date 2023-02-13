export enum IconSize {
  Xs = 24,
  Sm = 32,
  Md = 48,
  Lg = 64,
}

export type IconSizes = IconSize.Xs | IconSize.Sm | IconSize.Md | IconSize.Lg;

export interface IconProps {
  size?: IconSizes;
  color?: string;
}
