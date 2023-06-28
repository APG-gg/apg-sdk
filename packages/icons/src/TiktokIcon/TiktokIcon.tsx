import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 1H12.5V16.5C12.5 18 11 19.5 9.5 19.5C8 19.5 6.5 19 6.5 16.5C6.5 14.5 8.39888 13.1614 10 13.5V10C3.88087 10 3 15 3 16.5C3 18 3.977 23 9.5 23C14.0224 23 16 19.5 16 17V8C17.1465 9.0179 18.9222 9.35727 21 9.5V6C17.983 6 16 3.34635 16 1Z" />
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;