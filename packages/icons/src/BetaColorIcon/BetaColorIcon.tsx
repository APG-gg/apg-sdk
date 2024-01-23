import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const BetaColorIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 20 18" fill="none">
    <path d="M9.24954 0.838867L2.12025 5.96264C1.40536 6.47642 1.1105 7.39725 1.39399 8.23073L4.25555 16.644C4.5313 17.4548 5.29265 18 6.14902 18H15.2382C16.1327 18 16.9184 17.406 17.1624 16.5454L19.534 8.17793C19.7637 7.36752 19.461 6.50006 18.777 6.00847L11.584 0.838867C10.8865 0.337633 9.94696 0.337632 9.24954 0.838867Z" fill="url(#paint0_linear_1564_43233)" />
    <path fillRule="evenodd" clipRule="evenodd" d="M10.2049 7.04199L8.93141 8.95138L7.37617 7.70717C7.10287 7.48853 6.70555 7.73034 6.7742 8.07354L7.5242 11.8235C7.55925 11.9988 7.71316 12.125 7.89191 12.125H13.1419C13.3207 12.125 13.4746 11.9988 13.5096 11.8235L14.2596 8.07354L14.2657 8.03287C14.2967 7.71173 13.92 7.49727 13.6577 7.70717L12.102 8.95138L10.8289 7.04199C10.6805 6.81934 10.3533 6.81934 10.2049 7.04199ZM10.5169 7.92613L11.7049 9.70801L11.733 9.74501C11.8626 9.8957 12.0917 9.9204 12.2512 9.79283L13.3223 8.93563L12.8344 11.375H8.19904L7.71116 8.93563L8.78265 9.79283C8.95439 9.93021 9.20694 9.891 9.32893 9.70801L10.5169 7.92613Z" fill="#484C4F" />
    <defs>
      <linearGradient id="paint0_linear_1564_43233" x1="7.34237" y1="18.7184" x2="17.7892" y2="15.4132" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A38300" />
        <stop offset="1" stopColor="#FFEF75" />
      </linearGradient>
    </defs>
  </svg>
);

export default (props: any) => <Icon component={BetaColorIcon} className="flex" {...props} />;