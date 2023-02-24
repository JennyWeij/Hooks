import { useEffect, useState } from "react";

export function useLocalStorageState<State>(initialState: State, key: string) {    
  const [state, setState] = useState(initialState)

  // 1. Spara till LS
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  // 2. Ladda från LS
  return [state, setState] as const;
}