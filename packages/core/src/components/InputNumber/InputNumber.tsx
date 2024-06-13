import React, { FC, useState, useRef } from 'react';
import SearchIcon from '@apg.gg/icons/lib/SearchIcon';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import { FieldError } from 'react-hook-form';
import classNames from 'classnames';
import { cn } from '../../utils/cn';

export interface InputNumberClassNames {
  wrapper?: string;
  input?: string;
  increaseButton?: string;
  decreaseButton?: string;
}

export interface InputNumberProps {
  prefixCls?: string;
  rounded?: boolean;
  placeholder: string;
  supportText?: string;
  error?: boolean;
  increaseIcon?: React.ReactElement;
  decreaseIcon?: React.ReactElement;
  clearable?: boolean;
  value?: number;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (value: number) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  errorText?: FieldError | undefined;
  className?: string;
  style?: React.CSSProperties;
  autoComplete?: string;
  buttonLayout?: 'horizontal' | 'vertical';
  step?: number;
  min?: number;
  max?: number;
  classNames?: InputNumberClassNames;
}

const InputNumber: FC<InputNumberProps> = ({
  prefixCls = 'apg-input-number',
  rounded = true,
  placeholder,
  supportText,
  error,
  increaseIcon,
  decreaseIcon,
  value: initialValue = 0,
  disabled = false,
  readOnly = false,
  onChange,
  onBlur,
  onFocus,
  errorText,
  className = '',
  style = {},
  autoComplete = 'off',
  buttonLayout = 'horizontal',
  step = 1,
  min = 0,
  max = 100,
  classNames,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => !disabled && setIsFocused(true);
  const handleBlur = () => !disabled && setIsFocused(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value) || 0;
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const handleIncrement = () => {
    if (disabled || readOnly) return;
    setValue(prev => {
      if (prev >= max) return max;

      const newValue = prev + 1;
      onChange && onChange(newValue);
      return newValue;
    });
  };

  const handleDecrement = () => {
    if (disabled || readOnly) return;
    setValue(prev => {
      if (prev <= min) return min;

      const newValue = prev - 1;
      onChange && onChange(newValue);
      return newValue;
    });
  };

  const borderColor = error ? 'border-red' : disabled ? 'border-black-800' : 'border-blue';
  const buttonsColor = error ? 'bg-red' : disabled ? 'bg-black-800' : 'bg-blue';

  const inputNumber = (
    <input
      className={cn(
        `${prefixCls}-input`,
        "text-center flex-1 outline-none bg-transparent text-base max-w-[calc(100%-80px)] px-4",
        isFocused ? "bg-transparent" : "bg-black",
        disabled ? 'cursor-not-allowed text-black-800' : 'text-white',
        classNames?.input
      )}
      type="text"
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
      ref={inputRef}
      autoComplete={autoComplete}
      step={step}
      min={min}
      max={max}
    />
  );

  return (
    <div className={cn(
      prefixCls, 
      "relative", 
      className
    )} style={style}>
      <div className={cn(
        `flex items-center ${borderColor} border bg-black h-10 ${isFocused ? 'shadow-md bg-aqua/10' : ''}`,
        rounded ? "rounded-full" : "rounded-sm",
        classNames?.wrapper
      )}>
        {buttonLayout === 'horizontal' ? (
          <div className="flex justify-between w-full h-10">
            <button
              className={cn(
                "flex justify-center items-center text-white text-2xl py-1 w-10",
                buttonsColor,
                rounded ? "rounded-l-full" : "rounded-l-sm",
                classNames?.decreaseButton
              )}
              onClick={handleDecrement}
              disabled={disabled || readOnly}
            >
              {decreaseIcon || "-"}
            </button>
            {inputNumber}
            <button
              className={cn(
                "flex justify-center items-center text-white text-2xl py-1 w-10",
                buttonsColor,
                rounded ? "rounded-r-full" : "rounded-r-sm",
                classNames?.increaseButton
              )}
              onClick={handleIncrement}
              disabled={disabled || readOnly}
            >
              {increaseIcon || "+"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-between w-10 h-full">
            <button
              className={cn(
                "flex justify-center items-center text-white text-2xl py-1 w-10 h-10",
                buttonsColor,
                rounded ? "rounded-r-full" : "rounded-r-sm",
                classNames?.increaseButton
              )}
              onClick={handleIncrement}
              disabled={disabled || readOnly}
            >
              {increaseIcon || "+"}
            </button>
            {inputNumber}
            <button
              className={cn(
                "flex justify-center items-center text-white text-2xl py-1 w-10 h-10",
                buttonsColor,
                rounded ? "rounded-l-full" : "rounded-l-sm",
                classNames?.decreaseButton
              )}
              onClick={handleDecrement}
              disabled={disabled || readOnly}
            >
              {decreaseIcon || "-"}
            </button>
          </div>
        )}
        {error && !disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
      </div>
      {supportText && <p className={`text-xs font-semibold ${disabled ? 'text-black-600' : 'text-black-400'} mt-2 ml-4`}>{supportText}</p>}
      {errorText && <p className="text-red-500 text-xs font-medium mt-1 ml-4">{errorText.message}</p>}
    </div>
  );
};

export default InputNumber;
