import React from 'react';
import Button, { ButtonProps } from './Button';
import { Story } from "@storybook/react"

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['default', 'outline']},
    fontSize: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']},
    iconSize: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']},
    iconPosition: { control: 'radio', options: ['left', 'right']},
    icon: { control: 'text' },
  },
}

const Template: Story<ButtonProps> = (args) => <Button {...args}>{args.children}</Button>;

export const Basic = Template.bind({});
Basic.args = {
  onClick: () => console.log('clicked'),
  children: 'Enable',
  fontSize: 'base'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  onClick: () => console.log('clicked'),
  children: 'Enable',
  fontSize: 'base',
  icon: 'discord',
  iconPosition: 'left',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  onClick: () => console.log('clicked'),
  iconSize: '2xl',
  icon: 'discord'
};