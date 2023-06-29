import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent, FC, forwardRef, useImperativeHandle } from 'react';
import { InputProps } from '../Input';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';

export interface DateInputProps extends Omit<InputProps, 'onChange' | 'onKeyDown' | 'isSearchable' | 'icon'> {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

type InputRef = {
  focus: () => void;
};

const DateInput: FC<DateInputProps> = forwardRef<InputRef, DateInputProps>(
  (
    {
      name,
      onChange, 
      value = '',
      ...rest
    },
    ref
  ) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [isFocused, setIsFocused] = useState(false);

  const dayInputRef = useRef<HTMLInputElement>(null);
  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const dateParts = value.split('/');
    if (dateParts.length === 3) {
      setDay(dateParts[0]);
      setMonth(dateParts[1]);
      setYear(dateParts[2]);
    }
  }, [value]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value: inputValue } = event.target;
    if (inputName === 'day') {
      setDay(inputValue);
      if (inputValue.length === 2) {
        monthInputRef.current?.focus();
      }
    } else if (inputName === 'month') {
      setMonth(inputValue);
      if (inputValue.length === 2) {
        yearInputRef.current?.focus();
      }
    } else if (inputName === 'year') {
      setYear(inputValue);
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const nextInputName = getNextInputName(event.currentTarget);
      const nextInput = getNextInputRef(nextInputName);
      if (nextInput) {
        nextInput.current?.focus();
      }
    }
  };

  const getNextInputName = (currentInput: HTMLInputElement | null) => {
    if (currentInput === dayInputRef.current) {
      return 'month';
    } else if (currentInput === monthInputRef.current) {
      return 'year';
    } else if (currentInput === yearInputRef.current) {
      return 'day';
    }
    return '';
  };

  const getNextInputRef = (inputName: string) => {
    if (inputName === 'day') {
      return dayInputRef;
    } else if (inputName === 'month') {
      return monthInputRef;
    } else if (inputName === 'year') {
      return yearInputRef;
    }
    return null;
  };

  const handleFocus = () => !rest.disabled && setIsFocused(true);
  const handleBlur = () => !rest.disabled && setIsFocused(false);
  const handleClear = () => {
    setDay('');
    setMonth('');
    setYear('');
  };

  const padValue = (value: string) => {
    if (value.length === 1) {
      return `0${value}`;
    }
    return value;
  };

  const borderColor = rest.error ? 'border-red' : isFocused ? 'border-aqua' : rest.disabled ? 'border-black-800' : 'border-blue';
  const labelColor = rest.error ? 'text-red' : isFocused ? 'text-aqua' : rest.disabled ? 'text-black-800' : 'text-black-400';

  useEffect(() => {
    const formattedDate = `${padValue(day)}/${padValue(month)}/${year}`;
    onChange(name, formattedDate);
  }, [name, day, month, year, onChange]);

  const inputRef = useRef<InputRef>(null);
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }), [inputRef]);

  return (
    <div className="relative">
      {rest.label && (
        <label
          className={`absolute -top-2 left-3 px-2 ${labelColor} text-xs bg-black rounded-full`}
        >
          {rest.label}
        </label>
      )}
      <div className={`flex items-center ${borderColor} border bg-black rounded-full px-4 py-2 h-10 ${isFocused ? 'shadow-md bg-aqua/10' : ''}`}>
        <input
          {...rest}
          className={`w-8 outline-none text-center bg-transparent text-base ${rest.disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}
          name="day"
          type="text"
          value={day}
          maxLength={2}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onFocus={() => {
            handleFocus();
            rest.onFocus && rest.onFocus();
          }}
          onBlur={({ target }) => {
            handleBlur();
            rest.onBlur && rest.onBlur();
            setDay(padValue(target.value));
          }}
          ref={dayInputRef}
        />
        <span className={`text-base ${rest.disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}>/</span>
        <input
          {...rest}
          className={`w-8 outline-none text-center bg-transparent text-base ${rest.disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}
          name="month"
          type="text"
          value={month}
          maxLength={2}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onFocus={() => {
            handleFocus();
            rest.onFocus && rest.onFocus();
          }}
          onBlur={({ target }) => {
            handleBlur();
            rest.onBlur && rest.onBlur();
            setMonth(padValue(target.value));
          }}
          ref={monthInputRef}
        />
        <span className={`text-base ${rest.disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}>/</span>
        <input
          {...rest}
          className={`w-12 outline-none text-center bg-transparent text-base ${rest.disabled ? 'cursor-not-allowed text-black-800' : 'text-white'}`}
          name="year"
          type="text"
          value={year}
          maxLength={4}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onFocus={() => {
            handleFocus();
            rest.onFocus && rest.onFocus();
          }}
          onBlur={() => {
            handleBlur();
            rest.onBlur && rest.onBlur();
          }}
          ref={yearInputRef}
        />
        {day && month && year && !rest.disabled && <XCircleIcon className="flex w-6 h-6 text-gray-400 text-2xl cursor-pointer ml-auto" onClick={handleClear} />}
        {rest.error && !rest.disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-auto" />}
      </div>
      {rest.supportText && <p className={`text-xs font-semibold ${rest.disabled ? 'text-black-600' : 'text-black-400'} mt-2 ml-4`}>{rest.supportText}</p>}
      {rest.errorText && <p className="text-red-500 text-xs font-medium mt-1">{rest.errorText.message}</p>}
    </div>
  );
});

export default DateInput;
