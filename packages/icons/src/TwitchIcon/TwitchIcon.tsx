import React from 'react';
import Icon from '@ant-design/icons';

const ArrowRightIconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M3 1L1.5 5V20H7V23H10L13 20H17L22.5 14.5V1H3ZM5 3H20.5V13.5L17 17H12L9.5 19.5V17H5V3ZM10 12.5V7H12V12.5H10ZM15 7V12.5H17V7H15Z" />
</svg>  
);

export default (props: any) => <Icon component={ArrowRightIconSVG} className="flex" {...props} />;