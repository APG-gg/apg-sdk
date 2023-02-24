import React, { useState } from 'react';
import SearchIcon from '@apg.gg/icons/lib/SearchIcon';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';
import ArrowDownIcon from '@apg.gg/icons/lib/ArrowDownIcon';

export interface SelectOption {
  value: string;
  label: string;
  icon?: string;
}

export interface SelectProps {
  label?: string;
  placeholder: string;
  supportText?: string;
  error?: boolean;
  icon?: React.ReactElement;
  isSearchable?: boolean;
  options: SelectOption[];
  value?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  supportText,
  error,
  icon,
  isSearchable = false,
  options,
  value: initialValue = '',
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleFocus = () => !disabled && setIsFocused(true);
  const handleBlur = () => !disabled && setIsFocused(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    if (isSearchable) {
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  const handleClear = () => {
    setValue('');
    setFilteredOptions(options);
  };

  const handleSelect = (selectedOption: SelectOption) => {
    setValue(selectedOption.value);
    setIsFocused(false);
  };

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
          onClick={handleFocus}
          disabled={disabled}
        />
        {value && !disabled && <XCircleIcon className="flex w-6 h-6 text-gray-400 text-2xl cursor-pointer" onClick={handleClear} />}
        {error && !disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
        <ArrowDownIcon className="flex w-6 h-6 text-gray-400 text-xs cursor-pointer items-center justify-center" onClick={handleFocus} />
        {isFocused && filteredOptions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 mt-1 bg-black-800 rounded-sm shadow-lg py-1 z-10">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className={`px-4 py-2 text-sm ${value === option.value ? 'bg-blue text-white' : 'text-white hover:bg-blue cursor-pointer'}`}
                onClick={() => handleSelect(option)}
              >
                {option.icon && <img src={option.icon} alt={option.label} className="inline-block h-4 w-4 mr-2" />}
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {supportText && (
        <p className={`mt-2 text-xs ${error ? 'text-red' : 'text-black-400'}`}>
          {supportText}
        </p>
      )}
    </div>
  );
};

export default Select;
