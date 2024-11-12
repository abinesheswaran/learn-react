import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import store from './store';
import { useSelector } from 'react-redux';
import { gymChangeAction } from './features/task';
import { ageChange, nameChange } from './features/bioSlice';

function App() {
  //const [count, setCount] = useState(0);
  //console.log(store.getState());
  store.dispatch(nameChange('Abinesh E'));
  const name = useSelector((store) => store.bio.name);
  console.log(name);
  //console.log(store.getState());
  store.dispatch(ageChange(26));
  const age = useSelector((store) => store.bio.age);
  console.log(age);
  store.dispatch(gymChangeAction('High'));
  // console.log(store.getState());
  console.log(useSelector((store) => store.task.gym));
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
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
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
