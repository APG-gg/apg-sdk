import React, { FC, forwardRef, useState } from 'react';
import SearchIcon from '@apg.gg/icons/lib/SearchIcon';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import { FieldError } from 'react-hook-form';

export interface InputProps {
  label?: string;
  type?: string;
  placeholder: string;
  supportText?: string;
  error?: boolean;
  icon?: React.ReactElement;
  isSearchable?: boolean;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  errorText?: FieldError | undefined;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = 'text',
      placeholder,
      supportText,
      error,
      icon,
      isSearchable = false,
      value: initialValue = '',
      disabled = false,
      readOnly = false,
      onChange,
      onBlur,
      onFocus,
      errorText,
    },
    ref
  ) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleFocus = () => !disabled && setIsFocused(true);
  const handleBlur = () => !disabled && setIsFocused(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange && onChange(event);
  };

  const handleClear = () => setValue('');

  const borderColor = error ? 'border-red' : isFocused ? 'border-aqua' : disabled ? 'border-black-800' : 'border-blue';
  const labelColor = error ? 'text-red' : isFocused ? 'text-aqua' : disabled ? 'text-black-800' : 'text-black-400';

  return (
    <div className="relative">
      {label && (
        <label
          className={`absolute -top-2 left-3 px-2 ${labelColor} text-xs bg-black rounded-full`}
        >
          {label}
        </label>
      )}
      <div className={`flex items-center ${borderColor} border bg-black rounded-full px-4 py-2 h-10 ${isFocused ? 'shadow-md bg-aqua/10' : ''}`}>
        {isSearchable && (icon || <SearchIcon className={`flex w-6 h-6 text-2xl text-gray-400 mr-2`} />)}
        <input
          className={`flex-1 outline-none bg-transparent text-base ${disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}
          type={type}
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
          disabled={disabled}
          readOnly={readOnly}
          ref={ref}
        />
        {value && !disabled && <XCircleIcon className="flex w-6 h-6 text-gray-400 text-2xl cursor-pointer" onClick={handleClear} />}
        {error && !disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
      </div>
      {supportText && <p className={`text-xs font-semibold ${disabled ? 'text-black-600' : 'text-black-400'} mt-2 ml-4`}>{supportText}</p>}
      {errorText && <p className="text-red-500 text-xs font-medium mt-1">{errorText.message}</p>}
    </div>
  );
});

export default Input;
