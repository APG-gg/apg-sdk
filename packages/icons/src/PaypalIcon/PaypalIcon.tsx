import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 40 40" fill="currentColor">
    <path d="M35.1,20.2c-1.3,5.6-5.5,8.2-11.2,8.8h-0.9c-0.7,0-1.3,0.5-1.4,1.2l-0.1,0.4l-1.1,6.8l-0.1,0.3 c-0.1,0.7-0.7,1.2-1.4,1.2h-4.7L16.6,25h2.9c8,0,13-3.9,14.6-11.2C35.4,15.4,35.6,17.6,35.1,20.2z M32.3,13.1 c-1.4,7.5-6.4,10-12.8,10h-3.2c-0.8,0-1.4,0.6-1.6,1.3l0.1-0.3l-1.7,10.8H6.3c-0.6,0-1-0.5-0.9-1.1L9.9,4.7C10,4,10.7,3.4,11.5,3.4 h11c3.8,0,6.8,0.8,8.4,2.7c1.5,1.7,1.9,3.6,1.5,6.3C32.4,12.4,32.3,12.8,32.3,13.1z"></path>
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;