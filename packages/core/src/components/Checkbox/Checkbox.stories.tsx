import React from 'react';
import Checkbox, { CheckboxChangeEvent, CheckboxProps } from './Checkbox';
import { StoryFn } from '@storybook/react';

export default {
  title: "Atoms/Checkbox",
  component: Checkbox
}

const Template: StoryFn <CheckboxProps> = (args) => {
  const [checked, setChecked] = React.useState(args.checked);
  const handleChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
    args.onChange?.(e);
  }

  return <Checkbox {...args} checked={checked} onChange={handleChange} />
};

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
  defaultChecked: false,
  onChange: (e) => console.log(e.target.checked)
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  defaultChecked: true,
  onChange: (e) => console.log(e.target.checked)
};