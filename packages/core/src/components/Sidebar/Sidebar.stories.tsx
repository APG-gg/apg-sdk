import React from 'react';
import Sidebar, { SidebarProps } from './Sidebar';
import { Story } from "@storybook/react"
import ApgIcon from '@apg.gg/icons/lib/ApgIcon';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';

export default {
  title: "Organisms/Sidebar",
  component: Sidebar,
}

const menuItems = [
  {
    key: "home",
    name: "Home",
    icon: "home",
    iconHoverColor: "blue-300",
    bgColor: "black-600",
    activeBgColor: "blue",
    href: "/home"
  },
  {
    key: "search", 
    name: "Search",
    icon: "search",
    iconHoverColor: "aqua-100",
    bgColor: "black-600",
    activeBgColor: "aqua",
    onClick: () => console.log("search")
  },
  {
    key: "group", 
    name: "Community",
    icon: "group",
    iconHoverColor: "green",
    bgColor: "black-600",
    activeBgColor: "green",
    href: "/community"
  }
];

const menuItemsExtend = [
  {
    key: "viewprofile",
    name: "MegFerrari",
    icon: (
      <div className="hover:border-blue hover:border-2 rounded-full overflow-hidden">
        <img src='https://storage.apg.gg/b4d99ba5b710a6612b360dbbca6e52379c688f73ff4acabeeeb43970a4471820.jpg' className="rounded-full" />
      </div>
    ),
    iconHoverColor: "blue-300",
    bgColor: "black-600",
    activeBgColor: "blue",
    onClick: () => console.log("viewprofile")
  },
  {
    key: "home",
    name: "Home",
    icon: "home",
    iconHoverColor: "blue-300",
    bgColor: "black-600",
    activeBgColor: "blue",
    href: "/home"
  },
  {
    key: "search", 
    name: "Search",
    icon: (
      <div className="rounded-full relative w-10 h-10">
        <img 
          src="https://storage.apg.gg/b4d99ba5b710a6612b360dbbca6e52379c688f73ff4acabeeeb43970a4471820.jpg" 
          className="rounded-full" 
          alt={'APG Profile'}
          width={40}
          height={40}
        />

        <XCircleIcon 
          className="absolute -top-1 -right-1 text-sm"
          color="white"
        />
      </div>
    ),
    iconHoverColor: "aqua-100",
    bgColor: "black-600",
    activeBgColor: "aqua",
    onClick: () => console.log("search")
  },
  {
    key: "group", 
    name: "Community",
    icon: "group",
    iconHoverColor: "green",
    bgColor: "black-600",
    activeBgColor: "green",
    href: "/community"
  }
];

const menuFeed = [
  {
    key: "feeds",
    name: "Feeds",
    type: "header",
    icon: "tiktok",
  },
  {
    key: "achievements",
    name: "Achievements",
    bgColor: "aqua",
    href: "#",
    icon: "https://github.com/fluidicon.png",
    type: "link"
  },
  {
    key: "friends",
    name: "Friends",
    bgColor: "green",
    href: "#",
    icon: "person",
    type: "link",
  },
  {
    key: "events",
    name: "Events",
    bgColor: "yellow",
    href: "#",
    icon: "tiktok",
    type: "link"
  },
  {
    key: "galleries",
    name: "Galleries",
    bgColor: "fucsia",
    href: "#",
    icon: "heart",
    type: "link"
  },
  {
    key: "videos",
    name: "Videos",
    bgColor: "red",
    href: "#",
    icon: "https://static.figma.com/app/icon/1/favicon.png",
    type: "link"
  }
];

const menuFeedNoIcons = [
  {
    key: "feeds",
    name: "Feeds",
    type: "header"
  },
  {
    key: "achievements",
    name: "Achievements",
    bgColor: "aqua",
    href: "#",
    type: "link",
    showCircle: false
  },
  {
    key: "friends",
    name: "Friends",
    bgColor: "green",
    href: "#",
    type: "link",
    showCircle: false
  },
  {
    key: "events",
    name: "Events",
    bgColor: "yellow",
    href: "#",
    type: "link",
    showCircle: false
  },
  {
    key: "galleries",
    name: "Galleries",
    bgColor: "fucsia",
    href: "#",
    type: "link",
    showCircle: false
  },
  {
    key: "videos",
    name: "Videos",
    bgColor: "red",
    href: "#",
    type: "link",
    showCircle: false
  }
];

const Template: Story<SidebarProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sidebar isOpen={isOpen} {...args}>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Click</button>
        <section id="home" className="container bg-black-800 p-10" style={{ height: "1000px" }}>Main content</section>
        <section id="gamers" className="container bg-blue-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
        <section id="streamers" className="container bg-red-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
        <section id="cosplayers" className="container bg-green-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
        <section id="you" className="container bg-yellow-800 p-10" style={{ height: "1000px" }}>asdasdd content</section>
      </div>
    </Sidebar>
  )
};

export const Basic = Template.bind({});
Basic.args = {
  logo: <ApgIcon className="text-4xl" />,
  menuItems,
  recentPages: [
    {
      key: "search", 
      name: "Search",
      icon: (
        <div className="rounded-full relative w-10 h-10">
          <img 
            src="https://storage.apg.gg/b4d99ba5b710a6612b360dbbca6e52379c688f73ff4acabeeeb43970a4471820.jpg" 
            className="rounded-full" 
            alt={'APG Profile'}
            width={40}
            height={40}
          />

          <XCircleIcon 
            className="absolute -top-1 -right-1 text-sm"
            color="white"
          />
        </div>
      )
    }
  ],
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

export const SubMenuNoIcons = Template.bind({});
SubMenuNoIcons.args = {
  logo: <ApgIcon className="text-4xl" />,
  menuItems: menuItemsExtend,
  subItems: menuFeedNoIcons,
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