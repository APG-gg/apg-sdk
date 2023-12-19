import { RawDraftContentState } from 'draft-js';
import React from 'react';

export interface TextLinkerContent {
  blocks: Block[];
  entityMap: { [key: string]: EntityMap };
}

export interface Block {
  key: string;
  text: string;
  type: string;
  depth: number;
  inlineStyleRanges: InlineStyleRange[];
  entityRanges: EntityRange[];
  data: BlockData;
}

export interface BlockData {
}

export interface EntityRange {
  offset: number;
  length: number;
  key: number;
}

export interface InlineStyleRange {
  offset: number;
  length: number;
  style: string;
}

export interface EntityMap {
  type: string;
  mutability: string;
  data: EntityMapData;
}

export interface EntityMapData {
  mention: Mention;
}

export interface Mention {
  name: string;
  username: string;
  profileImage?: string;
  avatar: string;
  key: string;
  slug?: null | string;
  title?: string;
  image?: string;
  user?: {
    name: string;
  };
}

export interface TextLinkerProps {
  text?: string;
  content?: RawDraftContentState;
  linkComponent?: React.ComponentType<any>
}

const TextLinker: React.FC<TextLinkerProps> = ({ text = '', content, linkComponent }) => {
  const LinkComponent = linkComponent || "a";
  const linkRegex = /\b((https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(www\.[-A-Z0-9+&@#\/%=~_|]+(\.[-A-Z0-9+&@#\/%=~_|]+)+)\b/gi;
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/gi;
  const hashtagRegex = /#\w+/gi;
  const mentionRegex = /(^|[^A-Za-z0-9._%+-])@\w+/gi; // Nuevo regex para menciones

  if (!!content) {
    let arrayOfJs: any[] = [];

    const blocks = content?.blocks || [];
    const entityMap = content?.entityMap || {};

    blocks.forEach(block => {
      const text = block.text;
      const entityRanges = block.entityRanges;
      const inlineStyleRanges = block.inlineStyleRanges;

      const inlineStyled = inlineStyleRanges.map(inlineStyleRange => {
        const offset = inlineStyleRange.offset;
        const length = inlineStyleRange.length;
        
        let style = '';

        if (inlineStyleRange.style === 'BOLD') {
          style = 'font-bold';
        } else if (inlineStyleRange.style === 'ITALIC') {
          style = 'italic';
        } else if (inlineStyleRange.style === 'UNDERLINE') {
          style = 'underline';
        } else if (inlineStyleRange.style === 'CODE') {
          style = 'font-mono';
        }

        return {
          style,
          type: 'span',
          name: text.slice(offset, offset + length)
        }
      });

      let arrayInternalOfJs: any[] = [];

      if (entityRanges.length === 0) {
        if (text.length > 0) {
          arrayInternalOfJs.push(text);
        } else {
          arrayInternalOfJs.push(<div className='min-h-[1.5rem]'></div>);
        }
      }

      entityRanges.forEach(entityRange => {
        const entity = entityMap[entityRange.key];
        const mention = entity.data.mention;

        let prefix = '';
        let valueName = '';

        if (entity.type === 'mention') {
          prefix = '@';
          valueName = `${prefix}${mention.name}`;
        } else if (entity.type === '&mention') {
          prefix = '&';
          valueName = `${prefix}${mention.name}`;
        } else if (entity.type === '*mention') {
          prefix = '*';
          valueName = `${prefix}${mention.name}`;
        } else if (entity.type === 'emoji') {	
          valueName = entity.data.emojiUnicode;	
        }

        if (arrayInternalOfJs.length === 0) {
          const splitted = text.split(valueName);
          let mentionJsx

          if (entity.type === 'mention') {
            mentionJsx = <LinkComponent href={`/${mention.username}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === '&mention') {
            mentionJsx = <LinkComponent href={`/games/${mention.slug}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === '*mention') {
            mentionJsx = <LinkComponent href={`/events/${mention.slug}`} className="text-aqua">{valueName}</LinkComponent>
          }

          arrayInternalOfJs.push(splitted[0]);
          arrayInternalOfJs.push(mentionJsx);
          arrayInternalOfJs.push(splitted[1]);
        } else {
          const splitted = arrayInternalOfJs[arrayInternalOfJs.length - 1].split(valueName);
          let mentionJsx

          if (entity.type === 'mention') {
            mentionJsx = <LinkComponent href={`/${mention.username}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === '&mention') {
            mentionJsx = <LinkComponent href={`/games/${mention.slug}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === '*mention') {
            mentionJsx = <LinkComponent href={`/events/${mention.slug}`} className="text-aqua">{valueName}</LinkComponent>
          }

          arrayInternalOfJs[arrayInternalOfJs.length - 1] = splitted[0];
          arrayInternalOfJs.push(mentionJsx);
          arrayInternalOfJs.push(splitted[1]);
        }
      });
      
      inlineStyled.forEach((inlineStyle, index) => {
        const style = inlineStyle.style;
        const name = inlineStyle.name;

        for (let i = 0; i < arrayInternalOfJs.length; i++) {
          const item = arrayInternalOfJs[i];

          let arrayinlineStyled: any[] = [];
          
          if (typeof item === 'string') {
            if (item.includes(name)) {
              const splitted = item.split(name);

              if (style === 'font-bold') {
                arrayinlineStyled.push(splitted[0]);
                arrayinlineStyled.push(<b>{name}</b>);
                arrayinlineStyled.push(splitted[1]);
                
                arrayInternalOfJs.splice(i, 1, ...arrayinlineStyled);
                break;
              } else if (style === 'italic') {
                arrayinlineStyled.push(splitted[0]);
                arrayinlineStyled.push(<i>{name}</i>);
                arrayinlineStyled.push(splitted[1]);

                arrayInternalOfJs.splice(i, 1, ...arrayinlineStyled);
                break;
              } else if (style === 'underline') {
                arrayinlineStyled.push(splitted[0]);
                arrayinlineStyled.push(<u>{name}</u>);
                arrayinlineStyled.push(splitted[1]);

                arrayInternalOfJs.splice(i, 1, ...arrayinlineStyled);
                break;
              } else if (style === 'font-mono') {
                arrayinlineStyled.push(splitted[0]);
                arrayinlineStyled.push(<code>{name}</code>);
                arrayinlineStyled.push(splitted[1]);

                arrayInternalOfJs.splice(i, 1, ...arrayinlineStyled);
                break;
              }
            }
          }
        }
      });

      arrayInternalOfJs = arrayInternalOfJs.map((item, index) => {
        if (typeof item === 'string') {
          const parts = item.split(/(\s+)/);

          const elements = parts.map((part, index) => {
            const hashtagResult = hashtagRegex.test(part);

            if (linkRegex.test(part)) {
              console.log('index, part', index, part);
              const link = part.startsWith('https') ? part : `https://${part}`;

              return (
                <LinkComponent href={link} key={index} target="_blank" className="text-aqua">
                  {part}
                </LinkComponent>
              );
            }
            
            if (emailRegex.test(part)) { // Nuevo bloque para manejar emails
              console.log('index, part', index, part);
              return (
                <LinkComponent href={`mailto:${part}`} className="text-aqua">
                  {part}
                </LinkComponent>
              );
            }
            
            if (hashtagResult) {
              console.log('index, part', index, part);
              return (
                <React.Fragment key={index}>
                  <LinkComponent href={`/hashtag/${part.slice(1)}`} className="text-aqua">
                    {part}
                  </LinkComponent>
                </React.Fragment>
              );
            }

            return (
              <React.Fragment key={index}>
                {part}
              </React.Fragment>
            );
          });

          return <>{elements}</>;
        } else {
          return <React.Fragment key={index}>{item}</React.Fragment>
        }
      });

      const blockJsx: any[] = [];

      blockJsx.push(
        <div className='min-h-[1.5rem]'>
          {arrayInternalOfJs.map((item, index) => {
            if (typeof item === 'string') {
              return <React.Fragment key={index}>{item}</React.Fragment>
            } else {
              return <React.Fragment key={index}>{item}</React.Fragment>
            }
          })}
        </div>
      )

      arrayOfJs = [...arrayOfJs, ...blockJsx];
    });

    return (
      <>
        {arrayOfJs.map((item, index) => {
          if (typeof item === 'string') {
            return <React.Fragment key={index}>{item}</React.Fragment>
          } else {
            return <React.Fragment key={index}>{item}</React.Fragment>
          }
        })}
      </>
    );
  } else {
    const parts = text.split(/(\s+)/);

    const elements = parts.map((part, index) => {
      if (linkRegex.test(part)) {
        const link = part.startsWith('https') ? part : `https://${part}`;

        return (
          <LinkComponent href={link} key={index} target="_blank" className="text-aqua">
            {part}
          </LinkComponent>
        );
      } else if (hashtagRegex.test(part)) {
        return (
          <React.Fragment key={index}>
            <LinkComponent href={`/hashtag/${part.slice(1)}`} className="text-aqua">
              {part}
            </LinkComponent>
          </React.Fragment>
        );
      } else if (mentionRegex.test(part)) {
        return (
          <React.Fragment key={index}>
            <LinkComponent href={`/${part.slice(1)}`} className="text-aqua">
              {part}
            </LinkComponent>
          </React.Fragment>
        );
      } else if (emailRegex.test(part)) { // Nuevo bloque para manejar emails
        return (
          <React.Fragment key={index}>
            <LinkComponent href={`mailto:${part}`} className="text-aqua">
              {part}
            </LinkComponent>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={index}>
            {part}
          </React.Fragment>
        );
      }
    });

    return <>{elements}</>;
  }

};

export default TextLinker;
