import React, { FC, useEffect, useRef, useState } from 'react';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import SearchIcon from '@apg.gg/icons/lib/SearchIcon';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';
import ArrowDownIcon from '@apg.gg/icons/lib/ArrowDownIcon';
import classNames from 'classnames';

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
  showSearchIcon?: boolean;
  options: SelectOption[];
  value?: string | string[];
  disabled?: boolean;
  multiple?: boolean;
  onChange?: (value: string | string[]) => void;
}

const Select: FC<SelectProps> = ({
  label,
  placeholder,
  supportText,
  error,
  icon,
  isSearchable = false,
  showSearchIcon = false,
  options,
  value: initialValue = '',
  disabled = false,
  multiple = false,
  onChange = () => {},
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<string>(initialValue as string);
  const [multipleValue, setMultipleValue] = useState<string[]>(initialValue as string[]);
  const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const optionsRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [internalValue, setInternalValue] = useState<SelectOption>({
    value: '',
    label: '',
  });
  const [internalMultipleValue, setInternalMultipleValue] = useState<SelectOption[]>([]);

  useEffect(() => {
    const loadOptions = async () => {
      setIsLoading(true);

      let loadedOptions: SelectOption[] = [];

      if (options instanceof Promise) {
        loadedOptions = await options;
      } else if (Array.isArray(options)) {
        loadedOptions = options;
      }

      setFilteredOptions(loadedOptions);
      setIsLoading(false);
    };

    loadOptions();
  }, [options]);

  const handleFocus = () => !disabled && setIsFocused(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    const selected = options.filter(option => option.value === inputValue)[0];
    setInternalValue(selected);

    if (multiple || isSearchable) {
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  const handleClear = () => {
    setValue('');
    setInternalValue({
      value: '',
      label: '',
    });
    setMultipleValue([]);
    setInternalMultipleValue([]);
    setFilteredOptions(options);
    setIsFocused(false);
  };

  const handleSelect = (selectedValue: SelectOption) => {
    if (multiple) {
      if (multipleValue.includes(selectedValue.value)) {
        setMultipleValue(multipleValue.filter(v => v !== selectedValue.value));
        setInternalMultipleValue(internalMultipleValue.filter(v => v.value !== selectedValue.value));
      } else {
        setMultipleValue([...multipleValue, selectedValue.value]);
        setInternalMultipleValue([...internalMultipleValue, selectedValue]);
      }

      setValue('');
      setFilteredOptions(options);
    } else {
      setValue(selectedValue.value);
      setInternalValue(selectedValue);
      setIsFocused(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };
  
  useEffect(() => {
    if (isFocused) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    if (isFocused && optionsRef.current) {
      optionsRef.current.scrollTop = 0;
    }
  }, [isFocused]);

  useEffect(() => { 
    if (multiple) {
      onChange(multipleValue);
    } else {
      onChange(value);
    }
  }, [value, multipleValue]);

  const borderColor = error ? 'border-red' : isFocused ? 'border-aqua' : disabled ? 'border-black-800' : 'border-blue';
  const labelColor = error ? 'text-red' : isFocused ? 'text-aqua' : disabled ? 'text-black-800' : 'text-black-400';

  return (
    <div className="relative" ref={wrapperRef}>
      {label && (
        <label
          className={`absolute -top-2 left-3 px-2 ${labelColor} text-xs bg-black rounded-full`}
        >
          {label}
        </label>
      )}
      <div className={classNames(
        "flex items-center border bg-black rounded-2xl px-4 py-2 min-h-10",
        borderColor,
        isFocused && 'shadow-md bg-aqua/10',
        multiple ? "rounded-2xl" : "rounded-full",
      )}>
        {(isSearchable && showSearchIcon) && (icon || <SearchIcon className={`flex w-6 h-6 text-2xl text-gray-400 ${label ? 'mr-2' : ''}`} />)}

        <div className="flex items-center relative flex-wrap flex-1 gap-2">
          {
            multiple && internalMultipleValue.length > 0 && (
              <>
                {internalMultipleValue.map((v) => {
                  const option = options.find(o => o.value === v.value);
                  return (
                    <div
                      key={v.value}
                      className="flex items-center text-white bg-aqua/10 rounded-full px-2 py-1 text-xs"
                    >
                      {option?.icon && <img src={option.icon} alt={option.label} className="w-4 h-4 mr-1" />}
                      {option?.label}
                      {option && <XCircleIcon className="flex items-center w-4 h-4 text-white text-2xl ml-2 cursor-pointer" onClick={() => handleSelect(option)} />}
                    </div>
                  );
                })}
              </>
            )
          }
          <input
            className={`flex-1 outline-none bg-transparent text-base min-w-[5px] ${disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}
            type="text"
            placeholder={placeholder}
            value={internalValue?.label}
            onChange={handleChange}
            onFocus={handleFocus}
            disabled={disabled}
          />
        </div>

        {((multiple && multipleValue.length > 0) || (!multiple && value)) && !disabled && <XCircleIcon className="flex w-6 h-6 text-gray-400 text-2xl cursor-pointer" onClick={handleClear} />}
        {error && !disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
        <ArrowDownIcon className="flex w-6 h-6 text-gray-400 text-xs cursor-pointer items-center justify-center" onClick={handleFocus} />
      </div>

      {supportText && <div className="text-xs text-black-400 mt-2">{supportText}</div>}

      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-black-800 rounded-sm shadow-lg py-1 z-10 overflow-y-auto max-h-[9.5rem]">
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className={classNames(
                'flex px-4 py-2 text-sm',
                !multiple && value === option.value ? 'bg-blue text-white' : 'text-white hover:bg-blue cursor-pointer',
                multiple && multipleValue.includes(option.value) ? 'bg-blue text-white' : 'text-white hover:bg-blue cursor-pointer',
              )}
              onClick={() => handleSelect(option)}
            >
              {option.icon && <img src={option.icon} alt={option.label} className="inline-block h-4 w-4 mr-2" />}
              {option.label}
              {multiple && multipleValue.includes(option.value) && <XCircleIcon className="flex w-4 h-4 text-xl text-white ml-auto" />}
            </div>
          ))}

          {filteredOptions.length === 0 && (
            <div className="px-4 py-2 cursor-default">No options available</div>
          )}

          {isLoading && (
            <div className="px-4 py-2 cursor-default">Loading options...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
