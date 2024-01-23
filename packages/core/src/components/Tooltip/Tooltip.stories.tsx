import React from 'react';
import Tooltip, { TooltipProps } from './Tooltip';
import { Story } from "@storybook/react"

export default {
  title: "Atoms/Tooltip",
  component: Tooltip,
  argTypes: {
    children: { control: 'text' },
    text: { control: 'text', defaultValue: 'This is a tooltip' },
    width: { control: 'text', defaultValue: 'max-content' },
  },
}

const Template: Story<TooltipProps> = (args) => (
  <div className="flex items-center justify-center w-full h-80">
    <Tooltip {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  children: <h1 className="text-white">Hover me</h1>,
  text: 'This is a tooltip',
  width: 'max-content',
};
