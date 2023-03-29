import React from 'react';
import { Story } from "@storybook/react"
import CardDescription, { CardDescriptionProps } from './CardDescription';

const basicArgs = {
  id: "266678",
  name: "Card 1",
  shortDescription: "Lorem ipsum dolor sit amet, @ddumst adipiscing elit, sed do eiusmod tempor #something #hashtag https://www.ddumst.dev",
}

export default {
  title: "Molecules/Card Description",
  component: CardDescription,
}

const TemplateDescription: Story<CardDescriptionProps> = (args) => <CardDescription {...args} className="bg-black-900 border border-black-400 rounded-lg w-96 shadow-md" />;
export const Basic = TemplateDescription.bind({});
Basic.args = {
  ...basicArgs,
};
