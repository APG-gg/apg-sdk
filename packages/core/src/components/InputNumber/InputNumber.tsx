import React, { FC, useState, useRef } from 'react';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import { FieldError } from 'react-hook-form';
import RCInputNumber from 'rc-input-number';
import { cn } from '../../utils/cn';

export interface InputNumberClassNames {
  wrapper?: string;
  input?: string;
  increaseButton?: string;
  decreaseButton?: string;
}

export interface InputNumberProps {
  prefixCls?: string;
  supportText?: string;
  error?: boolean;
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
  step?: number;
  min?: number;
  max?: number;
  classNames?: InputNumberClassNames;
}

const InputNumber: FC<InputNumberProps> = ({
  prefixCls = 'apg-input-number',
  supportText,
  error,
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

  const handleChange = (value: number | null) => {
    const newValue = value || 0;
    setValue(newValue);
    onChange && onChange(newValue);
  };

  const borderColor = error ? 'border-red' : disabled ? 'border-black-800' : 'border-blue';

  return (
    <div className={cn(
      prefixCls, 
      "relative min-w-28", 
      className
    )} style={style}>
      <div className={cn(
        `flex items-center ${borderColor} border rounded-lg text-white overflow-hidden bg-black h-10 ${isFocused ? 'shadow-md bg-aqua/10' : ''}`,
        classNames?.wrapper
      )}>
        <RCInputNumber
          prefixCls={prefixCls} 
          defaultValue={value}
          onChange={(value) => handleChange(value)}
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
        {error && !disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
      </div>
      {supportText && <p className={`text-xs font-semibold ${disabled ? 'text-black-600' : 'text-black-400'} mt-2 ml-4`}>{supportText}</p>}
      {errorText && <p className="text-red-500 text-xs font-medium mt-1 ml-4">{errorText.message}</p>}
    </div>
  );
};

export default InputNumber;
