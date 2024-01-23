import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const ViewListIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 25 24" fill="currentColor">
    <mask id="mask0_1485_43951" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
      <rect x="0.5" width="24" height="24" />
    </mask>
    <g mask="url(#mask0_1485_43951)">
      <path d="M3.5 17V7C3.5 6.45 3.69583 5.97917 4.0875 5.5875C4.47917 5.19583 4.95 5 5.5 5H19.5C20.05 5 20.5208 5.19583 20.9125 5.5875C21.3042 5.97917 21.5 6.45 21.5 7V17C21.5 17.55 21.3042 18.0208 20.9125 18.4125C20.5208 18.8042 20.05 19 19.5 19H5.5C4.95 19 4.47917 18.8042 4.0875 18.4125C3.69583 18.0208 3.5 17.55 3.5 17ZM5.5 9H7.5V7H5.5V9ZM9.5 9H19.5V7H9.5V9ZM9.5 13H19.5V11H9.5V13ZM9.5 17H19.5V15H9.5V17ZM5.5 17H7.5V15H5.5V17ZM5.5 13H7.5V11H5.5V13Z" />
    </g>
  </svg>
);

export default (props: any) => <Icon component={ViewListIcon} {...props} />;