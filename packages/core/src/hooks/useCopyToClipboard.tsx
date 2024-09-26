import { useState, useCallback } from 'react';

export const useCopyToClipboard = (): [boolean, (text: string) => void] => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = useCallback((text: string) => {
    if (!navigator?.clipboard) {
      console.error('Clipboard not supported');
      setIsCopied(false);
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        console.error('Failed to copy: ', err);
        setIsCopied(false);
      }
    );
  }, []);

  return [isCopied, copyToClipboard];
};
