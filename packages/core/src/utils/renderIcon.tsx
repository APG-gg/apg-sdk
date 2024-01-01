import React from 'react';

const renderIcon = (icon: string | React.ReactNode, className: string = '') => {
  if (typeof icon === 'string') {
    if (icon.startsWith('https') || icon.startsWith('/')) {
      return <img src={icon} alt="" className={className} />;
    }
  } else {
    return icon;
  }
};


export default renderIcon;