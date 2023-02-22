import React from 'react';
import Tag, { TagProps } from './Tag';
import { Story } from "@storybook/react"

export default {
  title: "Atoms/Tag",
  component: Tag,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ["blue", "aqua", "green", "yellow", "fucsia", "red"]},
    iconPosition: { control: 'radio', options: ['left', 'right']},
    icon: { control: 'text' },
  },
}

const Template: Story<TagProps> = (args) => <Tag {...args}>{args.children}</Tag>;

export const Basic = Template.bind({});
Basic.args = {
  onClick: () => console.log('clicked'),
  children: 'Enable',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  onClick: () => console.log('clicked'),
  children: 'Enable',
  iconPosition: 'left',
  icon: 'discord',
};