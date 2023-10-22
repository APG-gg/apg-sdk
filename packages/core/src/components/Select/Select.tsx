import React, { ReactNode, FC, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { FieldError } from 'react-hook-form';
import useDebounce from '../../hooks/useDebounce';
import SearchIcon from '@apg.gg/icons/lib/SearchIcon';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import ArrowDownIcon from '@apg.gg/icons/lib/ArrowDownIcon';

export interface SelectOption {
  value: string;
  label: string;
  content?: ReactNode;
  icon?: ReactNode;
}

export interface SelectProps {
  label?: string;
  rounded?: boolean;
  placeholder: string;
  supportText?: string;
  error?: boolean;
  icon?: React.ReactElement;
  isSearchable?: boolean;
  clearable?: boolean;
  showSearchIcon?: boolean;
  options: SelectOption[];
  value?: string | string[];
  disabled?: boolean;
  readOnly?: boolean;
  multiple?: boolean;
  searchExternal?: boolean;
  onChange?: (value: string | string[]) => void;
  onSelect?: (value: string | string[]) => void;
  onSearch?: (searchQuery: string) => Promise<SelectOption[]>;
  errorText?: FieldError | undefined;
  className?: string;
  style?: React.CSSProperties;
  debounceTime?: number;
  noOptionsText?: string;
  loadingText?: string;
}

const Select: FC<SelectProps> = ({
  label,
  rounded = true,
  placeholder,
  supportText,
  error,
  icon,
  isSearchable = false,
  clearable = false,
  showSearchIcon = false,
  options,
  value: initialValue = '',
  disabled = false,
  readOnly = false,
  multiple = false,
  searchExternal = false,
  onChange = () => {},
  onSelect = () => {},
  onSearch = async () => [],
  errorText,
  className = '',
  style = {},
  debounceTime = 500,
  noOptionsText = 'No options available',
  loadingText = 'Loading options...',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<string>(!multiple ? initialValue as string : '');
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [multipleValue, setMultipleValue] = useState<string[]>(initialValue as string[]);
  const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debouncedSearchValue = useDebounce({ value: value, delay: debounceTime });

  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);
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

      if (multiple) {
        const filtered = options.filter(option =>
          multipleValue.includes(option.value)
        );
        setInternalMultipleValue(filtered);
      } else {
        const selected = options.filter(option => option.value === value)[0];
        setSelectedOption(selected || null);
        setSelectedLabel(selected?.label);
      }

      setFilteredOptions(loadedOptions);
      setIsLoading(false);
    };

    loadOptions();
  }, [options]);

  const handleFocus = () => (!disabled || !readOnly) && setIsFocused(!isFocused);

  const performSearch = async (searchQuery: string) => {
    try {
      setIsLoading(true);
      const results = await onSearch(searchQuery);
      setFilteredOptions(results);
    } catch (error) {
      console.error('Error during search:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;

    const inputValue = event.target.value;
    setValue(inputValue);
    const selected = options.find(option => option.value === inputValue);

    if (inputValue.length >= 1) setSelectedLabel(null)
    
    if ((multiple || isSearchable) && !searchExternal) {
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }

    setSelectedOption(selected || null);
  };

  const handleClear = () => {
    setValue('');
    setSelectedLabel(null);
    setSelectedOption({
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
      setSelectedLabel(selectedValue.label);
      setSelectedOption(selectedValue);
      setIsFocused(false);

      if (isSearchable) setFilteredOptions(options);
    }

    onSelect(selectedValue.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };

  const shouldOpenUpwards = () => {
    if (wrapperRef.current) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - wrapperRect.bottom;
      return spaceBelow < 100;
    }
    return false;
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

  useEffect(() => {
    if (searchExternal && value.length >= 3) {
      performSearch(debouncedSearchValue)
    }
  }, [debouncedSearchValue])

  const borderColor = error ? 'border-red' : isFocused ? 'border-aqua' : disabled ? 'border-black-800' : 'border-blue';
  const labelColor = error ? 'text-red' : isFocused ? 'text-aqua' : disabled ? 'text-black-800' : 'text-black-400';

  return (
    <div className={
      classNames(
        "relative",
        className
      )}
      style={style} 
      ref={wrapperRef}
    >
      {label && (
        <label
          className={`absolute -top-2 left-3 px-2 ${labelColor} text-xs bg-black rounded-full z-20`}
        >
          {label}
        </label>
      )}
      <div className={classNames(
        "flex items-center border bg-black rounded-2xl px-4 py-2 min-h-10",
        borderColor,
        isFocused && 'shadow-md bg-aqua/10',
        multiple ? "rounded-sm" : rounded ? "rounded-full" : "rounded-sm",
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
                      {option?.content || option?.label}
                      {option && <XCircleIcon className="flex items-center w-4 h-4 text-white text-2xl ml-2 cursor-pointer" onClick={() => handleSelect(option)} />}
                    </div>
                  );
                })}
                <input
                  className={`flex-1 outline-none bg-transparent text-base min-w-[5px] ${disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}
                  type="text"
                  placeholder={placeholder}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  disabled={disabled}
                  readOnly={readOnly}
                  value={value}
                />
              </>
            )
          }

          {!multiple ? (
          <div className="relative h-6">
              <span className={classNames(
                "absolute top-0 bottom-0",
                selectedOption?.icon ? 'left-8' : 'left-0'
              )}>
                <input
                  className={`flex-1 outline-none bg-transparent text-base min-w-[5px] ${disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}
                  type="text"
                  placeholder={placeholder}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  disabled={disabled}
                  readOnly={readOnly}
                  value={selectedLabel && selectedLabel?.length > 0 ? '' : value}
                />
              </span>
              {selectedLabel ? (
                <div className="flex gap-2">
                  {selectedOption?.icon && <div className="flex items-center">{selectedOption?.icon}</div>}
                  <span className={`text-base ${disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}>{selectedLabel}</span>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>


        {clearable && ((multiple && multipleValue.length > 0) || (!multiple && value)) && !disabled && <XCircleIcon className="flex w-6 h-6 text-gray-400 text-2xl cursor-pointer" onClick={handleClear} />}
        {error && !disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
        <ArrowDownIcon className="flex w-6 h-6 text-gray-400 text-xs cursor-pointer items-center justify-center" onClick={handleFocus} />
      </div>

      {supportText && <div className="text-xs text-black-400 mt-2">{supportText}</div>}
      {errorText && <p className="text-red-500 text-xs font-medium mt-1 ml-4">{errorText.message}</p>}

      {isFocused && (
        <div
          className={classNames(
            'absolute z-40',
            shouldOpenUpwards() ? 'bottom-full' : 'top-full',
            'left-0 right-0 mt-1 bg-black-800 rounded-sm shadow-lg py-1 overflow-y-auto max-h-[9.5rem]'
          )}
          ref={optionsRef}
        >
          {!isLoading && filteredOptions.map((option) => (
            <div
              key={option.value}
              className={classNames(
                'flex px-4 py-2 text-sm',
                !multiple && value === option.value ? 'bg-blue text-white' : 'text-white hover:bg-blue cursor-pointer',
                multiple && multipleValue.includes(option.value) ? 'bg-blue text-white' : 'text-white hover:bg-blue cursor-pointer',
              )}
              onClick={() => handleSelect(option)}
            >
              {option.icon && <div className="flex items-center mr-2">{option.icon}</div>}
              {option.content || option?.label}
              {multiple && multipleValue.includes(option.value) && <XCircleIcon className="flex w-4 h-4 text-xl text-white ml-auto" />}
            </div>
          ))}

          {!isLoading && filteredOptions.length === 0 && (
            <div className="px-4 py-2 cursor-default text-white-200">{noOptionsText}</div>
          )}

          {isLoading && (
            <div className="px-4 py-2 cursor-default text-white-200">{loadingText}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
