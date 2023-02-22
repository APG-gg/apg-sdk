import React from 'react';
import Icon from '@ant-design/icons';

const IconSVG = () => (
  <svg width="1.05em" height="0.7em" viewBox="0 0 26 16" fill="currentColor">
    <path d="M1.11521 14.6679C0.70507 14.2613 0.5 13.7438 0.5 13.1153C0.5 12.4869 0.70507 11.9694 1.11521 11.5627L11.406 1.35995C11.6298 1.13815 11.8721 0.980672 12.1331 0.887516C12.3941 0.795839 12.6737 0.75 12.972 0.75C13.2703 0.75 13.55 0.795839 13.811 0.887516C14.072 0.980672 14.3143 1.13815 14.538 1.35995L24.8848 11.6182C25.2949 12.0248 25.5 12.5239 25.5 13.1153C25.5 13.7068 25.2763 14.2243 24.8289 14.6679C24.4187 15.0746 23.8967 15.2779 23.2629 15.2779C22.629 15.2779 22.107 15.0746 21.6969 14.6679L12.972 6.01774L4.19127 14.7234C3.78113 15.13 3.27778 15.3333 2.68121 15.3333C2.08464 15.3333 1.56264 15.1115 1.11521 14.6679Z" />
  </svg>  
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;