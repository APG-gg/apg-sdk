import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <g>
      <path d="M10 20H14V16H10V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 14H20V10H16V14ZM16 8H20V4H16V8ZM8 22V16H2V8H14V2H22V16H16V22H8Z"/>
    </g>
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;