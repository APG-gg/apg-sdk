import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Textarea, { TextareaProps } from './Textarea'; // Ajusta la ruta según la ubicación de tu componente Textarea
import { MeiliSearch, MultiSearchResponse } from 'meilisearch';

const client = new MeiliSearch({
  host: 'https://searchdev.apg.gg',
  apiKey: '9fd5c763f10b10d98117465f64a18430f770653b5d18390085ff14fb794dde9e'
})

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: TextareaProps) => {
  const [search, setSearch] = React.useState<any>();
  const [prefix, setPrefix] = React.useState<string>('@');

  const onSearch = (searchedWord: string, prefix: string) => {
    setPrefix(prefix);
    // Create a scoped async function in the hook
    async function searchWithMeili() {
      const search: MultiSearchResponse<any> = await client.multiSearch({
        queries: [
          {
            indexUid: 'users-collections',
            q: searchedWord,
            limit: 16,
            attributesToSearchOn: ['username', 'name'],
            attributesToRetrieve: ['username', 'name', 'profileImage'],
          },
          {
            indexUid: 'events-collections',
            q: searchedWord,
            limit: 16,
            attributesToSearchOn: ['title', 'slug', 'user.name'],
            attributesToRetrieve: ['title', 'slug', 'user.name', 'image'],
          },
          {
            indexUid: 'games-collections',
            q: searchedWord,
            limit: 16,
            attributesToSearchOn: ['name', 'slug'],
            attributesToRetrieve: ['name', 'slug', 'thumbnail', 'id'],
          },
        ]
      });

      let data;

      if (prefix === '@') {
        data = search?.results[0].hits.map((item: any) => ({
          avatar: item.profileImage || 'https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg',
          name: item.username,
          usersername: item.username,
          slug: item.username,
          key: item.username
        }))
      }

      if (prefix === '*') {
        data = search?.results[1].hits.map((item: any) => ({
          avatar: item.image || 'https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg',
          name: item.title,
          username: item.user.name,
          slug: item.slug,
          key: `${item.id}-${item.slug}`
        }))
      }

      if (prefix === '&') {
        data = search?.results[2].hits.map((item: any) => ({
          avatar: item.thumbnail || 'https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg',
          name: item.name,
          username: item.slug,
          slug: item.slug,
          key: `${item.id}-${item.slug}`
        }))
      }

      setSearch(data);
    }
    // Execute the created function directly
    searchWithMeili();
  }

  return (
    <div className='mt-32'>
      <Textarea
        {...args}
        data={search}
        onSearch={onSearch}
        onChange={(contentAsRaw) => {
          console.log(contentAsRaw)
        }}
        rawValue={{
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
        }}
        renderItem={(item: any) => (
          <>
            {prefix === '@' && (
              <>
                <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <span className="font-bold text-white leading-tight">{item.name}</span>
                  <span className="text-white-400 text-sm leading-none">{`@${item.username}`}</span>
                </div>
              </>
            )}
            {prefix === '*' && (
              <>
                <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded object-cover object-center" />
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <span className="font-bold text-white leading-tight">{item.name}</span>
                  <span className="text-white-400 text-sm leading-none">Owner: {`@${item.username}`}</span>
                </div>
              </>
            )}
            {prefix === '&' && (
              <>
                <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded object-cover object-center" />
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <span className="font-bold text-white leading-tight">{item.name}</span>
                  <span className="text-white-400 text-sm leading-none">{`@${item.username}`}</span>
                </div>
              </>
            )}
          </>
        )}
      />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  label: 'Textarea Label',
  placeholder: 'Enter your text here...',
  supportText: 'Support text goes here',
  maxLength: 200,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: true,
  errorText: 'This is an error message',
};

export const CustomRowsCols = Template.bind({});
CustomRowsCols.args = {
  ...Default.args,
  rows: 6,
  cols: 50,
};

export const NoSupportText = Template.bind({});
NoSupportText.args = {
  ...Default.args,
  supportText: undefined,
};
