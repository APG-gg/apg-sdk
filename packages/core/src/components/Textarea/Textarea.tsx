import React, { FC, forwardRef, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import cls from 'classnames';
import { ContentState, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, { MentionData, MentionPluginTheme } from '@draft-js-plugins/mention';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import { cn } from '../../utils/cn';

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
  mentionSuggestions: "absolute z-50 bg-black rounded-sm border border-black p-1 -translate-x-2/4 shadow-[0px_1px_3px_0px_#000] scale-0 left-2/4 max-h-[400px] overflow-y-auto",
  mentionSuggestionsEntry: "transition-[background-color] duration-[0.4s] ease-[cubic-bezier(.27,1.27,0.48,0.56)] pt-2 pb-1 p-2.5 active:bg-aqua/10 hover:bg-aqua/10 cursor-pointer flex gap-2 items-center",
  mentionSuggestionsEntryFocused: "transition-[background-color] duration-[0.4s] ease-[cubic-bezier(.27,1.27,0.48,0.56)] pt-2 pb-1 p-2.5 active:bg-aqua/10 hover:bg-aqua/10 cursor-pointer flex gap-2 items-center bg-aqua/10",
  mentionSuggestionsEntryAvatar: "w-10 h-10 rounded-full block",
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
  clearSearch: () => void;
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
      clearSearch,
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
    const [open, setOpen] = useState({
      mentions: false,
      events: false,
      games: false,
      hashtags: false,
    });

    const [suggestions, setSuggestions] = useState(data);

    const { MentionSuggestions, MentionEventSuggestions, MentionGameSuggestions, MentionHashtagSuggestions, InlineToolbar, plugins } = useMemo(() => {
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
      const { MentionSuggestions: MentionHashtagSuggestions } = mentionHahtagPlugin;
      const { InlineToolbar } = inlineToolbarPlugin;
      // eslint-disable-next-line no-shadow
      const plugins = [mentionPlugin, mentionEventPlugin, mentionGamePlugin, mentionHahtagPlugin, linkifyPlugin, inlineToolbarPlugin];
      return { plugins, MentionSuggestions, MentionEventSuggestions, MentionGameSuggestions, MentionHashtagSuggestions, InlineToolbar };
    }, []);

    const onOpenChange = useCallback((type: string, _open: boolean) => {
      setOpen(prevState => ({ ...prevState, [type]: _open }));
    }, []);

    const onSearchChange = useCallback(({ trigger, value }: { trigger: string; value: string }) => {
      onSearch && onSearch(value, trigger);
    }, []);

    useEffect(() => {
      if (data.length > 0) {
        setSuggestions(data);
      }
    }, [data]);

    return (
      <div
        className={cn(
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
          className={cn(
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

              console.log('contextAsText', contextAsText);

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
            open={open.mentions}
            onOpenChange={(_open: boolean) => onOpenChange('mentions', _open)}
            suggestions={suggestions}
            onSearchChange={onSearchChange}
            entryComponent={(props) => Entry(props, renderItem)}
            onAddMention={() => clearSearch()}
          />
          <MentionEventSuggestions
            open={open.events}
            onOpenChange={(_open: boolean) => onOpenChange('events', _open)}
            suggestions={suggestions}
            onSearchChange={onSearchChange}
            entryComponent={(props) => Entry(props, renderItem)}
            onAddMention={() => clearSearch()}
          />
          <MentionGameSuggestions
            open={open.games}
            onOpenChange={(_open: boolean) => onOpenChange('games', _open)}
            suggestions={suggestions}
            onSearchChange={onSearchChange}
            entryComponent={(props) => Entry(props, renderItem)}
            onAddMention={() => clearSearch()}
          />
          <MentionHashtagSuggestions
            open={open.hashtags}
            onOpenChange={(_open: boolean) => onOpenChange('hashtags', _open)}
            suggestions={suggestions}
            onSearchChange={onSearchChange}
            entryComponent={(props) => Entry(props, renderItem)}
            onAddMention={() => {
              clearSearch();
            }}
          />
          <InlineToolbar />
        </div>

        <div className="flex items-center justify-between px-2 mt-1">
          {error ? (  
            <div className="flex w-full items-center gap-1">
              <ErrorIcon className="flex w-4 h-4 text-red text-xl" />
              {errorText && <p className="text-red-500 text-xs font-medium">{errorText}</p>}
            </div>
          ) : (
            <>
              {supportText && <p className={`text-xs font-semibold ${error ? 'text-red-600' : 'text-black-400'}`}>{supportText}</p>}
            </>
          )}
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
