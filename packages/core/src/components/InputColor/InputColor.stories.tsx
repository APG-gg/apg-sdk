import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputColor, { InputColorProps } from './InputColor';

export default {
  title: 'Atoms/InputColor',
  component: InputColor,
  argTypes: {
    supportText: { control: 'text' },
    error: { control: 'boolean' },
    value: { control: 'string' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
} as Meta;

const Template: Story<InputColorProps> = (args) => <InputColor {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter a number',
  value: "#1677ff",
  onChange: (value) => console.log(value),
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: true,
  errorText: { message: 'This is an error' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  readOnly: true,
};
