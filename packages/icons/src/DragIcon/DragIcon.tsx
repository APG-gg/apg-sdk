import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const DragIcon = () => (
  <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 24 24">
    <g id="drag">
      <path d="M10,6H6V2h4V6z M18,2h-4v4h4V2z M10,10H6v4h4V10z M18,10h-4v4h4V10z M10,18H6v4h4V18z M18,18h-4v4h4V18z" />
    </g>
  </svg>
);

export default (props: any) => <Icon component={DragIcon} {...props} />;