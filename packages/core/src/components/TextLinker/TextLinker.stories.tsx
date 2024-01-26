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
            "length": 3,
            "offset": 20
          },
          {
            "key": 1,
            "length": 4,
            "offset": 40
          },
          {
            "key": 2,
            "length": 11,
            "offset": 80
          },
          {
            "key": 3,
            "length": 17,
            "offset": 92
          },
          {
            "key": 4,
            "length": 4,
            "offset": 110
          }
        ],
        "inlineStyleRanges": [],
        "key": "e2ktd",
        "text": "Software developer  🇵🇪 Owner/Founder @apg | Esports Jerseys/Hoodies collector | #EsportsDev #EsportsCollector #APG ",
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
          "mention": {
            "count": 3,
            "key": "13-EsportsDev",
            "name": "EsportsDev"
          }
        },
        "mutability": "IMMUTABLE",
        "type": "#mention"
      },
      "3": {
        "data": {
          "mention": {
            "count": 2,
            "key": "16-EsportsCollector",
            "name": "EsportsCollector"
          }
        },
        "mutability": "IMMUTABLE",
        "type": "#mention"
      },
      "4": {
        "data": {
          "mention": {
            "count": 4,
            "key": "1-APG",
            "name": "APG"
          }
        },
        "mutability": "IMMUTABLE",
        "type": "#mention"
      }
    }
  }
};