import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const LaneBottomSvg = () => (
  <svg viewBox="0 0 550 550" width="1em" height="1em" fill="currentColor">
    <g>
      <rect x="226.66" y="215.86" opacity="0.5" width="115.21" height="115.21"/>
      <polygon points="436.93,181.48 436.93,433.33 185.08,433.33 90.03,528.38 527.66,528.38 527.66,90.75 	"/>
      <polygon opacity="0.5" points="113.07,368.52 113.07,116.67 364.92,116.67 459.97,21.62 22.34,21.62 22.34,459.25 	"/>
    </g>
  </svg>
);

export default (props: any) => <Icon component={LaneBottomSvg} {...props} />;