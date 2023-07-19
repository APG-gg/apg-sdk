import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const DownloadIcon = () => (
  <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 512 512">
    <path d="M232 64L280 64 280 214 277 270 300 242 356 189 388 221 256 353 124 221 156 189 212 242 235 270 232 214 232 64ZM64 400L448 400 448 448 64 448 64 400Z" />
  </svg>
);

export default (props: any) => <Icon component={DownloadIcon} {...props} />;