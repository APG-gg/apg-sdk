import React from 'react';
import Select, { SelectProps } from './Select';
import { Story } from "@storybook/react"

export default {
  title: "Atoms/Select",
  component: Select,
  argTypes: {
    label: { control: 'text' },
    supportText: { control: 'text' },
    placeholder: { control: 'text' },
    isSearchable: { control: 'boolean' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
};