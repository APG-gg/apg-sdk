import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const SendIconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 15 13" fill="currentColor">
    <path d="M0.340163 12.3187L14.3335 6.31873L0.340163 0.318726L0.333496 4.98539L10.3335 6.31873L0.333496 7.65206L0.340163 12.3187Z" />
  </svg>
);

export default (props: any) => <Icon component={SendIconSVG} {...props} />;