import React from 'react';
import Link, { LinkProps } from './Link';
import { Story } from '@storybook/react';

export default {
  title: "Atoms/Link",
  component: Link,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['primary', 'outline'], defaultValue: 'primary'},
    fontSize: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']},
    iconSize: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']},
    iconPosition: { control: 'radio', options: ['left', 'right']},
    icon: { control: 'text' },
  },
}

const Template: Story<LinkProps> = (args) => <Link {...args}>{args.children}</Link>;

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