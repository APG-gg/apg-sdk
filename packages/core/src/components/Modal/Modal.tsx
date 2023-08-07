import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import XCircleIcon from "@apg.gg/icons/lib/XCircleIcon";
import ErrorIcon from "@apg.gg/icons/lib/ErrorIcon";
import Button from "../Button";
import XIcon from "@apg.gg/icons/lib/XIcon";

export enum ModalType {
  Info = "info",
  Error = "error",
  Success = "success",
  Warning = "warning",
}

export enum ConfirmButtonType {
  Default = "default",
  Danger = "danger",
}

export interface ModalProps {
  title?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => Promise<void>;
  onCancel?: () => void;
  centered?: boolean;
  type?: ModalType;
  icon?: ReactNode;
  confirmType?: ConfirmButtonType;
  confirmText?: string;
  cancelText?: string;
}

const Modal: FC<ModalProps> = ({
  title,
  content,
  footer,
  isOpen,
  onClose,
  onConfirm,
  onCancel,
  centered = false,
  type,
  icon,
  confirmType = ConfirmButtonType.Default,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isPromisePending, setIsPromisePending] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleConfirm = async () => {
    if (onConfirm) {
      setIsPromisePending(true);
      try {
        await onConfirm();
      } catch (error) {
        // Handle error if needed
      } finally {
        setIsPromisePending(false);
        onClose();
      }
    } else {
      onClose();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    onClose();
  };

  const modalClassNames = classNames(
    "fixed inset-0 z-[70]",
    isOpen ? "" : "hidden"
  );

  // Icon
  let mergedIcon: React.ReactNode = icon;

  // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon
  if (!icon && icon !== null) {
    switch (type) {
      case ModalType.Info:
        mergedIcon = <ErrorIcon className="text-2xl text-blue" />;
        break;
      case ModalType.Success:
        mergedIcon = <ErrorIcon className="text-2xl text-green-400" />;
        break;
      case ModalType.Error:
        mergedIcon = <XCircleIcon className="text-2xl text-red" />;
        break;
      case ModalType.Warning:
        mergedIcon = <ErrorIcon className="text-2xl text-yellow-200" />;
        break;
      default:
        mergedIcon = null;
    }
  }

  return ReactDOM.createPortal(
    <div className={modalClassNames}>
      <div
        className="fixed inset-0 z-[60] bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={classNames(
          "fixed p-4 text-white z-[70] transition-all duration-300 bg-black-900 left-1/2 -translate-x-1/2 rounded-2xl shadow-md overflow-hidden min-w-[400px] max-w-[600px]",
          {
            "top-1/2 transform -translate-y-1/2": centered && isOpen,
            "top-16": !centered && isOpen
          }
        )}
        ref={modalRef}
      >
        <div className="flex gap-2 items-center mb-2">
          {mergedIcon}
          {title && (
            <div className="flex items-center justify-between w-full">
              <div className="font-bold text-lg">
                {title}
              </div>
              {!mergedIcon && (
                <div className="cursor-pointer" onClick={onClose}>
                  <XIcon className="text-xl text-gray-100 hover:text-gray-400" />
                </div>
              )}
            </div>
          )}
        </div>
        <div className={classNames(
          "flex",
          {
            'ml-8': mergedIcon
          }
        )}>
          {content}
        </div>
        <div className="mt-3">
          {footer ? (
            footer
          ) : (
            <div className="flex justify-end gap-2">
              <Button
                className={classNames(
                  {
                    "bg-transparent border-yellow hover:border-yellow-200 text-yellow hover:text-yellow-200": confirmType === ConfirmButtonType.Danger,
                  }
                )}
                onClick={handleCancel}
                disabled={isPromisePending}
                type="outline"
                fontSize="sm"
              >
                {cancelText}
              </Button>
              <Button
                className={classNames(
                  "min-w-[7rem] focus:outline-none focus:ring-2",
                  {
                    "bg-red hover:bg-red-600": confirmType === ConfirmButtonType.Danger,
                  }
                )}
                onClick={handleConfirm}
                disabled={isPromisePending}
                fontSize="sm"
              >
                {confirmText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
