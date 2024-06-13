import React from 'react';
import Input, { InputProps } from './Input';
import { Story } from "@storybook/react"

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    label: { control: 'text' },
    supportText: { control: 'text' },
    placeholder: { control: 'text' },
    isSearchable: { control: 'boolean' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
  prefix: <img src="https://games.cache.apg.gg/honor-of-kings/lanes/clash.png" alt="" width={24} height={24} />
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

export const Searchable = Template.bind({});
Searchable.args = {
  label: 'Label',
  isSearchable: true,
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