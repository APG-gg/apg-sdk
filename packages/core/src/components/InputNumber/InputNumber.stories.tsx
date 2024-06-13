import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputNumber, { InputNumberProps } from './InputNumber';
import PlusIcon from '@apg.gg/icons/lib/PlusIcon';

export default {
  title: 'Atoms/InputNumber',
  component: InputNumber,
  argTypes: {
    rounded: { control: 'boolean' },
    supportText: { control: 'text' },
    error: { control: 'boolean' },
    value: { control: 'number' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
} as Meta;

const Template: Story<InputNumberProps> = (args) => <InputNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter a number',
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  increaseIcon: <PlusIcon className="text-2xl" />,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: true,
  errorText: { message: 'This is an error' },
  increaseIcon: <PlusIcon />,
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
