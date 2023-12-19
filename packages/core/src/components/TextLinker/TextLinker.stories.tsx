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
  content: {
    "blocks": [
      {
        "data": {},
        "depth": 0,
        "entityRanges": [
          {
            "key": 0,
            "length": 2,
            "offset": 34
          },
          {
            "key": 1,
            "length": 4,
            "offset": 43
          },
          {
            "key": 2,
            "length": 1,
            "offset": 128
          }
        ],
        "inlineStyleRanges": [
          {
            "length": 7,
            "offset": 83,
            "style": "UNDERLINE"
          },
          {
            "length": 15,
            "offset": 91,
            "style": "BOLD"
          }
        ],
        "key": "5rg99",
        "text": "#React #MERN #Fullstack developer 🇵🇪 Owner @apg || Tools para Valorant/WildRift || Esports Hoodies/Jerseys Collector #EsportDev 😄 ",
        "type": "unstyled"
      },
      {
        "data": {},
        "depth": 0,
        "entityRanges": [],
        "inlineStyleRanges": [],
        "key": "2515o",
        "text": "",
        "type": "unstyled"
      },
      {
        "data": {},
        "depth": 0,
        "entityRanges": [],
        "inlineStyleRanges": [],
        "key": "5el8n",
        "text": "asdasd",
        "type": "unstyled"
      }
    ],
    "entityMap": {
      "0": {
        "data": {
          "emojiUnicode": "🇵🇪"
        },
        "mutability": "IMMUTABLE",
        "type": "emoji"
      },
      "1": {
        "data": {
          "mention": {
            "avatar": "https://statics.apg.gg/default/profile-pic.png",
            "key": "apg",
            "name": "apg",
            "slug": "apg",
            "username": "apg"
          }
        },
        "mutability": "IMMUTABLE",
        "type": "mention"
      },
      "2": {
        "data": {
          "emojiUnicode": "😄"
        },
        "mutability": "IMMUTABLE",
        "type": "emoji"
      }
    }
  }
};