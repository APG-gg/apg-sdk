import { useState, useEffect } from 'react';
import { ScreenSize } from '../../css-in-js';

const isRange = (width: number, minWidth: number, maxWidth: number): boolean => {
  return width >= minWidth && width <= maxWidth;
}

type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

export interface UseWindowSizeInterface {
  windowSize: WindowDimentions,
  isXs: boolean;
  isSm: boolean;
  isLtMd: boolean;
  isMd: boolean;
  isLtLg: boolean;
  isLg: boolean;
  isLtXl: boolean;
  isXl: boolean;
}

const useWindowSize = (): UseWindowSizeInterface => {
  const [windowSize, setWindowSize] = useState<WindowDimentions>({ width: undefined, height: undefined });

  const [isXs, setIsXs] = useState(false);
  const [isSm, setIsSm] = useState(false);
  const [isLtMd, setIsLtMd] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLtLg, setIsLtLg] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isLtXl, setIsLtXl] = useState(false);
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      setIsXs(isRange(window.innerWidth, ScreenSize.xsMin, ScreenSize.xsMax));
      setIsSm(isRange(window.innerWidth, ScreenSize.smMin, ScreenSize.smMax));
      setIsLtMd(isRange(window.innerWidth, ScreenSize.xsMin, ScreenSize.smMax));
      setIsMd(isRange(window.innerWidth, ScreenSize.mdMin, ScreenSize.mdMax));
      setIsLtLg(isRange(window.innerWidth, ScreenSize.xsMin, ScreenSize.mdMax));
      setIsLg(isRange(window.innerWidth, ScreenSize.lgMin, ScreenSize.lgMax));
      setIsLtXl(isRange(window.innerWidth, ScreenSize.xsMin, ScreenSize.lgMax));
      setIsXl(isRange(window.innerWidth, ScreenSize.xlMin, ScreenSize.xlMax));
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationChange', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationChange', handleResize);
    }
  }, []);

  return { windowSize, isXs, isSm, isLtMd, isMd, isLtLg, isLg, isLtXl, isXl};
}

export default useWindowSize;