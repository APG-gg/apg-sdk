import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const SortIconSvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <g>
      <path d="M3 18V16H9V18H3ZM3 13V11H15V13H3ZM3 8V6H21V8H3Z" />
    </g>
  </svg>
);

export default (props: any) => <Icon component={SortIconSvg} {...props} />;