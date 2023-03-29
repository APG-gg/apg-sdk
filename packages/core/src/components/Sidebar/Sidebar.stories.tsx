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
    href: "/#home",
    target: "_self",
  },
  {
    key: "for-gamers", 
    name: "For Gamers",
    bgColor: "aqua",
    href: "/#for-gamers",
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
  children: <div>
    <section id="home" className="container bg-black-800 p-10" style={{ height: "1000px" }}>Main content</section>
    <section id="for-gamers" className="container bg-black-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
  </div>,
  activeItem: "home",
};