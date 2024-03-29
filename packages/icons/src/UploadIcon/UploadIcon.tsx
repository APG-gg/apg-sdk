import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const UploadIcon = () => (
  <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 512 512">
    <path d="M64 64L448 64 448 112 64 112 64 64ZM232 298L235 242 212 270 156 323 124 291 256 159 388 291 356 323 300 270 277 242 280 298 280 448 232 448 232 298Z" />
  </svg>
);

export default (props: any) => <Icon component={UploadIcon} {...props} />;