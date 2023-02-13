import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useDebounce from './useDebounce';

describe('Test useDebounce hooks', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.clearAllTimers();
  });

  it('Should show the default value at the beginning if the value is not modified', () => {
    const { result } = renderHook(() => useDebounce<string>({ value: '' }));
    expect(result.current).toBe('');
  });

  it('Should show value inmediatly if the delay is 0', () => {
    const { result } = renderHook(
      ({ value, delay }) => useDebounce<string>({ value, delay }),
      {
        initialProps: { value: '', delay: 0 },
      },
    );

    expect(result.current).toBe('');
  });

  it('Should show value after 500ms because the delay default value is 500', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce({ value }), {
      initialProps: { value: '' },
    });

    expect(result.current).toBe('');
    rerender({ value: 'New Message' });
    act(() => jest.advanceTimersByTime(501));
    expect(result.current).toBe('New Message');
  });

  it('Should show value after 600ms if the delay is set with 600', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce({ value, delay }), {
      initialProps: { value: '', delay: 0 },
    });

    expect(result.current).toBe('');
    rerender({ value: 'New Message', delay: 600 });
    act(() => jest.advanceTimersByTime(601));
    expect(result.current).toBe('New Message');
  });
});
