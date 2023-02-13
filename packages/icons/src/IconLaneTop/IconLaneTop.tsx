import React from 'react';
import Icon from '@ant-design/icons';

const LaneTopSvg = () => (
  <svg viewBox="0 0 550 550" width="1em" height="1em" fill="currentColor">
    <path d="M4437.58,2019.67"/>
    <g>
      <rect x="208.13" y="218.92" opacity="0.5" width="115.21" height="115.21"/>
      <polygon points="113.07,368.52 113.07,116.67 364.92,116.67 459.97,21.62 22.34,21.62 22.34,459.25 	"/>
      <polygon opacity="0.5" points="436.93,181.48 436.93,433.33 185.08,433.33 90.03,528.38 527.66,528.38 527.66,90.75 	"/>
    </g>
  </svg>
);

export default (props: any) => <Icon component={LaneTopSvg} {...props} />;