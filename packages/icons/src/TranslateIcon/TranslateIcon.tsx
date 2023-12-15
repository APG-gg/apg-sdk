import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.1 18.95L14.225 21.375C14.1583 21.5583 14.0417 21.7083 13.875 21.825C13.7083 21.9417 13.525 22 13.325 22C12.9917 22 12.721 21.8623 12.513 21.587C12.305 21.3117 12.2673 21.0077 12.4 20.675L16.2 10.625C16.2833 10.4417 16.4083 10.2917 16.575 10.175C16.7417 10.0583 16.925 10 17.125 10H17.875C18.075 10 18.2583 10.0583 18.425 10.175C18.5917 10.2917 18.7167 10.4417 18.8 10.625L22.6 20.7C22.7333 21.0167 22.7 21.3127 22.5 21.588C22.3 21.8633 22.0333 22.0007 21.7 22C21.4833 22 21.296 21.9373 21.138 21.812C20.98 21.6867 20.859 21.5243 20.775 21.325L19.95 18.95H15.1ZM15.7 17.2H19.3L17.55 12.25H17.45L15.7 17.2ZM9 14L4.7 18.3C4.51667 18.4833 4.28334 18.575 4 18.575C3.71667 18.575 3.48334 18.4833 3.3 18.3C3.11667 18.1167 3.025 17.8833 3.025 17.6C3.025 17.3167 3.11667 17.0833 3.3 16.9L7.65 12.55C7.01667 11.85 6.46234 11.125 5.987 10.375C5.51167 9.625 5.09934 8.83334 4.75 8H6.85C7.15 8.6 7.471 9.14167 7.813 9.625C8.155 10.1083 8.56734 10.6167 9.05 11.15C9.78334 10.35 10.3917 9.529 10.875 8.687C11.3583 7.845 11.7667 6.94934 12.1 6H2C1.71667 6 1.479 5.904 1.287 5.712C1.095 5.52 0.999337 5.28267 1 5C1 4.71667 1.096 4.479 1.288 4.287C1.48 4.095 1.71734 3.99934 2 4H8V3C8 2.71667 8.096 2.479 8.288 2.287C8.48 2.095 8.71734 1.99934 9 2C9.28334 2 9.521 2.096 9.713 2.288C9.905 2.48 10.0007 2.71734 10 3V4H16C16.2833 4 16.521 4.096 16.713 4.288C16.905 4.48 17.0007 4.71734 17 5C17 5.28334 16.904 5.521 16.712 5.713C16.52 5.905 16.2827 6.00067 16 6H14.1C13.75 7.18334 13.275 8.33334 12.675 9.45C12.075 10.5667 11.3333 11.6167 10.45 12.6L12.85 15.05L12.1 17.1L9 14Z" />
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;