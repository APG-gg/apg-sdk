import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const TurretSvg = () => (
  <svg viewBox="0 0 550 550" width="1em" height="1em" fill="currentColor">
    <g>
      <polygon points="157.28,528.38 199.06,455.72 346.63,455.72 392.04,528.38 	"/>
      <polygon points="145.47,225.96 197.69,437.67 345.27,437.67 403.39,225.96 274.66,279.99 	"/>
      <polygon points="451.98,115.62 407.25,115.62 347.31,115.62 308.72,21.62 298.95,21.62 250.59,21.62 240.83,21.62 
        202.23,115.62 142.75,115.62 95.07,115.62 87.58,183.62 145.45,208.01 145.47,208.7 274.66,262.74 275,262.6 275.34,262.74 
        404.53,208.7 404.55,208.01 462.42,183.62 	"/>
    </g>
  </svg>
);

export default (props: any) => <Icon component={TurretSvg} {...props} />;