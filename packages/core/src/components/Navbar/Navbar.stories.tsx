import React from 'react';
import Navbar, { NavbarProps } from './Navbar';
import { Story } from "@storybook/react"

export default {
  title: "Organisms/Navbar",
  component: Navbar,
  argTypes: {
    isLoggedIn: { control: 'boolean' },
  },
}

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  isLoggedIn: false,
};
