import React from 'react';
import { DataMentionsProps } from '../Textarea/Textarea';

export interface TextLinkerProps {
  text: string;
  mentions?: DataMentionsProps[];
  linkComponent?: React.ComponentType<any>
}

const TextLinker: React.FC<TextLinkerProps> = ({ text, mentions = [], linkComponent }) => {
  const LinkComponent = linkComponent || "a";
  const linkRegex = /\b((https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(www\.[-A-Z0-9+&@#\/%=~_|]+(\.[-A-Z0-9+&@#\/%=~_|]+)+)\b/gi;
  const hashtagRegex = /\b#\w+/gi;
  const mentionRegex = /(^|[^A-Za-z0-9._%+-])@\w+/gi; // Nuevo regex para menciones
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/gi;

  if (!text) {
    return null;
  }

  if (mentions.length > 0) {
    let arrayOfJs: any[] = [];

    mentions.forEach(mention => {
      const label = mention.prefix + mention.value;
      if (arrayOfJs.length === 0) {
        const splitted = text.split(label);
        let mentionJsx
        
        if (mention.prefix === '@') {
          mentionJsx = <LinkComponent href={`/${mention.slug}`} className="text-aqua">{label}</LinkComponent>
        } else if (mention.prefix === '#') {
          mentionJsx = <LinkComponent href={`/hashtag/${mention.slug}`} className="text-aqua">{label}</LinkComponent>
        } else if (mention.prefix === '*') {
          mentionJsx = <LinkComponent href={`/events/${mention.slug}`} className="text-aqua">{label}</LinkComponent>
        }

        arrayOfJs.push(splitted[0]);
        arrayOfJs.push(mentionJsx);
        arrayOfJs.push(splitted[1]);
      } else {
        const splitted = arrayOfJs[arrayOfJs.length - 1].split(label);
        let mentionJsx
        
        if (mention.prefix === '@') {
          mentionJsx = <LinkComponent href={`/${mention.slug}`} className="text-aqua">{label}</LinkComponent>
        } else if (mention.prefix === '#') {
          mentionJsx = <LinkComponent href={`/hashtag/${mention.slug}`} className="text-aqua">{label}</LinkComponent>
        } else if (mention.prefix === '*') {
          mentionJsx = <LinkComponent href={`/events/${mention.slug}`} className="text-aqua">{label}</LinkComponent>
        }

        arrayOfJs[arrayOfJs.length - 1] = splitted[0];
        arrayOfJs.push(mentionJsx);
        arrayOfJs.push(splitted[1]);
      }
    });
    
    // arrayOfJs necesito que los elementos que sean string los verifique por si hay algun link o email
    // y los reemplace por el componente LinkComponent

    arrayOfJs = arrayOfJs.map((item, index) => {
      if (typeof item === 'string') {
        const parts = item.split(/(\s+)/);
  
        const elements = parts.map((part, index) => {
          if (linkRegex.test(part)) {
            const link = part.startsWith('https') ? part : `https://${part}`;
      
            return (
              <LinkComponent href={link} key={index} target="_blank" className="text-aqua">
                {part}
              </LinkComponent>
            );
          } else if (emailRegex.test(part)) { // Nuevo bloque para manejar emails
            return (
              <LinkComponent href={`mailto:${part}`} className="text-aqua">
                {part}
              </LinkComponent>
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
      } else {
        return <React.Fragment key={index}>{item}</React.Fragment>
      }
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
