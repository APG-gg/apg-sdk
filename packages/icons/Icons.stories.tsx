import React from 'react';
import { Story } from "@storybook/react"
import Icon from '@apg.gg/core/lib/Icon';
import IconList, { IconProps } from './src/icon-list';
import IconColoredList from './src/icon-colored-list';
import IconRolesList from './src/icon-roles-list';
import IconSocialsList from './src/icon-socials';

export default {
  title: "Atoms/Icons",
  component: Icon,
  argTypes: {
    size: { control: 'select', options: [16, 32, 48]},
    color: { control: 'select', options: ["blue", "aqua", "green", "yellow", "purple", "red"]},
  },
}

export const AllIcons: Story<IconProps> = (args) => (
  <IconList {...args} />
);

AllIcons.args = {
  size: 32,
  color: "#FFFFFF",
};

AllIcons.parameters = {
  docs: {
    disable: true,
  },
};

export const Socials: Story<IconProps> = (args) => (
  <IconSocialsList {...args} />
);

Socials.args = {
  size: 32,
  color: "#FFFFFF",
};

Socials.parameters = {
  docs: {
    disable: true,
  },
};

export const Colored: Story<IconProps> = (args) => (
  <IconColoredList {...args} />
);

Colored.args = {
  size: 32,
  color: "#FFFFFF",
};

Colored.parameters = {
  docs: {
    disable: true,
  },
};

export const Roles: Story<IconProps> = (args) => (
  <IconRolesList {...args} />
);

Roles.args = {
  size: 32,
  color: "#FFFFFF",
};

Roles.parameters = {
  docs: {
    disable: true,
  },
};