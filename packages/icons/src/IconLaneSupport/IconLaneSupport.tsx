import React from 'react';
import Icon from '@ant-design/icons';

const LaneSupportSvg = () => (
  <svg viewBox="0 0 550 550" width="1em" height="1em" fill="currentColor">
    <g>
      <path d="M4.8,127.36h176.27l47.5,56.08l-32.62,129.91l-79.26-38.95l46.64-72.64C163.33,201.76,87.21,219.5,4.8,127.36z
        "/>
      <path d="M545.62,127.36H369.35l-47.5,56.08l32.62,129.91l79.26-38.95l-46.64-72.64
        C387.1,201.76,463.21,219.5,545.62,127.36z"/>
      <polygon points="293.98,201.76 276.44,218.64 258.9,201.76 210.45,477.6 276.44,533.3 342.43,477.6 	"/>
      <polygon points="274.94,164.44 354.36,54.1 336.33,16.33 276.44,16.33 272.72,16.33 212.83,16.33 194.81,54.1 
        274.23,164.44 274.24,165.42 274.58,164.94 274.93,165.42 	"/>
    </g>
  </svg>
);

export default (props: any) => <Icon component={LaneSupportSvg} {...props} />;