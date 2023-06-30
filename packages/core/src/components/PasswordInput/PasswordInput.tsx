import React, { FC, forwardRef, useState } from 'react';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import VisibilityIcon from '@apg.gg/icons/lib/VisibilityIcon';
import VisibilityOffIcon from '@apg.gg/icons/lib/VisibilityOffIcon';
import { FieldError } from 'react-hook-form';

export interface PasswordInputProps {
  label?: string;
  placeholder: string;
  supportText?: string;
  error?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  errorText?: FieldError | undefined;
}

const PasswordInput: FC<PasswordInputProps> = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      label,
      placeholder,
      supportText,
      error,
      value: initialValue = '',
      disabled = false,
      onChange,
      onBlur,
      onFocus,
      errorText,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => !disabled && setIsFocused(true);
    const handleBlur = () => !disabled && setIsFocused(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      onChange && onChange(event);
    };

    const borderColor = error ? 'border-red' : isFocused ? 'border-aqua' : disabled ? 'border-black-800' : 'border-blue';
    const labelColor = error ? 'text-red' : isFocused ? 'text-aqua' : disabled ? 'text-black-800' : 'text-black-400';

    return (
      <div className="relative">
        {label && (
          <label className={`absolute -top-2 left-3 px-2 ${labelColor} text-xs bg-black rounded-full`}>
            {label}
          </label>
        )}
        <div
          className={`flex items-center ${borderColor} border bg-black rounded-full px-4 py-2 h-10 ${
            isFocused ? 'shadow-md bg-aqua/10' : ''
          }`}
        >
          <input
            className={`flex-1 outline-none bg-transparent text-base ${
              disabled ? 'cursor-not-allowed text-black-800' : 'text-white'
            }`}
            type={showPassword ? 'text' : 'password'}
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
            ref={ref}
          />
          {error && !disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
          {!disabled && (
            <div
              className="flex w-6 h-6 text-gray-400 text-2xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div>
          )}
        </div>
        {supportText && (
          <p className={`text-xs font-semibold ${disabled ? 'text-black-600' : 'text-black-400'} mt-2 ml-4`}>
            {supportText}
          </p>
        )}
        {errorText && <p className="text-red-500 text-xs font-medium mt-1">{errorText.message}</p>}
      </div>
    );
  }
);

export default PasswordInput;
