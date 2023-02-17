import React from 'react';

interface Props {
  text: string;
}

const TextLinker: React.FC<Props> = ({ text }) => {
  const linkRegex = /(#\w+|@\w+)/g;

  // Split the text into an array of words and links
  const parts = text.split(linkRegex).filter(Boolean);

  // Map each part to a new element that either contains a link or the original part
  const elements = parts.map((part, index) => {
    if (part.startsWith('#')) {
      const hashtag = part.slice(1); // Remove the "#" from the hashtag
      return (
        <React.Fragment key={index}>
          <a className="text-blue-400" href={`/hashtag/${hashtag}`}>{part}</a>{' '}
        </React.Fragment>
      );
    } else if (part.startsWith('@')) {
      const mention = part.slice(1); // Remove the "@" from the mention
      return (
        <React.Fragment key={index}>
          <a className="text-blue-400" href={`/${mention}`}>{part}</a>{' '}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={index}>
          {part}{' '}
        </React.Fragment>
      );
    }
  });

  return <>{elements}</>;
};

export default TextLinker;
