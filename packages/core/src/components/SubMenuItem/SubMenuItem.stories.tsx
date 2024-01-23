import React from 'react';
import SubMenuItem, { SubMenuItemProps } from './SubMenuItem';
import { Story } from "@storybook/react"
import InstagramIcon from '@apg.gg/icons/lib/InstagramIcon';

export default {
  title: "Atoms/SubMenuItem",
  component: SubMenuItem,
  argTypes: {
    item: { control: 'object', description: 'Menu item object', table: { type: { summary: 'object' } } },
    isCollapsed: { control: 'boolean' },
    isActive: { control: 'boolean' },
    onClick: { control: 'function', action: 'clicked', description: 'Click event', table: { type: { summary: 'function' } } },
  },
}

const Template: Story<SubMenuItemProps> = (args) => <SubMenuItem {...args} />;

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
    icon: <InstagramIcon className="flex text-2xl" />,
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