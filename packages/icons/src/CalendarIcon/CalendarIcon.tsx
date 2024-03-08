import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 66 66" fill="currentColor">
    <g>
      <path d="M39.875 49.5C37.95 49.5 36.3229 48.8354 34.9938 47.5063C33.6646 46.1771 33 44.55 33 42.625C33 40.7 33.6646 39.0729 34.9938 37.7438C36.3229 36.4146 37.95 35.75 39.875 35.75C41.8 35.75 43.4271 36.4146 44.7563 37.7438C46.0854 39.0729 46.75 40.7 46.75 42.625C46.75 44.55 46.0854 46.1771 44.7563 47.5063C43.4271 48.8354 41.8 49.5 39.875 49.5ZM13.75 60.5C12.2375 60.5 10.9427 59.9615 9.86563 58.8844C8.78854 57.8073 8.25 56.5125 8.25 55V16.5C8.25 14.9875 8.78854 13.6927 9.86563 12.6156C10.9427 11.5385 12.2375 11 13.75 11H16.5V8.25C16.5 7.47083 16.7635 6.81771 17.2906 6.29062C17.8177 5.76354 18.4708 5.5 19.25 5.5C20.0292 5.5 20.6823 5.76354 21.2094 6.29062C21.7365 6.81771 22 7.47083 22 8.25V11H44V8.25C44 7.47083 44.2635 6.81771 44.7906 6.29062C45.3177 5.76354 45.9708 5.5 46.75 5.5C47.5292 5.5 48.1823 5.76354 48.7094 6.29062C49.2365 6.81771 49.5 7.47083 49.5 8.25V11H52.25C53.7625 11 55.0573 11.5385 56.1344 12.6156C57.2115 13.6927 57.75 14.9875 57.75 16.5V55C57.75 56.5125 57.2115 57.8073 56.1344 58.8844C55.0573 59.9615 53.7625 60.5 52.25 60.5H13.75ZM13.75 55H52.25V27.5H13.75V55Z" fill="#FDFEFF"/>
    </g>
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;