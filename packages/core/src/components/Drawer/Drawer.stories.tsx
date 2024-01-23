import React from 'react';
import Drawer, { DrawerProps } from './Drawer';
import { Story } from "@storybook/react"
import Button from '../Button';

export default {
  title: "Atoms/Drawer",
  component: Drawer,
  argTypes: {
    isOpen: { control: 'boolean' },
    disableClickOutsideToClose: { control: 'boolean' },
    header: { control: 'text' },
    content: { control: 'text' },
    footer: { control: 'text' },
  },
}

const Template: Story<DrawerProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Drawer</Button>
      <Drawer 
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        disableClickOutsideToClose={args.disableClickOutsideToClose}
      />
    </>
  )
};

export const Basic = Template.bind({});
Basic.args = {
  isOpen: false,
  disableClickOutsideToClose: false,
  content: 'Drawer Content',
};