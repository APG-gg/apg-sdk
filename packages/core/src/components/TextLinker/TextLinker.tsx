"use client";

import { ContentState, EditorState, RawDraftContentState, convertFromRaw } from 'draft-js';
import React, { useMemo, useRef, useState } from 'react';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin from '@draft-js-plugins/mention';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import cls from 'classnames';

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

const mentionTheme = {
  mention: "text-aqua z-10 bg-trasnparent relative font-normal no-underline",
  mentionSuggestions: "absolute z-50 bg-black rounded-sm border border-black p-1 -translate-x-2/4 shadow-[0px_1px_3px_0px_#000] scale-0 left-2/4 max-h-[400px] overflow-y-auto",
  mentionSuggestionsEntry: "transition-[background-color] duration-[0.4s] ease-[cubic-bezier(.27,1.27,0.48,0.56)] py-2 p-2.5 active:bg-aqua/10 hover:bg-aqua/10 cursor-pointer flex gap-2 items-center",
  mentionSuggestionsEntryFocused: "transition-[background-color] duration-[0.4s] ease-[cubic-bezier(.27,1.27,0.48,0.56)] py-2 p-2.5 active:bg-aqua/10 hover:bg-aqua/10 cursor-pointer flex gap-2 items-center bg-aqua/10",
  mentionSuggestionsEntryAvatar: "w-10 h-10 rounded-full block",
}

const TextLinker: React.FC<TextLinkerProps> = ({ text = '', content, linkComponent, locale }) => {
  const LinkComponent = linkComponent || "a";
  const linkRegex = /\b((https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(www\.[-A-Z0-9+&@#\/%=~_|]+(\.[-A-Z0-9+&@#\/%=~_|]+)+)\b/gi;
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/gi;
  const hashtagRegex = /#\w+/gi;
  const mentionRegex = /(^|[^A-Za-z0-9._%+-])@\w+/gi; // Nuevo regex para menciones

  const reference = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      content ? convertFromRaw(content) : ContentState.createFromText('')
    ) as EditorState
  );

  const { plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      supportWhitespace: true,
      mentionPrefix: "@",
      mentionTrigger: "@",
      theme: mentionTheme
    });

    const mentionEventPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      supportWhitespace: true,
      mentionPrefix: "*",
      mentionTrigger: "*",
      theme: mentionTheme
    });

    const mentionHahtagPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      supportWhitespace: true,
      mentionPrefix: "#",
      mentionTrigger: "#",
      theme: mentionTheme
    });

    const mentionGamePlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      supportWhitespace: true,
      mentionPrefix: "&",
      mentionTrigger: "&",
      theme: mentionTheme
    });

    const linkifyPlugin = createLinkifyPlugin({
      theme: {
        link: "text-aqua z-10 font-normal no-underline",
      }
    });

    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin, mentionEventPlugin, mentionGamePlugin, mentionHahtagPlugin, linkifyPlugin];
    return { plugins };
  }, []);

  if (!!content) {
    return (
      <Editor
        readOnly={true}
        plugins={plugins}
        ref={reference}
      />
    )
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
            <LinkComponent href={`/${locale}/hashtags/${part.slice(1)}`} className="text-aqua">
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
