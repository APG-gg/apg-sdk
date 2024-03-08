import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const ArrowRightIconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 19C2.45 19 1.97917 18.8042 1.5875 18.4125C1.19583 18.0208 1 17.55 1 17V7C1 6.45 1.19583 5.97917 1.5875 5.5875C1.97917 5.19583 2.45 5 3 5H13C13.55 5 14.0208 5.19583 14.4125 5.5875C14.8042 5.97917 15 6.45 15 7V17C15 17.55 14.8042 18.0208 14.4125 18.4125C14.0208 18.8042 13.55 19 13 19H3ZM18 11C17.7167 11 17.4792 10.9042 17.2875 10.7125C17.0958 10.5208 17 10.2833 17 10V6C17 5.71667 17.0958 5.47917 17.2875 5.2875C17.4792 5.09583 17.7167 5 18 5H22C22.2833 5 22.5208 5.09583 22.7125 5.2875C22.9042 5.47917 23 5.71667 23 6V10C23 10.2833 22.9042 10.5208 22.7125 10.7125C22.5208 10.9042 22.2833 11 22 11H18ZM5 15H11C11.2 15 11.35 14.9083 11.45 14.725C11.55 14.5417 11.5333 14.3667 11.4 14.2L9.775 12.025C9.675 11.8917 9.54167 11.825 9.375 11.825C9.20833 11.825 9.075 11.8917 8.975 12.025L7.5 14L6.525 12.7C6.425 12.5667 6.29167 12.5 6.125 12.5C5.95833 12.5 5.825 12.5667 5.725 12.7L4.6 14.2C4.46667 14.3667 4.45 14.5417 4.55 14.725C4.65 14.9083 4.8 15 5 15ZM18 19C17.7167 19 17.4792 18.9042 17.2875 18.7125C17.0958 18.5208 17 18.2833 17 18V14C17 13.7167 17.0958 13.4792 17.2875 13.2875C17.4792 13.0958 17.7167 13 18 13H22C22.2833 13 22.5208 13.0958 22.7125 13.2875C22.9042 13.4792 23 13.7167 23 14V18C23 18.2833 22.9042 18.5208 22.7125 18.7125C22.5208 18.9042 22.2833 19 22 19H18Z" />
  </svg>
);

export default (props: any) => <Icon component={ArrowRightIconSVG} className="flex" {...props} />;