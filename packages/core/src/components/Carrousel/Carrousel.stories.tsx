import React from 'react';
import CardStack, { CardStackProps } from './CardStack';
import { Story } from "@storybook/react"

export default {
  title: "Components/Carrousel",
  component: CardStack,
  argTypes: {
    cards: { control: 'array' }
  },
}

const Template: Story<CardStackProps> = (args) => <CardStack {...args} />;

export const Cards = Template.bind({});
Cards.args = {
  cards: [
    {
      id: "266678",
      name: "Card 1",
      banner: "https://picsum.photos/id/237/360/480",
      avatar: "https://picsum.photos/id/237/360/480",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod sed doas eiusmod sed doas",
      socials: [
        {
          name: "Discord",
          url: "https://www.discord.com",
          icon: "discord"
        },
        {
          name: "Twitter",
          url: "https://www.twitter.com",
          icon: "twitter"
        }
      ],
      tags: [
        {
          title: "tag 1",
          icon: "drake"
        },
        {
          title: "tag 2",
          icon: "drakeInfernal"
        },
        {
          title: "tag 3",
          icon: "drakeInfernal"
        }
      ]
    },
    {
      id: "cb7c7a",
      name: "Card 2", 
      banner: "https://picsum.photos/id/25/360/480",
      avatar: "https://picsum.photos/id/25/360/480",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod sed doas",
      socials: [
        {
          name: "Discord",
          url: "https://www.discord.com",
          icon: "discord"
        }
      ],
      tags: [
        {
          title: "tag 1",
          icon: "drake"
        },
        {
          title: "tag 2",
          icon: "drakeInfernal"
        },
        {
          title: "tag 3",
          icon: "drakeInfernal"
        }
      ]
    },
    {
      id: "36a18b",
      name: "Card 3", 
      banner: "https://picsum.photos/id/53/360/480",
      avatar: "https://picsum.photos/id/53/360/480",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod sed doas",
      socials: [
        {
          name: "Discord",
          url: "https://www.discord.com",
          icon: "discord"
        }
      ],
      tags: [
        {
          title: "tag 1",
          icon: "drake"
        },
        {
          title: "tag 2",
          icon: "drakeInfernal"
        },
        {
          title: "tag 3",
          icon: "drakeInfernal"
        },
        {
          title: "tag 3",
          icon: "twitter"
        }
      ]
    },
    {
      id: "cda35f",
      name: "Card 4", 
      banner: "https://picsum.photos/id/239/360/480",
      avatar: "https://picsum.photos/id/239/360/480",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod sed doas",
      socials: [
        {
          name: "Discord",
          url: "https://www.discord.com",
          icon: "discord"
        }
      ],
      tags: [
        {
          title: "tag 1",
          icon: "drake"
        },
        {
          title: "tag 2",
          icon: "discord"
        },
        {
          title: "tag 3",
          icon: "drakeInfernal"
        }
      ]
    },
    {
      id: "747474",
      name: "Card 5", 
      banner: "https://picsum.photos/id/27/360/480",
      avatar: "https://picsum.photos/id/27/360/480",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod sed doas",
      socials: [
        {
          name: "Discord",
          url: "https://www.discord.com",
          icon: "discord"
        }
      ],
      tags: [
        {
          title: "tag 1",
          icon: "drake"
        },
        {
          title: "tag 2",
          icon: "drakeInfernal"
        },
        {
          title: "tag 3",
          icon: "drakeInfernal"
        }
      ]
    }
  ]
};
