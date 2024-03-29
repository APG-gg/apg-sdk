import React from 'react';
import { StoryFn } from '@storybook/react';
import Textarea, { TextareaProps } from './Textarea'; // Ajusta la ruta según la ubicación de tu componente Textarea
import { MeiliSearch, MultiSearchResponse } from 'meilisearch';

const client = new MeiliSearch({
  host: 'https://searchdev.apg.gg',
  apiKey: '9fd5c763f10b10d98117465f64a18430f770653b5d18390085ff14fb794dde9e'
})

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
}

const Template: StoryFn<typeof Textarea> = (args: TextareaProps) => {
  const [search, setSearch] = React.useState<any>();
  const [prefix, setPrefix] = React.useState<string>('@');

  const onSearch = (searchedWord: string, prefix: string) => {
    console.log('search', searchedWord, prefix);
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
          {
            indexUid: 'hashtags-collections',
            q: searchedWord,
            limit: 16,
            attributesToSearchOn: ['hashtag'],
            attributesToRetrieve: ['hashtag', 'count', 'id'],
          },
        ]
      });

      let data;

      if (prefix === '@') {
        data = search?.results[0].hits.map((item: any) => ({
          avatar: item.profileImage || 'https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg',
          name: item.username,
          username: item.username,
          slug: item.username,
          key: item.username,
          link: `/${item.username}`
        }))
      }

      if (prefix === '*') {
        data = search?.results[1].hits.map((item: any) => ({
          avatar: item.image || 'https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg',
          name: item.title,
          username: item.user.name,
          slug: item.slug,
          key: `${item.id}-${item.slug}`,
          link: `/events/${item.slug}`
        }))
      }

      if (prefix === '&') {
        data = search?.results[2].hits.map((item: any) => ({
          avatar: item.thumbnail || 'https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg',
          name: item.name,
          username: item.slug,
          slug: item.slug,
          key: `${item.id}-${item.slug}`,
          link: `/games/${item.slug}`
        }))
      }

      if (prefix === '#') {
        if (data = search?.results[3].hits.length > 0) {
          data = search?.results[3].hits.map((item: any) => ({
            name: item.hashtag,
            count: item.count,
            key: `${item.id}-${item.hashtag}`,
            link: `/hashtags/${item.hashtag}`
          }))
        } else {
          const randomInt = Math.floor(Math.random() * 1000000000);
          data = [{
            name: searchedWord,
            count: 1,
            isNew: true,
            key: `${randomInt}-${searchedWord}`,
            link: `/hashtag/${searchedWord}`
          }]
        }
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
        clearSearch={() => setSearch(undefined)}
        onAddMention={(mention, prefix) => {
          console.log('onAddMention', mention, prefix);
        }}
        onChange={(contentAsRaw) => { }}
        rawValue={{
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
            {prefix === '#' && (
              <div className="flex flex-col justify-center items-start gap-0.5">
                <span className="font-bold text-white leading-tight">{item.name}</span>
              </div>
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
