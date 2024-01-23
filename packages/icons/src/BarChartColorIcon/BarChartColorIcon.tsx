import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 86 86">
    <path d="M0.97168 1.08154L84.9717 1.08154L84.9717 85.0815L0.97168 85.0815L0.97168 1.08154Z" fill="url(#paint0_linear_2508_862)" />
    <path d="M8.875 36.5854L21.881 36.5854L21.881 85.0815L8.875 85.0815L8.875 36.5854Z" fill="url(#paint1_linear_2508_862)" />
    <path d="M27.0957 54.7224L40.1017 54.7224L40.1017 85.0814L27.0957 85.0814L27.0957 54.7224Z" fill="url(#paint2_linear_2508_862)" />
    <path d="M45.3242 21.8716L58.3302 21.8716L58.3302 85.0816L45.3242 85.0816L45.3242 21.8716Z" fill="url(#paint3_linear_2508_862)" />
    <path d="M63.5439 67.6516L76.5499 67.6516L76.5499 85.0816L63.5439 85.0816L63.5439 67.6516Z" fill="url(#paint4_linear_2508_862)" />
    <defs>
      <linearGradient id="paint1_linear_2508_862" x1="15.3773" y1="36.9872" x2="15.3773" y2="84.6125" gradientUnits="userSpaceOnUse">
        <stop offset="0.0051509" stop-color="#4480F7" />
        <stop offset="1" stop-color="#3462BD" />
      </linearGradient>
      <linearGradient id="paint2_linear_2508_862" x1="33.6015" y1="54.7252" x2="33.6015" y2="85.0814" gradientUnits="userSpaceOnUse">
        <stop offset="0.0051509" stop-color="#EC4431" />
        <stop offset="0.3002" stop-color="#E74330" />
        <stop offset="0.6329" stop-color="#DA3F2D" />
        <stop offset="0.9828" stop-color="#C33828" />
        <stop offset="1" stop-color="#C23828" />
      </linearGradient>
      <linearGradient id="paint3_linear_2508_862" x1="51.8258" y1="21.8688" x2="51.8258" y2="85.0816" gradientUnits="userSpaceOnUse">
        <stop offset="0.0051509" stop-color="#FDD835" />
        <stop offset="0.2697" stop-color="#F9D534" />
        <stop offset="0.5326" stop-color="#EDCB32" />
        <stop offset="0.7941" stop-color="#D9BA2D" />
        <stop offset="1" stop-color="#C4A829" />
      </linearGradient>
      <linearGradient id="paint4_linear_2508_862" x1="70.0469" y1="67.6516" x2="70.0469" y2="85.0816" gradientUnits="userSpaceOnUse">
        <stop offset="0.0079082" stop-color="#2CA94F" />
        <stop offset="0.9969" stop-color="#207A39" />
      </linearGradient>
    </defs>
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;