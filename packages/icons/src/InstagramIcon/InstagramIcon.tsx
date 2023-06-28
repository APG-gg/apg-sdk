import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 0.75C3.77208 0.75 0.75 3.77208 0.75 7.5V16.5C0.75 20.2279 3.77208 23.25 7.5 23.25H16.5C20.2279 23.25 23.25 20.2279 23.25 16.5V7.5C23.25 3.77208 20.2279 0.75 16.5 0.75H7.5ZM2.25 7.5C2.25 4.6005 4.60051 2.25 7.5 2.25H16.5C19.3995 2.25 21.75 4.60051 21.75 7.5V16.5C21.75 19.3995 19.3995 21.75 16.5 21.75H7.5C4.6005 21.75 2.25 19.3995 2.25 16.5V7.5ZM19.5 6.25C19.5 6.94036 18.9404 7.5 18.25 7.5C17.5596 7.5 17 6.94036 17 6.25C17 5.55964 17.5596 5 18.25 5C18.9404 5 19.5 5.55964 19.5 6.25ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12Z" />
    </g>
    <defs>
      <clipPath>
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;