import React from 'react';
import Dropdown, { DropdownProps } from './Dropdown';
import { Story } from "@storybook/react"
import DropdownItem from '../DropdownItem/DropdownItem';
import Button from '../Button/Button';

export default {
  title: "Atoms/Dropdown",
  component: Dropdown,
  argTypes: {
    items: { control: 'array' },
    placement: { control: 'select', options: ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom']},
    trigger: { control: 'select', options: ['click', 'hover']},
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
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Dropdown 
        {...args}
        visible={isOpen}
        onVisibleChange={(visible) => setIsOpen(visible)}
        content={(
          <div className="flex flex-col gap-1 w-[200px]">
            {dropdownItems.map((item) => (
              <DropdownItem 
                item={item} 
                prefixCls='dropdown' 
                handleItemClick={() => {
                  setIsOpen(false);
                  console.log(item.label);
                }}
              />
            ))}
          </div>
        )}
      >
        <Button onClick={() => setIsOpen(!isOpen)}>Click me please!</Button>
      </Dropdown>
    </div>
  )
};

export const Basic = Template.bind({});

Basic.args = {
  content: (
    <div className="flex flex-col gap-1 w-[400px]">
      {dropdownItems.map((item) => (
        <DropdownItem item={item} prefixCls='dropdown' handleItemClick={() => console.log('click')} />
      ))}
    </div>
  ),
  width: 192,
};