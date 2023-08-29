import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MainButton from './MainButton/MainButton';
import FloatingMenu, { Directions, FloatingMenuItemProps } from './FloatingMenu';
import ChildButton from './ChildButton';
import EditIcon from '@apg.gg/icons/lib/EditIcon';
import XIcon from '@apg.gg/icons/lib/XIcon';
import VisibilityOffIcon from '@apg.gg/icons/lib/VisibilityOffIcon';
import SettingsIcon from '@apg.gg/icons/lib/SettingsIcon';
import StarFillIcon from '@apg.gg/icons/lib/StarFillIcon';

export default {
  title: 'Components/FloatingMenu',
  component: FloatingMenu,
} as Meta;

const Template: Story<FloatingMenuItemProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <FloatingMenu 
      {...args}
      isOpen={isOpen}
    >
      <MainButton
        iconResting={<SettingsIcon className="text-2xl text-white" />}
        iconActive={<XIcon className="text-2xl text-white" />}
        isOpen={isOpen}
        background="bg-blue-500"
        onClick={toggleMenu}
      />
      <ChildButton
        direction={Directions.Left}
        index={1}
        isOpen={isOpen}
        icon={<EditIcon className="text-white" />}
        background="bg-green-300"
      />
      <ChildButton
        direction={Directions.Left}
        index={2}
        isOpen={isOpen}
        icon={<VisibilityOffIcon className="text-white" />}
        background="bg-black-500"
      />
      <ChildButton
        direction={Directions.Left}
        index={3}
        isOpen={isOpen}
        icon={<StarFillIcon className="text-white" />}
        background="bg-yellow-200"
      />
    </FloatingMenu>
  )
};

export const Open = Template.bind({});
Open.args = {
  slideSpeed: 500,
  direction: Directions.Left,
  isOpen: true,
  spacing: 16,
};

export const Closed = Template.bind({});
Closed.args = {
  slideSpeed: 500,
  direction: Directions.Left,
  isOpen: false,
  spacing: 16,
};
