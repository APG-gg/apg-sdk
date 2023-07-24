import React from 'react';
import { Meta } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';
import PlusIcon from '@apg.gg/icons/lib/PlusIcon';
import XIcon from '@apg.gg/icons/lib/XIcon';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: {
    checkedChildren: { control: 'text' },
    unCheckedChildren: { control: 'text' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
} as Meta;

const Template: React.VFC<SwitchProps> = (args) => <Switch {...args} onClick={(event) => console.log(event)} />;

export const Default = Template.bind({});
Default.args = {
  checkedChildren: <PlusIcon className="text-blue text-2xl" />,
  unCheckedChildren: <XIcon className="text-black-800 text-2xl" />,
};

export const Checked = Template.bind({});
Checked.args = {
  checkedChildren: 'On',
  unCheckedChildren: 'Off',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checkedChildren: 'On',
  unCheckedChildren: 'Off',
  disabled: true,
};
