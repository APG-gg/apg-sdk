// Tabs.stories.tsx
import React from 'react';
import { StoryFn } from "@storybook/react"
import Tabs, { TabsProps } from './Tabs';

export default {
  title: 'Atoms/Tabs',
  component: Tabs,
  argTypes: {
    tabs: { control: 'ob' },
    centered: { control: 'boolean' },
    type: { control: 'select', options: ['default', 'extended'], defaultValue: 'default'},
    prefixCls: { control: 'text' },
  },
}

const Template: StoryFn<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      label: 'Tab 1',
      content: <div>Content 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>Content 2</div>,
    },
  ],
};