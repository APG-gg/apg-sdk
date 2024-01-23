import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor">
    <circle cx="12" cy="24" r="3" />
    <circle cx="24" cy="24" r="3" />
    <circle cx="36" cy="24" r="3" />
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;