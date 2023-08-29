import React, { FC, useState } from 'react';
import classNames from 'classnames';

export interface RadioButtonProps {
  label?: string | React.ReactNode;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  groupName?: string;
  className?: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
  groupName = 'radio-group',
  className = '',
}) => {
  const handleChange = () => {
    if (!checked) {
      onChange(value);
    }
  };

  return (
    <div
      className={classNames('flex items-center', className)}
      onClick={handleChange}
    >
      <input
        type="radio"
        id={value}
        name={groupName}
        value={value}
        className="hidden"
        tabIndex={-1}
        aria-disabled="false"
        aria-checked={checked}
        aria-labelledby={`${value}-label`}
      />
      <label htmlFor={value} className="flex items-center gap-2">
        <span
          className={classNames(
            'w-4 h-4 border border-black-400 rounded-full flex items-center justify-center',
            checked ? 'border-blue bg-transparent' : ''
          )}
        >
          {checked && (
            <div className="w-2 h-2 bg-blue rounded-full"></div>
          )}
        </span>
        <span id={`${value}-label`}>{label}</span>
      </label>
    </div>
  );
};

export default RadioButton;
