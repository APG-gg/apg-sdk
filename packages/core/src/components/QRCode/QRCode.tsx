import React, { CSSProperties, useEffect } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';

interface ImageSettings {
  src: string;
  height: number;
  width: number;
  excavate: boolean;
  x?: number;
  y?: number;
}

export interface QRProps {
  value: string;
  type?: 'canvas' | 'svg';
  size?: number;
  color?: string;
  style?: CSSProperties;
  includeMargin?: boolean;
  imageSettings?: ImageSettings;
  bgColor?: string;
}

interface QRCodeProps {
  value: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
  errorLevel?: 'L' | 'M' | 'Q' | 'H';
  icon?: string;
  iconSize?: number;
  type?: 'svg' | 'canvas';
  prefixCls?: string;
}

const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 128,
  bgColor = '#FFFFFF',
  fgColor = '#000000',
  errorLevel = 'L',
  icon = '',
  iconSize = 40,
  type = 'canvas',
  prefixCls = 'qrcode'
}) => {
  const imageSettings: QRProps['imageSettings'] = {
    src: icon,
    x: undefined,
    y: undefined,
    height: iconSize,
    width: iconSize,
    excavate: true,
  };

  const qrCodeProps = {
    value,
    size,
    level: errorLevel,
    bgColor,
    fgColor,
    style: { width: undefined, height: undefined },
    imageSettings: icon ? imageSettings : undefined,
  };

  useEffect(() => {
    if (icon && errorLevel === 'L') {
      console.warn('ErrorLevel `L` is not recommended to be used with `icon`, for scanning result would be affected by low level.');
    }
  }, [errorLevel, icon]);
  
  return (
    <div className={prefixCls}>
      {type === 'canvas' ? <QRCodeCanvas {...qrCodeProps} /> : <QRCodeSVG {...qrCodeProps} />}
    </div>
  );
};

export default QRCode;