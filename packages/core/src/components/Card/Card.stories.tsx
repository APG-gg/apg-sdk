import React from 'react';
import { Story } from "@storybook/react"
import { CardProps } from './CardBase';
import Card from './Card';
import CardPost from './CardPost';
import CardLandscape from './CardLandscape';

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

const TemplatePost: Story<CardProps> = (args) => <CardPost {...args} />;
export const Post = TemplatePost.bind({});
Post.args = {
  ...basicArgs,
  username: 'ddumst',
  createdAt: '2023-02-01T18:36:07.832054+00:00',
  postedOn: 'twitter',
};

const TemplateLandscape: Story<CardProps> = (args) => <CardLandscape {...args} />;
export const Landscape = TemplateLandscape.bind({});
Landscape.args = {
  ...basicArgs,
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
  confirmLabel: "Confirm",
  cancelLabel: "Cancel",
};
