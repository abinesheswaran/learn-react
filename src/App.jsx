import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useReducer } from 'react';

const InitialState = { count: 0 };
function reducerFunction(state, action) {
  console.log(action, state);
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + state.steps };
    case 'sub':
      return { ...state, count: state.count - state.steps };
    case 'setSteps':
      return { ...state, steps: action.steps };
  }
}

function App() {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, InitialState);

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
        <button
          onClick={() => {
            dispatch({ type: 'setSteps', steps: 10 });
            dispatch({ type: 'add' });
          }}
        >
          count is {state?.count ?? 0}
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
