import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';

enum KeyCode {
  LEFT = 37,
  RIGHT = 39,
}

export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  className?: string;
  prefixCls?: string;
  disabled?: boolean;
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  onChange?: SwitchChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onClick?: SwitchClickEventHandler;
  tabIndex?: number;
  checked?: boolean;
  defaultChecked?: boolean;
  loadingIcon?: ReactNode;
  style?: React.CSSProperties;
  title?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      prefixCls = 'apg-switch',
      className,
      checked,
      defaultChecked,
      disabled,
      loadingIcon,
      checkedChildren,
      unCheckedChildren,
      onClick,
      onChange,
      onKeyDown,
      ...restProps
    },
    ref,
  ) => {
    const [innerChecked, setInnerChecked] = useState<boolean>(defaultChecked || false);
    const toggleClass = " transform translate-x-4";

    console.log('innerChecked', innerChecked);

    function triggerChange(
      newChecked: boolean,
      event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
    ) {
      if (!disabled) {
        setInnerChecked(newChecked);
        onChange?.(newChecked, event);
      }
    }

    function onInternalKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
      if (e.which === KeyCode.LEFT) {
        triggerChange(false, e);
      } else if (e.which === KeyCode.RIGHT) {
        triggerChange(true, e);
      }
      onKeyDown?.(e);
    }

    function onInternalClick(e: React.MouseEvent<HTMLButtonElement>) {
      const ret = !innerChecked;
      console.log(ret);
      triggerChange(ret, e);
      onClick?.(ret, e);
    }

    const switchClassName = classNames("rounded-full w-10 h-6 px-1 group", prefixCls, className, {
      [`${prefixCls}-checked`]: innerChecked,
      [`${prefixCls}-disabled`]: disabled,
      'cursor-not-allowed': disabled,
      'bg-blue': innerChecked,
      'bg-black-800 hover:bg-black-900': !innerChecked,
    });

    return (
      <button
        {...restProps}
        type="button"
        role="switch"
        aria-checked={innerChecked}
        disabled={disabled}
        className={switchClassName}
        ref={ref}
        onKeyDown={onInternalKeyDown}
        onClick={onInternalClick}
      >
        <div
          id="switch-inner"
          className={classNames(
            "h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out flex items-center justify-center",
            "group-hover:scale-110",
            innerChecked ? `${toggleClass} bg-white-200` : "bg-white-200"
          )}
        >
          {innerChecked ? (
            <span className={`${prefixCls}-inner-checked`}>{checkedChildren}</span>
          ) : (
            <span className={`${prefixCls}-inner-unchecked`}>{unCheckedChildren}</span>
          )}
        </div>
      </button>
    );
  },
);

export default Switch;
