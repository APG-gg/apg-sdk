import React from 'react';
import Dropdown, { DropdownProps } from './Dropdown';
import { Story } from "@storybook/react"
import Button from '@apg.gg/core/lib/Button';

export default {
  title: "Atoms/Dropdown",
  component: Dropdown,
  argTypes: {
    items: { control: 'array' },
    placement: { control: 'select', options: ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom']},
    trigger: { control: 'select', options: ['click', 'hover']},
    width: { control: 'number', defaultValue: 192 },
  },
}

const dropdownItems = [
  {
    key: '1',
    label: <span style={{ color: 'red' }}>Custom Label 1</span>,
    danger: true,
    icon: 'person',
    onClick: () => console.log('1'),
  },
  {
    key: '2',
    label: 'Item 2',
    onClick: () => console.log('2'),
  },
  {
    key: '3',
    label: <strong>Custom Label 3</strong>,
    onClick: () => console.log('3'),
  },
];

const Template: Story<DropdownProps> = (args) => {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Dropdown 
        {...args}
      >
        <Button onClick={() => console.log('click')}>Click me</Button>
      </Dropdown>
    </div>
  )
};

export const Basic = Template.bind({});
Basic.args = {
  items: dropdownItems,
  width: 192,
};