import React from 'react';
import Icon from '@ant-design/icons';

const IconSVG = () => (
  <svg width="1.05em" height="0.7em" viewBox="0 0 26 16" fill="currentColor">
    <path d="M13.0141 15.3333C12.7155 15.3333 12.4355 15.2867 12.1742 15.1934C11.9129 15.1015 11.6703 14.9445 11.4464 14.7223L1.0881 4.44611C0.677498 4.03876 0.481904 3.52921 0.501314 2.91745C0.519231 2.30717 0.733488 1.79836 1.14409 1.39102C1.55468 0.983672 2.07726 0.779998 2.71182 0.779998C3.34638 0.779998 3.86896 0.983672 4.27956 1.39102L13.0141 10.0564L21.8046 1.33547C22.2152 0.928124 22.7288 0.73334 23.3455 0.751115C23.9606 0.770371 24.4735 0.983672 24.8841 1.39102C25.2947 1.79836 25.5 2.3168 25.5 2.94634C25.5 3.57587 25.2947 4.09431 24.8841 4.50165L14.5818 14.7223C14.3579 14.9445 14.1152 15.1015 13.854 15.1934C13.5927 15.2867 13.3127 15.3333 13.0141 15.3333Z" />
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;