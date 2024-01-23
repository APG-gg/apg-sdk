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
            "length": 1,
            "offset": 20
          },
          {
            "key": 1,
            "length": 9,
            "offset": 28
          },
          {
            "key": 2,
            "length": 1,
            "offset": 107
          },
          {
            "key": 3,
            "length": 10,
            "offset": 109
          }
        ],
        "inlineStyleRanges": [],
        "key": "e2ktd",
        "text": "Software developer  📷 Owner @APGstats || Tools para Valorant/WildRift || Esports Hoodies/Jerseys Collector 📷 #EsportDev",
        "type": "unstyled"
      }
    ],
    "entityMap": {
      "0": {
        "data": {
          "alt": "🇵🇪",
          "src": "https://abs-0.twimg.com/emoji/v2/svg/1f1f5-1f1ea.svg"
        },
        "mutability": "IMMUTABLE",
        "type": "IMAGE"
      },
      "1": {
        "data": {
          "href": "https://twitter.com/APGstats",
          "url": "https://twitter.com/APGstats"
        },
        "mutability": "MUTABLE",
        "type": "LINK"
      },
      "2": {
        "data": {
          "alt": "👕",
          "src": "https://abs-0.twimg.com/emoji/v2/svg/1f455.svg"
        },
        "mutability": "IMMUTABLE",
        "type": "IMAGE"
      },
      "3": {
        "data": {
          "href": "https://twitter.com/search?q=%23EsportDev&src=hashtag_click",
          "url": "https://twitter.com/search?q=%23EsportDev&src=hashtag_click"
        },
        "mutability": "MUTABLE",
        "type": "LINK"
      }
    }
  }
};