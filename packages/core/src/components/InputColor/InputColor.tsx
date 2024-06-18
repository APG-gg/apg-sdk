import React, { FC, useState, useRef, useMemo } from 'react';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import { FieldError } from 'react-hook-form';
import type { Color } from '@rc-component/color-picker';
import ColorPicker, { ColorBlock } from '@rc-component/color-picker';
import Trigger from '@rc-component/trigger';
import builtinPlacements from './placements';
import { cn } from '../../utils/cn';

export const toHexFormat = (value?: string) =>
  value?.replace(/[^0-9a-fA-F#]/g, '').slice(0, 9) || '';

export interface InputColorClassNames {
  wrapper?: string;
  input?: string;
  increaseButton?: string;
  decreaseButton?: string;
}

export interface InputColorProps {
  prefixCls?: string;
  supportText?: string;
  error?: boolean;
  clearable?: boolean;
  value?: Color | string;
  disabled?: boolean;
  onChange?: (value: Color | string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  errorText?: FieldError | undefined;
  className?: string;
  style?: React.CSSProperties;
  classNames?: InputColorClassNames;
}

const InputColor: FC<InputColorProps> = ({
  prefixCls = "apg-color-picker",
  supportText,
  error,
  value: initialValue = "#1677ff",
  disabled = false,
  onChange,
  onBlur,
  onFocus,
  errorText,
  className = "",
  style = {},
  classNames,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState<Color | string>(initialValue);

  const color = useMemo(
    () => (typeof value === 'string' ? value : value.toHexString()),
    [value],
  );

  const handleChange = (value: Color | string) => {
    setValue(value);
    onChange && onChange(value);
  };

  const borderColor = error ? "border-red" : disabled ? "border-black-800" : "border-blue";

  return (
    <div className={cn(
      "relative min-w-28", 
      className
    )} style={style}>
      <div className={cn(
        `flex gap-2 items-center ${borderColor} border rounded-lg text-white overflow-hidden bg-black h-10 ${isFocused ? "shadow-md bg-aqua/10" : ""}`,
        classNames?.wrapper
      )}>
        <Trigger
          action={['click']}
          prefixCls={prefixCls}
          popupPlacement="bottomLeft"
          builtinPlacements={builtinPlacements}
          popup={<ColorPicker value={value} prefixCls={prefixCls} onChange={handleChange} />}
        >
          <ColorBlock color={color} prefixCls={prefixCls} className="cursor-pointer" />
        </Trigger>
        <input 
          type="text"
          value={color}
          className={cn(
            "w-full h-full bg-transparent text-white text-left outline-none border-0",
            classNames?.input
          )}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={e => {
            const originValue = e.target.value;
            handleChange(originValue);
          }}
        />
        {error && !disabled && <ErrorIcon className="flex w-6 h-6 text-red text-2xl ml-2" />}
      </div>
      {supportText && <p className={`text-xs font-semibold ${disabled ? "text-black-600" : "text-black-400"} mt-2 ml-4`}>{supportText}</p>}
      {errorText && <p className="text-red-500 text-xs font-medium mt-1 ml-4">{errorText.message}</p>}
    </div>
  );
};

export default InputColor;
