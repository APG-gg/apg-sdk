import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const TrashIconIconSVG = () => (
  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em">
    <path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
  </svg>
);

export default (props: any) => <Icon component={TrashIconIconSVG} className="flex" {...props} />;