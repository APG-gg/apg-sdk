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
    href: "/#home"
  },
  {
    key: "gamers", 
    name: "For Gamers",
    bgColor: "aqua",
    href: "/#gamers"
  },
  {
    key: "streamers", 
    name: "For Streamers",
    bgColor: "green",
    href: "/#streamers"
  },
  {
    key: "cosplayers", 
    name: "For Cosplayers",
    bgColor: "yellow",
    href: "/#cosplayers"
  },
  {
    key: "you", 
    name: "For You",
    bgColor: "fucsia",
    href: "/#you"
  },
  {
    key: "join", 
    name: "Join us",
    bgColor: "red",
    href: "/#join"
  },
];


const Template: Story<SidebarProps> = (args) => <Sidebar {...args}>{args.children}</Sidebar>;

export const Basic = Template.bind({});
Basic.args = {
  logo: <ApgIcon className="text-4xl" />,
  menuItems,
  children: <div>
    <section id="home" className="container bg-black-800 p-10" style={{ height: "1000px" }}>Main content</section>
    <section id="gamers" className="container bg-blue-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
    <section id="streamers" className="container bg-red-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
    <section id="cosplayers" className="container bg-green-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
    <section id="you" className="container bg-yellow-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
  </div>,
  activeItem: "home",
};