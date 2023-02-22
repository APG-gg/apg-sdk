import React from 'react';
import Icon from '@ant-design/icons';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.5 13.4637L13.65 22.3443L12 24L10.35 22.3443L8.5 20.4879L3.83261 15.8044L1.5 13.4637L3.83261 11.1231V12.493L6.16739 14.8358V8.78022L8.5 6.43956V17.1765L10.8326 19.5172V2.34067L13.1674 0V19.5172L15.5 17.1765V5.85275L17.8326 3.51209V14.8337L20.1652 12.493V11.1231L20.8478 11.808L22.5 13.4637Z" />
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;