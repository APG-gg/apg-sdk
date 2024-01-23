import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const LaneSupportSvg = () => (
  <svg viewBox="0 0 550 550" width="1em" height="1em" fill="currentColor">
    <g>
      <polygon opacity="0.5" points="101.56,319.07 101.56,103.12 317.51,103.12 399.01,21.62 23.77,21.62 23.77,396.86 	"/>
      <polygon opacity="0.5" points="448.44,230.93 448.44,446.88 232.49,446.88 150.99,528.38 526.23,528.38 526.23,153.14 	"/>
      <polygon points="104.44,528.38 526.23,106.58 526.23,21.62 437.33,21.62 23.77,435.19 23.77,528.38 	"/>
    </g>
  </svg>
);

export default (props: any) => <Icon component={LaneSupportSvg} {...props} />;