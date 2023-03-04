import { useState, useEffect } from "react";

// fix hydration error,server side rendering
export function useGetFromStore<T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  storeCallback: (store: T) => F
) {
  const result = store(storeCallback) as F;
  const [state, setState] = useState<F>();
  useEffect(() => {
    setState(result);
  }, [result]);
  return state;
}
