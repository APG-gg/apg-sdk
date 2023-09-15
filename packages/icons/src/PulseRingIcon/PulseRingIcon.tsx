import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const PulseRingSVG = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path className="pulse_ring_1" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="translate(12, 12) scale(0)"/>
    <path className="pulse_ring_1 pulse_ring_2" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="translate(12, 12) scale(0)"/>
  </svg>
);

export default (props: any) => <Icon component={PulseRingSVG} className="flex" {...props} />;