import React from 'react';
import { Story } from "@storybook/react"
import Icon from '@apg.gg/core/lib/Icon';
import { IconProps } from '@apg.gg/core/lib/icon-props';
import IconList from './src/icon-list';

export default {
  title: "Atoms/Icons",
  component: Icon,
  argTypes: {
    size: { control: 'select', options: [16, 32, 48]},
    color: { control: 'select', options: ["blue", "aqua", "green", "yellow", "fucsia", "red"]},
  },
}

export const AllIcons: Story<IconProps> = (args) => (
  <IconList {...args} />
);

AllIcons.args = {
  size: 32,
  color: "#FFFFFF",
};

AllIcons.parameters = {
  docs: {
    disable: true,
  },
};
