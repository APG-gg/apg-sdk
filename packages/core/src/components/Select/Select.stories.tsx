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
    multiple: { control: 'boolean' },
  },
}

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
  options: [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
    { value: 'option-4', label: 'Option 4' },
    { value: 'option-5', label: 'Option 5' },
    { value: 'option-6', label: 'Option 6' },
    { value: 'option-7', label: 'Option 7' },
    { value: 'option-8', label: 'Option 8' },
    { value: 'option-9', label: 'Option 9' }
  ],
  value: 'option-4'
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Label',
  multiple: true,
  options: [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
    { value: 'option-4', label: 'Option 4' },
    { value: 'option-5', label: 'Option 5' },
    { value: 'option-6', label: 'Option 6' },
    { value: 'option-7', label: 'Option 7' },
    { value: 'option-8', label: 'Option 8' },
    { value: 'option-9', label: 'Option 9' }
  ],
};