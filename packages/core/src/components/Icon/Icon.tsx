import React from 'react';
import styled from 'styled-components';
import { IconSize } from './icon-props';

interface IconProps {
  icon: string | React.FC;
  alt?: string;
  size?: IconSize | number;
  width?: IconSize | number;
  height?: IconSize | number;
  color?: string;
}

interface FunctionalIconProps {
  iconColor: string;
  size?: IconSize | number;
  width?: IconSize | number;
  height?: IconSize | number;
}

const FunctionalIcon = styled.div<FunctionalIconProps>`
  stroke: ${({ iconColor }) => iconColor};
  width: ${({ width, size = IconSize.Xs }) => width || size}px;
  height: ${({ height, size = IconSize.Xs }) => height || size}px;
`;

const Icon: React.FC<IconProps> = ({ icon, size, width, height, alt, color }: IconProps) => {
  let IconSource = icon;

  if (color && typeof IconSource === 'string') {
    const svg = new DOMParser().parseFromString(decodeURI(IconSource.replace(/data:image\/svg\+xml,/, '')), 'image/svg+xml')
      .documentElement;

    svg.querySelectorAll('*').forEach((el) => {
      /* istanbul ignore else */
      if (!el.hasAttribute('fill-rule')) {
        if (el.hasAttribute('stroke')) {
          el.setAttribute('stroke', encodeURIComponent(color));
        }
        if (el.hasAttribute('fill')) {
          if (el.getAttribute('fill') !== 'white' && el.getAttribute('fill') !== 'none') {
            el.setAttribute('fill', encodeURIComponent(color));
          }
        }
      }
    });
    IconSource = `data:image/svg+xml,${svg.outerHTML}`;
  }

  if (color && typeof IconSource === 'function') {
    return <FunctionalIcon as={IconSource} iconColor={color} size={size} width={width} height={height} />;
  }

  return typeof IconSource === 'string' ? (
    <img src={IconSource} alt={alt} style={{ width: `${width || size}px`, height: `${height || size}px` }} />
  ) : (
    <IconSource />
  );
};

export default Icon;
