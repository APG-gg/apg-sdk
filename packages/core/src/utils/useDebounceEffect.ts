import { useEffect, DependencyList } from 'react'

export function useDebounceEffect<T extends any[]>(
  callback: (...args: T) => void,
  delay: number,
  deps: DependencyList,
) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callback(...deps as T);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay]);
}
