import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import QRCode, { QRProps } from './QRCode';

export default {
  title: 'Atoms/QRCode',
  component: QRCode,
  argTypes: {
    errorLevel: {
      control: {
        type: 'select',
        options: ['L', 'M', 'Q', 'H'],
      },
    },
  }
} as Meta;

const Template: StoryFn <typeof QRCode> = (args: QRProps) => <QRCode {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'https://beta.apg.gg',
  size: 200,
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  errorLevel: 'L',
  icon: '',
  iconSize: 40,
  type: 'canvas',
  prefixCls: 'qrcode'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: 'https://beta.apg.gg/_next/image?url=%2Fassets%2Fresources%2Flogo.png&w=96&q=75',
  errorLevel: 'H',
};

export const SVGType = Template.bind({});
SVGType.args = {
  ...Default.args,
  type: 'svg',
};