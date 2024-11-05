import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(0);
  console.log('*** Component Re-rendered ' + count, state);
  useEffect(() => {
    console.log('Use Effect is runing *** ' + count, state);
    setState((p) => p + 1);
  }, [count]);
  useLayoutEffect(() => {
    console.log('************* something got painted on to the screen');
  });

  useEffect(() => {
    function prev() {
      console.log('prev function');
    }
    return () => {
      console.log('Cleanup function is running' + count, state);
      prev();
    };
  }, [count]);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
