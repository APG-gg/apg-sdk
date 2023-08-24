import React, { FC, forwardRef, useState, useEffect } from 'react';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import classNames from 'classnames';

export interface TextareaProps {
  label?: string;
  rounded?: boolean;
  placeholder: string;
  supportText?: string;
  error?: boolean;
  value?: string;
  maxLength?: number;
  rows?: number;
  cols?: number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  errorText?: string | undefined;
  className?: string;
  style?: React.CSSProperties;
}

const Textarea: FC<TextareaProps> = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      rounded = true,
      placeholder,
      supportText,
      error,
      value: initialValue = '',
      maxLength,
      rows = 4,
      cols = 40,
      onChange,
      onBlur,
      onFocus,
      errorText,
      className = '',
      style = {},
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue);

    const handleFocus = () => !error && setIsFocused(true);
    const handleBlur = () => !error && setIsFocused(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      if (!maxLength || newValue.length <= maxLength) {
        setValue(newValue);
        onChange && onChange(event);
      }
    };

    useEffect(() => {
      if (maxLength && value.length > maxLength) {
        setValue(value.substring(0, maxLength));
      }
    }, [maxLength]);

    const borderColor = error ? 'border-red' : isFocused ? 'border-aqua' : 'border-blue';
    const labelColor = error ? 'text-red' : isFocused ? 'text-aqua' : 'text-black-400';

    return (
      <div
        className={classNames(
          "relative",
          className
        )}
        style={style}
      >
        {label && (
          <label
            className={`absolute -top-2 left-3 px-2 ${labelColor} text-xs bg-black rounded-full`}
          >
            {label}
          </label>
        )}
        <div
          className={classNames(
            `flex ${borderColor} border bg-black px-4 py-2 ${isFocused ? 'shadow-md bg-aqua/10' : ''}`,
            rounded ? "rounded-2xl" : "rounded-sm",
          )}
        >
          <textarea
            className={`flex-1 outline-none bg-transparent text-base text-white`}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onFocus={() => {
              handleFocus();
              onFocus && onFocus();
            }}
            onBlur={() => {
              handleBlur();
              onBlur && onBlur();
            }}
            rows={rows}
            cols={cols}
            ref={ref}
          />
          {error && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
        </div>
        <div className="flex items-center justify-between mt-2">
          {supportText && <p className={`text-xs font-semibold ${error ? 'text-red-600' : 'text-black-400'} ml-4`}>{supportText}</p>}
          {errorText && <p className="text-red-500 text-xs font-medium mt-1 ml-4">{errorText}</p>}
          {maxLength && (
            <div className="flex items-center ml-auto">
              <span className={`${value.length >= maxLength ? 'text-red-500' : 'text-black-400'} text-xs`}>
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
