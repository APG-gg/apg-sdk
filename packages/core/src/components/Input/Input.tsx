import React, { useState } from 'react';
import SearchIcon from '@apg.gg/icons/lib/SearchIcon';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';

export interface InputProps {
  label?: string;
  placeholder: string;
  supportText?: string;
  error?: boolean;
  icon?: React.ReactElement;
  isSearchable?: boolean;
  value?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  supportText,
  error,
  icon,
  isSearchable = false,
  value: initialValue = '',
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleFocus = () => !disabled && setIsFocused(true);
  const handleBlur = () => !disabled && setIsFocused(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

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
        {isSearchable && (icon || <SearchIcon className={`flex w-6 h-6 text-2xl text-gray-400 ${label ? 'mr-2' : ''}`} />)}
        <input
          className={`flex-1 outline-none bg-transparent  text-base ${disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
        />
        {value && !disabled && <XCircleIcon className="flex w-6 h-6 text-gray-400 text-2xl cursor-pointer" onClick={handleClear} />}
        {error && !disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
      </div>
      {supportText && <p className={`text-xs font-semibold ${disabled ? 'text-black-600' : 'text-black-400'} mt-2 ml-4`}>{supportText}</p>}
    </div>
  );
};

export default Input;
