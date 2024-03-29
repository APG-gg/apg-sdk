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
        "key": "e2ktd",
        "text": "Software developer  🇵🇪 Owner/Founder @apg #EsportsDev  https://www.apg.gg 😁",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [
          {
            "offset": 20,
            "length": 3,
            "key": 0
          },
          {
            "offset": 37,
            "length": 4,
            "key": 1
          },
          {
            "offset": 42,
            "length": 11,
            "key": 2
          }
        ],
        "data": {}
      }
    ],
    "entityMap": {
      "0": {
        "type": "IMAGE",
        "mutability": "IMMUTABLE",
        "data": {
          "alt": "🇵🇪",
          "src": "https://abs-0.twimg.com/emoji/v2/svg/1f1f5-1f1ea.svg"
        }
      },
      "1": {
        "type": "mention",
        "mutability": "IMMUTABLE",
        "data": {
          "mention": {
            "avatar": "https://profiles.cache.apg.gg/apg.webp",
            "name": "apg",
            "username": "apg",
            "slug": "apg",
            "key": "apg",
            "link": "/apg"
          }
        }
      },
      "2": {
        "type": "#mention",
        "mutability": "IMMUTABLE",
        "data": {
          "mention": {
            "name": "EsportsDev",
            "count": 4,
            "key": "13-EsportsDev",
            "link": "/hashtags/EsportsDev"
          }
        }
      }
    }
  }
};