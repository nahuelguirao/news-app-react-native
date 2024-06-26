import { useState, useEffect } from "react";

export function useDebounce(value: string | undefined) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
}
