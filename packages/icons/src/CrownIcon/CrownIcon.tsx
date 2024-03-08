import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <g>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1675 5.4453L7.77153 10.537L3.62422 7.21913C2.8954 6.63607 1.8359 7.28089 2.01895 8.19612L4.01895 18.1961C4.11243 18.6635 4.52285 19 4.99953 19H18.9995C19.4762 19 19.8866 18.6635 19.9801 18.1961L21.9801 8.19612L21.9962 8.08765C22.0789 7.23127 21.0745 6.6594 20.3748 7.21913L16.2265 10.537L12.8316 5.4453C12.4358 4.85157 11.5633 4.85157 11.1675 5.4453ZM11.9995 7.803L15.1675 12.5547L15.2423 12.6534C15.5879 13.0552 16.199 13.1211 16.6242 12.7809L19.4805 10.495L18.1795 17H5.81853L4.51753 10.495L7.37483 12.7809C7.83279 13.1472 8.50626 13.0427 8.83158 12.5547L11.9995 7.803Z"/>
    </g>
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;