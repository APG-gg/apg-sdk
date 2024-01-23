import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const EditIcon = () => (
  <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 12 12">
    <path d="M9.4,4.6l-2-2L8,2c0.2-0.2,0.4-0.3,0.7-0.3C9,1.7,9.2,1.8,9.4,2L10,2.6c0.2,0.2,0.3,0.4,0.3,0.7S10.2,3.8,10,3.9L9.4,4.6z
	 M2.2,10.3c-0.1,0-0.2,0-0.3-0.1C1.7,10.1,1.7,10,1.7,9.8V8.5c0-0.1,0-0.1,0-0.2c0-0.1,0.1-0.1,0.1-0.2l4.9-4.9l2,2l-4.9,4.9
	c0,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0H2.2z"/>
  </svg>
);

export default (props: any) => <Icon component={EditIcon} {...props} />;