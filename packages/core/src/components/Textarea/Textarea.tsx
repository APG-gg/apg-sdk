import React, { FC, forwardRef, useState, useEffect, ReactNode, useRef, useMemo, useCallback } from 'react';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import cls from 'classnames';
import Mentions from 'rc-mentions';
import { OptionProps } from 'rc-mentions/lib/Option';
import Highlighter from "react-highlight-words";
import { ContentState, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, { MentionData, MentionPluginTheme } from '@draft-js-plugins/mention';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import { ItalicButton, BoldButton, UnderlineButton } from '@draft-js-plugins/buttons';

export interface EntryComponentProps {
  className?: string;
  onMouseDown(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  onMouseUp(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  onMouseEnter(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  role: string;
  id: string;
  'aria-selected'?: boolean | 'false' | 'true';
  theme?: MentionPluginTheme;
  mention: MentionData;
  isFocused: boolean;
  searchValue?: string;
}

const mentionTheme = {
  mention: "text-aqua z-10 bg-trasnparent relative font-normal no-underline",
  mentionSuggestionsEntry: "transition-[background-color] duration-[0.4s] ease-[cubic-bezier(.27,1.27,0.48,0.56)] pt-2 pb-1 p-2.5 active:bg-aqua/10 hover:bg-aqua/10 cursor-pointer flex gap-2 items-center",
  mentionSuggestionsEntryFocused: "transition-[background-color] duration-[0.4s] ease-[cubic-bezier(.27,1.27,0.48,0.56)] pt-2 pb-1 p-2.5 active:bg-aqua/10 hover:bg-aqua/10 cursor-pointer flex gap-2 items-center bg-aqua/10",
  mentionSuggestionsEntryAvatar: "w-10 h-10 rounded-full block"
}

const Entry = (props: EntryComponentProps, renderItem: (item: any) => JSX.Element) => {
  const {
    mention,
    theme,
    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...parentProps
  } = props;
  return (
    <div {...parentProps} className={cls(
      "flex gap-2 w-64 transition-[background-color] duration-[0.4s] ease-[cubic-bezier(.27,1.27,0.48,0.56)] pt-2 pb-1 p-2.5 active:bg-aqua/10 hover:bg-aqua/10 cursor-pointer focus",
      {
        'bg-aqua/10': isFocused
      }
    )}>
      {renderItem(mention)}
    </div>
  );
}

export interface DataMentionsProps {
  prefix: string;
  slug: string;
  value: string;
}

export interface TextareaProps {
  label?: string;
  rounded?: boolean;
  placeholder: string;
  supportText?: string;
  error?: boolean;
  value?: string;
  rawValue?: any;
  maxLength?: number;
  rows?: number;
  cols?: number;
  onChange?: (contentAsRaw: any) => void;
  onSearch?: (text: string, prefix: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  renderItem: (item: any) => JSX.Element;
  errorText?: string | undefined;
  className?: string;
  style?: React.CSSProperties;
  prefixCls?: string;
  data?: any[];
  classNames?: {
    wrapper?: string;
    header?: string;
    mention?: string;
    footer?: string
  }
}

const Textarea: FC<TextareaProps> = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      rounded = true,
      placeholder,
      supportText,
      error,
      rawValue: initialRawValue = { blocks: [], entityMap: {} },
      maxLength,
      rows = 4,
      cols = 40,
      onChange,
      onSearch,
      onBlur,
      onFocus,
      renderItem,
      errorText,
      className = '',
      style = {},
      prefixCls = "apg-textarea",
      classNames,
      data = [],
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [rawValue, setRawValue] = useState<any>(initialRawValue);

    const value = useMemo(() => {
      return rawValue ? convertFromRaw(rawValue).getPlainText() : '';
    }, [rawValue]);

    const handleFocus = () => !error && setIsFocused(true);
    const handleBlur = () => !error && setIsFocused(false);

    const borderColor = error ? 'border-red' : isFocused ? 'border-aqua' : 'border-blue';
    const labelColor = error ? 'text-red' : isFocused ? 'text-aqua' : 'text-black-400';

    const reference = useRef<Editor>(null);
    const [editorState, setEditorState] = useState(() =>
      EditorState.createWithContent(
        rawValue ? convertFromRaw(rawValue) : ContentState.createFromText('')
      ) as EditorState
    );
    const [openMentions, setOpenMentions] = useState(false);
    const [openEvents, setOpenEvents] = useState(false);
    const [openGames, setOpenGames] = useState(false);

    const [suggestions, setSuggestions] = useState(data);

    const { MentionSuggestions, MentionEventSuggestions, MentionGameSuggestions, InlineToolbar, plugins } = useMemo(() => {
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

      const inlineToolbarPlugin = createInlineToolbarPlugin({
        theme: {
          buttonStyles: {
            buttonWrapper: "relative",
            button: "z-10 font-normal no-underline fill-white",
            active: "!fill-aqua",
          },
          toolbarStyles: {
            toolbar: cls(
              "flex gap-2 bg-black rounded-sm border border-black h-9 px-2 py-1 -translate-x-2/4 absolute border shadow-[0px_1px_3px_0px_#000] z-[2] scale-0 left-2/4",
              "after:-ml-1 after:border-t-black after:border-transparent after:border-4",
              "before:-ml-1.5 before:border-t-black before:border-transparent before:border-[6px]",
              "after:absolute after:top-full after:left-1/2",
              "before:absolute before:top-full before:left-1/2"
            ),
            
          },
        }
      });

      // eslint-disable-next-line no-shadow
      const { MentionSuggestions } = mentionPlugin;
      const { MentionSuggestions: MentionEventSuggestions } = mentionEventPlugin;
      const { MentionSuggestions: MentionGameSuggestions } = mentionGamePlugin;
      const { InlineToolbar } = inlineToolbarPlugin;
      // eslint-disable-next-line no-shadow
      const plugins = [mentionPlugin, mentionEventPlugin, mentionGamePlugin, linkifyPlugin, inlineToolbarPlugin];
      return { plugins, MentionSuggestions, MentionEventSuggestions, MentionGameSuggestions, InlineToolbar };
    }, []);

    const onOpenChangeMentions = useCallback((_open: boolean) => {
      setOpenMentions(_open);
    }, []);

    const onOpenChangeEvents = useCallback((_open: boolean) => {
      setOpenEvents(_open);
    }, []);

    const onOpenChangeGames = useCallback((_open: boolean) => {
      setOpenGames(_open);
    }, []);

    const onSearchChangeMentions = useCallback(({ trigger, value }: { trigger: string; value: string }) => {
      onSearch && onSearch(value, trigger);
    }, []);

    const onSearchChangeEvents = useCallback(({ trigger, value }: { trigger: string; value: string }) => {
      onSearch && onSearch(value, trigger);
    }, []);

    const onSearchChangeGames = useCallback(({ trigger, value }: { trigger: string; value: string }) => {
      onSearch && onSearch(value, trigger);
    }, []);

    useEffect(() => {
      if (data.length > 0) {
        setSuggestions(data);
      }
    }, [data]);

    return (
      <div
        className={cls(
          `${prefixCls}`,
          "relative",
          className
        )}
        style={style}
      >
        {label && (
          <label
            className={`absolute -top-2 left-3 px-2 ${labelColor} text-xs bg-black rounded-full z-30`}
          >
            {label}
          </label>
        )}

        <div
          className={cls(
            `${prefixCls}-wrapper`,
            classNames?.wrapper,
            `relative cursor-text min-h-[6rem] text-white z-10 ${borderColor} border bg-black px-4 py-2 ${isFocused ? 'shadow-md bg-aqua/10' : ''}`,
            rounded ? "rounded-2xl" : "rounded-sm",
          )}
          onClick={() => {
            reference.current!.focus();
          }}
        >
          <Editor 
            editorKey={'editor'}
            editorState={editorState}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(editorState) => {
              const contentAsRaw = convertToRaw(editorState.getCurrentContent());
              const contextAsText = editorState.getCurrentContent().getPlainText();

              setRawValue(contentAsRaw);
              onChange && onChange(contentAsRaw);

              if (!maxLength || contextAsText.length <= maxLength) {
                setEditorState(editorState)
              }
            }}
            plugins={plugins}
            ref={reference}
          />
          <MentionSuggestions
            open={openMentions}
            onOpenChange={onOpenChangeMentions}
            suggestions={suggestions}
            onSearchChange={onSearchChangeMentions}
            entryComponent={(props) => Entry(props, renderItem)}
          />
          <MentionEventSuggestions
            open={openEvents}
            onOpenChange={onOpenChangeEvents}
            suggestions={suggestions}
            onSearchChange={onSearchChangeEvents}
            entryComponent={(props) => Entry(props, renderItem)}
          />
          <MentionGameSuggestions
            open={openGames}
            onOpenChange={onOpenChangeGames}
            suggestions={suggestions}
            onSearchChange={onSearchChangeGames}
            entryComponent={(props) => Entry(props, renderItem)}
          />
          <InlineToolbar />
        </div>

        {/* <Mentions
          prefix={prefix}
          prefixCls='apg-mentions'
          onChange={handleChange}
          onSearch={handleSearch}
          onSelect={(option: OptionProps, prefix: string) => {
            setMentions((prev) => [
              ...prev, 
              { 
                prefix, 
                slug: option.key || '',
                value: option.value || ''
              }
            ]);
          }}
          onBlur={handleBlur}
          onFocus={handleFocus}
          style={{ width: '100%' }}
          autoFocus
          options={options}
          autoSize={{ minRows: 2, maxRows: 10 }}
          className={cls(
            `${prefixCls}-wrapper`,
            classNames?.wrapper,
            `flex relative min-h-[6rem] z-10 ${borderColor} border bg-black px-4 py-2 ${isFocused ? 'shadow-md bg-aqua/10' : ''}`,
            rounded ? "rounded-2xl" : "rounded-sm",
          )}
        /> */}

        {/* <Highlighter
          searchWords={mentions.map((mention) => `${mention.prefix}${mention.value}`)}
          autoEscape={true}
          textToHighlight={value}
          className="w-full h-[120%] bg-transparent text-white resize-none outline-none inset-0 absolute px-4 py-2 whitespace-pre-line max-h-[240px] overflow-hidden"
          highlightTag={Highlight}
          style={{ whiteSpace: "pre-wrap" }}
        /> */}
        {error && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
        <div className="flex items-center justify-between mt-2">
          {supportText && <p className={`text-xs font-semibold ${error ? 'text-red-600' : 'text-black-400'} ml-4`}>{supportText}</p>}
          {errorText && <p className="text-red-500 text-xs font-medium mt-1 ml-4">{errorText}</p>}
          {maxLength && (
            <div className="flex items-center ml-auto">
              <span className={`${value.length > maxLength ? 'text-red-500' : 'text-black-400'} text-xs`}>
                {value.length}/{maxLength}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Textarea;
