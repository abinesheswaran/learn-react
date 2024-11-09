import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './Components/Button';
import { useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const obj = useMemo(
    () => ({
      name: 'abinesh',
      age: 26,
    }),
    []
  );
  const arr = useMemo(() => [1, 2, 3, 4, 5, 6, 7], []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((n) => n + 1)}>count is {count}</button>
        <button onClick={() => setCount2((n) => n + 1)}>
          count is {count2}
        </button>
        <Button count={count2} val={obj} arr={arr} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
