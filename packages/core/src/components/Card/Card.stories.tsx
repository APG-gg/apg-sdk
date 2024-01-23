import React from 'react';
import { Story } from "@storybook/react"
import Card from './Card';
import CardPost from '../CardPost';
import CardLandscape from '../CardLandscape';
import CardType, { CardTypeProps } from '../CardType';
import CardProfile, { CardProfileProps } from '../CardProfile/CardProfile';
import { CardProps } from '../CardBase/CardBase';
import Button from '../Button';

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
  avatar: "https://storage.apg.gg/d731feadb5967855e538cc45d4a88f952df0f8949bd2400b098a03cbfc87e0ea.png",
  banner: "https://storage.apg.gg/63ee2446322f8bb7321fc9951006a575669e7e540d4fdc071f7f5866f98ceb00.jpg",
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
      "id": "more",
      "title": "2 more",
      "type": "white"
    }
  ],
  isVerify: true,
  isBeta: true,
  translationObject: {
    thisAccountIsVerified: "This account is fakin verified",
    thisAccountIsBetaTester: "This account is in beta",
  }
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
  ],
  isVerify: true,
  isBeta: true
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
  isVerify: true,
  isBeta: true
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
  "date": "2023-11-15",
  "banner": "https://storage.apg.gg/8536c0a992cfe5287d925d0c4422c41d44dc526e9b75ba8a8c9dfcbae73b869b.jpg",
  "id": 47,
  "game": null,
  "eventTypeId": 2,
  "gameId": null,
  "link": "https://gamerawardsvenezuela.com/",
  "isActive": true,
  "profileType": {
    "name": "Developer",
    "slug": "developer",
    "color": "red-600",
    "category": "production",
    "icon": "barChart"
  },
  type: "online",
  "participationTypeId": 49,
  "title": "Game Awards Venezuela",
  "eventType": {
    "active": true,
    "name": "online"
  },
  "shortRichDescription": {
    "blocks": [
      {
        "data": {},
        "depth": 0,
        "entityRanges": [
          {
            "key": 0,
            "length": 6,
            "offset": 23
          },
          {
            "key": 1,
            "length": 10,
            "offset": 30
          }
        ],
        "inlineStyleRanges": [],
        "key": "cjkdf",
        "text": "Desarrollado junto con @Panda @Spiritsun ",
        "type": "unstyled"
      }
    ],
    "entityMap": {
      "0": {
        "data": {
          "mention": {
            "avatar": "https://storage.apg.gg/3b55946966ce8835c380abb31cfa58c640142f0df4da9db4f550186abd502e3d.png",
            "key": "Panda",
            "name": "Panda",
            "slug": "Panda",
            "username": "Panda"
          }
        },
        "mutability": "IMMUTABLE",
        "type": "mention"
      },
      "1": {
        "data": {
          "mention": {
            "avatar": "https://statics.apg.gg/default/profile-pic.png",
            "key": "Spiritsun",
            "name": "Spiritsun",
            "slug": "Spiritsun",
            "username": "Spiritsun"
          }
        },
        "mutability": "IMMUTABLE",
        "type": "mention"
      }
    }
  },
  "isParent": false,
  "parentEventId": null,
  "userId": 100007,
  "owner": {
    "name": "Diego B.",
    "username": "ddumst",
    "profileImage": "https://storage.apg.gg/3b9dfd1625beda1ddfca0863db941a4c9eefea28f7a264c15267c3f5f9c0442e.png"
  },
  "isFeature": false
}

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

const TemplateProfileCard: Story<CardProfileProps> = (args) => <CardProfile {...args} />;
export const ProfileCard = TemplateProfileCard.bind({});
ProfileCard.args = {
  username: "ddumst",
  id: "100007",
  name: "Diego",
  description: "#React #MERN #Fullstack developer 🇵🇪 Owner @APGstats || Tools para Valorant/WildRift || Esports Hoodies/Jerseys Collector 👕 #EsportDev #JuicerDev",
  shortDescription: "#React #MERN #Fullstack developer 🇵🇪 Owner @APGstats || Tools para Valorant/WildRift || Esports Hoodies/Jerseys Collector 👕 #EsportDev #JuicerDev",
  avatar: "https://storage.apg.gg/3b9dfd1625beda1ddfca0863db941a4c9eefea28f7a264c15267c3f5f9c0442e.png",
  banner: "https://storage.apg.gg/bf74ca58d812a0ceaf2ce720798a0871a4ef93fea67d6c84b3d9171b11adc1d1.jpg",
  isVerify: true,
  isBeta: true,
  translationObject: {
    thisAccountIsVerified: "Cuenta verificada",
    thisAccountIsBetaTester: "Beta Tester",
  }
};