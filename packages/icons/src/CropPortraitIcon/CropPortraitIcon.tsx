import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const CropPortraitIconSVG = () => (
  <svg aria-label="Crop portrait icon" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 23H8a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h8a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM8 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h8a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z"></path>
  </svg>
);

export default (props: any) => <Icon component={CropPortraitIconSVG} className="flex" {...props} />;