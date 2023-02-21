import React from 'react';

interface Props {
  text: string;
}

const TextLinker: React.FC<Props> = ({ text }) => {
  const linkRegex = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]|www\.[-A-Z0-9+&@#\/%=~_|]+(\.[-A-Z0-9+&@#\/%=~_|]+)+\b)/gi;
  const hashtagRegex = /#\w+/gi;
  const mentionRegex = /@\w+/gi;

  // Split the text into an array of parts that include both the words and the links
  const parts = text.split(linkRegex);

  // Map each part to a new element that either contains a link or the original part
  const elements = parts.map((part, index) => {
    if (linkRegex.test(part)) {
      // Normalize the link by adding https if it's missing
      const link = part.startsWith('https') ? part : `https://${part}`;

      return (
        <a className="text-blue-400"href={link} key={index}>
          {part}
        </a>
      );
    } else if (hashtagRegex.test(part)) {
      return (
        <React.Fragment key={index}>
          <a className="text-blue-400"href={`/hashtag/${part.slice(1)}`}>{part} </a>
        </React.Fragment>
      );
    } else if (mentionRegex.test(part)) {
      return (
        <React.Fragment key={index}>
          <a className="text-blue-400"href={`/profile/${part.slice(1)}`}>{part} </a>
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
};

export default TextLinker;
