import React, { FC, Ref, forwardRef, useState } from 'react';
import Picker from 'rc-picker';
import generateConfig from 'rc-picker/lib/generate/dayjs';
import { FieldError } from 'react-hook-form';
import classNames from 'classnames';
import { locales } from '../../utils';
import dayjs from 'dayjs';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';
import CalendarIcon from '@apg.gg/icons/lib/CalendarIcon';
import { cn } from '../../utils/cn';

export interface DatePickerProps {
  label?: string;
  rounded?: boolean;
  placeholder?: string;
  supportText?: string;
  error?: boolean;
  clearable?: boolean;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (format: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  errorText?: FieldError | undefined;
  className?: string;
  style?: React.CSSProperties;
  format?: string;
  locale?: Record<string, any>;
  ref?: Ref<HTMLInputElement>;
  autoComplete?: string
  showNow?: boolean;
}

const DatePicker: FC<DatePickerProps> = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label,
      rounded = true,
      placeholder = 'Selecciona una fecha',
      supportText,
      error,
      clearable = false,
      value: initialValue,
      disabled = false,
      readOnly = false,
      onChange,
      errorText,
      className = '',
      format = 'DD/MM/YYYY',
      style = {},
      locale = locales.es,
      autoComplete = 'off',
      showNow = false
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(initialValue ? dayjs(initialValue, format) : undefined);
  
    const handleFocus = () => !disabled && setIsFocused(true);
    const handleBlur = () => !disabled && setIsFocused(false);
  
    const handleChange = (date: dayjs.Dayjs | dayjs.Dayjs[], dayString: string | string[]) => {
      setIsFocused(false)
      setValue(dayjs(dayString as string, format));
      onChange && onChange(dayString as string);
    };
  
    const borderColor = error ? 'border-red' : isFocused ? 'border-aqua' : disabled ? 'border-black-800' : 'border-blue';
    const labelColor = error ? 'text-red' : isFocused ? 'text-aqua' : disabled ? 'text-black-800' : 'text-black-400';
  

  return (
    <div className={
      cn(
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
      <div className={cn(
        `flex items-center ${borderColor} border bg-black px-4 py-2 h-10 ${isFocused ? 'shadow-md bg-aqua/10' : ''}`,
        rounded ? "rounded-full" : "rounded-sm",
      )}>
        <Picker
          prefixCls="apg-picker"
          value={value}
          onChange={handleChange}
          picker='date'
          locale={locale as any}
          generateConfig={generateConfig}
          allowClear={clearable ? {
            clearIcon: <XCircleIcon className="flex w-6 h-6 text-gray-400 text-2xl cursor-pointer" />,
          }: false}
          placeholder={placeholder}
          inputReadOnly={readOnly}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          showNow={showNow}	
          format={format}
          suffixIcon={
            <CalendarIcon 
              className={cn(
                "flex w-4 h-4 text-2xl",
                isFocused ? 'text-aqua' : 'text-blue'
              )}
            />
          }
        />
      </div>
      {supportText && <p className={`text-xs font-semibold ${disabled ? 'text-black-600' : 'text-black-400'} mt-2 ml-4`}>{supportText}</p>}
      {errorText && <p className="text-red-500 text-xs font-medium mt-1 ml-4">{errorText.message}</p>}
    </div>
  );
});

export default DatePicker;