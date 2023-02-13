import React from 'react';
import Icon from '@ant-design/icons';

const DrakeSvg = () => (
  <svg viewBox="0 0 550 550" width="1em" height="1em" fill="currentColor">
    <g>
      <polygon points="56.13,218.64 56.13,372.45 209.94,528.38 248.92,490.45 145.68,126.98"/>
      <polygon points="493.87,218.64 493.87,372.45 340.06,528.38 301.08,490.45 404.32,126.98"/>
      <polygon points="307.92,21.62 298.05,21.62 255.25,21.62 245.37,21.62 181.1,89.05 262.23,373.51 267.89,373.51 285.4,373.51 291.07,373.51 372.19,89.05"/>
	</g>
  </svg>
);

export default (props: any) => <Icon component={DrakeSvg} {...props} />;