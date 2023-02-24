import React from 'react';
import Sidebar, { SidebarProps } from './Sidebar';
import { Story } from "@storybook/react"
import ApgIcon from '@apg.gg/icons/lib/ApgIcon';

export default {
  title: "Organisms/Sidebar",
  component: Sidebar,
}

const menuItems = [
  {
    key: "home",
    name: "Home",
    bgColor: "blue",
    href: "/dashboard",
    target: "_self",
  },
  {
    key: "gamers", 
    name: "For Gamers",
    bgColor: "aqua",
    href: "/inbox",
    target: "_self",
  },
  {
    key: "streamers", 
    name: "For Streamers",
    bgColor: "green",
    href: "/calendar",
    target: "_self",
  },
  {
    key: "cosplayers", 
    name: "For Cosplayers",
    bgColor: "yellow",
    href: "/settings",
    target: "_self",
  },
  {
    key: "you", 
    name: "For You",
    bgColor: "fucsia",
    href: "/settings",
    target: "_self",
  },
  {
    key: "join", 
    name: "Join us",
    bgColor: "red",
    href: "/settings",
    target: "_self",
  },
];


const Template: Story<SidebarProps> = (args) => <Sidebar {...args}>{args.children}</Sidebar>;

export const Basic = Template.bind({});
Basic.args = {
  logo: <ApgIcon className="text-4xl" />,
  menuItems,
  children: <div className="container bg-black-800 h-full p-10">Main content</div>,
  activeItem: "home",
};