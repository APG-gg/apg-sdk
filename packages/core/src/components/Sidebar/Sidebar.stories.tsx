import React from 'react';
import Sidebar, { SidebarProps } from './Sidebar';
import { Story } from "@storybook/react"
import TwitchIcon from '@apg.gg/icons/lib/TwitchIcon';
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
    icon: <TwitchIcon />,
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

const menuItemsExtend = [
  {
    key: "feeds",
    name: "Feeds",
    bgColor: "blue",
    href: "/feeds"
  },
  {
    key: "gamers", 
    name: "Gamers",
    bgColor: "aqua",
    href: "/gamers"
  },
  {
    key: "streamers", 
    name: "Streamers",
    bgColor: "green",
    href: "/streamers"
  },
  {
    key: "cosplayers", 
    name: "Cosplayers",
    bgColor: "yellow",
    href: "/cosplayers"
  }
];

const menuFeed = [
  {
    key: "feeds",
    name: "Feeds",
    type: "header"
  },
  {
    key: "achievements",
    name: "Achievements",
    bgColor: "aqua",
    href: "/feeds?type=achievements",
    type: "link"
  },
  {
    key: "friends",
    name: "Friends",
    bgColor: "green",
    href: "/feeds?type=friends",
    type: "link"
  },
  {
    key: "events",
    name: "Events",
    bgColor: "yellow",
    href: "/feeds?type=events",
    type: "link"
  },
  {
    key: "galleries",
    name: "Galleries",
    bgColor: "fucsia",
    href: "/feeds?type=galleries",
    type: "link"
  },
  {
    key: "videos",
    name: "Videos",
    bgColor: "red",
    href: "/feeds?type=videos",
    type: "link"
  }
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

export const WithSubMenu = Template.bind({});
WithSubMenu.args = {
  logo: <ApgIcon className="text-4xl" />,
  menuItems: menuItemsExtend,
  subItems: menuFeed,
  children: <div>
    <section id="home" className="container bg-black-800 p-10" style={{ height: "1000px" }}>Main content</section>
    <section id="gamers" className="container bg-blue-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
    <section id="streamers" className="container bg-red-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
    <section id="cosplayers" className="container bg-green-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
    <section id="you" className="container bg-yellow-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
  </div>,
  activeItem: "feeds",
  activeSubItem: "events",
};