import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const LaneJungleSvg = () => (
  <svg viewBox="0 0 550 550" width="1em" height="1em" fill="currentColor">
    <g>
      <path d="M122.77,5.42c0,0,258.97,316.48,152.07,538.79c-48.18-61.5-92.6-112.7-152.07-154.85
      c-4.52-54.2-13.55-162.61-94.1-231.11c82.81,44.42,144.54,82.06,170.89,167.88C203.32,222.99,204.07,188.36,122.77,5.42z"/>
      <path d="M293.66,224.49c0,0,32.37-70.76,69.26-122.71s48.18-68.51,63.99-96.36c-30.11,75.28-56.46,144.54-70.76,205.52
      c-2.26,21.83-1.51,57.97-9.03,79.8s-15.06,40.65-15.06,40.65C324.52,294.5,314.73,272.67,293.66,224.49z"/>
      <path d="M521.76,159.75c0,0-127.23,42.91-169.38,255.2c0,34.63,0,48.18,0,48.18l74.53-73.78
      C426.9,389.36,437.07,225.01,521.76,159.75z"/>
    </g>
  </svg>
);

export default (props: any) => <Icon component={LaneJungleSvg} {...props} />;