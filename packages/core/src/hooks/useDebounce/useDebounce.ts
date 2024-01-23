import { useEffect, useState } from 'react';

const useDebounce = <T>({ value, delay = 500 }: { value: T; delay?: number }): T => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
