import React from 'react';
import MenuItem, { MenuItemProps } from './MenuItem';
import { Story } from "@storybook/react"
import IconDrakeInfernal from '@apg.gg/icons/lib/IconDrakeInfernal';

export default {
  title: "Atoms/MenuItem",
  component: MenuItem,
  argTypes: {
    item: { control: 'object', description: 'Menu item object', table: { type: { summary: 'object' } } },
    isCollapsed: { control: 'boolean' },
    isActive: { control: 'boolean' },
    onClick: { control: 'function', action: 'clicked', description: 'Click event', table: { type: { summary: 'function' } } },
  },
}

const Template: Story<MenuItemProps> = (args) => <MenuItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  item: {
    key: "home",
    name: "Home",
    bgColor: "blue",
    href: "/dashboard",
    target: "_self",
  },
  isCollapsed: false,
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  item: {
    key: "home",
    name: "Home",
    bgColor: "blue",
    href: "/dashboard",
    target: "_self",
  },
  isCollapsed: false,
  isActive: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  item: {
    key: "home",
    icon: <IconDrakeInfernal className="flex text-2xl" />,
    name: "Infernal Drake",
    bgColor: "red",
    href: "/dashboard",
    target: "_self",
  },
  isCollapsed: false,
  isActive: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
  item: {
    key: "cosplayer",
    icon: "https://fastly.picsum.photos/id/64/200/200.jpg?hmac=lJVbDn4h2axxkM72s1w8X1nQxUS3y7li49cyg0tQBZU",
    name: "Cosplayer Name",
    bgColor: "red",
    href: "/dashboard",
    target: "_self",
  },
  isCollapsed: false,
  isActive: false,
};