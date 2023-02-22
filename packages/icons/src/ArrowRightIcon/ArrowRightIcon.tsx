import React from 'react';
import Icon from '@ant-design/icons';

const IconSVG = () => (
  <svg width="0.7em" height="1.05em" viewBox="0 0 16 26" fill="currentColor">
    <path d="M15.3333 12.9859C15.3333 13.2845 15.2867 13.5645 15.1934 13.8258C15.1015 14.0871 14.9445 14.3297 14.7223 14.5536L4.44611 24.9119C4.03876 25.3225 3.52921 25.5181 2.91745 25.4987C2.30717 25.4808 1.79836 25.2665 1.39102 24.8559C0.983672 24.4453 0.779998 23.9227 0.779998 23.2882C0.779998 22.6536 0.983672 22.131 1.39102 21.7204L10.0564 12.9859L1.33547 4.19538C0.928123 3.78478 0.733339 3.27116 0.751114 2.65452C0.77037 2.03937 0.983671 1.5265 1.39102 1.1159C1.79836 0.705301 2.3168 0.499998 2.94633 0.499998C3.57587 0.499998 4.09431 0.705301 4.50165 1.1159L14.7223 11.4182C14.9445 11.6421 15.1015 11.8848 15.1934 12.146C15.2867 12.4073 15.3333 12.6873 15.3333 12.9859Z" />
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;