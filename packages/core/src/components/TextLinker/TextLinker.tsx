"use client";

import { RawDraftContentState } from 'draft-js';
import Image from 'next/image';
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
  linkComponent: React.ComponentType<any>
  locale: string;
  text?: string;
  content?: RawDraftContentState;
}

const convertToLink = (part: string) => {
  let link = '';
  if (part.startsWith('https')) {
      link = part;
  } else if (part.startsWith('http')) {
      link = 'https' + part.substring(4);
  } else {
      link = `https://${part}`;
  }

  return link;
}

const TextLinker: React.FC<TextLinkerProps> = ({ text = '', content, linkComponent, locale }) => {
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
        const data = entity.data;
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
        } else if (entity.type === 'LINK') {
          const offset = entityRange.offset;
          const length = entityRange.length;

          valueName = text.slice(offset, offset + length);
        } else if (entity.type === 'IMAGE') {
          valueName = data.alt;
        }

        if (arrayInternalOfJs.length === 0) {
          const splitted = text.split(valueName);
          let mentionJsx

          if (entity.type === 'mention') {
            mentionJsx = <LinkComponent href={`/${locale}/${mention.username}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === '&mention') {
            mentionJsx = <LinkComponent href={`/${locale}/games/${mention.slug}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === '*mention') {
            mentionJsx = <LinkComponent href={`/${locale}/events/${mention.slug}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === 'LINK') {
            mentionJsx = <LinkComponent href={entity.data.href} target={entity.data.target || "_blank"} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === 'IMAGE') {
            mentionJsx = <Image src={entity.data.src} alt={valueName} className="text-aqua w-[18px] h-[18px]" width={18} height={18} />
          }

          arrayInternalOfJs.push(splitted[0]);
          arrayInternalOfJs.push(mentionJsx);
          arrayInternalOfJs.push(splitted[1]);
        } else {
          const splitted = arrayInternalOfJs[arrayInternalOfJs.length - 1].split(valueName);
          let mentionJsx

          if (entity.type === 'mention') {
            mentionJsx = <LinkComponent href={`/${locale}/${mention.username}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === '&mention') {
            mentionJsx = <LinkComponent href={`/${locale}/games/${mention.slug}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === '*mention') {
            mentionJsx = <LinkComponent href={`/${locale}/events/${mention.slug}`} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === 'LINK') {
            mentionJsx = <LinkComponent href={entity.data.href} target={entity.data.target || "_blank"} className="text-aqua">{valueName}</LinkComponent>
          } else if (entity.type === 'IMAGE') {
            mentionJsx = <Image src={entity.data.src} alt={valueName} className="text-aqua w-[18px] h-[18px]" width={18} height={18} />
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

      // reversed entityRanges
      const reversedEntityRanges = entityRanges.map((entityRange, index) => {
        return entityRanges[entityRanges.length - 1 - index];
      });

      reversedEntityRanges.forEach((entityRange, index) => {
        let entity = entityMap[entityRanges.length - 1 - index];
        if (entity.type === "LINK") {
          const data = entity.data;
          const offset = entityRanges[+entityRanges.length - 1 - index].offset;
          const length = entityRanges[+entityRanges.length - 1 - index].length;

          const valueText = text.slice(offset, offset + length);

          if (arrayInternalOfJs.length === 0) {
            let arrayinlineStyled: any[] = [];

            const splitted = text.split(valueText);

            if (entity.type === "LINK") {
              arrayinlineStyled.push(splitted[0]);
              arrayinlineStyled.push(<LinkComponent href={data.url} target="_blank" className="text-aqua">{text}</LinkComponent>);
              arrayinlineStyled.push(splitted[1]);

              arrayInternalOfJs = [...arrayInternalOfJs, ...arrayinlineStyled];
            }

          } else {
            for (let i = 0; i < arrayInternalOfJs.length; i++) {
              const item = arrayInternalOfJs[i];
  
              let arrayinlineStyled: any[] = [];
  
              if (typeof item === 'string') {
                if (item.includes(valueText)) {
                  
                  if (entity.type === "LINK") {
                    const splitted = item.split(text);

                    arrayinlineStyled.push(splitted[0]);
                    arrayinlineStyled.push(<LinkComponent href={data.url} target="_blank" className="text-aqua">{text}</LinkComponent>);
                    arrayinlineStyled.push(splitted[1]);
                    
                    arrayInternalOfJs.splice(i, 1, ...arrayinlineStyled);
                    break;
                  }
                }
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
              const link = convertToLink(part);

              return (
                <LinkComponent href={link} key={index} target="_blank" className="text-aqua">
                  {part}
                </LinkComponent>
              );
            }
            
            if (emailRegex.test(part)) { // Nuevo bloque para manejar emails
              return (
                <LinkComponent key={index} href={`mailto:${part}`} className="text-aqua">
                  {part}
                </LinkComponent>
              );
            }
            
            if (hashtagResult) {
              return (
                <React.Fragment key={index}>
                  <LinkComponent href={`/${locale}/hashtag/${part.slice(1)}`} className="text-aqua">
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
        <div className='min-h-[1.5rem] flex flex-wrap items-center gap-1'>
          {arrayInternalOfJs.map((item, index) => {
            if (typeof item === 'string') {
              return <span key={index}>{item}</span>
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
        const link = convertToLink(part);

        return (
          <LinkComponent href={link} key={index} target="_blank" className="text-aqua">
            {part}
          </LinkComponent>
        );
      } else if (hashtagRegex.test(part)) {
        return (
          <React.Fragment key={index}>
            <LinkComponent href={`/${locale}/hashtag/${part.slice(1)}`} className="text-aqua">
              {part}
            </LinkComponent>
          </React.Fragment>
        );
      } else if (mentionRegex.test(part)) {
        return (
          <React.Fragment key={index}>
            <LinkComponent href={`/${locale}/${part.slice(1)}`} className="text-aqua">
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
