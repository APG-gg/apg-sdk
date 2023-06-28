import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 1C11.0147 1 9 3.01472 9 5.5V9H6.5C6.22386 9 6 9.22386 6 9.5V13.5C6 13.7761 6.22386 14 6.5 14H9V22.5C9 22.7761 9.22386 23 9.5 23H13.5C13.7761 23 14 22.7761 14 22.5V14H16.5C16.7294 14 16.9294 13.8439 16.9851 13.6213L17.9851 9.62127C18.0224 9.4719 17.9889 9.31365 17.8941 9.19229C17.7993 9.07094 17.654 9 17.5 9H14V7.5C14 6.67157 14.6716 6 15.5 6H17.5C17.7761 6 18 5.77614 18 5.5V1.5C18 1.22386 17.7761 1 17.5 1H13.5Z" />
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;