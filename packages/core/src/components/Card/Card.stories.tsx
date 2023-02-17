import React from 'react';
import Card from './Card';
import { Story } from "@storybook/react"
import { CardProps } from './CardBase';

export default {
  title: "Components/Cards",
  component: Card,
  argTypes: {
    cards: { control: 'array' }
  },
}

const TemplateCard: Story<CardProps> = (args) => <Card {...args} />;

export const Base = TemplateCard.bind({});
Base.args = {
  id: "266678",
  name: "Card 1",
  banner: "https://picsum.photos/id/237/360/480",
  avatar: "https://picsum.photos/id/237/360/480",
  shortDescription: "Lorem ipsum dolor sit amet, @ddumst adipiscing elit, sed do eiusmod tempor #something #hashtag",
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
  ],
  confirmLabel: "Confirm",
  cancelLabel: "Cancel",
};
