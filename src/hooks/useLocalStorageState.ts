import { useEffect, useState } from "react";

export function useLocalStorageState<State>(initialState: State, key: string) {    
  const [state, setState] = useState(initialState)

  // 1. Ladda från LS
    useEffect(() => {
      const stringState = localStorage.getItem(key);
      if (!stringState) return;
      const state = JSON.parse(stringState) as State;
      setState(state);
    }, []);

  // 2. Spara till LS
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);


  return [state, setState] as const;
}