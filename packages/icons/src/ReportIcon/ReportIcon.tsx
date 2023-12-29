import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" width="1em" height="1em">
    <path fill="none" d="M0 0h24v24H0z"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;