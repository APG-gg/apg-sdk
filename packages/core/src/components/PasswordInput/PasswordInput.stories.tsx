import React from 'react';
import PasswordInput, { PasswordInputProps } from './PasswordInput';
import { Story } from "@storybook/react"

export default {
  title: "Atoms/PasswordInput",
  component: PasswordInput,
  argTypes: {
    label: { control: 'text' },
    supportText: { control: 'text' },
    placeholder: { control: 'text' },
    isSearchable: { control: 'boolean' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

const Template: Story<PasswordInputProps> = (args) => <PasswordInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
};

export const Editable = Template.bind({});
Editable.args = {
  label: 'Label',
  value: 'Editable'
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: 'Label',
  supportText: 'Support text',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  value: 'Editable',
  disabled: true,
};