import React, { ReactElement, useRef } from 'react';
import RcDropdown from 'rc-dropdown';
import clx from 'classnames';
import { composeRef, supportRef } from 'rc-util/lib/ref';

export type ActionType = 'hover' | 'focus' | 'click' | 'contextMenu';

export interface DropdownProps {
  children: React.ReactElement;
  content: React.ReactElement;
  minOverlayWidthMatchTrigger?: boolean;
  arrow?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  onOverlayClick?: (e: Event) => void;
  prefixCls?: string;
  transitionName?: string;
  overlayClassName?: string;
  openClassName?: string;
  animation?: string;
  overlayStyle?: React.CSSProperties;
  placement?: "bottomLeft" | "topLeft" | "top" | "topRight" | "bottom" | "bottomRight" | undefined;
  trigger?: ActionType | ActionType[];
  alignPoint?: boolean;
  showAction?: ActionType[];
  hideAction?: ActionType[];
  visible?: boolean;
  autoFocus?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ 
  children,
  content, 
  prefixCls = 'apg-dropdown',
  trigger = ['click'], 
  placement = 'bottomLeft',
  animation = 'slide-up',
  onVisibleChange,
  minOverlayWidthMatchTrigger,
  onOverlayClick,
  arrow,
  overlayClassName,
  openClassName,
  overlayStyle,
  alignPoint,
  showAction,
  hideAction,
  visible,
  autoFocus
}) => {
  const childRef = useRef(null);
  
  const childrenNode = React.cloneElement(children, {
    className: clx(
      children.props?.className
    ),
    ref: supportRef(children)
      ? composeRef(
          childRef,
          (children as ReactElement & { ref: React.Ref<HTMLElement> }).ref,
        )
      : undefined,
  });

  return (
    <RcDropdown
      prefixCls={prefixCls}
      trigger={trigger}
      overlay={content}
      animation={animation}
      placement={placement}
      onVisibleChange={onVisibleChange}
      minOverlayWidthMatchTrigger={minOverlayWidthMatchTrigger}
      onOverlayClick={onOverlayClick}
      arrow={arrow}
      overlayClassName={overlayClassName}
      openClassName={openClassName}
      overlayStyle={overlayStyle}
      alignPoint={alignPoint}
      showAction={showAction}
      hideAction={hideAction}
      visible={visible}
      autoFocus={autoFocus}
    >
      {childrenNode}
    </RcDropdown>
  );
};

export default Dropdown;
