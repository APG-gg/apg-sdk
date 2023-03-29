import React from 'react';
import { Story } from "@storybook/react"
import CardHeader, { CardHeaderProps } from './CardHeader';

const basicArgs = {
  id: "266678",
  name: "Card 1",
  banner: "https://picsum.photos/id/237/360/480",
  avatar: "https://picsum.photos/id/237/360/480",
  shortDescription: "Lorem ipsum dolor sit amet, @ddumst adipiscing elit, sed do eiusmod tempor #something #hashtag",
}

export default {
  title: "Molecules/Card Header",
  component: CardHeader,
}

const TemplateHeader: Story<CardHeaderProps> = (args) => <CardHeader {...args} className="bg-black-900 border border-black-400 rounded-lg w-96 shadow-md" />;
export const Basic = TemplateHeader.bind({});
Basic.args = {
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
  verify: true
};

export const WithUsername = TemplateHeader.bind({});
WithUsername.args = {
  ...basicArgs,
  username: 'ddumst',
  createdAt: '2023-02-01T18:36:07.832054+00:00',
  postedOn: 'twitter',
};
