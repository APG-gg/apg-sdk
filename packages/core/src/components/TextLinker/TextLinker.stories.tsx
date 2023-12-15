import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextLinker, { TextLinkerProps } from './TextLinker';

export default {
  title: 'Atoms/TextLinker',
  component: TextLinker,
} as ComponentMeta<typeof TextLinker>;

const Template: ComponentStory<typeof TextLinker> = (args: TextLinkerProps) => (
  <p className="text-white text-body-lg whitespace-pre-line">
    <TextLinker {...args} />
  </p>
);

export const Default = Template.bind({});
Default.args = {
  text: '🎮 Streamer @teamisurus www.twitch.tv/MegFerrari | Riot Partner @LoRLATAM #LPP | 👗Cosplayer www.instagram.com/okmegferrari 🔗 www.linktr.ee/megferrari 💌Mail: magali.dpc@gmail.com'
};

export const WithMentions = Template.bind({});
WithMentions.args = {
  text: '🎮 Streamer @teamisurus www.twitch.tv/MegFerrari | Riot Partner @LoRLATAM #LPP | 👗Cosplayer www.instagram.com/okmegferrari 🔗 www.linktr.ee/megferrari 💌Mail: magali.dpc@gmail.com *AGS 2023',
  mentions: [
    {
      prefix: '@',
      value: 'teamisurus',
      slug: 'teamisurus',
    },
    {
      prefix: '@',
      value: 'LoRLATAM',
      slug: 'LoRLATAM',
    },
    {
      prefix: '#',
      value: 'LPP',
      slug: 'LPP',
    },
    {
      prefix: '*',
      value: 'AGS 2023',
      slug: 'ags-2023'
    }
  ],
};