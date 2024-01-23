import React from 'react';
import DateInput, { DateInputProps } from './DateInput';
import { Story } from "@storybook/react"

export default {
  title: "Atoms/DateInput",
  component: DateInput,
  argTypes: {
    label: { control: 'text' },
    supportText: { control: 'text' },
    placeholder: { control: 'text' },
    isSearchable: { control: 'boolean' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

const Template: Story<DateInputProps> = (args) => <DateInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
};

export const Editable = Template.bind({});
Editable.args = {
  label: 'Label',
  value: '27/03/1989'
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
  disabled: true,
};