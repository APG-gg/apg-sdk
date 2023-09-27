import React from 'react';
import { Story } from "@storybook/react"
import { CardProps } from './CardBase';
import Card from './Card';
import CardPost from '../CardPost';
import CardLandscape from '../CardLandscape';
import CardType, { CardTypeProps } from '../CardType';

const basicArgs = {
  id: "266678",
  name: "Card 1",
  banner: "https://picsum.photos/id/237/360/480",
  avatar: "https://picsum.photos/id/237/360/480",
  shortDescription: "Lorem ipsum dolor sit amet, @ddumst adipiscing elit, #something #hashtag https://www.ddumst.dev",
}

export default {
  title: "Organisms/Cards",
  component: Card,
  argTypes: {
    cards: { control: 'array' }
  },
}

const TemplateCard: Story<CardProps> = (args) => <Card {...args} />;
export const Base = TemplateCard.bind({});
Base.args = {
  ...basicArgs,
  username: "ddumst",
  id: "100007",
  name: "Diego",
  description: "#React #MERN #Fullstack developer 🇵🇪 Owner @APGstats || Tools para Valorant/WildRift || Esports Hoodies/Jerseys Collector 👕 #EsportDev #JuicerDev",
  shortDescription: "#React #MERN #Fullstack developer 🇵🇪 Owner @APGstats || Tools para Valorant/WildRift || Esports Hoodies/Jerseys Collector 👕 #EsportDev #JuicerDev",
  avatar: "https://storage.apg.gg/10424f4d0d60e7498ffc096c68e6716d92f469ef7b0b882ea2a6287f35a2cf6d.jpg",
  banner: "https://storage.apg.gg/6e8360800180b87a886f7cb9059ce9365b87c7f72138b2942862560da631b2f5.png",
  socials: [
    {
      id: "2",
      name: "Instagram",
      url: "ddumst",
      icon: "instagram"
    },
    {
      id: "1",
      name: "Twitter",
      url: "ddumst",
      icon: "twitter"
    },
    {
      id: "5",
      name: "Twitch",
      url: "ddumst",
      icon: "twitch"
    },
    {
      id: "3",
      name: "Tiktok",
      url: "ddumst",
      icon: "tiktok"
    },
    {
      id: "4",
      name: "Discord",
      url: "ddumst",
      icon: "discord"
    }
  ],
  tags: [
    {
      "id": "8",
      "title": "CEO",
      "type": "purple"
    },
    {
      "id": "2",
      "title": "Cosplayer",
      "type": "yellow"
    },
    {
      "id": "12",
      "title": "Host",
      "type": "aqua"
    },
    {
      "id": "1",
      "title": "Player",
      "type": "blue"
    },
    {
      "id": "3",
      "title": "Streamer",
      "type": "green"
    },
    {
      "id": "more",
      "title": "2 more",
      "type": "white"
    }
  ],
  "verify": false
};

const TemplatePost: Story<CardProps> = (args) => <CardPost {...args} />;
export const Post = TemplatePost.bind({});
Post.args = {
  ...basicArgs,
  username: 'ddumst',
  createdAt: '2023-02-01T18:36:07.832054+00:00',
  postedOn: 'twitter',
  "socials": [
    {
      "id": "2",
      "name": "Instagram",
      "url": "ddumst"
    },
    {
      "id": "1",
      "name": "Twitter",
      "url": "ddumst"
    },
    {
      "id": "5",
      "name": "Twitch",
      "url": "ddumst",
    },
    {
      "id": "3",
      "name": "Tiktok",
      "url": "tiktok"
    }
  ],
  tags: [
    {
      title: "tag 1",
      icon: "drake",
      type: "yellow"
    },
    {
      title: "tag 2",
      icon: "drakeInfernal",
      type: "yellow"
    },
    {
      title: "tag 3",
      icon: "drakeInfernal",
      type: "yellow"
    }
  ]
};

const TemplateLandscape: Story<CardProps> = (args) => <CardLandscape {...args} />;
export const Landscape = TemplateLandscape.bind({});
Landscape.args = {
  ...basicArgs,
  "socials": [
    {
      "id": "2",
      "name": "Instagram",
      "url": "ddumst"
    },
    {
      "id": "1",
      "name": "Twitter",
      "url": "ddumst"
    },
    {
      "id": "5",
      "name": "Twitch",
      "url": "ddumst",
    },
    {
      "id": "3",
      "name": "Tiktok",
      "url": "tiktok"
    }
  ],
  confirmLabel: "Confirm",
  cancelLabel: "Cancel",
};

const TemplateType: Story<CardTypeProps> = (args) => <CardType {...args} />;
export const Type = TemplateType.bind({});
Type.args = {
  id: "266678",
  banner: undefined,
  title: "Card Type",
  link: "https://www.ddumst.dev",
  date: "2023-06-27",
  game: "Valorant",
  shortDescription: "Played for Mindfreak in the ESL impact league against the best FE CSGO teams in the world",
};

const TemplateEventType: Story<CardTypeProps> = (args) => <CardType {...args} />;
export const EventType = TemplateEventType.bind({});
EventType.args = {
  id: "266678",
  banner: undefined,
  title: "Card Type",
  link: "https://www.ddumst.dev",
  date: "2023-06-27",
  game: "Valorant",
  profileType: "Caster",
  type: "online"
};

const TemplateEventTypeNoLink: Story<CardTypeProps> = (args) => <CardType {...args} />;
export const EventTypeNoLink = TemplateEventTypeNoLink.bind({});
EventTypeNoLink.args = {
  id: "266678",
  banner: undefined,
  title: "Card Type",
  date: "2023-06-27",
  game: "Valorant",
  profileType: "Caster",
  type: "online"
};