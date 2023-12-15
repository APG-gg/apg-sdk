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
        "key": "eqbl3",
        "text": "Hola @Panda @ddumst @MegFerrari podrían por favor colocar mi evento como oficial? *Argentina Game Show ",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [
          {
            "offset": 32,
            "length": 7,
            "style": "ITALIC"
          },
          {
            "offset": 44,
            "length": 5,
            "style": "UNDERLINE"
          },
          {
            "offset": 58,
            "length": 9,
            "style": "CODE"
          },
          {
            "offset": 68,
            "length": 4,
            "style": "BOLD"
          }
        ],
        "entityRanges": [
          {
            "offset": 5,
            "length": 6,
            "key": 0
          },
          {
            "offset": 12,
            "length": 7,
            "key": 1
          },
          {
            "offset": 20,
            "length": 11,
            "key": 2
          },
          {
            "offset": 82,
            "length": 20,
            "key": 3
          }
        ],
        "data": {}
      },
      {
        "key": "2rtoq",
        "text": "",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "4i98l",
        "text": "Link a mi pagina web: www.google.com ",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "620g9",
        "text": "",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "3vouf",
        "text": "Este es el link a un video favorito &Genshin Impact ",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [
          {
            "offset": 36,
            "length": 15,
            "key": 4
          }
        ],
        "data": {}
      }
    ],
    "entityMap": {
      "0": {
        "type": "mention",
        "mutability": "IMMUTABLE",
        "data": {
          "mention": {
            "name": "Panda",
            "username": "Panda",
            "profileImage": "https://storage.apg.gg/3b55946966ce8835c380abb31cfa58c640142f0df4da9db4f550186abd502e3d.png",
            "avatar": "https://storage.apg.gg/3b55946966ce8835c380abb31cfa58c640142f0df4da9db4f550186abd502e3d.png",
            "key": "Panda"
          }
        }
      },
      "1": {
        "type": "mention",
        "mutability": "IMMUTABLE",
        "data": {
          "mention": {
            "name": "ddumst",
            "username": "ddumst",
            "profileImage": "https://storage.apg.gg/3b9dfd1625beda1ddfca0863db941a4c9eefea28f7a264c15267c3f5f9c0442e.png",
            "avatar": "https://storage.apg.gg/3b9dfd1625beda1ddfca0863db941a4c9eefea28f7a264c15267c3f5f9c0442e.png",
            "key": "ddumst"
          }
        }
      },
      "2": {
        "type": "mention",
        "mutability": "IMMUTABLE",
        "data": {
          "mention": {
            "name": "MegFerrari",
            "username": "MegFerrari",
            "profileImage": "https://storage.apg.gg/b4d99ba5b710a6612b360dbbca6e52379c688f73ff4acabeeeb43970a4471820.jpg",
            "avatar": "https://storage.apg.gg/b4d99ba5b710a6612b360dbbca6e52379c688f73ff4acabeeeb43970a4471820.jpg",
            "key": "MegFerrari"
          }
        }
      },
      "3": {
        "type": "*mention",
        "mutability": "IMMUTABLE",
        "data": {
          "mention": {
            "title": "Argentina Game Show",
            "image": "https://storage.apg.gg/351e98fcf2dca104d6c188c380c523261a84da1c6771553346da8c534c375f41.png",
            "user": {
              "name": "Panda"
            },
            "slug": null,
            "avatar": "https://storage.apg.gg/351e98fcf2dca104d6c188c380c523261a84da1c6771553346da8c534c375f41.png",
            "name": "Argentina Game Show",
            "username": "Panda",
            "key": "Argentina Game Show-undefined"
          }
        }
      },
      "4": {
        "type": "&mention",
        "mutability": "IMMUTABLE",
        "data": {
          "mention": {
            "avatar": "https://statics.apg.gg/games/genshin-impact/thumbnail.png",
            "name": "Genshin Impact",
            "username": "genshin-impact",
            "slug": "genshin-impact",
            "key": "27-genshin-impact"
          }
        }
      }
    }
  },
};