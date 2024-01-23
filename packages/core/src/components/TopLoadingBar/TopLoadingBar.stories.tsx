import React from 'react';
import { Meta, Story } from '@storybook/react';
import TopLoadingBar, { TopLoadingBarProps } from './TopLoadingBar';

export default {
  component: TopLoadingBar,
  title: 'Components/TopLoadingBar',
} as Meta;

const Template: Story<TopLoadingBarProps> = (args) => <TopLoadingBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 0,
  color: 'blue',
  onLoaderFinished: () => console.log('Loader finished'), 
  loaderSpeed: 500,
  shadow: true
}