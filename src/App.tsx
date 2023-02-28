import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import reactLogo from './assets/react.svg';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { useLogger } from './hooks/useLogger';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

function App() {
  console.log("RENDER APP");
  const [count, setCount] = useLocalStorageState(0, "count")
  const [fruits, setFruits] = useState<string[]>([]);


  useLogger();

  //LOG FRUITS
  useEffect(() => {
    console.log(fruits);

    return () => console.log("Cleanup fruits");
  }, [fruits]);

  //DEMO API CALL
  useEffect(() => {
    async function callApi() {
      const response = await fetch("/api/products/" + count);
      console.log(response.ok, response.status)
    }
    callApi();
  }, [count]);

  //DEMO FETCH HOLIDAYS
  // useEffect(() => {
  //   fetch("https://sholiday.faboul.se/dagar/v2.1/2015")
  //   .then((response) => response.json())
  //   .then((result) => {
  //     console.log(result);
  //   });
  // }, []);


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <StyledButton>Styled button</StyledButton>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => setFruits((fruits) => [...fruits, "Pear"])}>
        Add fruit
      </button>
    </div>
  )
}

export default App
