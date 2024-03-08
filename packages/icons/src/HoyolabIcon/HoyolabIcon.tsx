import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 40 40" fill="currentColor">
    <path d="M36.1,25.4c-0.7,0.6-1.6,1-2.5,1.2c0,0.1,0,0.2,0.1,0.3c0.4,1.7,0.9,3.4,1.3,5c0.3,1.2-0.5,2.4-1.7,2.7 c-1.2,0.3-2.4-0.4-2.8-1.6c-0.1-0.4-0.2-0.9-0.4-1.3c-0.4-1.3-0.7-2.6-1-3.9c-0.4,0-0.3,0.2-0.3,0.4c0.4,2-1,3.7-3,3.9 c-0.2,0-0.4,0.1-0.5,0.3c-0.9,1.3-2.6,1.8-4.1,1.1c-0.4-0.2-0.5-0.1-0.6,0.3c-0.8,2-2.7,3.3-4.9,3.2c-2.2-0.1-4-1.4-4.7-3.5 c-0.1-0.3-0.2-0.5-0.2-0.8c-0.1,0-0.2,0-0.2,0.1c-3.2,0.7-6.3-1.5-6.5-4.7c-0.2-2-0.2-4.1-0.4-6.1c-0.2-2.9-0.3-5.8-0.5-8.8 c0-0.6-0.1-1.2-0.2-1.8c0-0.2,0-0.5,0-0.7c0-0.2,0.1-0.4,0.1-0.6c0.6-2.2,2.8-3.3,5-2.4c1.4,0.6,2.8,1.3,4.3,1.9 c0.6,0.3,1.2,0.4,1.8,0.2c1.8-0.5,3.6-1,5.4-1.5c0.6-0.2,1-0.5,1.4-1c0.9-1.2,1.8-2.5,2.7-3.7c1.7-2.3,4.9-2.1,6.1,0.4 c2.5,4.9,5,9.9,7.5,14.8C38.6,21.1,38,23.7,36.1,25.4z M11.6,33.2c0.7,2,2.6,3.4,4.5,3.1c2.4-0.3,3.5-1.6,4-3.6 c0.3-1.2-0.1-2.4-0.6-3.5c-0.2-0.6-1.1-0.8-1.6-0.6c-0.8,0.3-1.2,1-1,1.7c0.1,0.6,0.3,1.3,0.4,1.9c0.1,0.6-0.4,1-0.8,1.3 c-0.4,0.2-1.4,0.1-1.7-0.2c-0.3-0.4-0.6-0.8-0.8-1.3c-0.8,0.2-1.7,0.5-2.6,0.7C11.5,32.8,11.6,33,11.6,33.2z M29.5,19 c-0.5-0.9-1-1.8-1.5-2.7c-1.3-1.9-3.1-2.8-5.4-2.5c-2.8,0.4-5.5,1.2-8.1,2.1c-1.6,0.6-2.7,1.7-3.3,3.2c-0.4,1-0.4,2.1-0.3,3.2 c0,0.4,0,0.9,0,1.4c0,2.3,2,3.8,4.2,3.3c1.4-0.3,2.7-0.6,4.1-1c2.8-0.8,5.7-1.5,8.5-2.4C29.6,23.1,30.5,20.9,29.5,19z M30.1,27.5 c-0.3,0.1-0.3,0.2-0.3,0.5c0.4,1.3,0.7,2.7,1.1,4c0.1,0.4,0.2,0.8,0.4,1.2c0.4,0.7,1.2,0.9,1.9,0.6c0.8-0.3,1.2-1.1,1-1.9 c-0.1-0.5-0.3-1-0.4-1.5c-0.3-1.2-0.6-2.4-1-3.7C31.9,27,31,27.3,30.1,27.5z M24.4,21.9c-0.6,0.2-1.3,0-1.6-0.6 c-0.3-0.9-0.5-1.8-0.7-2.4c0-0.9,0.4-1.4,1.1-1.6c0.6-0.1,1.2,0.2,1.4,0.8c0.2,0.8,0.5,1.6,0.6,2.3C25.4,21.1,25,21.7,24.4,21.9z M16.9,23.9c-0.6,0.2-1.2,0-1.5-0.6c-0.3-0.9-0.6-1.8-0.8-2.5c0-0.9,0.4-1.4,1-1.5c0.6-0.1,1.3,0.1,1.5,0.7c0.3,0.8,0.5,1.7,0.7,2.6 C17.9,23.1,17.4,23.7,16.9,23.9z M19.6,8c-0.1,0-0.1,0-0.2,0.1c-1.6,0.4-3.3,0.9-4.9,1.3c-0.3,0.1-0.5,0.1-0.7,0.2 c-0.5,0-0.9-0.3-1-0.7c-0.1-0.5,0.2-0.8,0.6-1c1-0.3,2-0.6,3-0.8c0.9-0.2,1.8-0.5,2.7-0.7c0.5-0.1,1,0.1,1.1,0.6 C20.4,7.4,20.1,7.8,19.6,8z"></path>
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;